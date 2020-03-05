describe('CommonUi Automation',function(){
    it('Validate SSO for SwitchToWorkFlow',function(done){
        browser.getAllWindowHandles().then(function (handles) {
            // We currently are on the second tab...
            browser.switchTo().window(handles[0]);
            element(by.xpath('//*[text()="Workflow Management "]')).click();
            browser.sleep(5000);
            done();

        });
    });
    
    
});