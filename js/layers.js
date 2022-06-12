addLayer("a", {
    name: "ants", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#AA0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "ants", // Name of prestige currency
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
        {key: "a", description: "a: ants", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
        11: {
            title: "no.",
            description: "no.",
            cost: new Decimal(1),
        },
        12: {
            title: "ant hill.",
            description: "unlock power strong generator",
            cost: new Decimal(3.6),
        },
        13: {
            title: "good ants make good ants",
            description: "ANTS BOOST POINT GAIN AS WELL :):):):)::):):):):)",
            cost: new Decimal(10),
            unlocked(){return hasChallenge("apsg",11)},
            effect() {
                return player.a.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
    },

    achievements: {
        11: {
            name: "Didn't I say no?",
            tooltip: "Don't click the no upgrade please",
            done() {return hasUpgrade("a",11)}
        
        },
        12: {
            name: "100 Hundred hunadfka adfaa",
            tooltip: "Get 11 points",
            done() {return player.points.gte(11)}
        
        },
        13: {
            name: "DONT LOOK AT TOOLTIP",
            tooltip: "Get 111 points",
            done() {return player.points.gte(111)},
            
        
        },
        
    }
}),

addLayer("apsg", {
    name: "ant power strong generator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "APSG", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF6C6C",
    requires: new Decimal(4), // Can be a function that takes requirement increases into account
    resource: "ant power strong generator", // Name of prestige currency
    baseResource: "ants", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "no", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("a",12)},
    tabFormat: {
        "Main tab": {
            content: [
                "main-display",
                "prestige-button"
            ],
            
        },
        "APSG upgrades": {
            content: [
                "main-display",
                "upgrades"
            ],
          
        },
        "APSG ugly challenges": {
            content: [
                "main-display",
                "challenges"
            ],
          unlocked(){return hasUpgrade("apsg",13)}
        },
        
    },
    upgrades: {
        11: {
            title: "good power generator that generates good ants with points",
            description: "APSG boost point gain??? that is the coolest feature ever!!!!!!",
            cost: new Decimal(0.90),
            effect() {
                return player.apsg.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        12: {
            title: "This upgrade does not make you keep this layer so please dont buy it it's a waste of money",
            description: "wow! this upgrade should do something uhhhhhhhh",
            cost: new Decimal(2),
    
        },
        13: {
            title: "Unlock some cool things like useless challenges!",
            description: "These cool challenges are legit they do not scam for example complete a challenge then unlock some cool new things dont mind this long title its a description wait uhhhhh what was it again nevermind.",
            cost: new Decimal(6),
    
        },
        14: {
            title: "Become rich $$$",
            description: "SOOO RICH LIKE IM GETTING A JOB wait I have to get job power first :((((((((((",
            cost: new Decimal(10),
            unlocked(){return hasChallenge("apsg",12)}
    
        },
    },

    challenges: {
        11: {
            name: "Good point",
            challengeDescription: "get 100 points but nothing happens!?!?!!??!!? this is SOOOOOOOOO EASSYYYYY I DID IT IN 0 SECONDSSSS reward is so cool you wont belive it's unlock some upgrades",
            goal: "100",
            canComplete: function() {return player.points.gte(100)},
            
        },

        12: {
            name: "Good point(s) with points(s)",
            challengeDescription: "I think this one does something cool like divides point gain maybe not but still hope you enjoy the reward is money $$$",
            goal: "100",
            canComplete: function() {return player.points.gte(100)},
            
        },
        
    }
}),

addLayer("jp", {
    name: "job power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "JP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#747474",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Job power", // Name of prestige currency
    baseResource: "ants", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade("apsg",14)},

    hotkeys: [
        {key: "j", description: "hmm", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

})
