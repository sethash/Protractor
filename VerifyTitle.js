describe('CommonUi Automation',function(){
    it('Validate Title for the CommonUI',function(){
        browser.ignoreSynchronization = true;
        browser.get('https://demo1.bebiosecure.com:2212/Platform-Common-UI/login');
        expect(browser.getTitle()).toEqual('IDX');

    });
});