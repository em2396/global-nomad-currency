describe('Display header on page load and drop down of countries', () => {
  beforeEach(() => {
    cy.intercept("GET", " https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/latest/USD", {
      statusCode: 200,
      fixture: 'countryCodes.json'
    })
    cy.intercept("GET", "https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/pair/USD/AED", {
      statusCode: 200,
      fixture: 'twoCountries.json'
    })
    cy.visit("http://localhost:3000")

  });

  it("Should display Global Nomad Currency", () => {
    cy.get('header').should('be.visible')
      .get('header').should('contain', 'Global Nomad Currency')
  });

  it("Should display a dropdown for the first country selection", () => {
    cy.get('.country-one').should('be.visible');
    cy.get('.country-one').children('option').should('have.length',  163)
  })

  it("Should display a dropdown for the second country selection", () => {
    cy.get('.country-two').should('be.visible');
    cy.get('.country-two').children('option').should('have.length',  163)
  })

  it('should choose an amount and two countries to display conversion of number', () => {
    

    cy.get("input").type(2).should('have.value', 2)
    cy.get(".country-one").select(1).invoke("val").should("eq", "USD")
    cy.get(".country-two").select(2).invoke("val").should("eq", "AED")

      .get(".show-conversion-button").click()
      .get(".conversion-paragraph").should("be.visible")
      .get(".conversion-paragraph").should("contain", `2 USD is 14.69 AED`)
  })

  it("Should save the current conversion and navigate to saved", () => {
    cy.get("input").type(2).should('have.value', 2)
    cy.get(".country-one").select(1).invoke("val").should("eq", "USD")
    cy.get(".country-two").select(2).invoke("val").should("eq", "AED")

      .get(".show-conversion-button").click()
      .get(".save-conversion-button").click()
      .get(".saved-button").click()

      .get(".delete-button").should("be.visible")
      .get(".one-saved-conversion").should('contain', '2 USD to AED is 14.69')
  })

  it("Should delete a saved conversion", () => {
    cy.get("input").type(2).should('have.value', 2)
    cy.get(".country-one").select(1).invoke("val").should("eq", "USD")
    cy.get(".country-two").select(2).invoke("val").should("eq", "AED")

      .get(".show-conversion-button").click()
      .get(".save-conversion-button").click()
      .get(".saved-button").click()

      .get(".delete-button").should("be.visible")
      .get(".one-saved-conversion").should('contain', '2 USD to AED is 14.69')

      .get('.delete-button').click()
      .get('.no-saved').should('contain', 'No saved conversions to display.')
      .get('one-saved-conversion').should('not.exist')

  })

})