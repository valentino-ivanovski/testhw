Feature('frontend-actions');
// npx codeceptjs run --steps - to run the test with steps
// npx codeceptjs run-multiple parallel --steps - to run the test in parallel
// npx allure serve allure-results - to see the test results in the browser (make sure plugin is enabled)

Scenario('Check if the phone UI has loaded', async ({ I }) => {
  I.amOnPage('http://test.celtra.com/preview/f576e12f');
  I.waitForElement('.device.medium', 10); //wait for the phone to show up
  I.seeElement('.device.medium');

  I.waitForElement('.phone-iframe.phone-rounded-screen'); //wait for the phone screen iframe to show up
  I.seeElement('.phone-iframe.phone-rounded-screen'); //check if the phone UI has loaded
  I.switchTo('.phone-iframe.phone-rounded-screen'); //switching to the phone screen iframe

  I.wait(3);

  I.seeElement('div.notranslate[data-annotation-container-id="0"] iframe'); //check if the Expandable iframe has loaded
  I.switchTo('div.notranslate[data-annotation-container-id="0"] iframe'); //switching to the Expandable iframe
  I.seeElement('#celtra-object-104'); //check if the clickable div that contains Expandable text is here
  I.click('#celtra-object-104');

  I.switchTo();
  I.waitForElement('.phone-iframe.phone-rounded-screen'); //wait for the phone screen iframe to show up
  I.seeElement('.phone-iframe.phone-rounded-screen'); //check if the phone UI has loaded
  I.switchTo('.phone-iframe.phone-rounded-screen'); //switching back to the phone screen iframe
  I.waitForElement('.notranslate.celtra-expanded-ad');
  I.switchTo('div.notranslate.celtra-expanded-ad[data-annotation-container-id="1"] iframe'); //switching to the modal iframe

  I.wait(1); //wait for the modal to open up

  I.seeElement('#celtra-modal');
  I.seeElement('#celtra-object-29');
  I.seeElement('#celtra-object-41');
  I.seeElement('#celtra-object-38');

  I.click('#celtra-object-41');
  I.dontSeeElement('#celtra-object-41');

  I.click('.celtra-close-button.touchable.celtra-close-button-up');

  I.dontSeeElement('#celtra-modal');

  I.switchTo(null);

  I.switchTo('.phone-iframe.phone-rounded-screen');

  I.waitForElement('div.notranslate[data-annotation-container-id="0"] iframe');
  I.seeElement('div.notranslate[data-annotation-container-id="0"] iframe');
  I.switchTo('div.notranslate[data-annotation-container-id="0"] iframe');
  I.seeElement('#celtra-object-104');
});


