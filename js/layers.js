addLayer("b", {
    branches: [ "s"],
    name: "Basics", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Basics", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('s', 11)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for Basics", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

   
    

    upgrades: {
        11: {
            title: "Basic",
            description: "This upgrade doubles your points so you can progress!",
            cost: new Decimal(1),
            
            
        },
        12: {
            title: "Basically",
            description: "This upgrade TRIPLES! your points so you can progress!",
            cost: new Decimal(5),
            unlocked() {
                return hasUpgrade("b", 11)
            }
            
            
        },

        13: {
            title: "Basic Speed",
            description: "More SPEED!",
            cost: new Decimal(10),
            unlocked() {
                return hasUpgrade("b", 11)
            }
            
            
        },
       
        14: {
            title: "Slow Steps",
            description: "Maybe you need a little bit of a bigger boost :D",
            cost: new Decimal(50),
            unlocked() {
                return hasUpgrade("b", 13)

            }
                 
        },

        15: {
            title: "Schooling",
            description: "Nice!",
            cost: new Decimal(200),
            unlocked() {
                return hasUpgrade("b", 14)

            }
                 
        },
    
        
    }
    

})



addLayer("s", {
    
    name: "Schools", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#1F85DE",
    requires: new Decimal(200), // Can be a function that takes requirement increases into account
    resource: "Schools", // Name of prestige currency
    baseResource: "Basics", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "s: Reset for Schools", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    layerShown() {
        return hasUpgrade('b', 15) || player.s.unlocked
    },
    
    upgrades: {
        11: {
            title: "Schooling 2.0",
            description: "We need more Basics!",
            cost: new Decimal(3),
            unlocked() {
                return hasUpgrade("b", 15)
            }
            
            
        },
    }
})