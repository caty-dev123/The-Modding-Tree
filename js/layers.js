addLayer("a", {
    name: "Apples", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Apples", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for Apples", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

upgrades: {
    11: {
        title: "A",
        description: "Makes point gain slightly better",
        cost: new Decimal(1),
    },

    12: {
        title: "An",
        description: "Double pont gain",
        cost: new Decimal(3),
        unlocked() {
            {return hasUpgrade("a",11)}
        }
    },

    13: {
        title: "And",
        description: "Double point gain again.",
        cost: new Decimal(10),
        unlocked() {
            {return hasUpgrade("a",12)}
        }
    },

    14: {
        title: "Amplified",
        description: "MORE POINT GAIN JUST TOO MUCH",
        cost: new Decimal("4e1320"),
        unlocked() {
            {return hasUpgrade("a",12)}
        }
    },

    21: {
        title: "Ant",
        description: "Double point gain once again.",
        cost: new Decimal(30),
        unlocked() {
            {return hasUpgrade("a",13)}
        }
    },

    22: {
        title: "Army",
        description: "Double point gain once more again.",
        cost: new Decimal(100),
        unlocked() {
            {return hasUpgrade("a",21)}
        }
    },

    23: {
        title: "Addition",
        description: "Makes point gain explode!",
        cost: new Decimal(125),
        unlocked() {
            {return hasUpgrade("a",22)}
        }
    },

    24: {
        title: "Addiction",
        description: "Makes point gain explode MORE MORE MORE MORE MORE MORE MORE MORE!",
        cost: new Decimal("1e1000"),
        unlocked() {
            {return hasUpgrade("a",14)}
        }
    },

    31: {
        title: "Always",
        description: "Points go GAS GAS GAS",
        cost: new Decimal(500),
        unlocked() {
            {return hasUpgrade("a",23)}
        }
    },

    32: {
        title: "Anyways",
        description: "Once more the point gain goes GAS GAS GAS",
        cost: new Decimal(2e4),
        unlocked() {
            {return hasUpgrade("a",31)}
        }
    },

    33: {
        title: "Am",
        description: "Maybe a little bit of some boosts will do.",
        cost: new Decimal(1e5),
        unlocked() {
            {return hasUpgrade("a",32)}
        }
    },

    34: {
        title: "As",
        description: "Point gain be like.",
        cost: new Decimal("1e2170"),
        unlocked() {
            {return hasUpgrade("a",24)}
        }
    },
    
    41: {
        title: "Aunt",
        description: "Unlock a new layer",
        cost: new Decimal("2e309"),
        unlocked() {
            {return hasUpgrade("a",33)}
        }
    },
    42: {
        title: "Amulet",
        description: "More point boost",
        cost: new Decimal("7e710"),
        unlocked() {
            {return hasUpgrade("tra",11)}
        }
    },

    43: {
        title: "Another",
        description: "Even more point boost",
        cost: new Decimal("7e1010"),
        unlocked() {
            {return hasUpgrade("a",42)}
        }
    },

    44: {
        title: "Ajust",
        description: "Even more point boost once more again blah blah etc",
        cost: new Decimal("1e3484"),
        unlocked() {
            {return hasUpgrade("a",43)}
        }
    },
},
passiveGeneration() {return hasUpgrade("b",13)}
}),

addLayer("ma", {
    name: "Mega apples", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF7D7D",
    requires: new Decimal(5e74), // Can be a function that takes requirement increases into account
    resource: "Mastery apples", // Name of prestige currency
    baseResource: "Apples", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "1", description: "1: Reset for MA", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("d",11)},

    branches: ["a", "sb", "d"],

upgrades: {
    11: {
        title: "golden apples",
        description: "EVEN MORE BOOSTS?",
        cost: new Decimal(10),
    },

    12: {
        title: "Diamond apples",
        description: "Unlock more sb upgrades",
        cost: new Decimal(500),
    },

    13: {
        title: "Platnim apples",
        description: "Unlock a new layer",
        cost: new Decimal(1e4),
    },

}

}),

addLayer("tra", {
    name: "Trans reality apples", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "TrA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF7D7D",
    requires: new Decimal("1e709"), // Can be a function that takes requirement increases into account
    resource: "Trans reality apples", // Name of prestige currency
    baseResource: "Apples", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "1", description: "1: Reset for MA", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("f",1)},

    branches: ["a"],
upgrades: {
    11: {
        title: "Trana-apple",
        description: "Unlock more apple upgrades",
        cost: new Decimal(50),
    },
    12: {
        title: "Tramnanta-apple",
        description: "Unlock even more apple upgrades",
        cost: new Decimal(1e61),
    },
}
})

