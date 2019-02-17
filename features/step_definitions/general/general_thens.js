const { Then } = require('cucumber');
const {ClientFunction} = require('testcafe');

Then('I should not be logged in', async function() {
    await this.addScreenshotToReport()    
    const cookies = await ClientFunction(() => {
        return document.cookie;
    }).with({ boundTestRun: testController })()

    await testController.expect(cookies.includes('GLBID')).notOk()
})