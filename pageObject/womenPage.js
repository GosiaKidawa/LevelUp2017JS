"use strict";
var WomenPage = function WomenPage() {
    
    var tops = element(By.css('#categories_block_left > div > ul > li:nth-child(1) > a'));

    this.getTitleWomen = function () {
        return browser.getTitle();
    }
    this.clickTops = function () {
        tops.click();
    }
}

module.exports = WomenPage;