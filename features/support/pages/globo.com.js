const {Selector} = require('testcafe');

exports.pageElements = {
    userBar: function() {
        return Selector('#user-bar', { visibilityCheck: true })
            .with({ boundTestRun: testController })
    }
}