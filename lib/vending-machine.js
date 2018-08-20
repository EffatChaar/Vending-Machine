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

    inventoryRefill(itemName, amount) {
        if (typeof itemName !== 'string' || this.inventory.find(item => item.name === itemName) === undefined) {
            return 'error'
        }
        if (typeof amount !== 'number' || amount < 1) {
            return 'error'
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

    changeResupply(coinName, amount) {
        if (typeof coinName !== 'string' || this.change.find(coin => coin.name === coinName) === undefined) {
          return 'error'
        }
        if (typeof amount !== 'number' || amount < 1) {
          return 'error'
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
}

module.exports = VendingMachine;
