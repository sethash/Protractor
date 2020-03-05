describe('CommonUi Automation',function(){
    it('Validate Regula OCR using Chille Document',function(done){
        element(by.xpath('//*[text()="OCR Services"]')).click();
        element(by.xpath('(//*[@class="nav-link"])[8]')).click();
        browser.sleep(5000);
        element(by.xpath('//input[@name="referencePersonFaceImage"]')).sendKeys("C:/Protractor/Protractor/TestData/Chilli.PNG");
        browser.sleep(3000);
        element(by.xpath('(//*[@class="custom-control-label"])[1]')).click();
        browser.executeScript('window.scrollTo(0,10000);');
        element(by.xpath('//*[@id="submitRequest"]')).click();
        browser.sleep(15000);
        element(by.xpath('//button[text()="OK"]')).click();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,10000);');
      expect(element(by.xpath('//*[text()="PERSONAL_IDENTIFICATION_NUMBER"]')).getText()).toEqual("PERSONAL_IDENTIFICATION_NUMBER");
        done();
   
    });
});