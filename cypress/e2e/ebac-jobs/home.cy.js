/// <reference types="cypress" />

describe('testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('deve renderizar quatro vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it('deve filtrar por fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"]').click()
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})