addLayer("b", {
    name: "Boosts", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF6D00",
    requires: new Decimal(3e5), // Can be a function that takes requirement increases into account
    resource: "Boosts", // Name of prestige currency
    baseResource: "Apples", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.85, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for Boosts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("a",33)},

    branches: ["a", "ma", "tra"],

    upgrades: {
        11: {
            title: "Booster",
            description: "Faster and faster every time!",
            cost: new Decimal(1),
            unlocked() {
                {return hasUpgrade("a",32)}
            }
        },

        12: {
            title: "Bubble",
            description: "*blows a bubble*",
            cost: new Decimal(5),
            unlocked() {
                {return hasUpgrade("b",11)}
            }
        },

        13: {
            title: "Blue",
            description: "Blue is the color of the ocean.",
            cost: new Decimal(25),
            unlocked() {
                {return hasUpgrade("b",12)}
            }
        },

        14: {
            title: "Brand",
            description: "More and more points!",
            cost: new Decimal(3e3),
            unlocked() {
                {return hasUpgrade("b",13)}
            }
        },

        21: {
            title: "Bux",
            description: "Wait money?",
            cost: new Decimal(2e4),
            unlocked() {
                {return hasUpgrade("b",14)}
            }
        },

        22: {
            title: "Bugs",
            description: "Wait!? are there bu-",
            cost: new Decimal(1.5e6),
            unlocked() {
                {return hasUpgrade("b",21)}
            }
        },

        
        23: {
            title: "Bags",
            description: "Boosts reset nothing",
            cost: new Decimal(5e7),
            unlocked() {
                {return hasUpgrade("b",22)}
            }
        },

        24: {
            title: "Bamboo",
            description: "Unlock a new layer",
            cost: new Decimal(1e9),
            unlocked() {
                {return hasUpgrade("b",23)}
            }
        },

        31: {
            title: "Button",
            description: "Even more point gain?",
            cost: new Decimal(1e11),
            unlocked() {
                {return hasMilestone("c",1)}
            }
        },

        32: {
            title: "Basket",
            description: "Too much point gain",
            cost: new Decimal(5e11),
            unlocked() {
                {return hasUpgrade("b",31)}
            }
        },

        33: {
            title: "Bunny",
            description: "MORE POINT GAIN",
            cost: new Decimal(1e14),
            unlocked() {
                {return hasUpgrade("b",32)}
            }
        },

        34: {
            title: "Bad",
            description: "Just how much more point gain?",
            cost: new Decimal(1e15),
            unlocked() {
                {return hasUpgrade("b",33)}
            }
        },

        41: {
            title: "Brag",
            description: "I have so much points haha",
            cost: new Decimal(1e17),
            unlocked() {
                {return hasUpgrade("b",34)}
            }
        },

        42: {
            title: "Ban",
            description: "Dont ban me please!",
            cost: new Decimal(2e21),
            unlocked() {
                {return hasUpgrade("b",41)}
            }
        },

        43: {
            title: "Banned",
            description: "At least i'm n-",
            cost: new Decimal(5e24),
            unlocked() {
                {return hasUpgrade("b",42)}
            }
        },

        44: {
            title: "Bottle",
            description: "Unlock a mini layer",
            cost: new Decimal(2e28),
            unlocked() {
                {return hasUpgrade("b",43)}
            }
        },

       

    },

    challenges: {
        11: {
            name: "Money",
            challengeDescription: "Get 1e9 Apples",
            canComplete: function() {return player.a.points.gte(1e9)},
            unlocked() {
                {return hasUpgrade("b",21)}
            }
        },
        
    },
    resetsNothing(){return hasUpgrade("b",23)},
    passiveGeneration() {return hasUpgrade("c",21)},
    resetsNothing(){return hasUpgrade("ef",12)},
    resetsNothing(){return hasUpgrade("sf",12)}
}),

