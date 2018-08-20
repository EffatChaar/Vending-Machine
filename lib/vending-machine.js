class VendingMachine {
    constructor(inventory) {
        this.inventory = [
        {
          name: 'Galaxy',
          count: 5,
          cost: 1.80
        },
        {
          name: 'Orange Juice',
          count: 6,
          cost: 2.50
        },
        {
          name: 'Almond Nuts',
          count: 5,
          cost: 6
        },
        {
          name: 'Coca Cola',
          count: 0,
          cost: 3.25
        }
      ];

        this.change = [
            {
            name: 'Nickel',
            count: 10,
            value: 0.05
            },
            {
            name: 'Dime',
            count: 10,
            value: 0.1
            },
            {
            name: 'Quarter',
            count: 10,
            value: 0.25
            }
        ];
    }
    getItems() {
        var inventory = {}
        var i = 0
        for (i = 0; i < this.inventory.length; i++) {
            var name = this.inventory[i].name;
            inventory[name] = { count: this.inventory[i].count };
        }
        return inventory;
    }
    //refill
    inventoryRefill(itemName, amount) {
        if (typeof itemName !== 'string' || this.inventory.find(item => item.name === itemName) === undefined) {
            return 'Not a valid product'
        }
        if (typeof amount !== 'number' || amount < 1) {
            return 'Not a valid number'
        }
        var amountCur = 0
        var output = this.inventory.find(item => item.name === itemName)
        amountCur = output.count
        output.count = amountCur + amount

        var itemRefill = {}
        itemRefill.name = output.name
        itemRefill.count = output.count

        // console.log(itemRefill)
        return itemRefill
    }
    //resupply
    changeResupply(coinName, amount) {
        if (typeof coinName !== 'string' || this.change.find(coin => coin.name === coinName) === undefined) {
          return 'Not a valid input'
        }
        if (typeof amount !== 'number' || amount < 1) {
          return 'Not a valid number'
        }
        var amountCur = 0
        var output = this.change.find(coin => coin.name === coinName)
        amountCur = output.count
        output.count = amountCur + amount

        var coinRefill = {}
        coinRefill.name = output.name
        coinRefill.count = output.count

        return coinRefill
    }
    //dispense and return
    dispense(product, money) {
        var purchase = {
            change: undefined,
            coinsExist: {}
        }
        if (typeof product !== 'string') {
          return 'error'
        }
        if (
          this.inventory.find(item => item.name === product) === undefined
        ) {
          return 'error'
        }
        if (typeof money !== 'number') {
          return 'error'
        }
        if (money === item.cost) {
          var i = 0
          for (i = 0; i < this.change.length; i++) {
            var coins = this.change[i]
            purchase.coinsExist[coins.name] = coins.count
          }
          purchase.change = null
    
          return purchase
        }
        if (money > item.cost) {
          var returnedChange = money - item.cost
          returnedChange = (Math.round(returnedChange * 20) / 20).toFixed(2)
          this.change.reduce((acc, cur) => {
          var coinsEntered = 0
    
          while (returnedChange >= cur.value && cur.count > 0) {
            coinsEntered++
            cur.count--
            returnedChange = returnedChange - cur.value
            returnedChange = (Math.round(returnedChange * 20) / 20).toFixed(2)
            }
            if (coinsEntered > 0) {
              acc[cur.name] = coinsEntered
              coinsEntered = 0
            }
            purchase.change = acc
            return acc
          }, {})
    
          if (returnedChange > 0) {
            return 'error'
          }
          var i = 0
          for (i = 0; i < this.change.length; i++) {
            var coins = this.change[i]
            purchase.coinsExist[coins.name] = coins.count
          }  
          purchase.coinsExist
    
          return purchase
        }
    }
    
}

module.exports = VendingMachine;
