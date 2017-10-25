var HomePage = require (pageObjectDir+"/homePage.js"); //..przenosza sie 2x katalog wyzej wzgledem tego w ktorym jest plik pageObjectSpec
var homePage = new HomePage();
var ContactUsPage = require (pageObjectDir+"/contactUsPage.js"); //..przenosza sie 2x katalog wyzej wzgledem tego w ktorym jest plik pageObjectSpec
var contactUsPage = new ContactUsPage();

describe('Protractor Demo App', function () {
    it('should have a title', function () {

        browser.get(homePage.URL);
        expect(homePage.cartLabel.getText()).toEqual('Cart (empty)');
    });
    it('click contact us link', function () {
        
         homePage.contactUsLink.click();
         expect(contactUsPage.customerService.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it('should have subject heading', function () {
        
         expect(contactUsPage.subjectHeading.isDisplayed()).toBeTruthy();
    });
    it('should have send button', function () {
        
         expect(contactUsPage.send.isDisplayed()).toBeTruthy();
    });
});