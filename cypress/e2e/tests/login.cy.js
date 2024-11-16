import InventoryPage from '../pages/InventoryPage'
import LoginPage from '../pages/LoginPage'

describe('Prueba de Login usando POM', () => {
  beforeEach(function () {
    // Carga el fixture de datos de usuario
    cy.fixture('usuarios').as('usuariosData')
  })

  it('Login con usuario estándar', function () {
    // Visita la página de login
    LoginPage.visit()

    // Usa datos del fixture para hacer login
    const usuario = this.usuariosData.usuario1
    LoginPage.login(usuario.username, usuario.password)

    // Verificación de la URL después del login
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

    // Logout
    InventoryPage.logout()

    // Verificación de que el logout fue exitoso (regreso a la página de login)
    cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
  })
})
