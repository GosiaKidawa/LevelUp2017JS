"use strict";
var ProductPage = function ProductPage() {
    var productCondition = element(By.css('#product_condition > span'));
    var dropdownSize = element(By.css("#uniform-group_1"));
    var dropdownSizeM = element(By.css("#uniform-group_1 option:nth-child(2)"));
    var productSize = element(By.css("#uniform-group_1 > span"));
    var productName = element(By.css("div.col-sm-4 > h1"));
    var productPrize = element(By.css("#our_price_display"));
    var addToCart = element(By.css("#add_to_cart > button"));
    var cart = element(By.css("div.shopping_cart >a > b"));
    var description = element(By.css('#short_description_content > p'));

    this.getTitleProduct = function () {
        return browser.getTitle();
    }
    this.getProductCondition = function () {
        return productCondition.getText();
    }
    this.addSizeM = function () {
        dropdownSize.click();
        dropdownSizeM.click();
    }
    this.getProductSize = function () {
        return productSize.getText();
    }
    this.getProductName = function () {
        return productName.getText();
    }
    this.getProductPrize = function () {
        return productPrize.getText();
    }
    this.addProduct = function () {
        addToCart.click();
    }
    this.goToBasket = function () {
        return cart.click().then(function () { return cart.click() });
        // return basket.click().then(basket.click);
    }
}
ProductPage.prototype.isDescriptionLongerThan = function (number) {
    return new Promise(function (resolve) {
        description.getText().then(function (text) {
            console.log(text);
            resolve(text.length > number);
        })
    })
}

module.exports = ProductPage;