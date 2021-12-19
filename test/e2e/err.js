const config = require("../../nightwatch.conf.js");

module.exports = {
  "err": function (browser) {
    browser
      .url("https://www.err.ee/")
      .waitForElementVisible("body")
      .assert.title("uudised | ERR")
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`);

    browser
    .click("button.cookieOverlayBtn:nth-child(1)")
    .assert.title("uudised | ERR")
    .saveScreenshot(`${config.imgpath(browser)}cookies.png`); 

    browser
    .click(".site-menu-burger")
    .assert.title("uudised | ERR")
    .saveScreenshot(`${config.imgpath(browser)}menu.png`); 


    browser
      .setValue("html#ng-app.ng-scope body.ng-scope div.container section.siteMenu nav.mobile-only1 div.site-menu-mobile-list form#searchForm.ng-pristine.ng-valid div.menu-header-search-div input.global-search", "koroona")
      .click("div.site-menu-mobile-list:nth-child(2) > form:nth-child(1) > div:nth-child(1) > input:nth-child(2)")
      .assert.title("uudised | ERR")
      .saveScreenshot(`${config.imgpath(browser)}search.png`); 



    browser
      .click("div.mb24:nth-child(4) > p:nth-child(3) > a:nth-child(1)")
      .assert.title("Otepääst sai talvepealinn | Eesti | ERR")
      .saveScreenshot(`${config.imgpath(browser)}uudis.png`);


    browser
    .click("div.category:nth-child(1) > a:nth-child(1)")
    .assert.title("Eesti | ERR")
    .saveScreenshot(`${config.imgpath(browser)}eesti.png`);

  },
};