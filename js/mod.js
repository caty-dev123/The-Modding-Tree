let modInfo = {
	name: "The achievement Tree",
	id: "achievement",
	author: "caty",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0.01), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.5",
	name: "Secrets...",
}

let changelog = `<h1>Changelog:</h1><br>
<h3>v0.5</h3><br>
- added more stuff to UP<br>
- new row of achievements <br>
- New milestone in the gold layer <br>
- Some fixes <br>
- And a secret...
<h3>v0.4</h3><br>
- added more stuff to UP<br>
- new row of achievements <br>
- New milestone in the gold layer <br>
- Some fixes


<h3>v0.3</h3><br>
		- added stuff to UP<br>
		- added more stuff to gold and AP <br>
		- Lots of new achievements
<h3>v0.11</h3><br>
		- added more stuff to AP<br>
<h3>v0.1</h3><br>
		- added more stuff to AP<br>
		- Added a milestone to Gold <br>
		- started work on upgrade points layer
	<h3>v0.0</h3><br>
		- Started making AP.<br>
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

	let gain = new Decimal(0.01)
	if (hasAchievement('ap', 12)) gain = gain.times(2)
	if (hasUpgrade('ap', 21)) gain = gain.div(2)
	if (hasUpgrade('ap', 22)) gain = gain.div(4)
	if (hasUpgrade('ap', 23)) gain = gain.div(1.5)
	if (hasUpgrade('ap', 31)) gain = gain.times(1.5)
	if (hasUpgrade('ap', 32)) gain = gain.times(upgradeEffect('ap', 32))
	if (hasUpgrade('ap', 33)) gain = gain.times(2)
	if (hasAchievement('ap', 23)) gain = gain.times(2)
	if (hasAchievement('ap', 16)) gain = gain.times(1.2)
	if (hasAchievement('ap', 24)) gain = gain.times(1.01)
	if (hasUpgrade('ap', 42)) gain = gain.times(3)
	if (hasUpgrade('ap', 43)) gain = gain.times(2.6)
	if (hasMilestone('g', 1)) gain = gain.times(2)
	if (hasMilestone('g', 2)) gain = gain.times(3)
	if (hasUpgrade('up', 11)) gain = gain.times(1.1)
	if (hasUpgrade('up', 12)) gain = gain.times(1.2)
	if (hasUpgrade('up', 31)) gain = gain.div(1.2)
	if (hasMilestone('g', 3)) gain = gain.times(2)
	if (hasUpgrade('up', 41)) gain = gain.times(upgradeEffect('up', 41))
	if (hasMilestone('g', 4)) gain = gain.times(3)
	if (player.points.gte(1e5)) gain = gain.div(2)
	if (hasUpgrade('up', 51)) gain = gain.times(upgradeEffect('up', 51))
	if (inChallenge('up', 11)) gain = gain.div(1e3)
	if (hasUpgrade('up', 61)) gain = gain.div(1.3)
	if (hasUpgrade('up', 72)) gain = gain.times(3)
	if (hasUpgrade('up', 81)) gain = gain.div(2)
	if (hasUpgrade('up', 92)) gain = gain.times(4)
	if (inChallenge('up', 12)) gain = gain.div(1e4)
	if (hasChallenge('up', 12)) gain = gain.times(5)
	if (hasMilestone('g', 5)) gain = gain.times(2)
	if (hasUpgrade('up', 102)) gain = gain.times(3)
	if (hasUpgrade('up', 103)) gain = gain.times(upgradeEffect('up', 103))
	if (inChallenge('up', 21)) gain = gain.div(1e6)
	if (hasMilestone('g', 6)) gain = gain.times(2)
	if (player.points.gte(1e6)) gain = gain.div(2)
	if (hasMilestone('g', 7)) gain = gain.times(2)
	if (hasUpgrade('up', 51)) gain = gain.times(1.0001)
	
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