const { Then } = require('cucumber');
const flowLoginPage = require('../../support/pages/flow_login.js')
const flowFrameId = '#login-popin-iframe'

Then('I should see the login modal', async function() {
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
    await testController.expect(flowLoginPage.pageElements.logingButton().innerText).contains('ENTRAR')
    await testController.switchToMainWindow()
    await this.addScreenshotToReport()
})