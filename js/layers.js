addLayer("cr", {
    name: "compact room", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CR", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C6C6C6",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Compact air", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
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
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
        11: {
            title: "The waiting game",
            description: "You gather the compact air around you and just keep compressing the comapct air until you get results",
            cost: new Decimal(5)
            
        },

        12: {
            title: "Compressed compression",
            description: "You gather more compact air to make more compact air",
            cost: new Decimal(25),
            unlocked(){
                {return hasUpgrade("cr",11)}
            }
            
        },

        13: {
            title: "Energy",
            description: "You have energy now!",
            cost: new Decimal(250),
            unlocked(){
                {return hasUpgrade("cmp",13)}
            }
            
        },

        21: {
            title: "Water droplets",
            description: "You can feel the water droplets now",
            cost: new Decimal(80),
            unlocked(){
                {return hasUpgrade("cmp",11)}
            }
            
        },

        22: {
            title: "Water source",
            description: "You now have a water source so your next step is to get things",
            cost: new Decimal(125),
            unlocked(){
                {return hasUpgrade("cmp",12)}
            }
            
        },

        23: {
            title: "Material source",
            description: "With this energy you can punch the wall then get materials.",
            cost: new Decimal(2e3),
            unlocked(){
                {return hasUpgrade("cr",13)}
            }
            
        },

        31: {
            title: "Dust",
            description: "By punching the wall you got dust horray.",
            cost: new Decimal(3e3),
            unlocked(){
                {return hasMilestone("mt",0)}
            }
            
        },

        32: {
            title: "Granite, Diorite, and stone pebbles",
            description: "This time something useful!",
            cost: new Decimal(1e5),
            unlocked(){
                {return hasUpgrade("cr",31)}
            }
            
        },

        33: {
            title: "Stone pebble compression",
            description: "Air, pebbles whats next?",
            cost: new Decimal(5e5),
            unlocked(){
                {return hasUpgrade("cr",32)}
            }
            
        },
    },
    passiveGeneration() {return hasUpgrade("mt",12)}
}),

addLayer("cmp", {
    name: "Compression", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CmP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D2E4F4",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Compressions", // Name of prestige currency
    baseResource: "Compact air", // Name of resource prestige is based on
    baseAmount() {return player.cr.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("cr",11)},
    branches: ["cr"],

    upgrades: {
        11: {
            title: "Even more compression",
            description: "With this much compression you might have a new water source",
            cost: new Decimal(1),
            
        },

        12: {
            title: "Dense compressions",
            description: "It is time to compress even more.",
            cost: new Decimal(2),
            unlocked() {
                {return hasUpgrade("cmp",11)}
            }
            
        },

        13: {
            title: "Massive compressions",
            description: "You now have a better water source",
            cost: new Decimal(3),
            unlocked() {
                {return hasUpgrade("cmp",12)}
            }
            
        },

        14: {
            title: "Lepton discovery",
            description: "You can reach leptons easier now!",
            cost: new Decimal(8),
            unlocked() {
                {return hasUpgrade("lp",12)}
            }
            
        },

        21: {
            title: "Compression 2.0",
            description: "More and more",
            cost: new Decimal(4),
            unlocked() {
                {return hasMilestone("mt",0)}
            }
            
        },

        22: {
            title: "Additional compression",
            description: "Compression is more effective",
            cost: new Decimal(5),
            unlocked() {
                {return hasMilestone("mt",1)}
            }
            
        },

        23: {
            title: "True compression",
            description: "COMPRESSION TO THE MAX",
            cost: new Decimal(6),
            unlocked() {
                {return hasAchievement("al",11)}
            }
            
        },

        24: {
            title: "Quark discovery",
            description: "You can go to quark easier now!",
            cost: new Decimal(8),
            unlocked() {
                {return hasUpgrade("q",14)}
            }
            
        },

       
        
    },
    resetsNothing() {return hasMilestone("mt",1)}

}),