addLayer("sb", {
    name: "Super boosts", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFC178",
    requires: new Decimal(1e39), // Can be a function that takes requirement increases into account
    resource: "Super boosts", // Name of prestige currency
    baseResource: "Apples", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
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
    hotkeys: [
        {key: "1", description: "1: Reset for Super boosts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("b",44)},

    branches: ["a"],

upgrades: {
    11: {
        title: "Super boost",
        description: "Boosts point by alot",
        cost: new Decimal(1),
    },

    12: {
        title: "Hyper boost",
        description: "Boosts point by more alot",
        cost: new Decimal(5),
    },

    21: {
        title: "Giga boost",
        description: "Boosts point by once more  alot",
        cost: new Decimal(5000),
        unlocked() {
            {return hasUpgrade("ma",12)}
        }
    },

    22: {
        title: "Mastery boost",
        description: "Boost point too much that it dies",
        cost: new Decimal(5000),
        unlocked() {
            {return hasUpgrade("ma",12)}
        }
    },

    13: {
        title: "Supreme-power",
        description: "SB resets nothing",
        cost: new Decimal(1e6),
        unlocked() {
            {return hasUpgrade("ma",13)}
        }
    },

    23: {
        title: "Ultimate boost",
        description: "Gain 100% C",
        cost: new Decimal(1e9),
        unlocked() {
            {return hasUpgrade("sb",13)}
        }
    },
},
resetsNothing(){return hasUpgrade("sb",13)},
resetsNothing(){return hasUpgrade("ef",12)}
}),

addLayer("mb", {
    name: "Meta boosts", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D26400",
    requires: new Decimal(1e4), // Can be a function that takes requirement increases into account
    resource: "Meta bosots", // Name of prestige currency
    baseResource: "Mastery apples", // Name of resource prestige is based on
    baseAmount() {return player.ma.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.85, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for Boosts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("ma",13)},

    branches: ["ma", "b"],


    upgrades: {
        11: {
            title: "The final",
            description: "Unlock new C upgrades",
            cost: new Decimal(750),
        },

        12: {
            title: "The true final",
            description: "Boost points way too much",
            cost: new Decimal(5e19),
        },
    },

    resetsNothing(){return hasUpgrade("ef",12)}

}),

addLayer("c", {
    name: "Circles", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFB00",
    requires: new Decimal(1e11), // Can be a function that takes requirement increases into account
    resource: "Circles", // Name of prestige currency
    baseResource: "Boosts", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("b",24)},

    branches: ["b", "sb"],
    milestones: {
        0: {
            requirementDescription: "A total of 1 Circle",
            effectDescription: "More point gain",
            done() { return player.c.points.gte(1) }
        },

        1: {
            requirementDescription: "A total of 2 Circles",
            effectDescription: "Unlock a row of more B upgrades",
            done() { return player.c.points.gte(2) }
        },

        2: {
            requirementDescription: "A total of 80 Circles",
            effectDescription: "Unlock circle upgrades",
            done() { return player.c.points.gte(80) }
        },

        3: {
            requirementDescription: "A total of 1e21 Circles",
            effectDescription: "Unlock a new layer",
            done() { return player.c.points.gte(1e21) }
        }
        
    },

upgrades: {
    11: {
        title: "Circular",
        description: "Circles are amazing!",
        cost: new Decimal(500),
        unlocked() {
            {return hasMilestone("c",2)}
        }
    },

    12: {
        title: "Comments",
        description: "Now into space",
        cost: new Decimal(3.2e3),
        unlocked() {
            {return hasUpgrade("c",11)}
        }
    },

    13: {
        title: "Capsule",
        description: "The point gian goes insane once more again",
        cost: new Decimal(5e66),
        unlocked() {
            {return hasUpgrade("mb",11)}
        }
    },

    21: {
        title: "Commercials",
        description: "This is not TV.",
        cost: new Decimal(8.1e4),
        unlocked() {
            {return hasUpgrade("c",12)}
        }
    },

    22: {
        title: "Can",
        description: "Unlock a new row of B upgrades",
        cost: new Decimal(2e5),
        unlocked() {
            {return hasUpgrade("c",21)}
        }
    },

    23: {
        title: "Cat",
        description: "Unlock more D upgrades",
        cost: new Decimal(5e89),
        unlocked() {
            {return hasUpgrade("c",13)}
        }
    },

},
passiveGeneration() {return hasUpgrade("sb",23)},
resetsNothing(){return hasUpgrade("d",14)},
resetsNothing(){return hasUpgrade("ef",13)},
resetsNothing(){return hasUpgrade("sf",12)}
}),

addLayer("d", {
    name: "Donuts", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#76FF00",
    requires: new Decimal(5e21), // Can be a function that takes requirement increases into account
    resource: "Donuts", // Name of prestige currency
    baseResource: "Circles", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.6, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("c",3)},

    branches: ["c", "a", "tra"],

    challenges: {
        11: {
            name: "Donut deilight",
            challengeDescription: "Get 1e40 Apples",
            canComplete: function() {return player.a.points.gte(1e40)},
        },

        12: {
            name: "Drawings",
            challengeDescription: "Get 1e76 Apples",
            canComplete: function() {return player.a.points.gte(1e76)},
            unlocked() {
                {return hasUpgrade("d",12)}
            }
        },
        
        
    },

upgrades: {
    11: {
        title: "Drop",
        description: "Unlock another mini layer",
        cost: new Decimal(1),
        
    },

    12: {
        title: "Draw",
        description: "Unlock another challenge",
        cost: new Decimal(8e5),

    unlocked() {
        {return hasUpgrade("d",11)}
    }
        
    },

    13: {
        title: "Drag",
        description: "Point go brrrrr",
        cost: new Decimal(2e6),

    unlocked() {
        {return hasUpgrade("d",12)}
    }
        
    },

    14: {
        title: "Dreams",
        description: "C resets nothing",
        cost: new Decimal(1e26),

    unlocked() {
        {return hasUpgrade("d",13)}
    }
        
    },

    15: {
        title: "Doodle",
        description: "Unlock a new layer",
        cost: new Decimal(1e41),

    unlocked() {
        {return hasUpgrade("c",23)}
    }
        
    },



},

resetsNothing(){return hasUpgrade("ef",11)},
resetsNothing(){return hasUpgrade("sf",12)}

}),

