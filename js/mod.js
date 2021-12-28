let modInfo = {
	name: "The Chained Tree",
	id: "Caty-TCT",
	author: "nobody",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('a', 11)) gain = gain.times(1.5)
	if (hasUpgrade('a', 12)) gain = gain.times(2)
	if (hasUpgrade('a', 13)) gain = gain.times(2)
	if (hasUpgrade('a', 21)) gain = gain.times(2)
	if (hasUpgrade('a', 22)) gain = gain.times(2)
	if (hasUpgrade('a', 23)) gain = gain.times(10)
	if (hasUpgrade('a', 31)) gain = gain.times(12)
	if (hasUpgrade('a', 32)) gain = gain.times(15)
	if (hasUpgrade('a', 33)) gain = gain.times(15)
	if (hasUpgrade('b', 11)) gain = gain.times(15)
	if (hasUpgrade('b', 12)) gain = gain.times(20)
	if (hasUpgrade('b', 14)) gain = gain.times(20)
	if (hasChallenge('b', 11)) gain = gain.times(25)
	if (hasUpgrade('b', 22)) gain = gain.times(30)
	if (hasMilestone('c', 0)) gain = gain.times(50)
	if (hasUpgrade('b', 31)) gain = gain.times(30)
	if (hasUpgrade('b', 32)) gain = gain.times(100)
	if (hasUpgrade('c', 11)) gain = gain.times(250)
	if (hasUpgrade('c', 12)) gain = gain.times(500)
	if (hasUpgrade('b', 41)) gain = gain.times(5e3)
	if (hasUpgrade('b', 42)) gain = gain.times(2e4)
	if (hasUpgrade('b', 43)) gain = gain.times(1e5)
	if (hasUpgrade('sb', 11)) gain = gain.times(1e7)
	if (hasUpgrade('sb', 12)) gain = gain.times(1e8)
	if (hasChallenge('d', 11)) gain = gain.times(1e12)
	if (player.d.unlocked) gain = gain.times(1e10)
	if (hasUpgrade('ma', 11)) gain = gain.times(2)
	if (hasUpgrade('sb', 21)) gain = gain.times(1e10)
	if (hasUpgrade('sb', 22)) gain = gain.times(1e15)
	if (hasUpgrade('d', 13)) gain = gain.times(1e25)
	if (hasUpgrade('c', 13)) gain = gain.times(1e40)
	if (hasChallenge('d', 12)) gain = gain.times(1e30)
	if (player.e.unlocked) gain = gain.times(1e30)
	if (hasMilestone('e', 0)) gain = gain.times(1e40)
	if (hasMilestone('e', 1)) gain = gain.times(1e45)
	if (hasMilestone('e', 2)) gain = gain.times(1e100)
	if (hasUpgrade('mb', 12)) gain = gain.times(1e100)
	if (player.f.unlocked) gain = gain.times(1e200)
	if (hasUpgrade('a', 42)) gain = gain.times(1e300)
	if (hasUpgrade('a', 43)) gain = gain.times("1e310")
	if (hasUpgrade('a', 14)) gain = gain.times("1e400")
	if (hasMilestone('f', 2)) gain = gain.times("1e450")
	if (hasUpgrade('a', 34)) gain = gain.times("1e400")
	if (hasUpgrade('a', 24)) gain = gain.times("1e400")
	if (hasUpgrade('f', 11)) gain = gain.times("1e515")
	if (hasUpgrade('a', 44)) gain = gain.times("1e750")
	if (hasUpgrade('f', 13)) gain = gain.times("1e800")
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}