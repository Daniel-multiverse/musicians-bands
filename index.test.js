const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })


    test('can create a Band', async () => {
        const testUser = await Band.create({ name: 'George', genre: 'Country Music' });
        expect(testUser.name).toBe('George');
        expect(testUser.genre).toBe('Country Music');
    })

    test('can create a Musician', async () => {
        const testUser = await Musician.create({ name: 'Band', instrument: 'Drums' });
        expect(testUser.name).toBe('Band');
        expect(testUser.instrument).toBe('Drums');


    })
})