addLayer("q", {
    name: "quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
    resource: "Quarks", // Name of prestige currency
    baseResource: "Compact air", // Name of resource prestige is based on
    baseAmount() {return player.cr.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("cr",23)},
    branches: ["cr"],

    upgrades: {
        11: {
            title: "Quantum reality",
            description: "How many more must we compress?",
            cost: new Decimal(1),
            
        },

        12: {
            title: "Quantum area",
            description: "Now compression is going further",
            cost: new Decimal(2),
            
        },

        13: {
            title: "Quantum speed",
            description: "Add more speed",
            cost: new Decimal(9),
            
        },

        14: {
            title: "Leptons",
            description: "Unlock your favorite buddy leptons!",
            cost: new Decimal(14),
            
        },

        15: {
            title: "Quark power",
            description: "The quark is more powerful",
            cost: new Decimal(30),
            
        },
    },

    resetsNothing() {return hasUpgrade("q",12)},
    autoPrestige() {return hasUpgrade("lp",12)}

}),

addLayer("lp", {
    name: "Leptons", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Lp", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFB00",
    requires: new Decimal(1e14), // Can be a function that takes requirement increases into account
    resource: "Leptons", // Name of prestige currency
    baseResource: "Compact air", // Name of resource prestige is based on
    baseAmount() {return player.cr.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("q",14)},
    branches: ["cr"],

upgrades: {
    11: {
        title: "Stable leptons",
        description: "Make the leptons stable",
        cost: new Decimal(1),
        
    },

    12: {
        title: "Lepton field",
        description: "The lepton field is stable because of you.",
        cost: new Decimal(3),
        
    },
},
resetsNothing() {return hasUpgrade("lp",11)}
})

addLayer("mt", {
    name: "materials", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#001670",
    requires: new Decimal(3e3), // Can be a function that takes requirement increases into account
    resource: "Materials", // Name of prestige currency
    baseResource: "Compact air", // Name of resource prestige is based on
    baseAmount() {return player.cr.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("cr",23)},
    branches: ["cr", "cmp", "q", "lp"],

    milestones: {
        0: {
            requirementDescription: "1 total material",
            effectDescription: "Unlock more Compact air and CMP upgrades and point gain is boosted",
            done() { return player.mt.points.gte(1) }
        },

        1: {
            requirementDescription: "10 total material",
            effectDescription: "CMP resets nothing and unlock MT upgrades",
            done() { return player.mt.points.gte(10) }
        }
        
    },

    upgrades: {
        11: {
            title: "Stone",
            description: "With stone you can make a mini stone pickaxe to start mining the wall",
            cost: new Decimal(20),
            unlocked() {
                {return hasMilestone("mt",1)}
            }
            
        }, 

         12: {
            title: "The speed of light",
            description: "Now with this much compression you can get more compression over time!",
            cost: new Decimal(50),
            unlocked() {
                {return hasUpgrade("mt",11)}
            }
            
        }, 

        13: {
            title: "Quantum collapse",
            description: "You compressed too much now you will made a quark.",
            cost: new Decimal(50),
            unlocked() {
                {return hasUpgrade("mt",12)}
            }
            
        }, 
    }
}),

addLayer("al", {
    name: "Mini layer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#EFFF00",
  
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("mt",13)},
    achievements: {
        11: {
            name: "5 cmp; reward is new compression ugprade",
            description: "A total of 5 cmp",
            done() {return player.cmp.points.gte(5)}
        },

        12: {
            name: "1 total quark",
            done() {return player.q.points.gte(1)}
        },

        13: {
            name: "Get a total of 10 quarks",
            done() {return player.q.points.gte(10)}
        },

        14: {
            name: "Get a total of 1 lepton",
            done() {return player.lp.points.gte(1)}
        },

        15: {
            name: "Get a total of 3 leptons",
            done() {return player.lp.points.gte(3)}
        },

        16: {
            name: "Get a total of 20 quarks",
            done() {return player.q.points.gte(20)}
        },

        17: {
            name: "Get a total of 5 leptons",
            done() {return player.lp.points.gte(5)}
        },
        
    },
    tabFormat: [
        "upgrades",
        "achievements"
    ]

})

