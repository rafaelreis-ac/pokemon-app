describe('Pokemon List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Pokemon list', () => {
    cy.get('app-pokemon-list').should('exist');
    cy.get('app-pokemon-card').should('have.length.greaterThan', 0);
  });

  it('should filter the Pokemon list based on search input', () => {
    cy.get('#search').type('pikachu');
    cy.get('app-pokemon-card').should('have.length', 1);
    cy.get('app-pokemon-card').contains('Pikachu');
  });

  it('should sort the Pokemon list in descending order', () => {
    cy.get('#sortOrder').select('desc');
    cy.get('app-pokemon-card').first().contains('Zubat');
  });

  it('should change the number of items per page', () => {
    cy.get('#itemsPerPage').select('10');
    cy.get('app-pokemon-card').should('have.length', 10);
  });

  it('should navigate to the next page', () => {
    cy.get('#itemsPerPage').select('5');
    cy.get('button').contains('Próxima').click();
    cy.get('app-pokemon-card').should('have.length', 5);
  });
});