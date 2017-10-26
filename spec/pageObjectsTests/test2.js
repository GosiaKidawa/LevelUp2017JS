"use strict";

var dressesData = {
    "dress1": {
        "productSelector": "dress1",
        "productPrize": "$26.00",
        "productName": "Printed Dress"
    },
    "dress2": {
        "productSelector": "dress2",
        "productPrize": "$50.99",
        "productName": "Printed Dress"
    },
    "dress3": {
        "productSelector": "dress3",
        "productPrize": "$28.98",
        "productName": "Printed Summer Dress"
    },
    "dress4": {
        "productSelector": "dress4",
        "productPrize": "$30.50",
        "productName": "Printed Summer Dress"
    },
    "dress5": {
        "productSelector": "dress5",
        "productPrize": "$16.40",
        "productName": "Printed Chiffon Dress"
    }
}

var DressesPage = require(pageObjectDir + "/dressesPage.js");
var dressesPage = new DressesPage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();

// beforeAll(function () {
//     browser.get(dressesPage.URL);
//     expect(dressesPage.getTitleDresses()).toEqual("Dresses - My Store");
// });

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