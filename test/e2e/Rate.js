var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Rate': function(browser) {
    browser
      .url('https://rate.ee/login')
      .waitForElementVisible('body')
      .assert.title('Rate.ee')
      .saveScreenshot(`${config.imgpath(browser)}lehekylg.png`);

      browser
      .click("body > nav > ul.navbar-nav.mr-auto.mt-2.mt-lg-0 > li:nth-child(4) > a")
      .assert.title("Rate.ee")
      .saveScreenshot(`${config.imgpath(browser)}cookie.png`);

      browser
      .waitForElementVisible("body > div.container-full.pt-5.mt-5 > div.container-half.col-12.col-md-6.p0 > div > div > div > div", "Seda lehte näevad ainult registreeritud kasutajad.")
      .assert.title("Rate.ee")
      .saveScreenshot(`${config.imgpath(browser)}error.png`);


      
  }

};

