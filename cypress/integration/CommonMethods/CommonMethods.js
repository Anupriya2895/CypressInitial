class CommonMethods{
    clickAnElement(string) {
     cy.xpath(string).should('be.visible')  
     cy.xpath(string).click()   
   }
   enterValue(stringa,stringb) {
    cy.xpath(stringa).should('be.visible')
    cy.xpath(stringa).type(stringb)   
   }
   selectAnValue(stringa,stringb) {
    cy.xpath(stringa).select('Alaska')      
   }
   verifyAText(stringa){
    cy.contains(stringa)
   }
}

export default CommonMethods
