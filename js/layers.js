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

        14: {
            title: "A nice boost",
            description: "the water guides you",
            cost: new Decimal(500),
            unlocked(){
                {return hasMilestone("e", 2)}
            }
            
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

        
        24: {
            title: "Accelerant boat",
            description: "Another nice boost",
            cost: new Decimal(100),
            unlocked(){
                {return hasMilestone("e", 3)}
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

        34: {
            title: "Faster winds",
            description: "The winds are going crazy!",
            cost: new Decimal(5e5),
            unlocked(){
                {return hasMilestone("e", 4)}
            }
        },

        41: {
            title: "Strong power",
            description: "Are you feeling the power?",
            cost: new Decimal(2e6),
            unlocked(){
                {return hasUpgrade("r", 11)}
            }
        },

        42: {
            title: "Leather armor",
            description: "More warmer",
            cost: new Decimal(5e9),
            unlocked(){
                {return hasUpgrade("r", 13)}
            }
        },

        43: {
            title: "Escape",
            description: "You must escape!",
            cost: new Decimal(1e17),
            unlocked(){
                {return hasUpgrade("s", 42)}
            }
        },

        44: {
            title: "The true final",
            description: "You have reached it",
            cost: new Decimal(1e39),
            unlocked(){
                {return hasMilestone("e", 5)}
            }
        },


        
    


},

passiveGeneration() {return hasUpgrade("s", 32)}

}),

addLayer("mp", {
    name: "MeatPower", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FBFF00",
    requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
    resource: "Meta power", // Name of prestige currency
    baseResource: "Survival", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
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
        {key: "m", description: "M: Reset for Meta power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("o",12)},
branches: ["s"],

upgrades: {
    11: {
        title: "Out of reality",
        description: "Where.. Whe- am I?",
        cost: new Decimal(1),
        unlocked(){
            {return hasUpgrade("s", 11)}
        }
    },

    12: {
        title: "Different reality",
        description: "More and more realities",
        cost: new Decimal(1e5),
        unlocked(){
            {return hasUpgrade("mp", 21)}
        }
    },

    13: {
        title: "Universal power",
        description: "The power you could use is getting bigger!",
        cost: new Decimal(1e10),
        unlocked(){
            {return hasUpgrade("mp", 31)}
        }
    },

    14: {
        title: "Tetra-meta-power",
        description: "Stacking moment.",
        cost: new Decimal(1e25),
        unlocked(){
            {return hasUpgrade("mp", 41)}
        }
    },

    21: {
        title: "Meta-power",
        description: "This makes no sense.",
        cost: new Decimal(10),
        unlocked(){
            {return hasUpgrade("mp", 11)}
        }
    },

    22: {
        title: "Multiversal power",
        description: "Just how far can we go?",
        cost: new Decimal(1e15),
        unlocked(){
            {return hasUpgrade("mp", 31)}
        }
    },

    23: {
        title: "Metaversal power",
        description: "Well I guess we can go this far",
        cost: new Decimal(1e30),
        unlocked(){
            {return hasUpgrade("mp", 41)}
        }
    },

    31: {
        title: "Meta-meta",
        description: "This is getting crazier!.",
        cost: new Decimal(1e5),
        unlocked(){
            {return hasUpgrade("mp", 21)}
        }
    },

    32: {
        title: "Meta-a-d",
        description: "TOO MUCH",
        cost: new Decimal(1e35),
        unlocked(){
            {return hasUpgrade("mp", 41)}
        }
    },

    
    41: {
        title: "Trimeta-power",
        description: "More meta the more meta meta???.",
        cost: new Decimal(1e20),
        unlocked(){
            {return hasUpgrade("mp", 31)}
        }
    },

},
autoUpgrade() {return hasUpgrade ("s",11)},
passiveGeneration() {return hasUpgrade ("mp", 22)}
})

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

    14: {
        name: "Just to much",
        challengeDescription: "Get 1e7 craftings",
        canComplete: function() {return player.c.points.gte(1e7)},
        unlocked(){
            {return hasMilestone("e", 4)}
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

    13: {
        title: "Base making",
        description: "I wonder how I can make this thing? maybe the wood first",
        cost: new Decimal(50),
        
    }, 

    14: {
        title: "Coconuts",
        description: "A new source of food!",
        cost: new Decimal(75),
        
    }, 

    21: {
        title: "Setting up the trees",
        description: "You set up the trees and add the wood",
        cost: new Decimal(250),
        
    }, 

    22: {
        title: "Finsihed!",
        description: "You finally finished it!",
        cost: new Decimal(750),
        
    }, 

    23: {
        title: "Leather coat",
        description: "It feels more warmer",
        cost: new Decimal(1e3),
        
    }, 

    24: {
        title: "Crafting workspace",
        description: "Time to craft!",
        cost: new Decimal(5e4),
        
    }, 

    31: {
        title: "Faster turbines",
        description: "Craft some faster turbines",
        cost: new Decimal(2e5),
        unlocked(){
            {return hasMilestone("e", 4)}
        }
        
    }, 

    32: {
        title: "Faster turbine 2.0",
        description: "The more speed you have the more progress you gain!",
        cost: new Decimal(1e7),
        unlocked(){
            {return hasMilestone("e", 5)}
        }
        
    }, 

    33: {
        title: "Iron armor",
        description: "The forging is harder and harder!",
        cost: new Decimal(1e10),
        unlocked(){
            {return hasUpgrade("r", 21)}
        }
        
    }, 

    34: {
        title: "Golden armor",
        description: "Whats next diamonds?",
        cost: new Decimal(1e12),
        unlocked(){
            {return hasUpgrade("r", 22)}
        }
        
    }, 
},


resetsNothing() {return hasUpgrade("c", 22)}


})

