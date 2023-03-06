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
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    unlocked() {return player.ba.points.gte(2)},
    autoPrestige(){return hasUpgrade('rf',11)},
    resetsNothing(){return hasUpgrade('rf',12)},
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
    layerShown(){return true},
    unlocked() {return player.ac.points.gte(500)},
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
            cost: new Decimal(35)
        }
    }
})
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
        unlocked() {return hasUpgrade('pop', 23)} // Determines if you can use the hotkey, optional
    }
],
    layerShown(){return true},
    unlocked(){return hasUpgrade('pop', 23)},
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
branches: ['ba'],
upgrades: {
    11: {
        title: "Addition",
        description: "science first!",
        cost: new Decimal(0)
    }
}
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
    unlocked(){return hasUpgrade('ma',11)},
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
        cost: new Decimal(1)
    }
}
})
