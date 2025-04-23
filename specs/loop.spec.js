const wdio = require(`webdriverio`);
const { OPTS } = require(`../constants/configs`);
const allure = require(`allure-js-commons`);
const arrayToCsv = require(`../helper/array_to_csv`);
// const USER_INFO = require(`../constants/configs`).USER_INFO;
// const percySnapshot = require("@percy/webdriverio");

const LoginPage = require(`../loop_pom/login`);
const HomePage = require(`../loop_pom/home`);

describe(`Android driver mobile app regression test`, () => {
  let client;
  beforeAll(async () => {
    await allure.epic("Android mobile app");
    client = await wdio.remote(OPTS);
    
  });

  afterAll(async () => {
    // await client.deleteSession();
  });

  test(`Login to android mobile app in guest mode`, async () => {
    await allure.feature("Essential features");
    await allure.story("Authentication");
    const loginPage = new LoginPage(client);
    await loginPage.clickGuestMode();
        
  });

  test(`Accept permissions`, async () => {
    await allure.feature("Essential features");
    await allure.story("Permissions");
    const homePage = new HomePage(client);
    await homePage.clickPermissionLocationAllowWhileUsingAppButton();
    await homePage.clickPermissionNotificationAllowButton();
    await homePage.clickScanSkipButton();
    await client.pause(1000);
    
  });

  test(`Check Nav Drawer`, async () => {
    await allure.feature("Essential features");
    await allure.story("NAV");
    const homePage = new HomePage(client);
    await homePage.clickNavDrawerButton();
    await homePage.clickNavDrawerSignInButton();
    await homePage.clickNavBackButton();
    await client.pause(1000);
    
  });

  test(`Check Number of Search Results`, async () => {
    await allure.feature("Essential features");
    await allure.story("Search");
    const homePage = new HomePage(client);
    await homePage.clickMapBottomSearchBar();
    
    const searchResultsArray = await homePage.getArrayOfSearchResults();
    const numberOfSearchResults = searchResultsArray.length;
    expect(numberOfSearchResults).toBeGreaterThan(0);
    console.table(searchResultsArray);
    const csvString = arrayToCsv(searchResultsArray);
    await allure.attachment(
      `Search Results`,
      csvString,
      `text/csv`
    );
    // await homePage.clickNavBackButton();
    // await homePage.clickMapFilterButton();
    await client.pause(5000);
  });
});
