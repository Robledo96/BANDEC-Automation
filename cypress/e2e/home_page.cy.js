
describe('Home Page', () => {
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

    it('Checking - Contactenos ', () => {
        cy.get('.text-info').contains('CONTÁCTENOS').click()
        cy.get('.modal-content')
            .children('div')
            .should('contain', 'Enviar Correo')
            .and('have.css', 'visibility', 'visible')
            .get('#mymodal > .modal-dialog > .modal-content > .modal-header > .close > span', { timeout: 10000 }).click()

    })

    it('Checking social media redirects', () => {
        //Facebook
        cy.get('[href="https://www.facebook.com/bcc1997"] > .fa')
            .should('have.attr', 'title', 'Facebook')

        //Twitter
        cy.get('[href="https://www.twitter.com/BancoCentralCub"] > .fa')
            .should('have.attr', 'title', 'Twitter')

        //YouTube
        cy.get('[href="https://www.youtube.com/channel/UCJROErijHOAbY7eAMs_NO2g"] > .fa')
            .should('have.attr', 'title', 'YouTube')
    })

    it('Checking Button - Idioma ', () => {
        cy.get('#sel1')
            .should('contain.text', 'Idioma')
        cy.get('#spanish').should('contain.text', 'Español')
            .and('have.attr', 'value', 'https://www.bc.gob.cu/lang/es')

        cy.get('#english').should('contain.text', 'Inglés')
            .and('have.attr', 'value', 'https://www.bc.gob.cu/lang/en')
    })

    it('Checking navbar-header', () => {
        cy.get('#nav2').should('contain.text', 'Sobre Nosotros')
            .and('contain.text', 'Funciones Principales')
            .and('contain.text', 'Normas y Regulaciones')
            .and('contain.text', 'Billetes y Monedas')
            .and('contain.text', 'Sistema Bancario')
            .and('contain.text', 'Publicaciones')
            .and('contain.text', 'Sala de Prensa')
    })

})