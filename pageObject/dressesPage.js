"use strict";

var DressesPage = function DressesPage() {
    this.URL = "http://automationpractice.com/index.php?id_category=8&controller=category";
    this.dress1 = element(By.css("ul[class=\"product_list grid row\"]  li:nth-child(1)  img"));
    this.dress2 = element(By.css("ul[class=\"product_list grid row\"]  li:nth-child(2)  img"));
    this.dress3 = element(By.css("ul[class=\"product_list grid row\"]  li:nth-child(3)  img"));
    this.dress4 = element(By.css("ul[class=\"product_list grid row\"]  li:nth-child(4)  img"));
    this.dress5 = element(By.css("ul[class=\"product_list grid row\"]  li:nth-child(5)  img"));
}

DressesPage.prototype.getTitleDresses = function () {
    return browser.getTitle();
}

module.exports = DressesPage;