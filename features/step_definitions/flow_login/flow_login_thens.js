const { Then } = require('cucumber');
const flowLoginPage = require('../../support/pages/flow_login.js')
const flowFrameId = '#login-popin-iframe'

Then('I should see the login modal', async function() {
    await this.addScreenshotToReport()
    await testController.switchToIframe(flowFrameId)
    await testController.expect(flowLoginPage.pageElements.loginInput().exists).ok()
    await testController.expect(flowLoginPage.pageElements.loginInput().visible).ok()
    await testController.expect(flowLoginPage.pageElements.passwordInput().exists).ok()
    await testController.expect(flowLoginPage.pageElements.passwordInput().visible).ok()
    await testController.expect(flowLoginPage.pageElements.passwordViewButton().exists).ok()
    await testController.expect(flowLoginPage.pageElements.passwordViewButton().visible).ok()
    await testController.expect(flowLoginPage.pageElements.googleButton().exists).ok()
    await testController.expect(flowLoginPage.pageElements.googleButton().visible).ok()
    await testController.expect(flowLoginPage.pageElements.facebookButton().visible).ok()
    await testController.expect(flowLoginPage.pageElements.facebookButton().exists).ok()
    await testController.expect(flowLoginPage.pageElements.forgotPassword().innerText).contains('Esqueceu sua senha?')
    await testController.expect(flowLoginPage.pageElements.signUp().innerText).contains('CADASTRE-SE')
    await testController.expect(flowLoginPage.pageElements.loginButton().innerText).contains('ENTRAR')
    await testController.switchToMainWindow()
})

Then('I should see wrong login text', async function() {
    await this.addScreenshotToReport()
    await testController.switchToIframe(flowFrameId)
    await testController.expect(flowLoginPage.pageElements.validationMessage().innerText).contains('Seu usuário ou senha estão incorretos.')
    await testController.switchToMainWindow()
})

Then('I should show must type user and password text', async function() {
    await this.addScreenshotToReport()
    await testController.switchToIframe(flowFrameId)
    await testController.expect(flowLoginPage.pageElements.validationMessage().innerText).contains('Preencha seu usuário e senha.')
    await testController.switchToMainWindow()
})

Then('I should see the password', async function() {
    await this.addScreenshotToReport()
    await testController.switchToIframe(flowFrameId)
    await testController.expect(flowLoginPage.pageElements.passwordInput().getAttribute("type")).contains('text')
    await testController.switchToMainWindow()
})

Then('I should not see the password', async function() {
    await this.addScreenshotToReport()
    await testController.switchToIframe(flowFrameId)
    await testController.expect(flowLoginPage.pageElements.passwordInput().getAttribute("type")).contains('password')
    await testController.switchToMainWindow()
})