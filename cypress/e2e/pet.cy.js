describe('PET', () => {
    let pet = {
        'id': 7894,
        'category': {
            'id': 1,
            'name': 'Cats'
        },
        'name': 'Chulo',
        'photoUrls': ['string'],
        'tags': [
            {
                'id': 1,
                'name': 'cute'
            }
        ],
        'status': 'available'
    };

    it('POST PET', () => {
        cy.request({
            method: 'POST',
            url: '/pet',
            body: pet
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.category.name).to.equal('Cats');
        });
    });

    it('GET PET', () => {
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

    it('UPDATE PET', () => {
        pet.status = 'unavailable';

        cy.request({
            method: 'PUT',
            url: '/pet',
            body: pet
        }).then((res) => {
            cy.log(res);
            expect(res.status).to.equal(200);
            expect(res.body.status).to.equal('unavailable');
        });
    });

    it('DELETE PET', () => {
        cy.request({
            method: 'DELETE',
            url: `/pet/${pet.id}`
        }).then((res) => {
            expect(res.body.code).to.equal(200);
        });
    });
});