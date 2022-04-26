import HomePage from '../PageObjects/HomePage'
import LoginPage from '../PageObjects/LoginPage'
import RegisterPage from '../PageObjects/RegisterPage'

const Rp = new RegisterPage()
const hp = new HomePage()
const lp = new LoginPage()

Given("the user open home page and click sign in", () => {
    hp.signUpPage()
  })
  
  When("the user enters Email Id and Password",()=> {
    lp.enterOldEmailId()
    lp.enterPassword()
    lp.clickSignIn()
  })
  Then( "the logged home page opens",() => {
    hp.verifyAccount()
    hp.signOut()
  })