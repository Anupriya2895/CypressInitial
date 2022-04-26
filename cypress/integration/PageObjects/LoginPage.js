import CommonMethods from '../CommonMethods/CommonMethods'

//Objects
const cm= new CommonMethods()

//**********XPATHS*******************************/
const inputNewEmail ="//h3[text()='Create an account']/../..//label[text()='Email address']/following-sibling::input"
const btnsubmit= "//button[@name='SubmitCreate']"
const inputOldEmail="//h3[text()='Already registered?']/../..//label[text()='Email address']/following-sibling::input"
const inputPassword="//label[text()='Password']/..//input"
const btnSignin="//button[@name='SubmitLogin']"

//**************Methods***************************/
class LoginPage{
    
    enterNewEmailId(){
       cy.fixture('example.json').then(function (user){
         cm.enterValue(inputNewEmail ,user.email )
        })
    }
    clickSubmit(){
       cm.clickAnElement(btnsubmit);
   }
   enterOldEmailId(){
        cy.fixture('example.json').then(function (user){
        cm.enterValue(inputOldEmail ,user.email )
       })
    }
    enterPassword(){
        cy.fixture('example.json').then(function (user){
        cm.enterValue(inputPassword ,user.Password)
       })
    }
    clickSignIn(){
        cm.clickAnElement(btnSignin)  
    }
    enterOldEmailIdMobile(){
        cy.fixture('mobileLogin.json').then(function (user){
        cm.enterValue(inputOldEmail ,user.mobileEmail)
       })
    }
    enterNewEmailIdMobile(){
        cy.fixture('mobileLogin.json').then(function (user){
        cm.enterValue(inputNewEmail ,user.mobileEmail)
         })
     }
}
export default LoginPage