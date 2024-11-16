import InventoryPage from '../pages/InventoryPage'
import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import YourInformationPage from '../pages/YourInformationPage'
import OverviewPage from '../pages/OverviewPage'
import CheckoutFinishPage from '../pages/CheckoutFinishPage'

describe('Agregar carrito usando POM', () => {
  beforeEach(function () {
    // Carga el fixture de datos de usuario
    cy.fixture('usuarios').as('usuariosData')
  })
  it('Agregando item al carrito', function () {
    LoginPage.visit()
    const usuario = this.usuariosData.usuario1
    LoginPage.login(usuario.username, usuario.password)

    //Agregando items al carrito
    InventoryPage.addToCart()
    InventoryPage.goToCart()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html')

    //Realizando checkout
    CartPage.clickCheckout()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html')
    YourInformationPage.fillForm()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html')
    cy.screenshot('Checkout overview')

    //Finalizando Checkout
    OverviewPage.finishCheckout()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')
    CheckoutFinishPage.verifyMessage()

    //Haciendo Logout
    InventoryPage.logout()
  })
})
