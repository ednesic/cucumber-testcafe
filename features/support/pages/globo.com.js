const {Selector} = require('testcafe');

exports.pageElements = {
    userBar: function() {
        return Selector('#user-bar')
            .with({ boundTestRun: testController })
    },
    loginPopin: function() {
        return Selector('#login-popin')
            .with({ boundTestRun: testController })
    }
}