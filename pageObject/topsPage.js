"use strict";

var TopsPage = function TopsPage() {
    this.product = element(By.css('ul[class="product_list grid row"] li:nth-child(1) img'));
}

TopsPage.prototype.getTitleTops = function () {
    return browser.getTitle();
}
TopsPage.prototype.clickProduct = function () {
    var that = this;
    that.product.click();
}

module.exports = TopsPage;