/// <reference types="cypress" />

describe('testes para a home da agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('João Malafaia')
        cy.get('input[type="email"]').type('malafaia@gmail.com')
        cy.get('input[type="tel"]').type('11 912345678')
        cy.get('.adicionar').click()

        cy.contains('.contato', 'João Malafaia').should('exist')
    })

    it('deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Gian Souza')
        cy.get('input[type="email"]').clear().type('gian.souza@ebac.com')
        cy.get('.alterar').click()

        cy.contains('.contato', 'gian.souza@ebac.com').should('exist')
    })

    it('deve remover um contato', () => {
        cy.get('.delete').first().click()
        
        cy.contains('.contato', 'Gian Souza').should('not.exist')
    })
})