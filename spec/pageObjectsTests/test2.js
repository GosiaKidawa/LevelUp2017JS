"use strict";

var DressesPage = require(pageObjectDir + "/dressesPage.js");
var dressesPage = new DressesPage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();
var dressesData = require(pageObjectDir + "/../testData/dressesData.js");

describe('Dresses test', function () {

    using(dressesData, function(dress) {

    it('go to product', function () {
        browser.get(dressesPage.URL);
        expect(dressesPage.getTitleDresses()).toEqual("Dresses - My Store");
    });

    it('go to product', function () {
       dressesPage[dress.productSelector].click();
       expect(productPage.getTitle()).toContain(dress.productName);
    });

    it('check if name of product is correct', function () {
        expect(productPage.getProductName()).toEqual(dress.productName);
     });

     it('check if prize of product is correct', function () {
        expect(productPage.getProductPrize()).toEqual(dress.productPrize);
     });
})
})