addLayer("s", {
    name: "Survival", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#7AC82A",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Survival", // Name of prestige currency
    baseResource: "skill", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Survival", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    

upgrades: {


        11: {
            title: "Panic",
            description: "You don't know what to do so you panic as the normal way.",
            cost: new Decimal(1),
            
        },

        12: {
            title: "Calming down",
            description: "You are calming down now so you thought of something new!",
            cost: new Decimal(5),
            
        },

        13: {
            title: "Plan ahead",
            description: "You have to plan ahead!",
            cost: new Decimal(10),
            
        },

        21: {
            title: "Calmness",
            description: "Peace.",
            cost: new Decimal(35),
            unlocked(){
                {return hasUpgrade("s", 13)}
            }
    
            
        },

        
    


},



})


