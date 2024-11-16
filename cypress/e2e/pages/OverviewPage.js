class OverviewPage {
  //Selectores
  btnFinish = '.btn_action'

  //Métodos
  finishCheckout() {
    cy.get(this.btnFinish).click()
  }
}

export default new OverviewPage()
