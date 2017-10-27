"use strict";

var HomePage = function HomePage() {
    this.womenSection = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));
    this.URL = "http://automationpractice.com/index.php";
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
}

HomePage.prototype.clickWomen = function () {
    var that = this;
    that.womenSection.click();
}
HomePage.prototype.getTitleHome = function () {
    return browser.getTitle();
}

module.exports = HomePage;
