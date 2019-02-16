const { When } = require('cucumber');
const flowLoginPage = require('../../support/pages/flow_login.js')

When('I close the login modal', async function () {
    await testController.click(flowLoginPage.pageElements.loginModalCloseButton())
    await this.addScreenshotToReport()
})