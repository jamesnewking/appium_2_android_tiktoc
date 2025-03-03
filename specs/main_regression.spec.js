const wdio = require(`webdriverio`);
const OPTS = require(`../constants/configs`).OPTS;
// const USER_INFO = require(`../constants/configs`).USER_INFO;
// const percySnapshot = require("@percy/webdriverio");

const LoginPage = require(`../pom/login`);
const HomePage = require(`../pom/home`);
const FriendsPage = require(`../pom/nav/friends`);

describe(`Android driver mobile app regression test`, () => {
  let client;
  beforeAll(async () => {
    client = await wdio.remote(OPTS);
  });

  afterAll(async () => {
    // await client.deleteSession();
  });

   test(`Login to android mobile app`, async () => {
    const loginPage = new LoginPage(client);
    const homePage = new HomePage(client);
    await loginPage.clickGoogleSignBackInContinueAsUser();
    await loginPage.clickPermissionsAllowNotifications();
    await loginPage.clickChooseInterestsSkip();
    await loginPage.clickStartWatchingButton();
    await homePage.swipeUp();
    await client.pause(5000);
  });

  test(`Friends Page`, async () => {
    const homePage = new HomePage(client);
    await homePage.clickBottomNavFriends();
    const friendsPage = new FriendsPage(client);
    await friendsPage.clickContactPermissionDeny();
    await friendsPage.clickInviteFriends(); 
    await friendsPage.clickDenyAllowAccessContacts();
    await friendsPage.clickBackButton();
    // await homePage.clickBottomNavCreate();
    // await homePage.clickBottomNavInbox();
    // await homePage.clickBottomNavProfile();
  });

  test(`Inbox Page`, async () => {
    const homePage = new HomePage(client);
    await homePage.clickBottomNavInbox();
  })

  // test(`Shop Page`, async () => {
  //   const homePage = new HomePage(client);
  //   await homePage.clickBottomNavShop();
  // });
  
});
