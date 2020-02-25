describe('CommonUi Automation',function(){
    it('should have a title',function(){
        browser.ignoreSynchronization = true;
        browser.get('https://demo1.bebiosecure.com:3030/access-manager/login');
        expect(browser.getTitle()).toEqual('IDX');

    });
});