var HomePage = require (pageObjectDir+"/homePage.js"); //..przenosza sie 2x katalog wyzej wzgledem tego w ktorym jest plik pageObjectSpec
var homePage = new HomePage();

describe('Protractor Demo App', function () {
    it('should have a title', function () {

        // browser.waitForAngularEnabled(false); nie potrzebne bo dorzucilicmy w config ignoreSynchronization
        browser.get(homePage.URL);

        // expect(element(By.css('#header > app-toolbar > div.logo > a')).getText()).toEqual('SHOP') to by zadzialalo dla angulara
        // expect(browser.getTitle()).toEqual('Super Calculator');

        expect(homePage.cartLabel.getText()).toEqual('Cart (empty)');
    });
});