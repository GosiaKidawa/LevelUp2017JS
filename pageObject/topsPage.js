"use strict";
var TopsPage = function TopsPage() {

    var product = element(By.css('ul[class="product_list grid row"] li:nth-child(1) img'));
    this.getTitleTops = function () {
        return browser.getTitle();
    }
    this.clickProduct = function () {
        product.click();
    }
}

module.exports = TopsPage;