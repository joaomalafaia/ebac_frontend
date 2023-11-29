/// <reference types="cypress" />

describe('testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('deve levar o usuário até a página de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscrição')
    })

    it('deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()

        cy.get('input[name="nome-completo"]').type('joao malafaia')
        cy.get('input[name="email"]').type('jmalafai@gmail.com')
        cy.get('input[name="telefone"]').type('11 968465602')
        cy.get('input[name="endereco"]').type('av interlagos 800')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('bacharelado')
    
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscrição-preenchida')
    })
})