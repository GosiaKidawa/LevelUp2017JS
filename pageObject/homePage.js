"use strict";
var HomePage = function HomePage() {

    var womenSection = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));
    this.URL = "http://automationpractice.com/index.php";
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));

    this.clickWomen = function () {
        womenSection.click();
    }
    this.getTitleHome = function () {
        return browser.getTitle();
    }
}

module.exports = HomePage;
