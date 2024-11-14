import InventarioPage from '../pages/InventarioPage';
import LoginPage from '../pages/loginPage';

describe('Prueba de Login usando POM', () => {
    beforeEach(function () {
        // Carga el fixture de datos de usuario
        cy.fixture('usuarios').as('usuariosData');
    });

    it('Login con usuario estándar', function () {
        // Visita la página de login
        LoginPage.visit();

        // Usa datos del fixture para hacer login
        const usuario = this.usuariosData.usuario1;
        LoginPage.login(usuario.username, usuario.password)

        //LoginPage.enterUsername(usuario.username);
        //LoginPage.enterPassword(usuario.password);
        //LoginPage.clickLogin();

        // Verificación de la URL después del login
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        // Logout
        //InventarioPage.openMenu(); 
        //InventarioPage.clickLogout(); 

        InventarioPage.logout();

        // Verificación de que el logout fue exitoso (regreso a la página de login)
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');

    });
});
