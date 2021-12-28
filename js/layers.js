addLayer("sp", {
    name: "small prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Small prestige", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Small upgrade",
            description: "Make point gain more powerful",
            cost: new Decimal(3),
        },

        12: {
            title: "Small prestiges",
            description: "Double your point gain",
            cost: new Decimal(10),
        },

        13: {
            title: "Normaly compact",
            description: "Even more point gain",
            cost: new Decimal(500),
            unlocked() {
                {return  hasUpgrade("p",12)}
            }
        },

        21: {
            title: "Compact presitges",
            description: "Double your point gain again",
            cost: new Decimal(25),
        },

        22: {
            title: "A little bit bigger",
            description: "Unlock a new layer",
            cost: new Decimal(30),
        },

        23: {
            title: "Even more bit big",
            description: "Still compact but fast",
            cost: new Decimal(2.5e3),
            unlocked() {
                {return hasUpgrade("p",12)}
            }
        },

        31: {
            title: "So much more bigger",
            description: "This is just too compact",
            cost: new Decimal(1e8),
            unlocked() {
                {return hasUpgrade("bp",21)}
            }
        },

        32: {
            title: "CMPCT32",
            description: "This machine is so power that it generates too much points",
            cost: new Decimal(1e10),
            unlocked() {
                {return hasChallenge("bp",11)}
            }
        },

        33: {
            title: "CMPCT33 v2",
            description: "You already know it",
            cost: new Decimal(2e11),
            unlocked() {
                {return hasChallenge("bp",11)}
            }
        },
    },
    passiveGeneration() {return hasUpgrade("gp",11)}
}),

addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C2FEFF",
    requires: new Decimal(30), // Can be a function that takes requirement increases into account
    resource: "Prestige", // Name of prestige currency
    baseResource: "small presitge", // Name of resource prestige is based on
    baseAmount() {return player.sp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.6, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("sp",22)},
    branches: ["sp"],
upgrades: {
    11: {
        title: "Normal upgade",
        description: "Faster point gain",
        cost: new Decimal(1),
    },

    12: {
        title: "Normal prestige",
        description: "More and more points over time",
        cost: new Decimal(3),
    },

    13: {
        title: "Bigger even more",
        description: "Even more points",
        cost: new Decimal(5e4),
    },


    21: {
        title: "More prestige",
        description: "Point gain is so much more faster",
        cost: new Decimal(25),
    },

    22: {
        title: "Even larger",
        description: "Unlock a new layer",
        cost: new Decimal(100),
    },

    23: {
        title: "Super big",
        description: "The point gain is boosted super big",
        cost: new Decimal(5e5),
    },

    31: {
        title: "Powerful CMPTMch SG31",
        description: "Point gain boosted A MANY MANY WHOLE LOT",
        cost: new Decimal(5e11),
        unlocked() {
            {return hasUpgrade("gp",12)}
        }
    },

    32: {
        title: "The final mechine",
        description: "Point gain boosted even more",
        cost: new Decimal(1e15),
        unlocked() {
            {return hasUpgrade("p",31)}
        }
    },

    33: {
        title: "Powerful machine",
        description: "Point gain boosted even more again...",
        cost: new Decimal(2e16),
        unlocked() {
            {return hasUpgrade("p",32)}
        }
    },
},
resetsNothing() {return hasUpgrade("bp",11)},
passiveGeneration() {return hasUpgrade("gp",13)}
}),

addLayer("bp", {
    name: "big prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#76FDFF",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Big prestige", // Name of prestige currency
    baseResource: "prestige", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("p",22)},
    branches: ["p", "sp"],

    upgrades: {
        11: {
            title: "To the compact",
            description: "Prestige resets nothing",
            cost: new Decimal(1),
        },

        12: {
            title: "Big prestiges",
            description: "Point gain is boosted big",
            cost: new Decimal(10),
        },

        21: {
            title: "Challenging prestiges",
            description: "Unlock new fetuares",
            cost: new Decimal(100),
        },

        22: {
            title: "The biggest",
            description: "Unlock a new layer",
            cost: new Decimal(1e3),
            unlocked() {
                {return hasChallenge("bp",11)}
            }
        },

       
    },
    challenges: {
        11: {
            name: "Compact space",
            challengeDescription: "Get 1e8 small prestiges Reward: unlock more things",
            canComplete: function() {return player.sp.points.gte(1e8)},
            
        },

        12: {
            name: "Compact'd space",
            challengeDescription: "Get 1e12 small prestiges Reward: more point gain",
            canComplete: function() {return player.sp.points.gte(1e12)},
            
        },

        13: {
            name: "Compact'ed'd space",
            challengeDescription: "Get 1e22 small prestiges Reward: more point gain",
            canComplete: function() {return player.sp.points.gte(1e22)},
            
        },
        
    },
    resetsNothing() {return hasMilestone("mp",1)},
}),

addLayer("gp", {
    name: "giga prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "GP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FBFF",
    requires: new Decimal(1e3), // Can be a function that takes requirement increases into account
    resource: "Giga prestige", // Name of prestige currency
    baseResource: "Big prestige", // Name of resource prestige is based on
    baseAmount() {return player.bp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.45, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("bp",22)},
    branches: ["p", "sp", "bp"],

upgrades: {
    11: {
        title: "The ultimate compact machine",
        description: "Gain 100% sp and unlock a new challenge",
        cost: new Decimal(1),
    },

    12: {
        title: "CMPTMchn SR12",
        description: "Unlock more things",
        cost: new Decimal(3),
    },

    13: {
        title: "Discovery A-123Xc55%#adKL",
        description: "Gain 100% presitge",
        cost: new Decimal(10),
    },

    14: {
        title: "Discovery AA-BB32",
        description: "Unlock a new layer",
        cost: new Decimal(150),
    },

    15: {
        title: "Discovery LLkU88!!",
        description: "Point gain even more",
        cost: new Decimal(3e3),
    },
}

}),

addLayer("mp", {
    name: "meta prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#76FDFF",
    requires: new Decimal(150), // Can be a function that takes requirement increases into account
    resource: "Meta prestige", // Name of prestige currency
    baseResource: "giga prestige", // Name of resource prestige is based on
    baseAmount() {return player.gp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("gp",14)},
    branches: ["p", "sp", "gp", "bp"],

    milestones: {
        1: {
            requirementDescription: "3 Meta prestiges",
            effectDescription: "Point gain is boosted alot and bp resets nothing",
            done() { return player.mp.points.gte(3) }
        },

        2: {
            requirementDescription: "15 Meta prestiges",
            effectDescription: "W.I.P",
            done() { return player.mp.points.gte(15) }
        }
        
    }

})
