let homepage= require('../pages/calculatorhomepage');
describe('Demo Calculator Test 1', function(){

    fit('Addition Test',function(){
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

    xit('Subtraction Test',function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        //element(by.model('first')).sendKeys('5');
        homepage.enterFirstNumber('5');
        //element(by.model('second')).sendKeys('3');
        homepage.selectMathAction('-');

        homepage.enterSecondNumber('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickOnGoButton();

        //let result=element(by.cssContainingText('.ng-binding','8'));
        //expect('8').toEqual(result.getText());
        homepage.verifyResult('2');
        browser.sleep(3000);


    });

    
});


xdescribe('Demo Calculator Test 2', function(){


    it('Multiplication Test',function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        //element(by.model('first')).sendKeys('5');
        homepage.enterFirstNumber('5');
        //element(by.model('second')).sendKeys('3');
        homepage.selectMathAction('*');
        
        homepage.enterSecondNumber('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickOnGoButton();

        //let result=element(by.cssContainingText('.ng-binding','8'));
        //expect('8').toEqual(result.getText());
        homepage.verifyResult('15');
        browser.sleep(3000);


    });

    xit('Division Test',function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        //element(by.model('first')).sendKeys('5');
        homepage.enterFirstNumber('15');
        //element(by.model('second')).sendKeys('3');
        homepage.selectMathAction('/');
        
        homepage.enterSecondNumber('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickOnGoButton();

        //let result=element(by.cssContainingText('.ng-binding','8'));
        //expect('8').toEqual(result.getText());
        homepage.verifyResult('5');
        browser.sleep(3000);


    });
    
});

fdescribe('Demo Calculator Test 3', function(){ //f stands for focused


    it('Page Title Test',function(){
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.sleep(2000);


    });
    
});

