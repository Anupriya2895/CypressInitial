import CommonMethods from '../CommonMethods/CommonMethods'

//Objects
const cm= new CommonMethods()

//**********XPATHS***********/
const preffixField ="//h3[text()='Your personal information']/..//label[text()='" 
const suffixField="']/following-sibling::input"
const preffixSelect ="//label[text()='" 
const suffixSelect=" ']/following-sibling::div//option[text()='"
const selectState= "//label[text()='State ']/following-sibling::div//select"
const optionState="//label[text()='State ']/following-sibling::div//option[text()='Alaska']"
const btnRegister= "//button/span[text()='Register']"
//***********Methods*****************/
class RegisterPage{
    enterPersonalInfo(){
        cy.fixture('example.json').then(function (user){
        cm.enterValue(preffixField+"First name "+suffixField,user.Fname )
        cm.enterValue(preffixField+"Last name "+suffixField,user.Lastname )
        cm.enterValue(preffixField+"Password "+suffixField,user.Password )
        })
    }
     enterContactInfo(){
        cy.fixture('example.json').then(function (user){
        cm.enterValue(preffixSelect+"Address "+suffixField,user.Address )
        cm.enterValue(preffixSelect+"City "+suffixField,user.City )
        cm.enterValue(preffixSelect+"Zip/Postal Code "+suffixField,user.Pcode )
        cm.enterValue(preffixSelect+"Mobile phone "+suffixField,user.Phone)
        cm.selectAnValue(selectState,optionState)
        cm.clickAnElement(btnRegister)
    })
    }
}
    
export default RegisterPage