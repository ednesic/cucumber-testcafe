const {Selector} = require('testcafe');

exports.pageElements = {
    loginInput: function() {
        return Selector('#login', { visibilityCheck: true })
            .with({ boundTestRun: testController })
    },
    passwordInput: function() {
        return Selector('#password', { visibilityCheck: true })
            .with({ boundTestRun: testController })
    },
    forgotPassword: function() {
        return Selector('a', { visibilityCheck: true }).withText('Esqueceu sua senha?')
            .with({ boundTestRun: testController })
    },
    logingButton: function() {
        return Selector('button', { visibilityCheck: true }).withText('ENTRAR')
            .with({ boundTestRun: testController })
    },
    signUp: function () {
        return Selector('a', { visibilityCheck: true }).withText('CADASTRE-SE')
            .with({ boundTestRun: testController })
    },
    facebookButton: function () {
        return Selector('button.facebook-button', { visibilityCheck: true })
            .with({ boundTestRun: testController })                
    },
    googleButton: function () {
        return Selector('button.google-button', { visibilityCheck: true })
            .with({ boundTestRun: testController })        
    },
    passwordViewButton: function() {
        return Selector('button.field-password-view', { visibilityCheck: true })
            .with({ boundTestRun: testController })                
    }
}