let homepage=function(){
    let firstnumber=element(by.model('first'));
    let signSelector= element(by.model('operator'));
    let secondnumber=element(by.model('second'));
    let gobutton=element(by.css('[ng-click="doAddition()"]'));
 
    this.getURL=function(url)
    {
        browser.get(url);
    };

    this.enterFirstNumber=function(firstNumber){
        firstnumber.sendKeys(firstNumber);
    };
    
    this.selectMathAction=function(sign){
        signSelector.sendKeys(sign);
        
    };

    this.enterSecondNumber=function(secondNumber){
        secondnumber.sendKeys(secondNumber);
    };

    this.clickOnGoButton=function(){
        gobutton.click();
    };

    this.verifyResult=function(result){
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(result).toEqual(output.getText());
    };
};

module.exports=new homepage();