class VendingMachine {
    constructor(inventory) {
        this.inventory = [
        {
          name: "Galaxy",
          count: 5,
          cost: 1.80
        },
        {
          name: "Orange Juice",
          count: 6,
          cost: 2.50
        },
        {
          name: "Almond Nuts",
          count: 5,
          cost: 6
        },
        {
          name: "Coca Cola",
          count: 0,
          cost: 3.25
        }
      ];

        this.change = [
            {
            name: "nickel",
            count: 10,
            value: 0.05
            },
            {
            name: "dime",
            count: 10,
            value: 0.1
            },
            {
            name: "quarter",
            count: 10,
            value: 0.25
            }
        ];
    }
    getItems() {
        let i = 0;
        let inventory = {};
        for (i = 0; i < this.inventory.length; i++) {
            let name = this.inventory[i].name;
            inventory[name] = { count: this.inventory[i].count };
        }
        // console.log(inventory)
        return inventory;
    }
    

}

module.exports = VendingMachine;
