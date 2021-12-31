addLayer("h", {
    name: "hydrogen", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D8EDFF",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Hydrogen", // Name of prestige currency
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
      title: "Hydrogen I",
      description: "Boost point gain",
      cost: new Decimal(1)
    },

    12: {
        title: "Hydrogen II",
        description: "Boost point gain even more",
        cost: new Decimal(10)
      },

      13: {
        title: "Hydrogen III",
        description: "Point gain is boosted even more",
        cost: new Decimal(20)
      },

      14: {
        title: "Hydrogen IV",
        description: "Even more point gain",
        cost: new Decimal(100)
      },

      15: {
        title: "Hydrogen V",
        description: "Unlock a new thing",
        cost: new Decimal(500)
      },

      21: {
        title: "Helium I",
        description: "Gain 100% of Hydrogen",
        cost: new Decimal(1e3),
        unlocked(){
            {return hasUpgrade("h",15)}
        }
      },

      
      22: {
        title: "Helium II",
        description: "Even more point gain",
        cost: new Decimal(4e4),
        unlocked(){
            {return hasUpgrade("h",21)}
        }
      },

       
      23: {
        title: "Helium III",
        description: "Even more point gain again",
        cost: new Decimal(1e5),
        unlocked(){
            {return hasUpgrade("h",22)}
        }
      },

      24: {
        title: "Helium IV",
        description: "Even more point gain once again",
        cost: new Decimal(4e5),
        unlocked(){
            {return hasUpgrade("h",23)}
        }
      },

      25: {
        title: "Helium V",
        description: "Even more point gain once more again",
        cost: new Decimal(5e6),
        unlocked(){
            {return hasUpgrade("h",24)}
        }
      },

      31: {
        title: "Hydrogen VI",
        description: "Just too much point gain",
        cost: new Decimal(5e7),
        unlocked(){
            {return hasUpgrade("h",25)}
        }
      },

      32: {
        title: "Hydrogen VII",
        description: "Once again the point gain go brrrr",
        cost: new Decimal(1e9),
        unlocked(){
            {return hasUpgrade("h",31)}
        }
      },

      33: {
        title: "Hydrogen VIII",
        description: "Point gain is just getting insane",
        cost: new Decimal(1e10),
        unlocked(){
            {return hasUpgrade("h",32)}
        }
      },

      34: {
        title: "Hydrogen VV",
        description: "Point gain more gain",
        cost: new Decimal(1e11),
        unlocked(){
            {return hasUpgrade("h",33)}
        }
      },

      
      35: {
        title: "Hydrogen X",
        description: "Unlock Solar power",
        cost: new Decimal(2e13),
        unlocked(){
            {return hasUpgrade("h",34)}
        }
      },

      41: {
        title: "Hydrogen XI",
        description: "Unlock a new layer",
        cost: new Decimal(1e21),
        unlocked(){
            {return hasUpgrade("h",35)}
        }
      },

      42: {
        title: "Hydrogen XII",
        description: "More and more over time ",
        cost: new Decimal(5e26),
        unlocked(){
            {return hasUpgrade("h",41)}
        }
      },

      43: {
        title: "Hydrogen XIII",
        description: "Auto gain Solar power ",
        cost: new Decimal(1e38),
        unlocked(){
            {return hasUpgrade("h",42)}
        }
      },
},

passiveGeneration() {return (hasUpgrade("h",21))}

}),

addLayer("c", {
    name: "cells", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FF24",
    requires: new Decimal(1e23), // Can be a function that takes requirement increases into account
    resource: "Cells", // Name of prestige currency
    baseResource: "Hydrogen", // Name of resource prestige is based on
    baseAmount() {return player.h.points}, // Get the current amount of baseResource
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
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    resetsNothing(){return true},
    branches: ["h"],

    passiveGeneration() {return (hasUpgrade("h",41)), 0.1},

    tabFormat: [
        "main-display",
        "milestones",
        "upgrades"
    ],

    upgrades: {
      
        11: {
            title: "Cells I",
            description: "Point gain be like",
            cost: new Decimal(20),
            unlocked(){
                {return hasUpgrade("h",41)}
            }
          },  

          12: {
            title: "Cells II",
            description: "Yes...",
            cost: new Decimal(100),
            unlocked(){
                {return hasUpgrade("c",11)}
            }
          },  

          13: {
            title: "Cells III",
            description: "More and more etc",
            cost: new Decimal(1e3),
            unlocked(){
                {return hasUpgrade("c",12)}
            }
          },  
    }

})

