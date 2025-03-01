const wdio = require(`webdriverio`);
const OPTS = require(`../constants/configs`).OPTS;
const USER_INFO = require(`../constants/configs`).USER_INFO;
// const percySnapshot = require("@percy/webdriverio");

const LoginPage = require(`../pom/login`);
const HomePage = require(`../pom/home`);

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



  
});