addLayer("e", {
    name: "Energy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FFDA",
    requires: new Decimal(1e51), // Can be a function that takes requirement increases into account
    resource: "Energy", // Name of prestige currency
    baseResource: "Donuts", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
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
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("c",3)},

    branches: ["d", "mb", "b"],

    milestones: {
        0: {
            requirementDescription: "A total of 1 Energy",
            effectDescription: "More point gain",
            done() { return player.e.points.gte(1) }
        },

        1: {
            requirementDescription: "A total of 3 Energy",
            effectDescription: "Unlock one more apple upgrade",
            done() { return player.e.points.gte(3) }
        },

        2: {
            requirementDescription: "A total of 1e20 Energy",
            effectDescription: "Boost point gain again.",
            done() { return player.e.points.gte(1e20) }
        },
    },
    resetsNothing(){return hasUpgrade("ef",13)}
}),

addLayer("ef", {
    name: "Energy fuel", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ef", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00B89D",
    requires: new Decimal(1e20), // Can be a function that takes requirement increases into account
    resource: "Energy fuel", // Name of prestige currency
    baseResource: "Energy", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("a",41)},

    branches: ["e", "d", "mb", "sb"],

    upgrades: {
        11: {
            title: "Coal",
            description: "D reset nothing",
            cost: new Decimal(1),
        },

        12: {
            title: "Charcoal",
            description: "SB,B,MB reset nothing",
            cost: new Decimal(500),
        },

        13: {
            title: "Water turbine power",
            description: "E and C resets nothing",
            cost: new Decimal(1e7),
        },

        14: {
            title: "Maximum power",
            description: "EF resets nothing",
            cost: new Decimal(1e17),
        },

        15: {
            title: "Yummmy",
            description: "Don't you feel hugry?",
            cost: new Decimal(1e17),
        },
    },
    resetsNothing(){return hasUpgrade("ef",14)}
}),

addLayer("f", {
    name: "Food", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0082FF",
    requires: new Decimal(2e93), // Can be a function that takes requirement increases into account
    resource: "Food", // Name of prestige currency
    baseResource: "Energy", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("ef",15)},

    branches: ["ef", "e"],
milestones: {
    1: {
        requirementDescription: "1 Food",
        effectDescription: "Unlock a new layer",
        done() { return player.f.points.gte(1) }
    },
    2: {
        requirementDescription: "8e53 Food",
        effectDescription: "Unlock food upgrades",
        done() { return player.f.points.gte(8e53) }
    },
},

upgrades: {
    11: {
        title: "Fractal",
        description: "*Zooms in*",
        cost: new Decimal(6e120),
    },

    12: {
        title: "Family",
        description: "Unlock a new layer",
        cost: new Decimal(4e148),
    },

    13: {
        title: "Font",
        description: "Boost points by many",
        cost: new Decimal(1e175),
    },
    
    14: {
        title: "Friends",
        description: "Unlock a new layer",
        cost: new Decimal(1e231),
    },
},
resetsNothing(){return hasUpgrade("sf",11)}
}),

addLayer("sf", {
    name: "Super food", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0059A7",
    requires: new Decimal(1e148), // Can be a function that takes requirement increases into account
    resource: "Super food", // Name of prestige currency
    baseResource: "Food", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",12)},

    branches: ["f", "e", "ef", ],

upgrades: {
    11: {
        title: "Super bread",
        description: "F resets nothing",
        cost: new Decimal(500),
    },
    12: {
        title: "Super Cake",
        description: "B,C, and D resets nothing",
        cost: new Decimal(1e3),
    },
}

}),

addLayer("g", {
    name: "Goals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5900FF",
    requires: new Decimal(1e231), // Can be a function that takes requirement increases into account
    resource: "Goals", // Name of prestige currency
    baseResource: "Food", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Circles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("f",14)},

    branches: ["f", "sf" ],

})
