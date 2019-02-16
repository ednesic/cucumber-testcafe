const {Selector} = require('testcafe');

exports.pageElements = {
    loginInput: function() {
        return Selector('#login')
            .with({ boundTestRun: testController })
    },
    passwordInput: function() {
        return Selector('#password')
            .with({ boundTestRun: testController })
    },
    forgotPassword: function() {
        return Selector('a').withText('Esqueceu sua senha?')
            .with({ boundTestRun: testController })
    },
    logingButton: function() {
        return Selector('button').withText('ENTRAR')
            .with({ boundTestRun: testController })
    },
    signUp: function () {
        return Selector('a').withText('CADASTRE-SE')
            .with({ boundTestRun: testController })
    },
    facebookButton: function () {
        return Selector('button.facebook-button')
            .with({ boundTestRun: testController })                
    },
    googleButton: function () {
        return Selector('button.google-button')
            .with({ boundTestRun: testController })        
    },
    passwordViewButton: function() {
        return Selector('button.field-password-view')
            .with({ boundTestRun: testController })                
    },
    loginModalCloseButton: function() {
        return Selector('#login-popin-close')
            .with({ boundTestRun: testController })                
    }
}