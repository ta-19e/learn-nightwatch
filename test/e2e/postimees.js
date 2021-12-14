const config = require("../../nightwatch.conf.js");

module.exports = {
  "Postimees": function (browser) {
    browser
      .url("https://www.postimees.ee/")
      .waitForElementVisible("body")
      .assert.title("Postimees: Värsked uudised Eestist ja välismaalt")
      .saveScreenshot(`${config.imgpath(browser)}a-screenshot-description.png`);

    browser
      .click("html.theme-postimees.device-desktop.country-ee body.section-81.digipakett-branding-visible.digipakett-branding-visible--new-account div.cookie-container div.cookie-notif div.cookie-notif__content div.flex.flex--justify-content-space-between.flex--align-items-center div.button.cookie-notif__content--button")
      .assert.title("Postimees: Värsked uudised Eestist ja välismaalt")
      .saveScreenshot(`${config.imgpath(browser)}cookie.png`);

    browser
      .click("html.theme-postimees.device-desktop.country-ee body.section-81.digipakett-branding-visible.digipakett-branding-visible--new-account div.site-header__top.site-header__top--darkblue div.site-header__top--inner.flex.flex--align-items-center.flex--justify-content-space-between div.flex div.icons.flex.flex--align-items-center div.icon.icon--search")
      .assert.title("Postimees: Värsked uudised Eestist ja välismaalt")
      .saveScreenshot(`${config.imgpath(browser)}otsing-sisestamine.png`);

    browser
    .setValue("html.theme-postimees.device-desktop.country-ee body.section-81.digipakett-branding-visible.digipakett-branding-visible--new-account.body--fullscreen-open div.search-overlay.modal.modal--fullscreen div.search-overlay__content.flex.flex--direction-column.flex--align-items-center.flex--justify-content-center form.search-overlay-form.flex.flex--align-items-center input.search-overlay-form__input.flex--equal-width", "koroona")
    .click("html.theme-postimees.device-desktop.country-ee body.section-81.digipakett-branding-visible.digipakett-branding-visible--new-account.body--fullscreen-open div.search-overlay.modal.modal--fullscreen div.search-overlay__content.flex.flex--direction-column.flex--align-items-center.flex--justify-content-center form.search-overlay-form.flex.flex--align-items-center button.search-overlay-form__submit.flex.flex--align-items-center")
    .assert.title("koroona - Otsing - Postimees: Värsked uudised Eestist ja välismaalt")
    .saveScreenshot(`${config.imgpath(browser)}otsing.png`); 

    browser
    .click("div.menu-items:nth-child(3) > div:nth-child(1) > a:nth-child(1)")
    .assert.title("Koroonaviirus - Tervis")
    .saveScreenshot(`${config.imgpath(browser)}Koroonaviirus-Tervis.png`); 

    browser
    .click("a.menu-item--btn:nth-child(1)")
    .assert.title("Postimees: Värsked uudised Eestist ja välismaalt")
    .saveScreenshot(`${config.imgpath(browser)}Tagasi-Avalehele.png`); 

    browser
    .click(".custom-block__top > article:nth-child(1) > a:nth-child(5)")
    .assert.title("GRAAFIKUD ⟩ Ööpäevaga lisandus 618 koroonapositiivset, suri 3 nakatunut - Eesti - Postimees: Värsked uudised Eestist ja välismaalt")
    .saveScreenshot(`${config.imgpath(browser)}Uudis.png`); 

  },
};
