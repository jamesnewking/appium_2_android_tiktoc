# APPIUM AUTOMATION

## TO RUN TESTS
### Start Android Virtual Device
- Start Appium server with the correct presets
(optional for debug and find locators)
- Open Appium inspector with the correct saved capability set
    - May have to update the app location and version

### Start appium server
> appium
- or -
> appium --allow-cors
- If you want to use web inspector at https://inspector.appiumpro.com/

### To run test
> npm run test

- To run test on Loop
> npm run loop

## ALLURE TEST RESULTS
### Install Allure
- Make sure Allure is installed in the system with JAVA
- https://allurereport.org/docs/install-for-nodejs/
> npm install -g allure-commandline
- https://allurereport.org/docs/jest/

### View Allure Test Report
> allure serve allure-results

