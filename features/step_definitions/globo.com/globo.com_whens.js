const { When } = require('cucumber');
const globoComPage = require('../../support/pages/globo.com')

When('I click on the user bar', async () => {
    await testController.click(globoComPage.pageElements.userBar())
})