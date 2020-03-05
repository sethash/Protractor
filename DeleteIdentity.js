describe('CommonUi Automation',function(){
    it('Validate DeleteIdentity functionality',function(done){
        element(by.xpath('//*[@class="custom-control custom-radio"]')).click();
        element(by.xpath('//*[@class="mdi mdi-delete"]')).click();
        element(by.xpath('//*[@class="btn btn-primary pl-4 pr-4"]')).click();
        browser.sleep(3000);
        element(by.xpath('//*[text()="OK"]')).click();
        done();
    });
    
    
});