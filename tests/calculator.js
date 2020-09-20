let homepage= require('../pages/homepage');
describe('Demo Calculator Test', function(){

    it('Addition Test',function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        //element(by.model('first')).sendKeys('5');
        homepage.enterFirstNumber('5');
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickOnGoButton();

        //let result=element(by.cssContainingText('.ng-binding','8'));
        //expect('8').toEqual(result.getText());
        homepage.verifyResult('8');
        browser.sleep(3000);


    });

    it('Subtraction Test',function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        //element(by.model('first')).sendKeys('5');
        homepage.enterFirstNumber('5');
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickOnGoButton1();

        //let result=element(by.cssContainingText('.ng-binding','8'));
        //expect('8').toEqual(result.getText());
        homepage.verifyResult('8');
        browser.sleep(2000);


    });
    
});

