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
            expect(vendingMachine.inventoryRefill('Milk', 3)).toEqual('Not a valid product')
        })
        it('Should return the object of the item that has been refilled', () => {
            expect(vendingMachine.inventoryRefill('Galaxy', 10)).toEqual(
                {'count': 15,
                'name': 'Galaxy'
            })
        })
        it('Should throw an error if the item is not a string', () => {
            expect(vendingMachine.inventoryRefill(10, 3)).toEqual('Not a valid product')
        })
        it('Should throw an error if amount is not an integer', () => {
            expect(vendingMachine.inventoryRefill('Galaxy', 'two')).toEqual('Not a valid number')
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
          expect(vendingMachine.changeResupply('Lira', 5)).toEqual('Not a valid input')
        })
        it('Should throw an error if coin is not a string', () => {
          expect(vendingMachine.changeResupply(10, 10)).toEqual('Not a valid input')
        })
        it('should throw an error if amount is not an integer', () => {
            expect(vendingMachine.changeResupply('Nickle', 'ten')).toEqual('Not a valid input')
        })
    })
    //dispense and return
    describe('When consumer provides extra money', () => {
        it('Should dispense the smallest number of coins required to provide accurate change.', () => {
            expect(vendingMachine.dispense('Almond Nuts', 6.50)).toEqual({
                change: {
                    Quarter: 2
                },
                coinsExist: {
                    Nickel: 10,
                    Dime: 10,
                    Quarter: 8
                }
            })
        })
        it('Should throw an error if product choice does not exist', () => {
            expect(vendingMachine.dispense('Peanuts', 7)).toEqual('error')
        })
        it('Should throw an error if product choice is not type of string', () => {
            expect(vendingMachine.dispense(10, 7)).toEqual('error')
        })
        it('Should throw an error if amount of money given is not a positive integer', () => {
            expect(vendingMachine.dispense('Milk', 'five')).toEqual('error')
        })
    })

})