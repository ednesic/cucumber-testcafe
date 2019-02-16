const { When } = require('cucumber');
const flowLoginPage = require('../../support/pages/flow_login.js')
const { users } = require('../../support/logins.js')
const flowFrameId = '#login-popin-iframe'

When('I close the login modal', async () => {
    await testController.click(flowLoginPage.pageElements.loginModalCloseButton())
})

When('I click to login', async () => {
    await testController.switchToIframe(flowFrameId)
    await testController.click(flowLoginPage.pageElements.loginButton())
    await testController.switchToMainWindow()
})

When('I type {string} account', async user => {
    await testController.switchToIframe(flowFrameId)
    await testController.typeText(flowLoginPage.pageElements.loginInput(), users[user].login)
    await testController.typeText(flowLoginPage.pageElements.passwordInput(), users[user].password)
    await testController.switchToMainWindow()
})

When('I click to show the password', async () => {
    await testController.switchToIframe(flowFrameId)
    await testController.click(flowLoginPage.pageElements.passwordViewButton())
    await testController.switchToMainWindow()
})