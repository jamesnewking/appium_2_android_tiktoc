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
  "appium:app": "/Users/jameswang/Documents/code/Android/apk/TikTok_38.8.2_APKPure.apk",
  "appium:appPackage": "com.zhiliaoapp.musically",
  "appium:appActivity": "com.zhiliaoapp.musically/com.ss.android.ugc.aweme.splash.SplashActivity",
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
};
