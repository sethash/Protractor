describe('CommonUi Automation',function(){
    it('Validate SSO for SwitchToDOB',function(done){
        element(by.xpath('//*[text()="Digital Onboarding"]')).click();
        browser.sleep(10000);
        browser.getAllWindowHandles().then(function (handles) {
            // We currently are on the second tab...
            browser.switchTo().window(handles[1]);
        element(by.xpath('//*[@alt="maker"]')).click();
        browser.sleep(5000);
        element(by.xpath('//*[@class="checkmark"]')).click();
        element(by.xpath('//*[@title="Deactivate"]')).click();
       done();
    });
    
    
});
});