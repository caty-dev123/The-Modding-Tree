addLayer("pop", {
    name: "points of points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "POP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00fcff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "points of points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('pop', 21)) mult = mult.times(upgradeEffect('pop', 21))
        if (hasUpgrade('su', 13)) mult = mult.times(upgradeEffect('su', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "q", description: "q: Reset for points of points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    autoPrestige(){return hasUpgrade('ba',22)},
    resetsNothing(){return hasUpgrade('ba',31)},
    autoPrestige(){return hasUpgrade('rf',13)},
    resetsNothing(){return hasUpgrade('rf',13)},
    autoUpgrade(){return hasUpgrade('c',21)},
    upgrades: {
        11: {
            title: "1 upgrade 1 basic multi point basic thing",
            description: "Double your point gain. LIKE ALWAYS (no twists in this game so stop playing)",
            cost: new Decimal(14.683),
        },
        12: {
            title: "the second upgrade is always bad",
            description: "You want a boost? FINE i will give you onene aklcjd fjakls (no plot twist in this game)",
            cost: new Decimal(15),
        },
        13: {
            title: "cliche",
            description: "cliche:",
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(21)
        },
        21: {
            title: "upgrade that upgrades ugprades that upgrades of upgrades",
            description: "You want a boost? FINE i will give you onene aklcjd fjakls (no plot twist in this game)",
            cost: new Decimal(50),
            effect() {
                return player.points.add(1).pow(0.15)
            },
        },
        22: {
            title: "cool upgrade",
            description: "this upgrade cool",
            cost: new Decimal(250),
        },
        23: {
            title: "no inflation",
            description: "this does nothing xddda da da",
            cost: new Decimal(2500),
        },
        31: {
            title: "funnnnnnnnn",
            description: "nothing :)",
            cost: new Decimal(5000),
            unlocked() {return hasMilestone('ba',2)}
        },
        32: {
            title: "upgrade that does something",
            description: "not nothing :)",
            cost: new Decimal(1),
            unlocked() {return player.rf.points.gte(60)}
        },
        33: {
            title: "I have some thoughts....",
            description: "...",
            cost: new Decimal(1e12),
            unlocked() {return player.rf.points.gte(135)}
        },
        14: {
            title: "Tiny Multiplier",
            description: "yayayayay fun time 123",
            cost: new Decimal(5e12),
            unlocked() {return player.c.points.gte(50)}
        },
        24: {
            title: "Small Multiplier",
            description: "tiny = small ",
            cost: new Decimal(7e12),
            unlocked() {return player.c.points.gte(60)}
        },
        34: {
            title: "Medium Multiplier",
            description: "medium = small = tiny ",
            cost: new Decimal(1e13),
            unlocked() {return player.c.points.gte(95)}
        },
        41: {
            title: "Progressions",
            description: "aaaaaaaaa ",
            cost: new Decimal(3e20),
            unlocked() {return player.sh.points.gte(5)}
        },
        42: {
            title: "Progressions 2",
            description: "PART 2!!! yay ",
            cost: new Decimal(5e20),
            unlocked() {return player.sh.points.gte(5)}
        },
        43: {
            title: "Progressions 3",
            description: "PART 3 is good ",
            cost: new Decimal(2.5e21),
            unlocked() {return player.spop.points.gte(3)}
        },
    },
    achievements: {
        11: {
            name: "This is an achievement",
            goalTooltip: "hello",
            done() {return player.pop.points.gte(123)}
        },
        12: {
            name: "2nd one",
            goalTooltip: "3rd one coming soon????",
            done() {return player.pop.points.gte(1000)}
        },
        13: {
            name: "just make an achievement tab already",
            goalTooltip: "no i'm not",
            done() {return player.ba.points.gte(1)},
            unlocked() {return player.ba.points.gte(1)}
        },
        21: {
            name: "you know that each basic you get the achievements reset?",
            goalTooltip: "oh. ok fine",
            done() {return player.ba.points.gte(1)},
            unlocked() {return player.ba.points.gte(2)}
        },
    }
}),
addLayer("spop", {
    name: "super points of points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SPOP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#346965",
    requires: new Decimal(1e20), // Can be a function that takes requirement increases into account
    resource: "super points of points", // Name of prestige currency
    baseResource: "points of points", // Name of resource prestige is based on
    baseAmount() {return player.pop.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    layerShown(){return hasMilestone('ba',4)},
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "u", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "u: reset your pop for spop", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.spop.unlocked) doReset("spop") },
            unlocked() {return hasMilestone('ba', 4)}, // Determines if you can use the hotkey, optional
        }
    ],
    branches: ['pop','ma'],
    upgrades: {
        11: {
            title: "upgrades are cliche",
            description: "my name is super points of points",
            cost: new Decimal(1),
        },
    }
}),
addLayer("ac", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "YAY!", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#fff000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "fun", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    directMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('fw', 11)) mult = mult.mul(2)
        if (hasUpgrade('pop', 41)) mult = mult.div(1.2)
        if (hasUpgrade('pop', 42)) mult = mult.div(1.5)
        if (hasUpgrade('pop', 43)) mult = mult.div(2.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player.ba.points.gte(2)},
    autoPrestige(){return hasUpgrade('rf',11)},
    resetsNothing(){return hasUpgrade('rf',12)},
    canBuyMax(){return hasUpgrade('fw',11)},
    achievements: {
        11: {
            name: "This is an achievement",
            goalTooltip: "hello",
            done() {return player.pop.points.gte(123)}
        },
        12: {
            name: "2nd one",
            goalTooltip: "3rd one coming soon????",
            done() {return player.pop.points.gte(1000)}
        },
        13: {
            name: "just make an achievement tab already",
            goalTooltip: "no i'm not",
            done() {return player.ba.points.gte(1)},
            unlocked() {return player.ba.points.gte(1)}
        },
        21: {
            name: "you know that each basic you get the achievements reset?",
            goalTooltip: "oh. ok fine",
            done() {return player.ba.points.gte(1)},
            unlocked() {return player.ba.points.gte(2)}
        },
        22: {
            name: "there now you achievements are here",
            goalTooltip: "thank you",
            done() {return player.ba.points.gte(1)},
            unlocked() {return player.ba.points.gte(3)}
        },
        23: {
            name: "oh so you like fun?",
            goalTooltip: "the fun starts right about now",
            done() {return player.ac.points.gte(100)},
            unlocked() {return player.ac.points.gte(10)}
        },
        14: {
            name: "funland sidequest",
            goalTooltip: "fun land twsetatadfa dasd fadsf asdf adsf adf oops dropped my keyboard",
            done() {return player.ac.points.gte(101)},
            unlocked() {return player.ac.points.gte(50)}
        },
        24: {
            name: "you sure it's not a time wall?",
            goalTooltip: "timewall???? no no no no it's not a time wall it's a fun wall",
            done() {return player.ac.points.gte(500)},
            unlocked() {return player.ac.points.gte(200)}
        },
        31: {
            name: "1000 fun",
            goalTooltip: "IM FEELING suGAR RUSshshhh",
            done() {return player.ac.points.gte(1e3)},
            unlocked() {return player.rf.points.gte(50)}
        },
        32: {
            name: "soooo much fun fun fun",
            goalTooltip: "aaaaaaaaaaa",
            done() {return player.ac.points.gte(5e3)},
            unlocked() {return player.rf.points.gte(50)}
        }, 
        33: {
            name: "funny hahahaha",
            goalTooltip: "yayayayayayayayayayayay",
            done() {return player.ac.points.gte(1e4)},
            unlocked() {return player.rf.points.gte(50)}
        },
        34: {
            name: "3rd one",
            goalTooltip: "dun dun dun",
            done() {return player.ba.points.gte(4)},
            unlocked() {return player.rf.points.gte(65)}
        },
        15: {
            name: "wait wait points brr again?",
            goalTooltip: "dun dun dun",
            done() {return hasUpgrade('ba',22)},
            unlocked() {return player.rf.points.gte(65)}
        },
        25: {
            name: "Inflation",
            goalTooltip: "no going back",
            done() {return hasUpgrade('ba',31)},
            unlocked() {return player.rf.points.gte(80)}
        },
        35: {
            name: "you can still save everyone",
            goalTooltip: "make a paradox or something idk math?",
            done() {return player.pop.points.gte(1e9)},
            unlocked() {return player.rf.points.gte(85)}
        },
        41: {
            name: "before math we need to learn science",
            goalTooltip: "who said????",
            done() {return player.ma.points.gte(1)},
            unlocked() {return player.rf.points.gte(90)}
        },
        42: {
            name: "2 IQ",
            goalTooltip: "not big brain yet",
            done() {return player.ma.points.gte(2)},
            unlocked() {return player.ma.points.gte(2)}
        },
        43: {
            name: "999 IQ",
            goalTooltip: "BIG BRAIN",
            done() {return player.ma.points.gte(4)},
            unlocked() {return player.ma.points.gte(2)}
        },
        44: {
            name: "serious fun grinder",
            goalTooltip: "i like funness",
            done() {return player.ac.points.gte(2e4)},
            unlocked() {return player.ma.points.gte(2)}
        },
        45: {
            name: "Points of points part 2",
            goalTooltip: "part 2???",
            done() {return player.pop.points.gte(1e11)},
            unlocked() {return player.ma.points.gte(2)}
        },
        16: {
            name: "1+2=3 2+3=4",
            goalTooltip: "ok",
            done() {return player.ma.points.gte(5)},
            unlocked() {return player.ma.points.gte(2)}
        },
        26: {
            name: "Useless 1.0",
            goalTooltip: "this achievement is useless",
            done() {return player.rf.points.gte(111)},
            unlocked() {return player.rf.points.gte(99)}
        },
        36: {
            name: "4th one",
            goalTooltip: "YES!!!!! IVE BEEN WAITING FOR THIS",
            done() {return player.ba.points.gte(25)},
            unlocked() {return player.rf.points.gte(99)}
        },
        46: {
            name: "5th one",
            goalTooltip: "5th one???",
            done() {return player.ba.points.gte(35)},
            unlocked() {return player.rf.points.gte(99)}
        },
        51: {
            name: "funny funny funny funny",
            goalTooltip: "ik it's really funnny",
            done() {return hasUpgrade('rf',13)},
            unlocked() {return player.rf.points.gte(99)}
        },
        52: {
            name: "helpings",
            goalTooltip: "fun land funny land",
            done() {return player.pop.points.gte(1e12)},
            unlocked() {return player.rf.points.gte(99)}
        },
        53: {
            name: "unhelpings",
            goalTooltip: "No more fun :(",
            done() {return player.pop.points.gte(1e14)},
            unlocked() {return player.rf.points.gte(99)}
        },
        54: {
            name: "invasions",
            goalTooltip: "what?",
            done() {return player.rf.points.gte(199)},
            unlocked() {return player.rf.points.gte(120)}
        },
        55: {
            name: "you gotta save everyone",
            goalTooltip: "you should",
            done() {return player.fw.points.gte(1)},
            unlocked() {return player.fw.points.gte(1)}
        },
        56: {
            name: "Poor",
            goalTooltip: "so poor lol",
            done() {return player.c.points.gte(3)},
            unlocked() {return player.fw.points.gte(1)}
        },
        61: {
            name: "Richer",
            goalTooltip: "atleast your getting moremoney",
            done() {return player.c.points.gte(15)},
            unlocked() {return player.c.points.gte(5)}
        },
        62: {
            name: "Richerer",
            goalTooltip: "moneymoneymoneymoneymoneymoney",
            done() {return player.c.points.gte(35)},
            unlocked() {return player.c.points.gte(5)}
        },
        63: {
            name: "Richest",
            goalTooltip: "money^2",
            done() {return player.c.points.gte(100)},
            unlocked() {return player.c.points.gte(15)}
        },
        64: {
            name: "Slight Thoughts",
            goalTooltip: "You can't move your upper jaw...",
            done() {return player.sh.points.gte(1)},
            unlocked() {return player.c.points.gte(25)}
        },
        65: {
            name: "uh oh the candy",
            goalTooltip: "THIS ISN'T GOOD",
            done() {return player.su.points.gte(1)},
            unlocked() {return player.sh.points.gte(1)}
        },
        66: {
            name: "life",
            goalTooltip: "life",
            done() {return player.fw.points.gte(5e4)},
            unlocked() {return player.sh.points.gte(1)}
        },
        71: {
            name: "basically basic",
            goalTooltip: "basic basics lalallal",
            done() {return player.ba.points.gte(300)},
            unlocked() {return player.sh.points.gte(5)}
        },
        72: {
            name: "freinds",
            goalTooltip: "basic basics lalallal",
            done() {return player.spop.points.gte(1)},
            unlocked() {return player.spop.points.gte(1)}
        },
        73: {
            name: "serious funny",
            goalTooltip: "too many things to do ",
            done() {return player.rf.points.gte(3800)},
            unlocked() {return player.spop.points.gte(1)}
        },
        74: {
            name: "super duper",
            goalTooltip: "really cool awesome super duper ",
            done() {return hasUpgrade('spop',11)},
            unlocked() {return player.spop.points.gte(1)}
        },
        75: {
            name: "super duper super duper 2.0 mega giga ultimate",
            goalTooltip: "really cool awesome super duper x2 ",
            done() {return player.spop.points.gte(10)},
            unlocked() {return player.spop.points.gte(1)}
        },
        76: {
            name: "big brain moment",
            goalTooltip: "im smart",
            done() {return player.bb.points.gte(1)},
            unlocked() {return player.spop.points.gte(5)}
        },
    }
}),
addLayer("rf", {
    name: "really fun", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "FUN", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffc300",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "funny", // Name of prestige currency
    baseResource: "ac", // Name of resource prestige is based on
    baseAmount() {return player.ac.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player.ac.points.gte(500)},
    autoPrestige(){return hasUpgrade('rf',21)},
    resetsNothing(){return hasUpgrade('rf',21)},
    branches: ['ac'],
    upgrades: {
        11: {
            title: "funny fun",
            description: "wait what? more layers? (btw this makes fun auto so yeah",
            cost: new Decimal(30)
        },
        12: {
            title: "oh no points go BRRRRR",
            description: "it's not being fixed hahahah a",
            cost: new Decimal(35),
            unlocked(){return hasUpgrade('rf',11)}
        },
        13: {
            title: "points of points part 3",
            description: "PART 3!!?!?!?!?!",
            cost: new Decimal(115),
            unlocked(){return hasUpgrade('rf',12)}
        },
        14: {
            title: "funny revolution",
            description: "UH OH THE INVASIOn IS STARtings",
            cost: new Decimal(120),
            unlocked(){return hasUpgrade('rf',13)}
        },
        15: {
            title: "IT BEGINS",
            description: "we need funny warriors",
            cost: new Decimal(125),
            unlocked(){return hasUpgrade('rf',14)}
        },
        21: {
            title: "wait inflation 2.0?",
            description: "auto funny",
            cost: new Decimal(1e3),
            unlocked(){return hasUpgrade('rf',15)}
        }
    }
}),
addLayer("fw", {
    name: "funny warriors", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⚔️", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5a3dc8",
    requires: new Decimal(190), // Can be a function that takes requirement increases into account
    resource: "funny warriors", // Name of prestige currency
    baseResource: "rf", // Name of resource prestige is based on
    baseAmount() {return player.rf.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('rf',15)},
    branches: ['rf'],
    autoPrestige(){return hasUpgrade('fw',12)},
    resetsNothing(){return hasUpgrade('fw',12)},
    canBuyMax(){return hasUpgrade('fw',23)},
    milestones: {
        1: {
            requirementDescription: "1 funny warriors",
            effectDescription: "You have cities to save what are you doing?",
            done() { return player.fw.points.gte(1) },
        },
        2: {
            requirementDescription: "1.5e3 funny warriors",
            effectDescription: "I think i'm gonna have a sugar rush later",
            done() { return player.fw.points.gte(1.5e3) },
        },
        3: {
            requirementDescription: "2.5e4 funny warriors",
            effectDescription: "Well it's time to gear up and save more cities with more warriors!",
            done() { return player.fw.points.gte(2.5e4) },
        }
    },
    upgrades: {
        11: {
            title: "🗡️",
            description: "You can now fight with daggers",
            cost: new Decimal(1),
            unlocked() {return hasMilestone('fw',1)},           
        },
        12: {
            title: "🛡️",
            description: "You can now fight with sheilds",
            cost: new Decimal(1.5e3),
            unlocked() {return hasMilestone('fw',2)},           
        },
        13: {
            title: "💣",
            description: "You can now fight with bombs",
            cost: new Decimal(2e4),
            unlocked() {return hasMilestone('fw',3)},           
        },
        21: {
            title: "CITY: jjjfambam jibwippf",
            description: "You must save the city",
            cost: new Decimal(1e4),
            unlocked() {return hasMilestone('fw',2)},           
        },
        22: {
            title: "CITY: qyvqm bjajl uqui",
            description: "You must save the city",
            cost: new Decimal(1.5e4),
            unlocked() {return hasMilestone('fw',2)},           
        },
        23: {
            title: "CITY: ghahgha jbwiwi ooapappaf lboablao",
            description: "You must save the city",
            cost: new Decimal(5e4),
            unlocked() {return hasMilestone('fw',3)},           
        }
    }

}),
addLayer("su", {
    name: "sugar", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🍬", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#3ab08d",
    requires: new Decimal(2e4), // Can be a function that takes requirement increases into account
    resource: "sugar", // Name of prestige currency
    baseResource: "funny warriors", // Name of resource prestige is based on
    baseAmount() {return player.fw.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('fw',22)},
    branches: ['fw'],
    upgrades: {
        11: {
            title: "🍬 I",
            description: "🍬 boosts point gain",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(1)
        },
        12: {
            title: "🍬 II",
            description: "🍬 boosts point gain again",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(6)
        },
        13: {
            title: "🍬 III",
            description: "🍬 boosts pop gain",
            cost: new Decimal(1),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            cost: new Decimal(7)
        }
    }
}),
addLayer("ba", {
    name: "basics", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#644343",
    requires: new Decimal(2500), // Can be a function that takes requirement increases into account
    resource: "basics", // Name of prestige currency
    baseResource: "points of points", // Name of resource prestige is based on
    baseAmount() {return player.pop.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    {
        key: "w", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "w: reset your points of points for basics", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.ba.unlocked) doReset("ba") },
        unlocked() {return hasUpgrade('pop', 23)}, // Determines if you can use the hotkey, optional
        
    }
],
    layerShown(){return hasUpgrade('pop', 23)},
    resetsNothing(){return hasUpgrade('c',11)},
    branches: ['pop'],
            milestones: {
                1: {
                    requirementDescription: "1 Basics",
                    effectDescription: "unlock upgrades blah blah stuff",
                    done() { return player.ba.points.gte(1) },
                },
                2: {
                    requirementDescription: "3 Basics",
                    effectDescription: "unlock more upgrades labjskldj flkdjkla",
                    done() { return player.ba.points.gte(3) },
                },
                3: {
                    requirementDescription: "5 Basics",
                    effectDescription: "i think basic needs more upgrades",
                    done() { return player.ba.points.gte(5) },
                },
                4: {
                    requirementDescription: "280 Basics",
                    effectDescription: "pop layer needs a friend.",
                    done() { return player.ba.points.gte(280) },
                }
            },
            upgrades: {
                11: {
                    title: "basic things of basics",
                    description: "soooo basic",
                    cost: new Decimal(1),
                    unlocked() {return hasMilestone('ba',1)},
                    effect() {
                        return player.ba.points.add(1).pow(0.5)
                    },
                    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
                },
                12: {
                    title: "BASIC",
                    description: "this one is basic aswell",
                    cost: new Decimal(2),
                    unlocked() {return hasMilestone('ba',1)}
                },
                21: {
                    title: "BASIC 2.0",
                    description: "x2 points!!!!! yayayayaya",
                    cost: new Decimal(5),
                    unlocked() {return hasMilestone('ba',3)}
                },
                22: {
                    title: "EZ Points",
                    description: "automatic revolution",
                    cost: new Decimal(0),
                    unlocked() {return hasUpgrade('ba',21)}
                },
                31: {
                    title: "no brrr",
                    description: "ok wait wait wait why are the upgrades free?",
                    cost: new Decimal(0),
                    unlocked() {return hasUpgrade('ba',22)}
                },
                32: {
                    title: "new layer?",
                    description: "no new layers plssss",
                    cost: new Decimal(44),
                    unlocked() {return hasUpgrade('ma',22)}
                }
            }
}),
addLayer("ma", {
    name: "math", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4fff00",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "math", // Name of prestige currency
    baseResource: "basics", // Name of resource prestige is based on
    baseAmount() {return player.ba.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    {
        key: "e", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "e: reset your basics for math", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.ma.unlocked) doReset("ma") },
        unlocked() {return hasUpgrade('ba', 31)} // Determines if you can use the hotkey, optional
    }
],
layerShown(){return hasUpgrade('ba',31)},
branches: ['ba'],
upgrades: {
    11: {
        title: "Addition",
        description: "science first!",
        cost: new Decimal(0)
    },
    12: {
        title: "Subtraction",
        description: "1-1 = 0. 0-0 = 1 No I don't think that's the answer",
        cost: new Decimal(1)
    },
    21: {
        title: "Multiplication",
        description: "This has a really nice boost!!!",
        cost: new Decimal(3),
        effect() {
            return player[this.layer].points.add(1).pow(0.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    },
    22: {
        title: "Division",
        description: "fj28f92j298fj289fj289fj982jf92 math newss wajkfljakl afld",
        cost: new Decimal(5)
    },
    31: {
        title: "Decimals",
        description: "I'm becoming big brain",
        cost: new Decimal(15)
    },
    32: {
        title: "Fractions",
        description: "big brain revolution",
        cost: new Decimal(333)
    },
}
}),
addLayer("bb", {
    name: "big brain", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧠", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#CA86B0",
    requires: new Decimal(1e6), // Can be a function that takes requirement increases into account
    resource: "big brains", // Name of prestige currency
    baseResource: "cash", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    {
        key: "i", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "i: reset your cash for big brains", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.bb.unlocked) doReset("bb") },
        unlocked() {return hasUpgrade('ma', 32)} // Determines if you can use the hotkey, optional
    }
],
layerShown(){return hasUpgrade('ma',32)},
branches: ['c','ma'],
}),
addLayer("s", {
    name: "science", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "🧪", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff00f4",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "science", // Name of prestige currency
    baseResource: "pop", // Name of resource prestige is based on
    baseAmount() {return player.pop.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 4, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('ma',11)},
    hotkeys: [
    {
        key: "r", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "r: reset your pop for science", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.s.unlocked) doReset("s") },
        unlocked() {return hasUpgrade('ma', 11)} // Determines if you can use the hotkey, optional
    }
],
branches: ['pop', 'ma'],
upgrades: {
    11: {
        title: "science",
        description: "bubbles",
        cost: new Decimal(0)
    },
    12: {
        title: "you know what would be funny?",
        description: "idk",
        cost: new Decimal(1)
    },
    21: {
        title: "H20",
        description: "you mean water?",
        cost: new Decimal(2)
    },
    22: {
        title: "C20",
        description: "you mean carbon dioxide right??",
        cost: new Decimal(3)
    }
}
}),
addLayer("c", {
    name: "cash", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "💵", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#44a81f",
    requires: new Decimal(1e11), // Can be a function that takes requirement increases into account
    resource: "cash", // Name of prestige currency
    baseResource: "po", // Name of resource prestige is based on
    baseAmount() {return player.pop.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    {
        key: "t", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "t: reset your pop for cash", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.c.unlocked) doReset("c") },
        unlocked() {return hasUpgrade('fw', 11)} // Determines if you can use the hotkey, optional
    }
],
layerShown(){return player.fw.points.gte(1)},
branches: ['pop', 'ma'],
upgrades: {
    11: {
        title: "Basic Basic 1.0",
        description: "yaaaaaaaay no resets for basics???",
        cost: new Decimal(2)
    },
    12: {
        title: "Fun Money",
        description: "does money grow on trees?",
        cost: new Decimal(5),
        effect() {
            return player[this.layer].points.add(1).pow(0.9)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new Decimal(5)
    },
    13: {
        title: "No wallet",
        description: "money grows on tree in this mod I guess",
        cost: new Decimal(1e4),
    },
    21: {
        title: "Tree",
        description: "pop layer is getting REALLY ANNOYING",
        cost: new Decimal(5e4),
    }
}
}),
addLayer("sh", {
    name: "shower thoughts", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ST", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#eaeaea",
    requires: new Decimal(75), // Can be a function that takes requirement increases into account
    resource: "Thoughts", // Name of prestige currency
    baseResource: "cash", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    {
        key: "y", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
        description: "y: reset your cash for Shower Thoughts", // The description of the hotkey that is displayed in the game's How To Play tab
        onPress() { if (player.sh.unlocked) doReset("sh") },
        unlocked() {return hasUpgrade('fw', 11)} // Determines if you can use the hotkey, optional
    }
],
branches: ['ba', 'ma', 'c', 's'],
layerShown(){return player.fw.points.gte(1.5e3)},
buyables: {
    11: {
        cost(x) { return new Decimal(1).mul(x) },
        display() { return "more point gain funnies" + "      x" +  + " point gain" + "   " + "You have" + " of this buyable" },
        title: "The alphabet doesn't have to be in a specific order (coming soon) ",
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            player[this.layer].points = player[this.layer].points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return true},
        effect(x){ return this.effect;}
        
    },
    
}
})
