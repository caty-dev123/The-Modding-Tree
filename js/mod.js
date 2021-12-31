let modInfo = {
	name: "The Element Tree",
	id: "mymod",
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
	if (hasUpgrade('h', 11)) gain = gain.times(2)
	if (hasUpgrade('h', 12)) gain = gain.times(2)
	if (hasUpgrade('h', 13)) gain = gain.times(10)
	if (hasUpgrade('h', 14)) gain = gain.times(12.5)
	if (hasUpgrade('h', 21)) gain = gain.times(15)
	if (hasUpgrade('h', 22)) gain = gain.times(20)
	if (hasUpgrade('h', 23)) gain = gain.times(50)
	if (hasUpgrade('h', 24)) gain = gain.times(125)
	if (hasUpgrade('h', 25)) gain = gain.times(125)
	if (hasUpgrade('h', 31)) gain = gain.times(250)
	if (hasUpgrade('h', 32)) gain = gain.times(250)
	if (hasUpgrade('h', 33)) gain = gain.times(750)
	if (hasUpgrade('h', 34)) gain = gain.times(1.5e3)
	if (hasUpgrade('h', 35)) gain = gain.times(1e4)
	if (hasUpgrade('slr', 11)) gain = gain.times(1e5)
	if (hasUpgrade('slr', 12)) gain = gain.times(1e5)
	if (hasUpgrade('h', 41)) gain = gain.times(1e6)
	if (hasUpgrade('c', 11)) gain = gain.times(1e6)
	if (hasUpgrade('slr', 13)) gain = gain.times(1e7)
	if (hasUpgrade('h', 42)) gain = gain.times(1e8)
	if (hasUpgrade('c', 12)) gain = gain.times(1e9)
	if (hasUpgrade('h', 43)) gain = gain.times(1e10)
	if (hasUpgrade('c', 13)) gain = gain.times(1e12)
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