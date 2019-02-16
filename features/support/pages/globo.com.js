const {Selector} = require('testcafe');

exports.pageElements = {
    userBar: () => {
        return Selector('#user-bar')
            .with({ boundTestRun: testController })
    },
    loginPopin: () => {
        return Selector('#login-popin')
            .with({ boundTestRun: testController })
    }
}