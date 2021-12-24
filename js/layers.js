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
        if (hasUpgrade('s', 12)) mult = mult.times(3)
        if (hasMilestone('l', 0)) mult = mult.times(10)
        if (hasChallenge('s', 12)) mult = mult.times(8)

       

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

        16: {
            title: "School Days",
            description: "It is getting slower at school maybe some boost will help?",
            cost: new Decimal(500),
            unlocked() {
                return hasUpgrade("b", 15)

            }
                 
        },

        17: {
            title: "Ancient Ways",
            description: "These are the ancient ways.",
            cost: new Decimal(3e3),
            unlocked() {
                return hasUpgrade("s", 14)

            }
                 
        },

        18: {
            title: "GAS GAS GAS",
            description: "GAS GAS GAS IM GONNA STEP ON THE GAS",
            cost: new Decimal(1e4),
            unlocked() {
                return hasUpgrade("b", 17)

            }
                 
        },
    
        
    },
    
    passiveGeneration(){
        {return hasUpgrade("b",17)}
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
        if (hasUpgrade('b', 16)) mult = mult.times(2)
        if (hasUpgrade('l', 11)) mult = mult.times(3)
        if (hasUpgrade('m', 11)) mult = mult.times(10)
        if (hasChallenge('s', 13)) mult = mult.times(8)
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

        12: {
            title: "Basic Schooling",
            description: "Now It is time for power",
            cost: new Decimal(5),
            unlocked() {
                return hasUpgrade("b", 15)
            }
            
            
        },

        13: {
            title: "Basic Mastering",
            description: "We have masterd the basics!!!",
            cost: new Decimal(10),
            unlocked() {
                return hasUpgrade("s", 12)
            }
            
            
        },

        14: {
            title: "THE BASICS",
            description: "Well at least I thought we masterd it",
            cost: new Decimal(1e3),
            unlocked() {
                return hasUpgrade("s", 13)
            }
            
            
        },

        15: {
            title: "Learning School",
            description: "It is time for learning",
            cost: new Decimal(1e4),
            unlocked() {
                return hasUpgrade("s", 14)
            }
            
            
        },

        16: {
            title: "Science Classes",
            description: "You are now allowed to do science horray!",
            cost: new Decimal(9e4),
            unlocked() {
                return hasUpgrade("s", 15)
            }
            
            
        },

        17: {
            title: "School Management",
            description: "You are the manager of the school now",
            cost: new Decimal(2e5),
            unlocked() {
                return hasUpgrade("s", 16)
            }
            
            
        },



        
    },

    challenges: {
        11: {
            name: "Math Class",
            challengeDescription: "Looks like it is time for math? Just get 100 basics no buffs in this one",
            canComplete: function() {return player.b.points.gte(100)},
            goal(){
                return "100 Basics"
            },
            rewardDescription(){return "More Points"},
           
        },
        
        12: {
            name: "Algreba",
            challengeDescription: "Just get 100 basics",
            canComplete: function() {return player.b.points.gte(100)},
            goal(){
                return "100 Basics"
            },
            rewardDescription(){return "More Points"},
            unlocked() {
                return hasUpgrade("l", 12)
              }
            
        },

        13: {
            name: "Calculus",
            challengeDescription: "Get 1e3 Basics",
            canComplete: function() {return player.b.points.gte(1e3)},
            goal(){
                return "1e3 Basics"
            },
            rewardDescription(){return "Gain more S"},
            unlocked() {
                return hasUpgrade("l", 13)
              }
            
        },
    },

    resetsNothing(){return hasUpgrade("s",13)}
   
})

addLayer("l", {
    
    name: "Learning", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#FFA600",
    requires: new Decimal(200), // Can be a function that takes requirement increases into account
    resource: "Learnings", // Name of prestige currency
    baseResource: "Basics", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        if (hasMilestone('l', 1)) mult = mult.times(2)
        if (hasUpgrade('m', 13)) mult = mult.times(10)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "l: Reset for Learnings", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    layerShown() {
        return hasUpgrade('s', 15) || player.l.unlocked
},
branches: [ "b"],

upgrades: {

    11: {
        title: "Knowledge",
        description: "Smart moment",
        cost: new Decimal(1),
        
    },

    12: {
        title: "Books",
        description: "Unlock a New Challenge",
        cost: new Decimal(20),
        
    },

    13: {
        title: "Preperation",
        description: "Unlock a New Challenge",
        cost: new Decimal(90),
        
    },


},

milestones: {
    0: {
        requirementDescription: "10 Learnigns",
        effectDescription: "Effect: You gain more B",
        done() { return player.l.points.gte(10) },
        effect() {
          
        }
    },

    1: {
        requirementDescription: "500 Learnigns",
        effectDescription: "Effect: You gain more L",
        done() { return player.l.points.gte(500) },
        effect() {
          
        }
    }
   
}

})


addLayer("m", {
    
    name: "Management", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#65FFE1",
    requires: new Decimal(200), // Can be a function that takes requirement increases into account
    resource: "Management", // Name of prestige currency
    baseResource: "Schools", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.10, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "m: Reset for Management", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    layerShown() {
        return hasUpgrade('s', 17) || player.m.unlocked
},
branches: [ "s","l"], 


upgrades: {

    11: {
        title: "Students",
        description: "Your students are becoming better by the day (boosts point gain)",
        cost: new Decimal(1),
    },

    12: {
        title: "School Renovating",
        description: "Well the school has to look better right?",
        cost: new Decimal(3),
    },

    13: {
        title: "More Learning",
        description: "The more you learn the more you gain?",
        cost: new Decimal(7),
    },

    14: {
        title: "Back To The Start",
        description: "Well Again?",
        cost: new Decimal(7),
        unlocked (){
            {return hasUpgrade("m",13)}
        }
    },

    15: {
        title: "Smart Power",
        description: "POWER!!!! OF THE BRAIN",
        cost: new Decimal(250),
        unlocked (){
            {return hasUpgrade("m",14)}
        }
    },

},
milestones: {
    0: {
        requirementDescription: "5e4 M",
        effectDescription: "You gain 100% of managment",
        done() { return player.m.points.gte(50000) }
    }
    
},
passiveGeneration(){
    {return hasMilestone("m",0)}
}
}),

addLayer("r", {
    
    name: "Researches", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#B1B1B1",
    requires: new Decimal(300), // Can be a function that takes requirement increases into account
    resource: "Management", // Name of prestige currency
    baseResource: "Learnings", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.23, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "r: Reset for Researches", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    layerShown() {
        return hasUpgrade('m', 15) || player.r.unlocked
}, 




})