addLayer("r", {
    name: "Resources", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#408D8E",
    requires: new Decimal(1e5), // Can be a function that takes requirement increases into account
    resource: "Resources", // Name of prestige currency
    baseResource: "Survival", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for Resources", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("c",14)},
branches: ["s"],

upgrades: {
    11: {
        title: "Sand",
        description: "This is the worst resource ever!",
        cost: new Decimal(10),
        
    }, 
    12: {
        title: "Resource Gatherer",
        description: "Your getting stronger!",
        cost: new Decimal(50),
        
    }, 

    13: {
        title: "Leather",
        description: "I wonder what this is going to do.",
        cost: new Decimal(1e3),
        
    }, 

    14: {
        title: "Extra booster",
        description: "You got your fast water trubine",
        cost: new Decimal(2e3),
        unlocked(){
            {return hasMilestone("e", 4)}
        }
    }, 

    15: {
        title: "Supremem power",
        description: "Still not there.",
        cost: new Decimal(1e6),
        unlocked(){
            {return hasMilestone("e", 5)}
        }
    }, 

    21: {
        title: "Stone, copper, and iron",
        description: "More power!",
        cost: new Decimal(1e7),
        unlocked(){
            {return hasMilestone("e", 6)}
        }
    }, 

    22: {
        title: "Gold",
        description: "Ooo shiny!",
        cost: new Decimal(1e11),
        unlocked(){
            {return hasMilestone("o", 2)}
        }
    }, 

},
resetsNothing() {return hasMilestone("e", 1)}
}),

addLayer("e", {
    name: "Escaping", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#408D8E",
    requires: new Decimal(1e5), // Can be a function that takes requirement increases into account
    resource: "Escaping", // Name of prestige currency
    baseResource: "Crafting", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for Escaping", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("s",43)},
branches: ["r", "i", "c"],

milestones: {
    1: {
        requirementDescription: "1 Inch away the island",
        effectDescription: "Get 1 escaping",
        done() { return player.e.points.gte(1) }
    },
    2: {
        requirementDescription: "Get 2 Inches away from this island",
        effectDescription: "Get 2 escapings",
        done() { return player.e.points.gte(2) }
    },

    3: {
        requirementDescription: "Get 4 Inches away from this island",
        effectDescription: "Get 4 escapings",
        done() { return player.e.points.gte(4) }
    },

    4: {
        requirementDescription: "Get 7 Inches away from this island",
        effectDescription: "Get 7 escapings",
        done() { return player.e.points.gte(7) }
    },

    5: {
        requirementDescription: "Get 15 Inches away from this island",
        effectDescription: "Get 15 escapings",
        done() { return player.e.points.gte(15) }
    },

    6: {
        requirementDescription: "Get 1,000 Inches away from this island",
        effectDescription: "Get 1e3 escapings",
        done() { return player.e.points.gte(1e3) }
    },

    
    7: {
        requirementDescription: "Get 50.8 Meters away from this island",
        effectDescription: "Get 2e3 escapings",
        done() { return player.e.points.gte(2e3) }
    },

    8: {
        requirementDescription: "Get 254 Meters away from this island",
        effectDescription: "Get 1e4 escapings",
        done() { return player.e.points.gte(1e4)},
        unlocked(){
            {return hasMilestone("o", 2)}
        }
    },

    9: {
        requirementDescription: "Get 2540 Meters away from this island",
        effectDescription: "Get 1e5 escapings",
        done() { return player.e.points.gte(1e5)},
        unlocked(){
            {return hasMilestone("o", 2)}
        }
    },


},
resetsNothing() {return hasUpgrade("s", 44)}
}),

addLayer("o", {
    name: "Ocean", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#1F38DE",
    requires: new Decimal(3e3), // Can be a function that takes requirement increases into account
    resource: "Ocean", // Name of prestige currency
    baseResource: "Escaping", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        
        
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "O: Reset for Ocean", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("e",7)},
branches: ["e", "r", "i"],

milestones: {
    1: {
        requirementDescription: "1 Ocean",
        effectDescription: "Your stranded in a ocean now?!",
        done() { return player.o.points.gte(1) }
    },

    2: {
        requirementDescription: "2 Oceans",
        effectDescription: "Just keep calm.",
        done() { return player.o.points.gte(2) }
    },

    3: {
        requirementDescription: "3 Oceans",
        effectDescription: "You are getting further from that island!",
        done() { return player.o.points.gte(3) }
    },
},

upgrades: {
    11: {
        title: "Ocean madness",
        description: "If your traped in the ocean jsut do the same thing.",
        cost: new Decimal(1),
        unlocked(){
            {return hasMilestone("o", 2)}
        }
    }, 

    12: {
        title: "Stranded in the ocean",
        description: "Just have to figure it out.",
        cost: new Decimal(2),
        unlocked(){
            {return hasMilestone("o", 2)}
        }
    }, 

    21: {
        title: "The way out",
        description: "Almost there!",
        cost: new Decimal(5),
        unlocked(){
            {return hasMilestone("e", 9)}
        }
    }, 

    22: {
        title: "A city",
        description: "You did it!",
        cost: new Decimal(25),
        unlocked(){
            {return hasMilestone("e", 9)}
        }
    }, 
}


}) 