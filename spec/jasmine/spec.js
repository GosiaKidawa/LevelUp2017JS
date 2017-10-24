beforeAll(function () {//'kod ktory wykona sie przed wszystkim'  
});
beforeEach(function () {//'kod ktory wykona sie przed kazdym testem'  
});
afterAll(function () {//'kod ktory wykona sie po wszystkim' 
});
afterEach(function () {//'kod ktory wykona sie po kazdym tescie'  
});

describe('Protractor Demo App', function () {
    it('should have a title', function () {

        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');

        // expect(element(By.css('#header > app-toolbar > div.logo > a')).getText()).toEqual('SHOP') to by zadzialalo dla angulara
        // expect(browser.getTitle()).toEqual('Super Calculator');

        expect(browser.findElement(By.css('.shopping_cart')).getText()).toEqual('Cart (empty)');
    });
});