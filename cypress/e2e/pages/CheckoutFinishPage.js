class CheckoutFinishPage {
  //Selectores
  thxMessage = '.complete-header'

  //Métodos
  verifyMessage() {
    cy.get(this.thxMessage).should('contain', 'THANK YOU FOR YOUR ORDER')
  }
}

export default new CheckoutFinishPage()
