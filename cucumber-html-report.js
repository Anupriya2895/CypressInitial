const report = require("multiple-cucumber-html-reporter");
  report.generate({
      jsonDir: "cypress/reports/cucumber-json",  
      reportPath: "cypress/reports", 
      metadata: {
          browser: {
              name: "electron",
              version: "92",
          },
          device: "Local test machine",
          platform: {
              name: "windows",
              version: "7",
          },
      },
  });