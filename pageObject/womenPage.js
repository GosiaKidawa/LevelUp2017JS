"use strict";

var WomenPage = function WomenPage() {
    this.tops = element(By.css('#categories_block_left > div > ul > li:nth-child(1) > a'));
}

WomenPage.prototype.getTitleWomen = function () {
    return browser.getTitle();
}
WomenPage.prototype.clickTops = function () {
    var that = this;
    that.tops.click();
}

module.exports = WomenPage;