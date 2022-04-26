
import HomePage from '../PageObjects/HomePage'
import LoginPage from '../PageObjects/LoginPage'
import RegisterPage from '../PageObjects/RegisterPage'

const Rp = new RegisterPage()
const hp = new HomePage()
const lp = new LoginPage()

Given("Mobileuser open home page and click sign in", () => {
  cy.viewport('samsung-note9')
  hp.signUpPage()
})

When("Mobileuser types email id for sign up",()=> {
  lp.enterNewEmailIdMobile()
  lp.clickSubmit()
})

And("Mobileuser fill the Manadatory fields Clicks register", () => {
  Rp.enterPersonalInfo() 
  Rp.enterContactInfo()  
})
Then("Mobileuser logged home page opens",() => {
  hp.verifyAccount()
  hp.signOut()
})