const { Then } = require('cucumber');
const globoComPage = require('../../support/pages/globo.com')

Then('I should not see the login modal', async function() {
    await this.addScreenshotToReport()
    await testController.expect(globoComPage.pageElements.loginPopin().visible).notOk()
})