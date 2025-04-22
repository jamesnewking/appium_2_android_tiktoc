const wdio = require(`webdriverio`);
const OPTS = require(`../constants/configs`).OPTS;
// const USER_INFO = require(`../constants/configs`).USER_INFO;
// const percySnapshot = require("@percy/webdriverio");

const LoginPage = require(`../loop_pom/login`);
const HomePage = require(`../loop_pom/home`);

describe(`Android driver mobile app regression test`, () => {
  let client;
  beforeAll(async () => {
    client = await wdio.remote(OPTS);
  });

  afterAll(async () => {
    // await client.deleteSession();
  });

  test(`Login to android mobile app in guest mode`, async () => {
    const loginPage = new LoginPage(client);
    await loginPage.clickGuestMode();
  });

  test(`Accept permissions`, async () => {
    const homePage = new HomePage(client);
    await homePage.clickPermissionLocationAllowWhileUsingAppButton();
    await homePage.clickPermissionNotificationAllowButton();
    await homePage.clickScanSkipButton();
    await client.pause(1000);
  });

  test(`Check Nav Drawer`, async () => {
    const homePage = new HomePage(client);
    await homePage.clickNavDrawerButton();
    await homePage.clickNavDrawerSignInButton();

    await homePage.clickNavBackButton();
    await client.pause(1000);
  });

  test(`Check Number of Search Results`, async () => {
    const homePage = new HomePage(client);
    await homePage.clickMapBottomSearchBar();
    
    const searchResultsArray = await homePage.getArrayOfSearchResults();
    const numberOfSearchResults = searchResultsArray.length;
    console.log(`Number of search results: ${numberOfSearchResults}`);
    expect(numberOfSearchResults).toBeGreaterThan(0);
    console.table(searchResultsArray);
    // await homePage.clickNavBackButton();
    // await homePage.clickMapFilterButton();
    await client.pause(5000);
  });
});
