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
  
  When("Mobileuser enters Email Id and Password",()=> {
    lp.enterOldEmailIdMobile()
    lp.enterPassword()
    lp.clickSignIn()
  })
  Then("Mobileuser logged home page opens",() => {
    hp.verifyAccount()
    hp.signOut()
  })