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
    //refill
    describe('When refilling the inventory', () => {
        it('Should throw an error if the item is not found', () => {
            expect(vendingMachine.inventoryRefill('Milk', 3)).toEqual('Not valid!')
        })
        it('Should return the object of the item that has been refilled', () => {
            expect(vendingMachine.inventoryRefill('Galaxy', 10)).toEqual(
                {'count': 10, 'name': 'Galaxy'
            })
        })
        it('Should throw an error if the item is not a string', () => {
            expect(vendingMachine.inventoryRefill(10, 3)).toEqual('Not valid!')
        })
        it('Should throw an error if amount is not an integer', () => {
            expect(vendingMachine.inventoryRefill('Galaxy', 'two')).toEqual(
                'Please insert appropiate numbers to indicate amount'
            )
        })
    })
})