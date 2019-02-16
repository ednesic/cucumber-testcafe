const { Given } = require('cucumber');

Given('I navigate to globo.com page', async function() {
    await testController.navigateTo('https://www.globo.com/')
    await this.addScreenshotToReport();
})