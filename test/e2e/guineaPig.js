const config = require("../../nightwatch.conf.js");

module.exports = {
  // addapted from: https://git.io/vodU0
  "@tags": ["guineaPig"],
  "Guinea Pig Assert Title": function (browser) {
    browser
      .url("https://saucelabs.com/test/guinea-pig")
      .waitForElementVisible("body")
      .assert.title("I am a page title - Sauce Labs")
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`);

    // document.querySelectorAll('#checked_checkbox:checked')
    browser.expect.element("#checked_checkbox:checked").to.be.present;

    // document.querySelectorAll('#unchecked_checkbox:not(:checked)')
    browser.expect.element("#unchecked_checkbox:not(:checked)").to.be.present;

    browser.expect.element("div#no-element-like-this").not.to.be.present;

    browser.assert.value("input#i_am_a_textbox", "i has no focus");

    browser
      .useXpath()
      // $x("//div[text()='i appear 3 times'][3]")
      .expect.element("//div[text()='i appear 3 times'][3]").to.be.present;

    browser.useCss();

    let username = '????';
    try {
      // eslint-disable-next-line global-require
      username = String(require("os").userInfo().username);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    browser
      .pause(1500)
      .clearValue('#i_am_a_textbox')
      .setValue('#i_am_a_textbox', `Hello there`)
      .pause(1000)
      .setValue('#i_am_a_textbox', ` "${username}"!`)
      .pause(2500)
      .saveScreenshot(`${config.imgpath(browser)}hello-there.png`)
      .clearValue('#i_am_a_textbox')
      .pause(1500)
      .clearValue("#i_am_a_textbox")
      .setValue("#i_am_a_textbox", "nightwatch roolz!")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .end();
  },
};
