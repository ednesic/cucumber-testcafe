var reporter = require('cucumber-html-reporter');
var os = require('os');

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.0.0",
            "Test Environment": "STAGING",
            "Platform": os.platform(),
            "Type": os.type(),
            "Executed": "Remote"
        }
    };

reporter.generate(options);
process.exit()