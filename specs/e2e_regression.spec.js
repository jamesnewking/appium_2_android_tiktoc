const wdio = require(`webdriverio`);
const OPTS = require(`../constants/configs`).OPTS;
const DRIVER_INFO = require(`../constants/configs`).DRIVER_INFO;
// const percySnapshot = require("@percy/webdriverio");

const LoginPage = require(`../pom/login`);

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
    await client.pause(5000);
    await loginPage.clickGoogleSignBackInContinueAsUser();
    await client.pause(5000);
    await loginPage.clickPermissionsAllowNotifications();
    await client.pause(5000);
    await loginPage.clickChooseInterestsSkip();
    await client.pause(5000);
    await loginPage.clickStartWatchingButton();
    await client.pause(5000);
    await loginPage.swipeUp();
    await client.pause(5000);
  });



  
});
