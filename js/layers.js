addLayer("ap", {
    name: "achievement points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: " ★ ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffd966",
    requires: new Decimal(0.1), // Can be a function that takes requirement increases into account
    resource: "Achievement points", // Name of prestige currency
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
    hotkeys: [
        {key: "a", description: "a: Reset for Achievement points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    tabFormat: {
        "Main tab": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "achievements"
            ],
        },
        "Mystery Box": {
            content: [
                "upgrades",
                "clickables"
            ],
            unlocked(){return hasAchievement('ap',14)}
        },
    },
    achievements: {
        11: {
            name: "Your 1st AP",
            doneTooltip: "You did it!",
            done(){return player.ap.points.gte(1)},
            image: "https://tse1.mm.bing.net/th?id=OIP.JyK6nDo6dZMLFDRTFVtbRgHaHC&pid=Api&rs=1&c=1&qlt=95&w=129&h=122"
        },
        12: {
            name: "10 is better than 1",
            doneTooltip: "Point gain is now doubled (Finally a boost!)",
            done(){return player.ap.points.gte(10)},
            image: "https://tse1.mm.bing.net/th?id=OIP.KvnxxN_e1hw7FCaJ_GXx7wHaGD&pid=Api&rs=1&c=1&qlt=95&w=131&h=107"
        },
        13: {
            name: "Grinder",
            doneTooltip: "That's alot of AP",
            done(){return player.ap.points.gte(15)},
            image: "https://tse1.mm.bing.net/th?id=OIP.8urQO4lWTUWumOrhEjgZEQHaHe&pid=Api&rs=1&c=1&qlt=95&w=109&h=110"
        },
        14: {
            name: "The mystery box",
            doneTooltip: "What could it be?",
            done(){return player.ap.points.gte(20)},
            image: "https://tse1.mm.bing.net/th?id=OIP.BW9PHnj6o3ZVStqgRszMgQHaFd&pid=Api&rs=1&c=1&qlt=95&w=152&h=112"
        },
        15: {
            name: "1 Point",
            doneTooltip: "That's better than 0.1",
            done(){return player.points.gte(1)},
            image: "https://tse1.mm.bing.net/th?id=OIP.74USWHuC3H98BvqGpteF-gHaKF&pid=Api&rs=1&c=1&qlt=95&w=90&h=123"
        },
        16: {
            name: "5 Point",
            doneTooltip: "That's better than 1 (x1.2 point boost)",
            done(){return player.points.gte(5)},
            image: "https://tse1.mm.bing.net/th?id=OIP.DcUb6Onfo94vdHiP_DgYywHaIv&pid=Api&rs=1&c=1&qlt=95&w=93&h=109"
        },
        21: {
            name: "City of AP",
            doneTooltip: "50 AP is so much!",
            done(){return player.ap.points.gte(50)},
            image: "https://tse1.mm.bing.net/th?id=OIP.ObeUM8OoENLoespFGz2VUwHaJB&pid=Api&rs=1&c=1&qlt=95&w=92&h=112"
        },
        22: {
            name: "AP Mania",
            doneTooltip: "200 AP?",
            done(){return player.ap.points.gte(200)},
            image: "https://tse1.mm.bing.net/th?id=OIP.a2UxoPu0G7iVGHWljWUYqAHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
        },
        23: {
            name: "6 Points?",
            doneTooltip: "Six is better than five (Also x2 point boost)",
            done(){return player.points.gte(6)},
            image: "https://tse1.mm.bing.net/th?id=OIP.ks7Q9M3FQAYNbR3QKqVnKQHaML&pid=Api&rs=1&c=1&qlt=95&w=67&h=111"
        },
        24: {
            name: "???",
            doneTooltip: "You got it? HOW? (x1.01 point gain boost)",
            done(){return hasUpgrade('ap',14)},
            image: "https://tse1.mm.bing.net/th?id=OIP.csWpWfZSKpOpWKrL_Gt_6gHaEK&pid=Api&rs=1&c=1&qlt=95&w=182&h=102"
        },
        25: {
            name: "10 Points",
            doneTooltip: "Almost 100 Points",
            done(){return player.points.gte(10)},
            image: "https://tse1.mm.bing.net/th?id=OIP.bQZzXBJvKxU2zAF2hLQGIwHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107"
        },
        26: {
            name: "30 Points",
            doneTooltip: "20 more points to get 50 points",
            done(){return player.points.gte(30)},
            image: "https://tse1.mm.bing.net/th?id=OIP.vgWkd-CPVqX7C3pnWZ5fEgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104"
        },
        31: {
            name: "Shiny!",
            doneTooltip: "You have 1 Gold!",
            done(){return player.g.points.gte(1)},
            image: "https://tse1.mm.bing.net/th?id=OIP.3S-80PYoCXpgcLIgfyQwrwHaEt&pid=Api&rs=1&c=1&qlt=95&w=153&h=97"
        },
        32: {
            name: "AP Madness",
            doneTooltip: "1,000 AP?",
            done(){return player.ap.points.gte(1e3)},
            image: "https://tse1.mm.bing.net/th?id=OIP.qa866g-LILg2wop5l3huUAHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
        },
        33: {
            name: "AP Insanity",
            doneTooltip: "5,000 AP IS JUST CRAZY",
            done(){return player.ap.points.gte(5e3)},
            image: "https://tse1.mm.bing.net/th?id=OIP.-YvrwQJppmxjeQtpP5zOOwHaHI&pid=Api&rs=1&c=1&qlt=95&w=121&h=117"
        },
        34: {
            name: "ERRROROROROROROOR ERRROR ERROR ERRROROROR",
            doneTooltip: "A?DSF?ASDF?A?SD(B@BM@*GA,",
            done(){return hasUpgrade('ap',15)},
            image: "https://tse1.mm.bing.net/th?id=OIP.amx3TUI3HOtgR8PpAjnFUgHaE8&pid=Api&rs=1&c=1&qlt=95&w=163&h=109"
        },
        35: {
            name: "Rich",
            doneTooltip: "5 Gold is alot",
            done(){return player.g.points.gte(5)},
            image: "https://tse1.mm.bing.net/th?id=OIP.eO6s7VhGj-ILpmxUAVCPfwHaFj&pid=Api&rs=1&c=1&qlt=95&w=147&h=110"
        },
        36: {
            name: "Richer",
            doneTooltip: "6 Gold better than 5",
            done(){return player.g.points.gte(6)},
            image: "https://tse1.mm.bing.net/th?id=OIP.chAArMSzJftz6_vCd7x1igHaFj&pid=Api&rs=1&c=1&qlt=95&w=141&h=105"
        },
        41: {
            name: "Upgrades",
            doneTooltip: "Have 1 upgrade point!",
            done(){return player.up.points.gte(1)},
            image: "https://tse1.mm.bing.net/th?id=OIP.y3leHzoyLDPxI8Q6qNSGSgHaHh&pid=Api&rs=1&c=1&qlt=95&w=90&h=91"
        },
        42: {
            name: "100 Points",
            doneTooltip: "THAT'S ALOT",
            done(){return player.points.gte(100)},
            image: "https://tse1.mm.bing.net/th?id=OIP.PHnhI-VMnn6GbKMP-NBc0AHaEW&pid=Api&rs=1&c=1&qlt=95&w=210&h=123"
        },
        43: {
            name: "UPGRADES",
            doneTooltip: "The second upgrade is always nice!",
            done(){return hasUpgrade('up',21)},
            image: "https://tse1.mm.bing.net/th?id=OIP.y1BvUR85n2lv8FHthqh-jQHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107"
        },
        44: {
            name: "The Barrier",
            doneTooltip: "Have the (UPGRADE III THE BARRIER)",
            done(){return hasUpgrade('up',31)},
            image: "https://tse1.mm.bing.net/th?id=OIP.lqSoyiAtJHILCJ7Ei7An9gHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105"
        },
        45: {
            name: "Too many points",
            doneTooltip: "500 Points is just insane",
            done(){return player.points.gte(500)},
            image: "https://tse1.mm.bing.net/th?id=OIP.OPGmgbG3P37-seVHsGz4PAHaHa&pid=Api&rs=1&c=1&qlt=95&w=100&h=100"
        },
        46: {
            name: "25,000 AP",
            doneTooltip: "How did you do it?",
            done(){return player.ap.points.gte(2.5e4)},
            image: "https://tse1.mm.bing.net/th?id=OIP.q8DLMiZddCvX4DTgeXNamQHaGX&pid=Api&rs=1&c=1&qlt=95&w=142&h=122"
        },

    },
    upgrades: {
        11: {
            title: "??? I",
            description: "???",
            cost(){return new Decimal(10)},
            cost(){
                if(hasUpgrade("ap",12)){
                if(hasUpgrade("ap",12))return new Decimal("1ee10")
                else return new Decimal("1ee10")
            }
            if(hasUpgrade("ap",13)){
                if(hasUpgrade("ap",13))return new Decimal("1ee10")
            }
                else return new Decimal(10)
            }
              // order of upgrade ids doesn't matter
        },
        21: {
            title: "??? I PATH",
            description: "/2 point gain",
            cost(){return new Decimal(5)},
            unlocked(){return hasUpgrade('ap',11)}
        },
        31: {
            title: "PRIZE I",
            description: "x1.5 point gain",
            cost(){return new Decimal(10)},
            unlocked(){return hasUpgrade('ap',21)}
        },
        41: {
            title: "Golden",
            description: "Unlock golden layer ",
            cost(){return new Decimal(25)},
            unlocked(){return hasUpgrade('ap',31)}
        },
        12: {
            title: "??? II",
            description: "???",
            cost(){return new Decimal(10)},
            cost(){
                if(hasUpgrade("ap",11)){
                if(hasUpgrade("ap",11))return new Decimal("1ee10")
                else return new Decimal("1ee10")
            }
            if(hasUpgrade("ap",13)){
                if(hasUpgrade("ap",13))return new Decimal("1ee10")
            }
                else return new Decimal(10)
            }
        },
         22: {
            title: "??? II PATH",
            description: "/4 point gain",
            cost(){return new Decimal(0)},
            unlocked(){return hasUpgrade('ap',12)}
        },
        32: {
            title: "PRIZE II",
            description: "Point gain is multiplied by AP slightly",
            cost(){return new Decimal(10)},
            unlocked(){return hasUpgrade('ap',22)},
            effect() {
                return player[this.layer].points.add(1).pow(0.125)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        42: {
            title: "PRIZE II2",
            description: "x3 point gain",
            cost(){return new Decimal(44)},
            unlocked(){return hasUpgrade('ap',32)},
        },
        13: {
            title: "??? III",
            description: "???",
            cost(){return new Decimal(10)},
            cost(){
                if(hasUpgrade("ap",11)){
                if(hasUpgrade("ap",12))return new Decimal("1ee10")
                else return new Decimal("1ee10")
            }
            if(hasUpgrade("ap",12)){
                if(hasUpgrade("ap",12))return new Decimal("1ee10")
            }
                else return new Decimal(10)
            }
        },
        23: {
            title: "??? III PATH",
            description: "/1.5 point gain",
            cost(){return new Decimal(0)},
            unlocked(){return hasUpgrade('ap',13)}
        },
        33: {
            title: "PRIZE III",
            description: "x2 point gain",
            cost(){return new Decimal(10)},
            unlocked(){return hasUpgrade('ap',23)}
        },
        43: {
            title: "PRIZE III2",
            description: "x2.6 point gain",
            cost(){return new Decimal(50)},
            unlocked(){return hasUpgrade('ap',33)}
        },
        14: {
            title: "Unknown",
            description: "Unknown",
            cost(){return new Decimal(0)},
            unlocked(){return true},
            cost(){
                if(hasUpgrade("ap",15)){
                if(hasUpgrade("ap",15))return new Decimal("1ee10")
                else return new Decimal("1ee10")
            }
            if(hasUpgrade("ap",15)){
                if(hasUpgrade("ap",15))return new Decimal("1ee10")
            }
                else return new Decimal(0)
            }
        },
        15: {
            title: "Error",
            description: "Error",
            cost(){return new Decimal(0)},
            unlocked(){return true},
            cost(){
                if(hasUpgrade("ap",14)){
                if(hasUpgrade("ap",14))return new Decimal("1ee10")
                else return new Decimal("1ee10")
            }
            if(hasUpgrade("ap",14)){
                if(hasUpgrade("ap",14))return new Decimal("1ee10")
            }
                else return new Decimal(0)
            }
        },
        24: {
            title: "The First Layer",
            description: "What layer can it be?",
            cost(){return new Decimal(300)},
            unlocked(){return true},
        },
    },
    clickables: {
        11: {
            display() {return "Reset upgrades"},
            onClick(){return  player.ap.upgrades = ["reset"]},
            canClick(){return true}
        },
        
    }
}),
addLayer("g", {
    name: "gold", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: " ★ ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f1c232",
    requires: new Decimal(50), // Can be a function that takes requirement increases into account
    resource: "Gold", // Name of prestige currency
    baseResource: "ap", // Name of resource prestige is based on
    baseAmount() {return player.ap.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('ap',41)},
    image: "https://tse1.mm.bing.net/th?id=OIP.jcXcU5LROLnni9oA-BylUQHaHa&pid=Api&rs=1&c=1&qlt=95&w=97&h=97",
    tabFormat: {
        "Main tab": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "milestones"
            ],
        },
    },
    milestones: {
        1: {
            requirementDescription: "2 Gold",
            effectDescription: "Double point gain.",
            done() { return player.g.points.gte(2) }
        },
        2: {
            requirementDescription: "5 Gold",
            effectDescription: "Triple point gain.",
            done() { return player.g.points.gte(5) }
        },
        3: {
            requirementDescription: "7 Gold",
            effectDescription: "x2 to point gain",
            done() { return player.g.points.gte(7) }
        }
    }
}),
addLayer("up", {
    name: "upgrade points", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b22c2c",
    requires: new Decimal(30), // Can be a function that takes requirement increases into account
    resource: "Upgrade points", // Name of prestige currency
    baseResource: "gold", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.6, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return hasUpgrade('ap',24)},
    image: "https://tse1.mm.bing.net/th?id=OIP.8Vrfv-OX5mT6pAyWt3eTRAHaHa&pid=Api&rs=1&c=1&qlt=95&w=91&h=91",
    tabFormat: {
        "Main tab": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "upgrades"
            ],
        },
    },
    upgrades: {
        11: {
            title: "UPGRADE I",
            description: "x1.1 point gain",
            cost: new Decimal(1)
        },
        21: {
            title: "UPGRADE II",
            description: "x1.2 point gain",
            cost: new Decimal(3),
            unlocked(){return hasUpgrade('up',11)}
        },
        31: {
            title: "UPGRADE III (The Barrier)",
            description: "Divide by 1.2 of point gain",
            cost: new Decimal(0),
            unlocked(){return hasUpgrade('up',21)}
        }
    }
})
