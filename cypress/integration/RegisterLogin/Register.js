
import HomePage from '../PageObjects/HomePage'
import LoginPage from '../PageObjects/LoginPage'
import RegisterPage from '../PageObjects/RegisterPage'

const Rp = new RegisterPage()
const hp = new HomePage()
const lp = new LoginPage()

Given("the user open home page and click sign in", () => {
  hp.signUpPage()
})

When("the user types email id for sign up",()=> {
  lp.enterNewEmailId()
  lp.clickSubmit()
})

And("the user fill the Manadatory fields Clicks register", () => {
  Rp.enterPersonalInfo() 
  Rp.enterContactInfo()  
})
Then( "the logged home page opens",() => {
  hp.verifyAccount()
  hp.signOut()
})