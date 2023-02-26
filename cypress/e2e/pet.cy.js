describe('PET', () => {
    it('POST PET', () => {
        cy.fixture('pet.json').then((pet) => {
            cy.request({
                method: 'POST',
                url: '/pet',
                body: pet
            }).then((res) => {
                expect(res.status).to.equal(200);
                expect(res.body.category.name).to.equal('Cats');
            });
        });
    });

    it('GET PET', () => {
        cy.fixture('pet.json').then((pet) => { 
            cy.request({
                method: 'GET',
                url: `/pet/${pet.id}`,
            }).then((res) => {
                expect(res.status).to.equal(200);
                expect(res.body.name).to.equal('Chulo');
                expect(res.body.status).to.equal('available');
                expect(res.body.id).to.equal(7894);
            });
        });
    });

    it('UPDATE PET', () => {

        cy.fixture('petUpdate.json').then((petUpdated) => {
            cy.log(petUpdated);
            cy.request({
                method: 'PUT',
                url: '/pet',
                body: petUpdated
            }).then((res) => {
                cy.log(res);
                expect(res.status).to.equal(200);
                expect(res.body.status).to.equal('unavailable');
            });
        });

    });

    it('DELETE PET', () => {
        cy.fixture('pet.json').then((pet) => { 
            cy.request({
                method: 'DELETE',
                url: `/pet/${pet.id}`
            }).then((res) => {
                expect(res.body.code).to.equal(200);
            });
        });
    });
});