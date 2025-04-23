const dotenv = require(`dotenv`);
dotenv.config();

const USER_INFO = {
  EMAIL: process.env.USER_EMAIL,
  PASSWORD: process.env.USER_PASSWORD,
};

const ANDROID_CAPS = {
  platformName: "Android",
  "appium:platformVersion": "15",
  "appium:deviceName": "Pixel 9 Pro API 35",
  "appium:app": "/Users/jameswang/Documents/code/Android/apk/loop/loop_ev/com.renewage.loop.apk",
  "appium:appPackage": "com.renewage.loop",
  "appium:appActivity": "com.renewage.loop/com.renewage.loop.ui.screens.start.StartActivity",
  "appium:automationName": "UiAutomator2"
};

const OPTS = {
  // path: "/wd/hub",
  path: "/",
  port: 4723,
  capabilities: ANDROID_CAPS,
};

module.exports = {
  USER_INFO,
  OPTS,
  ANDROID_CAPS
};
