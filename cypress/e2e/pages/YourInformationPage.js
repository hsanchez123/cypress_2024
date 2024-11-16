class YourInformationPage {
  //Selectores
  firstName = '#first-name'
  lastName = '#last-name'
  zipCode = '#postal-code'
  btnContinue = '[value=CONTINUE]'

  //Métodos
  fillForm() {
    cy.get(this.firstName).type('Hector')
    cy.get(this.lastName).type('Sanchez')
    cy.get(this.zipCode).type('007')
    cy.get(this.btnContinue).click()
  }
}
export default new YourInformationPage()
