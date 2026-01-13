describe('Skenario Login', () => {
  it('Visits the login page and logs in', () => {


    // Kunjungi halaman login
    cy.visit(Cypress.env('baseUrl'))

    // Verifikasi teks "Sign in to your account" ada di halaman
    cy.contains('APPLIKASI BIZ').should('be.visible')  
      
    // Input email
    cy.get('input[name="username"]').type("admin")

    // Input password
    cy.get('input[name="password"]').type("1234")

    // Klik tombol login
    cy.get('input[name="submit"]').click()
    
    // Verifikasi bahwa login berhasil, misalnya dengan memeriksa URL atau elemen tertentu di halaman setelah login
    cy.url().should('include', '/home')

    // Verifikasi teks "overview" ada di halaman
    cy.contains('DASHBOARD').should('be.visible')  
})
})