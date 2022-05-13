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
        if (hasUpgrade('c', 25)) mult = mult.times(1e4)
        if (hasUpgrade('n', 13)) mult = mult.times(upgradeEffect('n', 13))
        if (hasUpgrade('n', 23)) mult = mult.times(10)
        if (hasUpgrade('t', 21)) mult = mult.times(upgradeEffect('t', 21))
        if (hasUpgrade('p', 12)) mult = mult.times(upgradeEffect('p', 12))
        if (hasUpgrade('p', 25)) mult = mult.times(upgradeEffect('p', 25))
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
            cost: new Decimal(50),
            effect() {
                return player[this.layer].points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "Oxygen IV",
            description: "Boost point gain by point gain",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(0.205)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            title: "Oxygen V",
            description: "x100 point gain",
            cost: new Decimal(230),
           
        },
        21: {
            title: "Oxygen VI",
            description: "x4 point gain",
            cost: new Decimal(3e3),
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
            cost: new Decimal(2e15),
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
            title: "Nitrogen Power",
            description: "unlock nitrogen",
            cost: new Decimal(1e94),
            unlocked(){return hasUpgrade("o",34)},
            branches: ["o",34]
        },
        61: {
            title: "Oxygen I - I",
            description: "Unlock Medals",
            cost: new Decimal(2e239),
            unlocked(){return hasUpgrade("o",51)},
            branches: ["o",34]
        },
        71: {
            title: "Oxygen II - I",
            description: "Unlock [w.i.p]",
            cost: new Decimal("1e9999"),
            unlocked(){return hasUpgrade("o",51)},
            branches: ["o",34]
        },
    },
    passiveGeneration(){return hasUpgrade("e",14)},
    autoUpgrade(){return hasMilestone("c",0)}
}),
addLayer("p", {
    name: "phosphorus", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#E8A500",
    requires: new Decimal("1e297"), // Can be a function that takes requirement increases into account
    resource: "phosphorus", // Name of prestige currency
    baseResource: "oxygen", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("t",71)},
    branches: ["o", "n"],
    tabFormat: {
        "Upgrades": {
            content: [
                "main-display",
                "blank",
                "upgrades"
            ],
            
        },
    },
    passiveGeneration(){return true},
    upgrades: {
        11: {
            title: "Phosphorus I",
            description: "Phosphorus boosts point gain",
            cost: new Decimal(500),
            effect() {
                return player.p.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "Phosphorus II",
            description: "Phosphorus boosts oxygen gain",
            cost: new Decimal(1.2e3),
            effect() {
                return player.p.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Phosphorus III",
            description: "Phosphorus boosts carbon gain",
            cost: new Decimal(1.3e4),
            effect() {
                return player.p.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "Phosphorus IV",
            description: "Phosphorus boosts nitrogen gain",
            cost: new Decimal(1e5),
            effect() {
                return player.p.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            title: "Phosphorus V",
            description: "Phosphorus boosts token gain",
            cost: new Decimal(1e6),
            effect() {
                return player.p.points.add(1).pow(0.01)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            title: "Phosphorus VI",
            description: "Carbon resets nothing",
            cost: new Decimal(2e7),
            unlocked(){return hasUpgrade("p",15)},
        },
        22: {
            title: "Phosphorus VII",
            description: "Elements resets nothing",
            cost: new Decimal(1e8),
            unlocked(){return hasUpgrade("p",15)},
        },
        23: {
            title: "Phosphorus VIII",
            description: "Nitrogen resets nothing",
            cost: new Decimal(2e9),
            unlocked(){return hasUpgrade("p",15)},
        },
        24: {
            title: "Phosphorus IX",
            description: "Point gain is boosted",
            cost: new Decimal(2e10),
            unlocked(){return hasUpgrade("p",15)},
            effect() {
                return player.p.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        25: {
            title: "Phosphorus X",
            description: "Oxygen gain is boosted by phosphorus",
            cost: new Decimal(2e11),
            unlocked(){return hasUpgrade("p",15)},
            effect() {
                return player.p.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        31: {
            title: "Phosphorus XI",
            description: "Tokens are boosted ",
            cost: new Decimal(1e38),
            unlocked(){return hasUpgrade("p",25)},
            effect() {
                return player.p.points.add(1).pow(0.01)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        32: {
            title: "Phosphorus XII",
            description: "This upgrade does nothing :)",
            cost: new Decimal(1e45),
            unlocked(){return hasUpgrade("p",15)},
        },
        33: {
            title: "Phosphorus XIII",
            description: "This upgrade does nothing as well :)",
            cost: new Decimal(1e60),
            unlocked(){return hasUpgrade("p",15)},
        },
    }
})

addLayer("n", {
    name: "nitrogen", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#29ABCA",
    requires: new Decimal(1e94), // Can be a function that takes requirement increases into account
    resource: "nitrogen", // Name of prestige currency
    baseResource: "oxygen", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.05, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('n', 21)) mult = mult.times(10)
        if (hasUpgrade('n', 22)) mult = mult.times(2)
        if (hasUpgrade('m', 14)) mult = mult.times(upgradeEffect('m', 14))
        if (hasUpgrade('p', 14)) mult = mult.times(upgradeEffect('p', 14))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("o",51)},
    branches: ["o", "c"],

    tabFormat: {
        "Upgrades": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "upgrades"
            ],
            
        },
        "Challenges": {
            content: [
                "main-display",
                "blank",
                "challenges"
            ],
            unlocked(){return hasUpgrade("n",11)}
            
        },
    },
upgrades: {
    11: {
        title: "Nitrogen I",
        description: "Unlock Nitrogen Challenges",
        cost: new Decimal(5),
    },
    12: {
        title: "Nitrogen II",
        description: "Nitrogen boosts points",
        cost: new Decimal(15),
        unlocked(){return hasChallenge("n",11)},
        effect() {
            return player[this.layer].points.add(1).pow(0.52)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked(){return hasChallenge("n",11)}
    },
    13: {
        title: "Nitrogen III",
        description: "Nitrogen boosts oxygen",
        cost: new Decimal(10),
        effect() {
            return player.n.points.add(1).pow(0.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked(){return hasChallenge("n",11)}
    },
    14: {
        title: "Nitrogen IV",
        description: "Nitrogen boosts carbon",
        cost: new Decimal(20),
        effect() {
            return player.n.points.add(1).pow(0.6)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked(){return hasChallenge("n",11)}
    },
    15: {
        title: "Nitrogen V",
        description: "Unlock more carbon upgrades",
        cost: new Decimal(30),
        unlocked(){return hasChallenge("n",11)}
    },
    21: {
        title: "Nitrogen VI",
        description: "x10 Nitrogen",
        cost: new Decimal(5e5),
        unlocked(){return hasUpgrade("c",35)}
    },
    22: {
        title: "Nitrogen VII",
        description: "x2 Nitrogen",
        cost: new Decimal(3e7),
        unlocked(){return hasUpgrade("c",35)}
    },
    23: {
        title: "Nitrogen VIII",
        description: "x10 Oxygen",
        cost: new Decimal(5e7),
        unlocked(){return hasUpgrade("c",35)}
    },
},

challenges: {
    11: {
        name: "Nitrogen Struggle",
        challengeDescription: "",
        goalDescription: "Get 1e98 oxygen",
        rewardDescription: "Unlock more nitrogen upgrades",
        marked(){return hasChallenge("n", 11)},
        canComplete: function() {return player.o.points.gte(1e98)},
    },
    
},
passiveGeneration(){return hasMilestone("m",0)},
passiveGeneration(){return hasUpgrade("t",52)},
resetsNothing(){return hasUpgrade("t",23)},

}),
addLayer("m", {
    name: "medals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "◆", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#AA00FF",
    requires: new Decimal(1e242), // Can be a function that takes requirement increases into account
    resource: "medals", // Name of prestige currency
    baseResource: "oxygen", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('m', 11)) mult = mult.times(upgradeEffect('m', 11))
        if (hasUpgrade('m', 21)) mult = mult.times(upgradeEffect('m', 21))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("o",61) && ! hasUpgrade("t",51) },

    tabFormat: {
        "Awards": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "blank",
                "blank",
                "upgrades"
            ],
            
        },
        "Rewards": {
            content: [
                "main-display",
                "blank",
                "milestones"
            ],
            unlocked(){return hasUpgrade("m",21)}
        },
    },
    upgrades: {
        11: {
            title: "Awards",
            description: "Medals boosts points",
            cost: new Decimal(1),
            effect() {
                return player.m.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "Awarding",
            description: "Medals boosts oxygen",
            cost: new Decimal(2),
            effect() {
                return player.m.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Awarded",
            description: "Medals boosts carbon",
            cost: new Decimal(4),
            effect() {
                return player.m.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
            title: "Awarded Awards",
            description: "Medals boosts nitrogen",
            cost: new Decimal(8),
            effect() {
                return player.m.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        15: {
            title: "Awarded Awarding",
            description: "Automatically get medals",
            cost: new Decimal(32),
        },
        21: {
            title: "Awarders",
            description: "Unlock rewards",
            cost: new Decimal(85),
            unlocked(){return hasUpgrade("m",15)}
        },
        22: {
            title: "Awarded Awarders",
            description: "x1e3 point gain",
            cost: new Decimal(21),
            unlocked(){return hasUpgrade("m",15)}
        },
        23: {
            title: "Awardless",
            description: "Unlock the tokens",
            cost: new Decimal(0),
            unlocked(){return hasUpgrade("m",22)}
        },
    },
    milestones: {
        0: {
            requirementDescription: "100 Medals",
            effectDescription: "Gain 100% Nitrogen",
            done() { return player.m.points.gte(100) }
        },  
    },
    autoPrestige(){return hasUpgrade("m",15)}
}),

addLayer("t", {
    name: "tokens", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "❖", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FF81",
    requires: new Decimal(1e250), // Can be a function that takes requirement increases into account
    resource: "tokens", // Name of prestige currency
    baseResource: "oxygen", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 15)) mult = mult.times(upgradeEffect('p', 15))
        if (hasUpgrade('p', 31)) mult = mult.times(upgradeEffect('p', 31))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("m",23)},

    upgrades: {
        11: {
            title: "The Start of the tree",
            description: "Tokens boosts points",
            cost: new Decimal(1.2e3),
            effect() {
                return player.t.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            title: "Oxygen Upgrader",
            description: "Tokens boosts oxygen",
            cost: new Decimal(1.2e3),
            unlocked(){return hasUpgrade("t",11)},
            effect() {
                return player.t.points.add(1).pow(0.25)
            },
        },
        22: {
            title: "Carbon Upgrader",
            description: "Tokens boosts carbon",
            cost: new Decimal(3e3),
            unlocked(){return hasUpgrade("t",11)},
            effect() {
                return player.t.points.add(1).pow(0.25)
            },
        },
        31: {
            title: "Nitrogen Upgrader",
            description: "Tokens boosts nitrogen",
            cost: new Decimal(1e4),
            unlocked(){return hasUpgrade("t",21)},
            effect() {
                return player.t.points.add(1).pow(0.25)
            },
        },
        32: {
            title: "Token Gainer",
            description: "Gain 100% Tokens",
            cost: new Decimal(1e4),
            unlocked(){return hasUpgrade("t",22)},
        },
        41: {
            title: "Point master I",
            description: "Tokens boosts point gain",
            cost: new Decimal(1e4),
            unlocked(){return hasUpgrade("t",32,31)},
            effect() {
                return player.t.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        51: {
            title: "No more awards",
            description: "Make the medals layer become hidden",
            cost: new Decimal(4e4),
            unlocked(){return hasUpgrade("t",41)},
        },
        52: {
            title: "Nitrogen Gainer",
            description: "Gain 100% nitrogen",
            cost: new Decimal(3e4),
            unlocked(){return hasUpgrade("t",41)},
        },
        53: {
            title: "Point master II",
            description: "Tokens boosts point gain",
            cost: new Decimal(5e4),
            unlocked(){return hasUpgrade("t",41)},
            effect() {
                return player.t.points.add(1).pow(0.27)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        61: {
            title: "Elemental",
            description: "Unlock even more element upgrades",
            cost: new Decimal(1e6),
            unlocked(){return hasUpgrade("t",51,52,53)},
        },
        71: {
            title: "Token Unlocker I",
            description: "Unlock phosphorus",
            cost: new Decimal(2e7),
            unlocked(){return hasUpgrade("t",61)},
        },
    },
    resetsNothing(){return true},
    passiveGeneration(){return hasUpgrade("t",32)},
})
addLayer("c", {
    name: "carbon", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#808080",
    requires: new Decimal(1e17), // Can be a function that takes requirement increases into account
    resource: "carbon", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('c', 15)) mult = mult.times(25)
        if (hasUpgrade('c', 21)) mult = mult.times(100)
        if (hasUpgrade('c', 22)) mult = mult.times(200)
        if (hasUpgrade('c', 23)) mult = mult.times(400)
        if (hasUpgrade('c', 24)) mult = mult.times(800)
        if (hasUpgrade('n', 14)) mult = mult.times(upgradeEffect('n', 14))
        if (hasUpgrade('m', 13)) mult = mult.times(upgradeEffect('m', 13))
        if (hasUpgrade('t', 22)) mult = mult.times(upgradeEffect('t', 22))
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
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
            cost: new Decimal(550),
            effect() {
                return player.points.add(1).pow(0.15)
            },
        },
        14: {
            title: "Carbon IV",
            description: "x1e3 oxygen",
            cost: new Decimal(3e7),
        },
        15: {
            title: "Carbon V",
            description: "x25 Carbon",
            cost: new Decimal(1e10),
        },
        21: {
            title: "Carbon VI",
            description: "x100 Carbon",
            cost: new Decimal(2e13),
        },
        22: {
            title: "Carbon VII",
            description: "x200 Carbon",
            cost: new Decimal(1e17),
        },
        23: {
            title: "Carbon VIII",
            description: "x400 Carbon",
            cost: new Decimal(7e19),
        },
        24: {
            title: "Carbon IX",
            description: "x800 Carbon",
            cost: new Decimal(2e22),
        },
        25: {
            title: "Carbon X",
            description: "x1e3 Oxygen",
            cost: new Decimal(4e25),
        },
        31: {
            title: "Carbon XI",
            description: "x1e5 Oxygen",
            cost: new Decimal(8e32),
            unlocked(){return hasUpgrade("n",15)}
        },
        32: {
            title: "Carbon XII",
            description: "Unlock more element upgrades",
            cost: new Decimal(5e33),
            unlocked(){return hasUpgrade("n",15)}
        },
        33: {
            title: "Carbon XIII",
            description: "x1e3 oxygen",
            cost: new Decimal(3e34),
            unlocked(){return hasUpgrade("n",15)}
        },
        34: {
            title: "Carbon XIV",
            description: "x1e4 oxygen",
            cost: new Decimal(1e45),
            unlocked(){return hasUpgrade("n",15)}
        },
        35: {
            title: "Carbon XIV",
            description: "x1e5 oxygen and unlock more nitrogen upgrades",
            cost: new Decimal(2e45),
            unlocked(){return hasUpgrade("n",15)}
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
    resetsNothing(){return hasUpgrade("p",21)},
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
        16: {
            title: "Fluorine",
            description: "Boost point gain based on nitrogen",
            cost: new Decimal(20),
            unlocked(){return hasUpgrade("c",32)},
            effect() {
                return player.n.points.add(1).pow(0.41)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            title: "Neon",
            description: "Boost point gain based on carbon",
            cost: new Decimal(21),
            unlocked(){return hasUpgrade("c",32)},
            effect() {
                return player.c.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "Sodium",
            description: "Automatically gain elements",
            cost: new Decimal(22),
            unlocked(){return hasUpgrade("c",32)},
        },
        23: {
            title: "Magnesium",
            description: "x1e6 oxygen",
            cost: new Decimal(27),
            unlocked(){return hasUpgrade("c",32)},
        },
        24: {
            title: "Aluminum",
            description: "Boost point gain based on tokens",
            cost: new Decimal(31),
            unlocked(){return hasUpgrade("t",61)},
            effect() {
                return player.t.points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    },
    autoPrestige(){return hasUpgrade("e",22)},
    resetsNothing(){return hasUpgrade("p",22)},
    

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
            name: "8(2)",
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
        81: {
            name: "41",
            tooltip: "Get 1e15 Carbon",
            done(){return player.c.points.gte(1e15)},
            unlocked(){return player.c.points.gte(1)}
        },
        82: {
            name: "42",
            tooltip: "Get 1e16 Carbon",
            done(){return player.c.points.gte(1e16)},
            unlocked(){return player.c.points.gte(1)}
        },
        83: {
            name: "43",
            tooltip: "Get 1e17 Carbon",
            done(){return player.c.points.gte(1e17)},
            unlocked(){return player.c.points.gte(1)}
        },
        84: {
            name: "44",
            tooltip: "Get 1e18 Carbon",
            done(){return player.c.points.gte(1e18)},
            unlocked(){return player.c.points.gte(1)}
        },
        85: {
            name: "45",
            tooltip: "Get 1e19 Carbon",
            done(){return player.c.points.gte(1e19)},
            unlocked(){return player.c.points.gte(1)}
        },
        86: {
            name: "46",
            tooltip: "Get 1e20 Carbon",
            done(){return player.c.points.gte(1e20)},
            unlocked(){return player.c.points.gte(1)}
        },
        91: {
            name: "47",
            tooltip: "Get 1e22 Carbon",
            done(){return player.c.points.gte(1e22)},
            unlocked(){return player.c.points.gte(1)}
        },
        92: {
            name: "48",
            tooltip: "Get 1e24 Carbon",
            done(){return player.c.points.gte(1e24)},
            unlocked(){return player.c.points.gte(1)}
        },
        93: {
            name: "49",
            tooltip: "Get 1e26 Carbon",
            done(){return player.c.points.gte(1e26)},
            unlocked(){return player.c.points.gte(1)}
        },
        94: {
            name: "50",
            tooltip: "Get 1e28 Carbon",
            done(){return player.c.points.gte(1e28)},
            unlocked(){return player.c.points.gte(1)}
        },
        95: {
            name: "51",
            tooltip: "Get 1e30 Carbon",
            done(){return player.c.points.gte(1e30)},
            unlocked(){return player.c.points.gte(1)}
        },
        96: {
            name: "52",
            tooltip: "Get 1e32 Carbon",
            done(){return player.c.points.gte(1e32)},
            unlocked(){return player.c.points.gte(1)}
        },
        101: {
            name: "52(2)",
            tooltip: "Get 1 Nitrogen",
            done(){return player.n.points.gte(1)},
            unlocked(){return player.c.points.gte(1)}
        },
        102: {
            name: "53",
            tooltip: "Get 10 Nitrogen",
            done(){return player.n.points.gte(10)},
            unlocked(){return player.c.points.gte(1)},
            
        },
        103: {
            name: "54",
            tooltip: "Get 1e3 Nitrogen",
            done(){return player.n.points.gte(1e3)},
            unlocked(){return player.c.points.gte(1)}
        },
        104: {
            name: "55",
            tooltip: "Get 1e4 Nitrogen",
            done(){return player.n.points.gte(1e4)},
            unlocked(){return player.c.points.gte(1)}
        },
        105: {
            name: "56",
            tooltip: "Get 1e6 Nitrogen",
            done(){return player.n.points.gte(1e6)},
            unlocked(){return player.c.points.gte(1)}
        },
        106: {
            name: "57",
            tooltip: "Get 1e8 Nitrogen",
            done(){return player.n.points.gte(1e8)},
            unlocked(){return player.c.points.gte(1)}
        },
        111: {
            name: "58",
            tooltip: "Get 1 Medal",
            done(){return player.m.points.gte(1)},
            unlocked(){return player.m.points.gte(1)}
        },
        112: {
            name: "59",
            tooltip: "Get 10 Medals",
            done(){return player.m.points.gte(10)},
            unlocked(){return player.m.points.gte(1)}
        },
        113: {
            name: "60",
            tooltip: "Get 100 Medals",
            done(){return player.m.points.gte(100)},
            unlocked(){return player.m.points.gte(1)}
        },
        114: {
            name: "61",
            tooltip: "Get 1e3 Medals",
            done(){return player.m.points.gte(1e3)},
            unlocked(){return player.m.points.gte(1)}
        },
        115: {
            name: "62",
            tooltip: "Get 2e3 Medals",
            done(){return player.m.points.gte(2e3)},
            unlocked(){return player.m.points.gte(1)}
        },
        116: {
            name: "63",
            tooltip: "Get 3e3 Medals",
            done(){return player.m.points.gte(3e3)},
            unlocked(){return player.m.points.gte(1)}
        },
        121: {
            name: "64",
            tooltip: "Get 1 Token",
            done(){return player.t.points.gte(1)},
            unlocked(){return player.t.points.gte(1)}
        },
        122: {
            name: "65",
            tooltip: "Get 10 Token",
            done(){return player.t.points.gte(10)},
            unlocked(){return player.t.points.gte(1)}
        },
        123: {
            name: "66",
            tooltip: "Get 100 Token",
            done(){return player.t.points.gte(100)},
            unlocked(){return player.t.points.gte(1)}
        },
        124: {
            name: "67",
            tooltip: "Get 1e3 Token",
            done(){return player.t.points.gte(1e3)},
            unlocked(){return player.t.points.gte(1)}
        },
        125: {
            name: "68",
            tooltip: "Get 1e4 Token",
            done(){return player.t.points.gte(1e4)},
            unlocked(){return player.t.points.gte(1)}
        },
        126: {
            name: "69",
            tooltip: "Get 1e8 Token",
            done(){return player.t.points.gte(1e8)},
            unlocked(){return player.t.points.gte(1)}
        },
        131: {
            name: "70",
            tooltip: "Get 1e10 Token",
            done(){return player.t.points.gte(1e10)},
            unlocked(){return player.t.points.gte(1)}
        },
        132: {
            name: "71",
            tooltip: "Get 1e12 Token",
            done(){return player.t.points.gte(1e12)},
            unlocked(){return player.t.points.gte(1)}
        },
        133: {
            name: "72",
            tooltip: "Get 1e14 Token",
            done(){return player.t.points.gte(1e14)},
            unlocked(){return player.t.points.gte(1)}
        },
        134: {
            name: "73",
            tooltip: "Get 1e16 Token",
            done(){return player.t.points.gte(1e16)},
            unlocked(){return player.t.points.gte(1)}
        },
        135: {
            name: "74",
            tooltip: "Get 1e20 Token",
            done(){return player.t.points.gte(1e20)},
            unlocked(){return player.t.points.gte(1)}
        },
        136: {
            name: "75",
            tooltip: "Get 1e25 Token",
            done(){return player.t.points.gte(1e25)},
            unlocked(){return player.t.points.gte(1)}
        },
        141: {
            name: "76",
            tooltip: "Get 1 phosphorus",
            done(){return player.p.points.gte(1)},
            unlocked(){return player.p.points.gte(1)}
        },
        142: {
            name: "77",
            tooltip: "Get 10 phosphorus",
            done(){return player.p.points.gte(10)},
            unlocked(){return player.p.points.gte(1)}
        },
        143: {
            name: "78",
            tooltip: "Get 100 phosphorus",
            done(){return player.p.points.gte(100)},
            unlocked(){return player.p.points.gte(1)}
        },
        144: {
            name: "79",
            tooltip: "Get 1e3 phosphorus",
            done(){return player.p.points.gte(1e3)},
            unlocked(){return player.p.points.gte(1)}
        },
        145: {
            name: "80",
            tooltip: "Get 1e4 phosphorus",
            done(){return player.p.points.gte(1e4)},
            unlocked(){return player.p.points.gte(1)}
        },
        146: {
            name: "81",
            tooltip: "Get 1e6 phosphorus",
            done(){return player.p.points.gte(1e6)},
            unlocked(){return player.p.points.gte(1)}
        },
        151: {
            name: "82",
            tooltip: "Get 1e8 phosphorus",
            done(){return player.p.points.gte(1e8)},
            unlocked(){return player.p.points.gte(1)}
        },
        152: {
            name: "83",
            tooltip: "Get 1e10 phosphorus",
            done(){return player.p.points.gte(1e10)},
            unlocked(){return player.p.points.gte(1)}
        },
        153: {
            name: "84",
            tooltip: "Get 1e12 phosphorus",
            done(){return player.p.points.gte(1e12)},
            unlocked(){return player.p.points.gte(1)}
        },
        154: {
            name: "85",
            tooltip: "Get 1e14 phosphorus",
            done(){return player.p.points.gte(1e14)},
            unlocked(){return player.p.points.gte(1)}
        },
        155: {
            name: "86",
            tooltip: "Get 1e16 phosphorus",
            done(){return player.p.points.gte(1e16)},
            unlocked(){return player.p.points.gte(1)}
        },
        156: {
            name: "87",
            tooltip: "Get 1e20 phosphorus",
            done(){return player.p.points.gte(1e20)},
            unlocked(){return player.p.points.gte(1)}
        },
        161: {
            name: "88",
            tooltip: "Get 1e24 phosphorus",
            done(){return player.p.points.gte(1e24)},
            unlocked(){return player.p.points.gte(1)}
        },
        162: {
            name: "89",
            tooltip: "Get 1e28 phosphorus",
            done(){return player.p.points.gte(1e28)},
            unlocked(){return player.p.points.gte(1)}
        },
        163: {
            name: "90",
            tooltip: "Get 1e32 phosphorus",
            done(){return player.p.points.gte(1e32)},
            unlocked(){return player.p.points.gte(1)}
        },
        164: {
            name: "91",
            tooltip: "Get 1e38 phosphorus",
            done(){return player.p.points.gte(1e38)},
            unlocked(){return player.p.points.gte(1)}
        },
        165: {
            name: "92",
            tooltip: "Get 1e40 phosphorus",
            done(){return player.p.points.gte(1e40)},
            unlocked(){return player.p.points.gte(1)}
        },
        166: {
            name: "93",
            tooltip: "Get 1e50 phosphorus",
            done(){return player.p.points.gte(1e50)},
            unlocked(){return player.p.points.gte(1)}
        },
        171: {
            name: "94",
            tooltip: "Get 1e60 phosphorus",
            done(){return player.p.points.gte(1e60)},
            unlocked(){return player.p.points.gte(1)}
        },
        172: {
            name: "95",
            tooltip: "Get 1e70 Phosphorus",
            done(){return player.p.points.gte(1e70)},
            unlocked(){return player.p.points.gte(1)}
        },
        173: {
            name: "96",
            tooltip: "Get 1e80 phosphorus",
            done(){return player.p.points.gte(1e80)},
            unlocked(){return player.p.points.gte(1)}
        },
        174: {
            name: "97",
            tooltip: "Get 1e90 phosphorus",
            done(){return player.p.points.gte(1e90)},
            unlocked(){return player.p.points.gte(1)}
        },
        175: {
            name: "98",
            tooltip: "Get 1e100 phosphorus",
            done(){return player.p.points.gte(1e100)},
            unlocked(){return player.p.points.gte(1)}
        },
        176: {
            name: "99",
            tooltip: "Get 1e120 phosphorus",
            done(){return player.p.points.gte(1e120)},
            unlocked(){return player.p.points.gte(1)}
        },
        
    },
    tabFormat: {
        "achievements": {
            content: [
                "main-display",
                "achievements",
            ],
            
        },
    
    }
})
