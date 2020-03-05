describe('CommonUi Automation',function(){
    it('validate login with Valid credentials',function(){
        browser.get('https://demo1.bebiosecure.com:2212/Platform-Common-UI/login');
        browser.manage().window().maximize();
        element(by.id('txtTenantCode_Step1')).sendKeys('qualityqfmt5');
        element(by.id('btnNext')).click();
        element(by.id('username')).sendKeys('Gaurav.CHAUHAN2@idemia.com');
        element(by.id('password')).sendKeys('Idemia@1234');
        element(by.id('userLogin')).click();
        browser.sleep(5000);
        expect(element(by.xpath('//*[text()="Home"]')).getText()).toEqual('Home');
   
    });
});