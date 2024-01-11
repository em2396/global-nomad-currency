describe('Display header on page load and drop down of countries', () => {
  beforeEach(() => {
    cy.intercept("GET", " https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/latest/USD", {
      statusCode: 200,
      fixture: 'countryCodes.json'
    })
    cy.visit("http://localhost:3000")
  })

  it("Should display Global Nomad", () => {
    cy.get('header').should('be.visible')
      .get('header').should('contain', 'Global Nomad Currency')
  })


})