addLayer("a", {
    name: "Mini layer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "★", // This appears on the layer's node. Default is the id with the first letter capitalized
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
    layerShown(){return true},
    achievements: {
        11: {
            name: "1 total Hydrogen",
            done() {return player.h.points.gte(1)}
        },

        12: {
            name: "10 total Hydrogen",
            done() {return player.h.points.gte(10)}
        },

        13: {
            name: "100 total Hydrogen",
            done() {return player.h.points.gte(100)}
        },

        14: {
            name: "1e3 total Hydrogen",
            done() {return player.h.points.gte(1e3)}
        },

        15: {
            name: "1e5 total Hydrogen",
            done() {return player.h.points.gte(1e5)}
        },

        16: {
            name: "1e6 total Hydrogen",
            done() {return player.h.points.gte(1e6)}
        },

        17: {
            name: "1e8 total Hydrogen",
            done() {return player.h.points.gte(1e8)}
        },

        21: {
            name: "1e10 total Hydrogen",
            done() {return player.h.points.gte(1e10)}
        },

        22: {
            name: "1e12 total Hydrogen",
            done() {return player.h.points.gte(1e12)}
        },

        23: {
            name: "1e14 total Hydrogen",
            done() {return player.h.points.gte(1e14)}
        },

        24: {
            name: "1 total Solar power",
            done() {return player.slr.points.gte(1)}
        },

        25: {
            name: "1e18 total Hydrogen",
            done() {return player.h.points.gte(1e18)}
        },

        26: {
            name: "5 total Solar energy",
            done() {return player.slr.points.gte(5)}
        },

        27: {
            name: "10 total Cells",
            done() {return player.c.points.gte(10)}
        },

        31: {
            name: "10 total Solar power",
            done() {return player.slr.points.gte(10)}
        },

        32: {
            name: "1e27 total Hydrogen",
            done() {return player.h.points.gte(1e27)}
        },

        33: {
            name: "100 total Cells",
            done() {return player.c.points.gte(100)}
        },

        34: {
            name: "1e37 total Hydrogen",
            done() {return player.h.points.gte(1e37)}
        },

        35: {
            name: "1e42 total Hydrogen",
            done() {return player.h.points.gte(1e42)}
        },

        36: {
            name: "1e3 total Cells",
            done() {return player.c.points.gte(1e3)}
        },

        37: {
            name: "15 Solar power",
            done() {return player.slr.points.gte(15)}
        },



        
    },
    tabFormat: [
        "upgrades",
        "achievements"
    ]

}),

addLayer("slr", {
    name: "solar power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SlP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF7D00",
    requires: new Decimal(3e27), // Can be a function that takes requirement increases into account
    resource: "Solar power", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
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
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("h",35)},
upgrades: {
    11: {
        title: "Solar Energy I",
        description: "Solar power is very powerful",
        cost: new Decimal(1),
        unlocked(){
            {return hasUpgrade("h",34)}
        }
      },

      12: {
        title: "Solar Energy II",
        description: "Solar power is even more powerful",
        cost: new Decimal(5),
        unlocked(){
            {return hasUpgrade("slr",11)}
        }
      },

      13: {
        title: "Solar Energy III",
        description: "Solar power to the MAX",
        cost: new Decimal(10),
        unlocked(){
            {return hasUpgrade("slr",12)}
        }
      },
},

autoPrestige() {return hasUpgrade("h",43)}

})
