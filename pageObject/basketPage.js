var BasketPage = function BasketPage() {
    
       this.getTitleBasket = function() {
        return browser.getTitle();
       }
       this.getProductName = function() {
           productName = element(By.css("td.cart_description > p > a"));
           return productName.getText();
       }
       this.getProductSize = function() {
        productSize = element(By.css("small:nth-child(3) > a"));
        return productSize.getText();
        }
        this.getProductPrize = function() {
            productPrize = element(By.css("#product_price_1_3_0 > span"));
            return productPrize.getText();
        }
    }
    
    module.exports = BasketPage;