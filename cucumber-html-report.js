// *** Let name it cucumber - html - report.js **
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-reports",  // ** Path of .json file **//
    reportPath: "./cypress/cucumber-reports/html",
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
});