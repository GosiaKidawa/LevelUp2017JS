var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var WomenPage = require(pageObjectDir + "/womenPage.js");
var womenPage = new WomenPage();
var TopsPage = require(pageObjectDir + "/topsPage.js");
var topsPage = new TopsPage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();
var BasketPage = require(pageObjectDir + "/basketPage.js");
var basketPage = new BasketPage();

beforeAll(function () {
    browser.get(homePage.URL);
});

describe('Protractor Demo App', function () {
    it('check if page loaded', function () {

        expect(homePage.getTitleHome()).toEqual("My Store");
    });
    it('go to WOMEN section', function () {

        homePage.clickWomen();
        expect(womenPage.getTitleWomen()).toEqual("Women - My Store");
    });
    it('go to Tops section', function () {

        womenPage.clickTops();
        expect(topsPage.getTitleTops()).toEqual("Tops - My Store");
    });
    it('go to first product', function () {

        topsPage.clickProduct();
        expect(productPage.getTitleProduct()).toEqual("Faded Short Sleeve T-shirts - My Store");
    });
    it('check description length', function () {

        productPage.isDescriptionLongerThan(8).then(function (rezutatZIsDesciption) {
            expect(rezutatZIsDesciption).toBeTruthy();
        })
    });
    it('check if product is new', function () {
        
        expect(productPage.checkIfNew()).toEqual("New");
    });
    it('choose size M', function () {
        
        productPage.addSizeM();
        expect(productPage.getProductSize()).toEqual("M");
    });
    it('add product to basket', function () {
        
        productName = productPage.getProductName();
        productSize = productPage.getProductSize();
        productPrize = productPage.getProductPrize();
        productPage.addProduct();
        productPage.goToBasket();

    });
    it('go to basket', function () {
        
        expect(basketPage.getTitleBasket()).toEqual("Order - My Store");
        expect(basketPage.getProductName()).toEqual(productName);
        expect(basketPage.getProductSize()).toContain(productSize);
        expect(basketPage.getProductPrize()).toEqual(productPrize);
    });
});