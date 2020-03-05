var HtmlReporter = require('protractor-beautiful-reporter');
exports.config={
    framework:'jasmine',
    seleniumAddress:'http://localhost:4444/wd/hub',
    specs: ['VerifyTitle.js','ValidateLogin.js','AddIdentity.js','DeleteIdentity.js','Regula.js','DOB.js','WorkFlow.js'],
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots',preserveDirectory: false
      }).getJasmine2Reporter());
   },
    capabilities: { 
  'browserName': 'chrome', 
  'restartBrowserBetweenTests': true,
  'chromeOptions': {
   // 'args': ["--headless", "--disable-gpu", "--window-size=1920,1080",'--ignore-certificate-errors']
    'args': ['--ignore-certificate-errors']
    

  }
}
}