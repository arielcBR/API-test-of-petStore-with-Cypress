describe('PET', () => {
    context('Tests passing', () => {
        
        it('POST PET', () => {
            cy.fixture('pet.json').then((pet) => {
                cy.request({
                    method: 'POST',
                    url: '/pet',
                    body: pet
                }).then(({ status, body }) => {
                    expect(status).to.equal(200);
                    expect(body.category.name).to.equal('Cats');
                });
            });
        });
    
        it('GET PET', () => {
            cy.fixture('pet.json').then((pet) => { 
                cy.request({
                    method: 'GET',
                    url: `/pet/${pet.id}`,
                }).then(({ status, body }) => {
                    expect(status).to.equal(200);
                    expect(body.name).to.equal('Chulo');
                    expect(body.status).to.equal('available');
                    expect(body.id).to.equal(7894);
                });
            });
        });
    
        it('UPDATE PET', () => {
    
            cy.fixture('petUpdate.json').then((petUpdated) => {
                cy.request({
                    method: 'PUT',
                    url: '/pet',
                    body: petUpdated
                }).then(({ status, body }) => {
                    expect(status).to.equal(200);
                    expect(body.status).to.equal('unavailable');
                });
            });
    
        });
    
        it('DELETE PET', () => {
            cy.fixture('pet.json').then((pet) => { 
                cy.request({
                    method: 'DELETE',
                    url: `/pet/${pet.id}`
                }).then(({ body }) => {
                    expect(body.code).to.equal(200);
                });
            });
        });
    });

    context('Tests failing', () => {
        const petId = 37492872938753;
        
        it('GET PET', () => {
            cy.request({
                method: 'GET',
                url: `/pet/${petId}`,
                failOnStatusCode: false
            }).then(({ status, headers }) => {
                expect(status).to.equal(404);
                expect(headers['content-type']).to.equal('application/json');
            });
        });
        

    });
});