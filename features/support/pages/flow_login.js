const {Selector} = require('testcafe');

exports.pageElements = {
    loginInput: () => {
        return Selector('#login')
            .with({ boundTestRun: testController })
    },
    passwordInput: () => {
        return Selector('#password')
            .with({ boundTestRun: testController })
    },
    forgotPassword: () => {
        return Selector('a').withText('Esqueceu sua senha?')
            .with({ boundTestRun: testController })
    },
    loginButton: () => {
        return Selector('button').withText('ENTRAR')
            .with({ boundTestRun: testController })
    },
    signUp: () => {
        return Selector('a').withText('CADASTRE-SE')
            .with({ boundTestRun: testController })
    },
    facebookButton: () => {
        return Selector('button.facebook-button')
            .with({ boundTestRun: testController })
    },
    googleButton: () => {
        return Selector('button.google-button')
            .with({ boundTestRun: testController })
    },
    passwordViewButton: () => {
        return Selector('button.field-password-view')
            .with({ boundTestRun: testController })
    },
    loginModalCloseButton: () => {
        return Selector('#login-popin-close')
            .with({ boundTestRun: testController })
    },
    validationMessage: () => {
        return Selector('.validation-message.login-field').find('.error')
            .with({ boundTestRun: testController })
    }
}