import CommonMethods from '../CommonMethods/CommonMethods'

//Objects
const cm= new CommonMethods()

//**********XPATHS***********/
const btnSignUp = "//a[contains(text(),'Sign in')]"
const btnSignOut="//div/a[contains(text(),'Sign out')]"
const inputOldEmail="//h3[text()='Already registered?']/../..//label[text()='Email address']/following-sibling::input"
const inputPassword="//label[text()='Password']/..//input"
const btnSignin="//button[@name='SubmitLogin']"
//***********  Methods  ************/
class HomePage {
    signUpPage() {
        cy.visit('http://automationpractice.com')
        cm.clickAnElement(btnSignUp);  
    }
    verifyAccount(){
        cy.fixture('example.json').then(function (user){
        cy.url().should('include', 'my-account')
        cy.contains(user.Fname)})
}
    signOut(){
        cm.clickAnElement(btnSignOut)
    }
}
export default HomePage