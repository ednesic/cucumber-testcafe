const { Then } = require('cucumber');
const {ClientFunction} = require('testcafe');

Then('I should not be logged in', async function() {
    const cookies = await ClientFunction(() => {
        return document.cookie;
    }).with({ boundTestRun: testController })()

    await testController.expect(cookies.includes('GLBID')).notOk()
    await this.addScreenshotToReport()    
})