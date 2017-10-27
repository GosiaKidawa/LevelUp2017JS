"use strict";

var ProductPage = function ProductPage() {
    this.productCondition = element(By.css('#product_condition > span'));
    this.dropdownSize = element(By.css("#uniform-group_1"));
    this.dropdownSizeM = element(By.css("#uniform-group_1 option:nth-child(2)"));
    this.productSize = element(By.css("#uniform-group_1 > span"));
    this.productName = element(By.css("div.col-sm-4 > h1"));
    this.productPrize = element(By.css("#our_price_display"));
    this.addToCart = element(By.css("#add_to_cart > button"));
    this.cart = element(By.css("div.shopping_cart >a > b"));
    this.description = element(By.css('#short_description_content > p'));
    this.EC = protractor.ExpectedConditions;
}

ProductPage.prototype.getTitleProduct = function () {
    return browser.getTitle();
}
ProductPage.prototype.getProductCondition = function () {
    var that = this;
    return that.productCondition.getText();
}
ProductPage.prototype.addSizeM = function () {
    var that = this;
    that.dropdownSize.click();
    that.dropdownSizeM.click();
}
ProductPage.prototype.getProductSize = function () {
    var that = this;
    return that.productSize.getText();
}
ProductPage.prototype.getProductName = function () {
    var that = this;
    browser.wait(that.EC.visibilityOf(that.productName), 20000);
    return that.productName.getText();
}
ProductPage.prototype.getProductPrize = function () {
    var that = this;
    browser.wait(that.EC.visibilityOf(that.productPrize), 20000);
    return that.productPrize.getText();
}
ProductPage.prototype.addProduct = function () {
    var that = this;
    that.addToCart.click();
}
ProductPage.prototype.goToBasket = function () {
    var that = this;
    return that.cart.click().then(function () { return that.cart.click() });
    // return basket.click().then(basket.click);
}
ProductPage.prototype.getTitle = function () {
    return browser.getTitle();
}

ProductPage.prototype.isDescriptionLongerThan = function (number) {
    var that = this;
    return new Promise(function (resolve) {
        that.description.getText().then(function (text) {
            console.log(text);
            resolve(text.length > number);
        })
    })
}

module.exports = ProductPage;