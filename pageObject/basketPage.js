"use strict";
var BasketPage = function BasketPage() {
    var productName = element(By.css("td.cart_description > p > a"));
    var productSize = element(By.css("tr small > a"));
    var productPrize = element(By.css("#product_price_1_3_0 > span"));

    this.getTitleBasket = function () {
        return browser.getTitle();
    }
    this.getProductName = function () {
        return productName.getText();
    }
    this.getProductSize = function () {
        return productSize.getText();
    }
    this.getProductPrize = function () {
        return productPrize.getText();
    }
}

module.exports = BasketPage;