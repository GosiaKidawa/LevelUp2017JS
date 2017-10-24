var HomePage = require (pageObjectDir+"/homePage.js"); //..przenosza sie 2x katalog wyzej wzgledem tego w ktorym jest plik pageObjectSpec
var homePage = new HomePage();
var ContactUsPage = require (pageObjectDir+"/contactUsPage.js"); //..przenosza sie 2x katalog wyzej wzgledem tego w ktorym jest plik pageObjectSpec
var contactUsPage = new ContactUsPage();

describe('Protractor Demo App', function () {
    it('should have a title', function () {

        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
        expect(homePage.cartLabel.getText()).toEqual('Cart (empty)');
    });
    it('click contact us link', function () {
        
        browser.waitForAngularEnabled(false);
         homePage.contactUsLink.click();
         expect(contactUsPage.customerService.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it('should have subject heading', function () {
        
        browser.waitForAngularEnabled(false);
         expect(contactUsPage.subjectHeading.isDisplayed());
    });
    it('should have send button', function () {
        
        browser.waitForAngularEnabled(false);
         expect(contactUsPage.send.isDisplayed());
    });
});