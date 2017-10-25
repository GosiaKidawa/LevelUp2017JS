var ProductPage = function ProductPage() {


    this.getTitleProduct = function () {
        return browser.getTitle();
    }
    this.checkIfNew = function() {
        newLabel = element(By.css('#product_condition > span'));
        return newLabel.getText();
    }
    this.addSizeM = function() {
        dropdown = element(By.css("#uniform-group_1"));
        dropdown.click();
        dropdownM = element(By.css("#uniform-group_1 option:nth-child(2)"));
        dropdownM.click();
    }
    this.getProductSize = function() {
        selectedSize = element(By.css("#uniform-group_1 > span"));
        return selectedSize.getText();
    }
    this.getProductName = function() {
        productName = element(By.css("div.pb-center-column.col-xs-12.col-sm-4 > h1"));
        return productName.getText();
    }
    this.getProductPrize = function() {
        productPrize = element(By.css("#our_price_display"));
        return productPrize.getText();
    }
    this.addProduct = function() {
        addToCart = element(By.css("#add_to_cart > button"));
        addToCart.click();
    }
    this.goToBasket = function() {
        basket = element(By.css("div.shopping_cart >a > b"));
        return basket.click().then(function (){return basket.click()});
        // return basket.click().then(basket.click);
    }
}
ProductPage.prototype.isDescriptionLongerThan = function (number) {
    return new Promise(function (resolve) {
        description = element(By.css('#short_description_content > p'));
        description.getText().then(function (text) {
            console.log(text);
            resolve(text.length>number);
        })
    })
}

module.exports = ProductPage;