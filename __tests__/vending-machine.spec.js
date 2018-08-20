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
            expect(vendingMachine.inventoryRefill('Milk', 3)).toEqual('error')
        })
        it('Should return the object of the item that has been refilled', () => {
            expect(vendingMachine.inventoryRefill('Galaxy', 10)).toEqual(
                {'count': 15,
                'name': 'Galaxy'
            })
        })
        it('Should throw an error if the item is not a string', () => {
            expect(vendingMachine.inventoryRefill(10, 3)).toEqual('error')
        })
        it('Should throw an error if amount is not an integer', () => {
            expect(vendingMachine.inventoryRefill('Galaxy', 'two')).toEqual('error')
        })
    })
    // resupply
    describe('When change is resupplied to the machine', () => {
        it('Should return an updated count of the coins available', () => {
          expect(vendingMachine.changeResupply('Nickel', 10)).toEqual({
            name: 'Nickel',
            count: 20
          })
        })
        it('Should throw an error if the coin is not found', () => {
          expect(vendingMachine.changeResupply('Lira', 5)).toEqual('error')
        })
        it('Should throw an error if coin is not a string', () => {
          expect(vendingMachine.changeResupply(10, 10)).toEqual('error')
        })
        it('should throw an error if amount is not an integer', () => {
            expect(vendingMachine.changeResupply('Nickle', 'ten')).toEqual('error')
        })
    })
})