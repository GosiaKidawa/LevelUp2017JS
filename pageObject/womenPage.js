var WomenPage = function WomenPage() {
    

       this.getTitleWomen = function() {
        return browser.getTitle();
       }
       this.clickTops = function() {
        tops = element(By.css('#categories_block_left > div > ul > li:nth-child(1) > a'));
        tops.click();
       }
    }
    
    module.exports = WomenPage;