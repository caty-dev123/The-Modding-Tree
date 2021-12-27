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

        22: {
            title: "Brainstorm",
            description: "How would we get out of here?",
            cost: new Decimal(50),
            unlocked(){
                {return hasUpgrade("s", 21)}
            }
        },

        23: {
            title: "Traped",
            description: "You must find a solution to this!",
            cost: new Decimal(100),
            unlocked(){
                {return hasUpgrade("s", 22)}
            }
        },

        31: {
            title: "Collection",
            description: "You thought about collecting materials.",
            cost: new Decimal(3e3),
            unlocked(){
                {return hasMilestone("i", 2)}
            }
        },

        32: {
            title: "Fast collecter",
            description: "I should of thought of this.",
            cost: new Decimal(1e4),
            unlocked(){
                {return hasMilestone("i", 2)}
            }
        },

        33: {
            title: "The sand collection",
            description: "Never thought about sand",
            cost: new Decimal(1e5),
            unlocked(){
                {return hasMilestone("i", 2)}
            }
        },


        
    


},

passiveGeneration() {return hasUpgrade("s", 32)}

}),

addLayer("i", {
    name: "Ideas", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C8D184",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Ideas", // Name of prestige currency
    baseResource: "Survival", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for Ideas", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("s",23)},
branches: ["s"],

milestones: {
    0: {
        requirementDescription: "1 Idea",
        effectDescription: "Boost point gain by alot",
        done() { return player.i.points.gte(1) }
    },

    1: {
        requirementDescription: "5 Ideas",
        effectDescription: "Ideas reset nothing",
        done() { return player.i.points.gte(5) }
    },

    2: {
        requirementDescription: "250 Ideas",
        effectDescription: "Get more survival upgrades",
        done() { return player.i.points.gte(250) }
    },

    3: {
        requirementDescription: "1e3 Ideas",
        effectDescription: "Unlock the hardest challenges you can imagine!",
        done() { return player.i.points.gte(1e3) }
    },

    4: {
        requirementDescription: "3e4 Ideas",
        effectDescription: "You thought of something",
        done() { return player.i.points.gte(3e4) }
    }
    
},

challenges: {
    11: {
        name: "Idea collections",
        challengeDescription: "This is going to be hard. so just get 1e6 survival",
        canComplete: function() {return player.s.points.gte(1e6)},
        unlocked(){
            {return hasMilestone("i", 3)}
        }
        
    },

    12: {
        name: "Brainstorming alot",
        challengeDescription: "Get 1e7 survival",
        canComplete: function() {return player.s.points.gte(1e7)},
        unlocked(){
            {return hasMilestone("i", 3)}
        }
        
    },

    13: {
        name: "The final",
        challengeDescription: "Get 1e9 survival",
        canComplete: function() {return player.s.points.gte(1e9)},
        unlocked(){
            {return hasMilestone("i", 3)}
        }
        
    },
    
},

resetsNothing() {return hasMilestone("i", 1)}

})

addLayer("c", {
    name: "Crafting", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A10000",
    requires: new Decimal(1e4), // Can be a function that takes requirement increases into account
    resource: "Crafting", // Name of prestige currency
    baseResource: "Survival", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Crafting", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("i",4)},
branches: ["s"],

upgrades: {
    11: {
        title: "Blueprint",
        description: "Time to blueprint a home hmmm... I need leaves and wood.",
        cost: new Decimal(5),
        
    }, 

    12: {
        title: "Tree cutting",
        description: "*cuts trees* *gathers* *does stuff*.",
        cost: new Decimal(15),
        
    }, 
}

})