addLayer("o", {
    name: "oxygen", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A3B1BC",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "oxygen", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('c', 13)) mult = mult.times(upgradeEffect('c', 13))
        if (hasUpgrade('c', 14)) mult = mult.times(1e3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Oxygen I",
            description: "Double your point gain.",
            cost: new Decimal(5),
            
        },
        12: {
            title: "Oxygen II",
            description: "Triple your point gain.",
            cost: new Decimal(25),
        },
        13: {
            title: "Oxygen III",
            description: "Boost point gain by oxygen",
            cost: new Decimal(75),
            effect() {
                return player[this.layer].points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "Oxygen IV",
            description: "Boost point gain by point gain",
            cost: new Decimal(145),
            effect() {
                return player.points.add(1).pow(0.205)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            title: "Oxygen V",
            description: "x100 point gain",
            cost: new Decimal(500),
           
        },
        21: {
            title: "Oxygen VI",
            description: "x4 point gain",
            cost: new Decimal(5e3),
            unlocked(){return hasUpgrade("o",15)}
        },
        22: {
            title: "Oxygen VII",
            description: "x8 point gain",
            cost: new Decimal(7e3),
            unlocked(){return hasUpgrade("o",15)}
        },
        23: {
            title: "Oxygen VIII",
            description: "x16 point gain",
            cost: new Decimal(1e4),
            unlocked(){return hasUpgrade("o",15)}
        },
        24: {
            title: "Oxygen IX",
            description: "x24 point gain",
            cost: new Decimal(1e6),
            unlocked(){return hasUpgrade("o",15)}
        },
        25: {
            title: "Oxygen X",
            description: "Unlock the elements tab",
            cost: new Decimal(5e6),
            unlocked(){return hasUpgrade("o",15)}
        },
        31: {
            title: "Oxygen XI",
            description: "x100 points",
            cost: new Decimal(1e11),
            unlocked(){return hasUpgrade("e",13)}
        },
        32: {
            title: "Oxygen XII",
            description: "x100 points again.",
            cost: new Decimal(4e11),
            unlocked(){return hasUpgrade("e",13)}
        },
        33: {
            title: "Oxygen XIII",
            description: "x100 points the 3rd time",
            cost: new Decimal(3e15),
            unlocked(){return hasUpgrade("e",13)}
        },
        34: {
            title: "Oxygen XIV",
            description: "unlock the carbon layer",
            cost: new Decimal(1e17),
            unlocked(){return hasUpgrade("e",13)},
            branches: ["o",41]
        },
        41: {
            title: "Carbon Layers",
            description: "unlock carbon milestones",
            cost: new Decimal(1e55),
            unlocked(){return hasUpgrade("o",34)}
        },
        51: {
            title: "Oxygen I - I",
            description: "unlock nitrogen [W.I.P]",
            cost: new Decimal("1e999"),
            unlocked(){return hasUpgrade("o",34)},
            branches: ["o",34,31,32,33]
        },
    },
    passiveGeneration(){return hasUpgrade("e",14)},
    autoUpgrade(){return hasMilestone("c",0)}
}),
addLayer("c", {
    name: "carbon", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#2B2B2B",
    requires: new Decimal(1e17), // Can be a function that takes requirement increases into account
    resource: "carbon", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("o",34)},
    branches: ["o"],
    upgrades:{
        11: {
            title: "Carbon I",
            description: "Boost point gain based on oxygen even more",
            cost: new Decimal(2),
            effect() {
                return player.o.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "Carbon II",
            description: "Boost point gain based on carbon",
            cost: new Decimal(100),
            effect() {
                return player.c.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Carbon III",
            description: "Oxygen is boosted",
            cost: new Decimal(1e3),
            effect() {
                return player.points.add(1).pow(0.15)
            },
        },
        14: {
            title: "Carbon IV",
            description: "x1e3 oxygen",
            cost: new Decimal(2e8),
        },
    },
    tabFormat: {
        "Upgrades": {
            content: [
                "main-display",
                "prestige-button",
                "upgrades"
            ],
            
        },
        "Milestones": {
            content: [
                "main-display",
                "blank",
                "milestones"
            ],
            unlocked(){return hasUpgrade("o",41)}
        },
    },
    milestones: {
        0: {
            requirementDescription: "5e8 Carbon",
            effectDescription: "Get oxygen upgrades Automatically",
            done() { return player.c.points.gte(5e8) }
        },
        1: {
            requirementDescription: "2e10 Carbon",
            effectDescription: "Gain 100% carbon and unlock more element upgrades",
            done() { return player.c.points.gte(2e10) }
        }
        
    },
    passiveGeneration(){return hasMilestone("c",1) || hasUpgrade("e",15)},
})

addLayer("e", {
    name: "elements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#002DFF",
    requires: new Decimal(1e6), // Can be a function that takes requirement increases into account
    resource: "elements", // Name of prestige currency
    baseResource: "oxygen", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("o",25)},

    upgrades: {
        11: {
            title: "Hydrogen",
            description: "Boost point gain by oxygen",
            cost: new Decimal(2),
            effect() {
                return player.o.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "Helium",
            description: "Boost point gain by elements",
            cost: new Decimal(3),
            effect() {
                return player.e.points.add(1).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Lithium",
            description: "x1e3 point gain and unlock new oxygen upgrades",
            cost: new Decimal(4),
        },
        14: {
            title: "Beryllium",
            description: "Gain 100% oxygen",
            cost: new Decimal(7),
            unlocked(){return player.c.points.gte(1)}
        },
        15: {
            title: "Boron",
            description: "Gain 100% Carbon",
            cost: new Decimal(15),
            unlocked(){return hasMilestone("c",1)}
        },
    }
    

})

addLayer("ac", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "★", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFEA00",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "achievements", // Name of prestige currency
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
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    achievements: {
        11: {
            name: "1",
            tooltip: "Get 1 point",
            done(){return player.points.gte(1)},
            
        },
        12: {
            name: "2",
            tooltip: "Get 10 point",
            done(){return player.points.gte(10)}
        },
        13: {
            name: "3",
            tooltip: "Get 100 point",
            done(){return player.points.gte(100)}
        },
        14: {
            name: "4",
            tooltip: "Get 1e3 point",
            done(){return player.points.gte(1e3)}
        },
        15: {
            name: "5",
            tooltip: "Get 1e4 point",
            done(){return player.points.gte(1e4)}
        },
        16: {
            name: "6",
            tooltip: "Get 1e5 point",
            done(){return player.points.gte(1e5)}
        },
        21: {
            name: "7",
            tooltip: "Get 1 Oxygen",
            done(){return player.o.points.gte(1)}
        },
        22: {
            name: "8",
            tooltip: "Get 10 Oxygen",
            done(){return player.o.points.gte(10)}
        },
        23: {
            name: "8",
            tooltip: "Get 100 Oxygen",
            done(){return player.o.points.gte(100)}
        },
        24: {
            name: "9",
            tooltip: "Get 1e3 Oxygen",
            done(){return player.o.points.gte(1e3)}
        },
        25: {
            name: "10",
            tooltip: "Get 1e4 Oxygen",
            done(){return player.o.points.gte(1e4)}
        },
        26: {
            name: "11",
            tooltip: "Get 1e5 Oxygen",
            done(){return player.o.points.gte(1e5)}
        },
        31: {
            name: "12",
            tooltip: "Get 1e6 Oxygen",
            done(){return player.o.points.gte(1e6)}
        },
        32: {
            name: "13",
            tooltip: "Get 1e7 Oxygen",
            done(){return player.o.points.gte(1e7)}
        },
        33: {
            name: "14",
            tooltip: "Get 1e8 Oxygen",
            done(){return player.o.points.gte(1e8)}
        },
        34: {
            name: "15",
            tooltip: "Get 1e9 Oxygen",
            done(){return player.o.points.gte(1e9)}
        },
        35: {
            name: "16",
            tooltip: "Get 1e10 Oxygen",
            done(){return player.o.points.gte(1e10)}
        },
        36: {
            name: "17",
            tooltip: "Get 1e11 Oxygen",
            done(){return player.o.points.gte(1e11)}
        },
        41: {
            name: "18",
            tooltip: "Get 1 Element",
            done(){return player.e.points.gte(1)}
        },
        42: {
            name: "19",
            tooltip: "Get 2 Elements",
            done(){return player.e.points.gte(2)}
        },
        43: {
            name: "20",
            tooltip: "Get 3 Elements",
            done(){return player.e.points.gte(3)}
        },
        44: {
            name: "20",
            tooltip: "Get 4 Elements",
            done(){return player.e.points.gte(4)}
        },
        45: {
            name: "21",
            tooltip: "Get 5 Elements",
            done(){return player.e.points.gte(5)}
        },
        46: {
            name: "22",
            tooltip: "Get 6 Elements",
            done(){return player.e.points.gte(6)}
        },
        51: {
            name: "23",
            tooltip: "Get 1 Carbon",
            done(){return player.c.points.gte(1)},
            unlocked(){return player.c.points.gte(1)}
        },
        52: {
            name: "24",
            tooltip: "Get 2 Carbon",
            done(){return player.c.points.gte(2)},
            unlocked(){return player.c.points.gte(1)}
        },
        53: {
            name: "25",
            tooltip: "Get 4 Carbon",
            done(){return player.c.points.gte(4)},
            unlocked(){return player.c.points.gte(1)}
        },
        54: {
            name: "26",
            tooltip: "Get 8 Carbon",
            done(){return player.c.points.gte(8)},
            unlocked(){return player.c.points.gte(1)}
        },
        55: {
            name: "27",
            tooltip: "Get 16 Carbon",
            done(){return player.c.points.gte(16)},
            unlocked(){return player.c.points.gte(1)}
        },
        56: {
            name: "28",
            tooltip: "Get 64 Carbon",
            done(){return player.c.points.gte(64)},
            unlocked(){return player.c.points.gte(1)}
        },
        61: {
            name: "29",
            tooltip: "Get 1e3 Carbon",
            done(){return player.c.points.gte(1e3)},
            unlocked(){return player.c.points.gte(1)}
        },
        62: {
            name: "30",
            tooltip: "Get 1e4 Carbon",
            done(){return player.c.points.gte(1e4)},
            unlocked(){return player.c.points.gte(1)}
        },
        63: {
            name: "31",
            tooltip: "Get 1e5 Carbon",
            done(){return player.c.points.gte(1e5)},
            unlocked(){return player.c.points.gte(1)}
        },
        64: {
            name: "32",
            tooltip: "Get 1e6 Carbon",
            done(){return player.c.points.gte(1e6)},
            unlocked(){return player.c.points.gte(1)}
        },
        65: {
            name: "33",
            tooltip: "Get 1e7 Carbon",
            done(){return player.c.points.gte(1e7)},
            unlocked(){return player.c.points.gte(1)}
        },
        66: {
            name: "34",
            tooltip: "Get 1e8 Carbon",
            done(){return player.c.points.gte(1e8)},
            unlocked(){return player.c.points.gte(1)}
        },
        71: {
            name: "35",
            tooltip: "Get 1e9 Carbon",
            done(){return player.c.points.gte(1e9)},
            unlocked(){return player.c.points.gte(1)}
        },
        72: {
            name: "36",
            tooltip: "Get 1e10 Carbon",
            done(){return player.c.points.gte(1e10)},
            unlocked(){return player.c.points.gte(1)}
        },
        73: {
            name: "37",
            tooltip: "Get 1e11 Carbon",
            done(){return player.c.points.gte(1e11)},
            unlocked(){return player.c.points.gte(1)}
        },
        74: {
            name: "38",
            tooltip: "Get 1e12 Carbon",
            done(){return player.c.points.gte(1e12)},
            unlocked(){return player.c.points.gte(1)}
        },
        75: {
            name: "39",
            tooltip: "Get 1e13 Carbon",
            done(){return player.c.points.gte(1e13)},
            unlocked(){return player.c.points.gte(1)}
        },
        76: {
            name: "40",
            tooltip: "Get 1e14 Carbon",
            done(){return player.c.points.gte(1e14)},
            unlocked(){return player.c.points.gte(1)}
        },
        
    },
    tabFormat: {
        "achievements": {
            content: [
                "achievements"
            ],
            
        },
    
    }
})
