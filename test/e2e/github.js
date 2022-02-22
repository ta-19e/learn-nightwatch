const conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('http://www.github.com/dwyl') // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
    // check if we are seeing the Mobile Version of GitHub
    browser.element('css selector', '.switch-to-desktop', (result) => {
      if (result.status !== -1) { // Element exists, do something
        browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
      }
    });
    // part two:
    browser
      .assert.containsText('body', 'dwyl.com') // assert body contains text
      .saveScreenshot(`${conf.imgpath(browser)}dwyl.png`)
      .end();
  },

  // Profile test
  'Demo ta-19e github': function (browser) {
    browser
      .url('https://github.com/martinmakejev')
      .waitForElementVisible('body');

    browser
      .saveScreenshot(`${conf.imgpath(browser)}github_ta-19e.png`)
      .assert.title('martinmakejev · GitHub')
      .end();
  },
};
