describe('Redirects Home Page - navbar', () => {
    beforeEach(function () {
        const suite = cy.state('test').parent
        if (suite.tests.some(test => test.state === 'failed')) {
            this.skip()
        }
    })

     //Page 1
     it('Visit', () => {
        cy.visit('/', { timeout: 90000 })
    })

    it('Checking redirects btn - Sobre Nosotros', () => {
        cy.get(':nth-child(1) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="17"]').eq(0)
            .should('have.attr', 'href').and('include', '/capacitacion')
        cy.get('[parent_id="17"]').eq(1)
            .should('have.attr', 'href').and('include', '/consejo-direccion')
        cy.get('[parent_id="17"]').eq(2)
            .should('have.attr', 'href').and('include', '/recursos-humanos')
        cy.get('[parent_id="17"]').eq(3)
            .should('have.attr', 'href').and('include', '/historia')
        cy.get('[parent_id="17"]').eq(4)
            .should('have.attr', 'href').and('include', '/plazas')
        cy.get(':nth-child(1) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="17"]').eq(5)
            .should('have.attr', 'href').and('include', '/organigrama')
        cy.get('[parent_id="17"]').eq(6)
            .should('have.attr', 'href').and('include', '/info-sobre-nosotros')
        cy.get('[parent_id="17"]').eq(7)
            .should('have.attr', 'href').and('include', '/sedes-y-edificios')
        cy.get('[parent_id="17"]').eq(8)
            .should('have.attr', 'href').and('include', '/etica-bancaria')
    })

    it('Checking redirects btn - Funciones Principales', () => {
        cy.get(':nth-child(2) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="27"]').eq(0)
            .should('have.attr', 'href').and('include', '/politica-monetaria')
        cy.get('[parent_id="27"]').eq(1)
            .should('have.attr', 'href').and('include', '/sistema-de-pago')
        cy.get('[parent_id="27"]').eq(2)
            .should('have.attr', 'href').and('include', '/politica-cambiaria')
    })

    it('Checking redirects btn - Normas y regulaciones', () => {
        cy.get(':nth-child(3) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="33"]').eq(0)
            .should('have.attr', 'href').and('include', '/manual-regulaciones')
        cy.get('[parent_id="33"]').eq(1)
            .should('have.attr', 'href').and('include', '/regulaciones-sbancaria')
    })

    it('Checking redirects btn - Billetes y Monedas', () => {
        cy.get(':nth-child(4) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="34"]').eq(0)
            .should('have.attr', 'href').and('include', '/informacion-de-interes')
        cy.get('[parent_id="34"]').eq(1)
            .should('have.attr', 'href').and('include', '/museo-numismatico')
        cy.get('[parent_id="34"]').eq(2)
            .should('have.attr', 'href').and('include', '/emisiones')
    })

    it('Checking redirects btn - Sistema Bancario', () => {
        cy.get(':nth-child(5) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="35"]').eq(0)
            .should('have.attr', 'href').and('include', '/mapa-bancario')
        cy.get('[parent_id="35"]').eq(1)
            .should('have.attr', 'href').and('include', '/sistema-bancario-y-financiero')
    })

    it('Checking redirects btn - Publicaciones', () => {
        cy.get(':nth-child(6) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="40"]').eq(0)
            .should('have.attr', 'href').and('include', '/investigaciones')
        cy.get('[parent_id="40"]').eq(1)
            .should('have.attr', 'href').and('include', '/eventos')
        cy.get('[parent_id="40"]').eq(2)
            .should('have.attr', 'href').and('include', '/revistas')
        cy.get('[parent_id="40"]').eq(3)
            .should('have.attr', 'href').and('include', '/boletines')
        cy.get('[parent_id="40"]').eq(4)
            .should('have.attr', 'href').and('include', '/info-estadisticas')
    })

    it('Checking redirects btn - Sala de Prensa', () => {
        cy.get(':nth-child(7) > .dropdown-toggle', { timeout: 5000 }).click()
        cy.get('[parent_id="48"]').eq(0)
            .should('have.attr', 'href').and('include', '/info-sala-de-prensa')
    })

})