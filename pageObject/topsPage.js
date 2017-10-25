var TopsPage = function TopsPage() {
    
       
       this.getTitleTops = function() {
        return browser.getTitle();
       }
       this.clickProduct = function() {
        product = element(By.css('ul[class="product_list grid row"] li:nth-child(1) img'));
        product.click();
       }
    }
    
    module.exports = TopsPage;