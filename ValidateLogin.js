describe('CommonUi Automation',function(){
    it('validate login',function(){
        browser.get('https://demo1.bebiosecure.com:3030/access-manager/login');
        element(by.id('txtTenantCode_Step1')).sendKeys('idxadmin');
        element(by.id('btnNext')).click();
        element(by.id('username')).sendKeys('idemia.admin@idemia.com');
        element(by.id('password')).sendKeys('password');
        element(by.id('userLogin')).click();
    });
});