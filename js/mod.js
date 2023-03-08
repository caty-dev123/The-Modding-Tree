let modInfo = {
	name: "The Normal Generic Thingy Fun Basic Tree",
	id: "basicgeneric",
	author: "henloman123",
	pointsName: "points that are normal points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.511",
	name: "more 2",
}

let changelog = `<h1>Changelog:</h1>
<br><h3>v0.511</h3><br>
-fixed a bug <br>
- the hub!
<br><h3>v0.51</h3><br>
-a few new stuff <br>
- more pop ugprade

<br><h3>v0.5</h3><br>
-added spop layer <br>
- added big brain layer <br>
- layers have more upgrades <br>
-lots of new stuff
<br><h3>v0.41</h3><br>
- fixed bugs <br>
- stuff
<br><h3>v0.4</h3><br>
- shower thoughts layer is being made<br>
- more stuff in the funny warrior layer <br>
- lots of upgrades <br>
- fixed a few bugs
<h3>v0.3</h3><br>
		- upgrades<br>
		- new money layer <br>
		- lots of new things such as THE FUNNY WARRIORS <br>
		- stuff
<h3>v0.21</h3><br>
		- fixed large bug.<br>
<h3>v0.2</h3><br>
		- THE FUN LAYER.<br>
		- THE FUNNY lAYER <br>
		- more more upgrades <br>
		- science? math? <br>
		-why???
	<h3>v0.1</h3><br>
		- THE BA LAYER.<br>
		- more more upgrades
	<h3>v0.0</h3><br>
		- THE POP LAYER.<br>
		- it started`

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
	if (hasUpgrade('pop', 11)) gain = gain.times(2)
	if (hasUpgrade('pop', 12)) gain = gain.times(4)
	if (hasUpgrade('pop', 13)) gain = gain.times(upgradeEffect('pop', 13))
	if (hasUpgrade('pop', 22)) gain = gain.times(6)
	if (hasUpgrade('ba', 12)) gain = gain.times(3)
	if (hasUpgrade('ba', 11)) gain = gain.times(2)
	if (hasUpgrade('pop', 32)) gain = gain.times(10)
	if (hasUpgrade('ba', 21)) gain = gain.times(2)
	if (hasUpgrade('s', 11)) gain = gain.times(2)
	if (hasUpgrade('s', 21)) gain = gain.times(1.5)
	if (hasUpgrade('s', 22)) gain = gain.times(3)
	if (hasUpgrade('ma', 12)) gain = gain.times(4)
	if (hasUpgrade('ma', 21)) gain = gain.times(upgradeEffect('ma', 21))
	if (hasUpgrade('c', 12)) gain = gain.times(upgradeEffect('c', 12))
	if (hasUpgrade('pop', 14)) gain = gain.times(2)
	if (hasUpgrade('pop', 24)) gain = gain.times(4)
	if (hasUpgrade('pop', 34)) gain = gain.times(15)
	if (hasUpgrade('fw', 21)) gain = gain.times(6)
	if (hasUpgrade('su', 11)) gain = gain.times(upgradeEffect('su', 11))
	if (hasUpgrade('fw', 13)) gain = gain.times(3)
	if (hasUpgrade('su', 12)) gain = gain.times(upgradeEffect('su', 12))
	if (hasUpgrade('spop', 11)) gain = gain.times(2)
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