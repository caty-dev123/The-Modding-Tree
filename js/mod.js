let modInfo = {
	name: "The Long Tree",
	id: "The-Long-Tree",
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
	if (hasUpgrade('sp', 11)) gain = gain.times(1.5)
	if (hasUpgrade('sp', 12)) gain = gain.times(2)
	if (hasUpgrade('sp', 21)) gain = gain.times(2)
	if (hasUpgrade('sp', 22)) gain = gain.times(2)
	if (hasUpgrade('p', 11)) gain = gain.times(4.5)
	if (hasUpgrade('p', 12)) gain = gain.times(8)
	if (hasUpgrade('sp', 13)) gain = gain.times(10)
	if (hasUpgrade('sp', 23)) gain = gain.times(5)
	if (hasUpgrade('p', 21)) gain = gain.times(12)
	if (hasUpgrade('bp', 11)) gain = gain.times(10)
	if (hasUpgrade('bp', 12)) gain = gain.times(10)
	if (hasUpgrade('p', 13)) gain = gain.times(15)
	if (hasUpgrade('p', 23)) gain = gain.times(25)
	if (hasUpgrade('sp', 31)) gain = gain.times(30)
	if (hasChallenge('bp', 11)) gain = gain.times(40)
	if (hasUpgrade('sp', 32)) gain = gain.times(50)
	if (hasUpgrade('sp', 33)) gain = gain.times(100)
	if (hasChallenge('bp', 12)) gain = gain.times(250)
	if (hasUpgrade('gp', 11)) gain = gain.times(100)
	if (hasUpgrade('p', 31)) gain = gain.times(500)
	if (hasUpgrade('gp', 13)) gain = gain.times(2e3)
	if (hasChallenge('bp', 13)) gain = gain.times(1e4)
	if (hasUpgrade('p', 32)) gain = gain.times(2e4)
	if (hasUpgrade('p', 33)) gain = gain.times(3e5)
	if (hasUpgrade('gp', 14)) gain = gain.times(1e6)
	if (hasMilestone('mp', 1)) gain = gain.times(1e5)
	if (hasUpgrade('gp', 15)) gain = gain.times(1e7)
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