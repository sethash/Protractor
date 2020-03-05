describe('CommonUi Automation',function(){
    it('Add Identity with all mandatory fields',function(done){
        element(by.xpath('//*[@class="nav-item"]//a')).click();
        element(by.xpath('(//*[@class="nav-link"])[2]')).click();
        element(by.xpath('//*[@class="mdi mdi-account-plus"]')).click();
        element(by.xpath('//*[@name="userName"]')).sendKeys("Testing123");
        browser.executeScript('window.scrollTo(0,10000);');
        element(by.xpath('//*[@class="btn btn-primary next-step"]')).click();
        browser.sleep(5000);
        element(by.xpath('//*[text()="OK"]')).click();
        element(by.xpath('//button')).click();
        browser.sleep(5000);
        expect(element(by.xpath('//*[text()="Identity List"]')).getText()).toEqual('Identity List');
        done();
   
    });
});