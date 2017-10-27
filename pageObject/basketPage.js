"use strict";

var BasketPage = function BasketPage() {
    this.productName = element(By.css("td.cart_description > p > a"));
    this.productSize = element(By.css("tr small > a"));
    this.productPrize = element(By.css("#product_price_1_3_0 > span"));
}

BasketPage.prototype.getTitleBasket = function () {
    return browser.getTitle();
    }
BasketPage.prototype.getProductName = function () {
    var that = this;
    return that.productName.getText();
    }
BasketPage.prototype.getProductSize = function () {
    var that = this;
    return that.productSize.getText();
    }
BasketPage.prototype.getProductPrize = function () {
    var that = this;
    return that.productPrize.getText();
    }

module.exports = BasketPage;