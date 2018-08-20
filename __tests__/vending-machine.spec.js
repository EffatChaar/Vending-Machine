const VendingMachine = require('../lib/vending-machine.js')

let vendingMachine = new VendingMachine();

describe('Vending Machine', () => {
    describe('When a list of inventory is requested', () => {
        it('Should return the items requested with their info as objects', () => {
            expect(vendingMachine.getItems()).toEqual({
                 Galaxy: { count: 5 },
                'Orange Juice': { count: 6 },
                'Almond Nuts': { count: 5 },
                'Coca Cola': { count: 0 } 
            })
        })
    })
})