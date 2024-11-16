class CartPage {
  //Selectores
  checkoutBtn = '.btn_action'

  //Métodos
  clickCheckout() {
    cy.get(this.checkoutBtn).click()
  }
}
export default new CartPage()
