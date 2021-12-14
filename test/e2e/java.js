const config = require("../../nightwatch.conf.js");

module.exports = {
  // addapted from: https://git.io/vodU0
  "@tags": ["test"],
  "test Assert Title": function (browser) {
    browser
      .url('https://www.java.com/en/')
      .waitForElementVisible("body")
      .assert.title("Java | Oracle")
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`);

          // document.querySelectorAll('#checked_checkbox:checked')

            // document.querySelectorAll('#unchecked_checkbox:not(:checked)')
            browser.expect.element("#unchecked_checkbox:not(:checked)").to.be.present;

            browser.expect.element("div#no-element-like-this").not.to.be.present;


            browser
            .useXpath()     // every selector now must be XPath
            .click("/en/download/help/whatis_java.html")
            .useCss()      // we're back to CSS now

            browser.useCss();






    browser
      // .pause(2000) 
      // .clearValue('#i_am_a_textbox')
      // .setValue('#i_am_a_textbox', '00000000000')
      // .pause(2000)
      // .clearValue('#i_am_a_textbox')
      // .setValue('#i_am_a_textbox', '11111111111111')
      // .pause(2000)
      .clearValue("#i_am_a_textbox")
      .setValue("#i_am_a_textbox", "nightwatch roolz!")
      .saveScreenshot(`${config.imgpath(browser)}nightwatch-roolz.png`)
      .end();
  },
};

