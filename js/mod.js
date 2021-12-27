let modInfo = {
	name: "The Stranded Tree",
	id: "Caty",
	author: "nobody",
	pointsName: "skills",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2",
	name: "Crafter",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.2</h3><br>
		I DONT DO THIS THING`

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

	if (hasUpgrade('s', 11)) gain = gain.times(2)
	if (hasUpgrade('s', 12)) gain = gain.times(2)
	if (hasUpgrade('s', 13)) gain = gain.times(3)
	if (hasUpgrade('s', 21)) gain = gain.times(5)
	if (hasUpgrade('s', 22)) gain = gain.times(6)
	if (hasUpgrade('s', 23)) gain = gain.times(10)
	if (hasMilestone('i', 0)) gain = gain.times(20)
	if (hasUpgrade('s', 31)) gain = gain.times(10)
	if (hasUpgrade('s', 33)) gain = gain.times(30)
	if (hasChallenge('i', 11)) gain = gain.times(35)
	if (hasChallenge('i', 12)) gain = gain.times(35)
	if (hasChallenge('i', 13)) gain = gain.times(50)
	if (hasUpgrade('c', 11)) gain = gain.times(15)
	if (hasUpgrade('c', 12)) gain = gain.times(40)
		

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