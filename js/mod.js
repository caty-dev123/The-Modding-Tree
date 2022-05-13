let modInfo = {
	name: "The Nature Tree",
	id: "nature",
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
	num: "0.8",
	name: "Oxygen Balance",
}

let changelog = `<h1>Changelog:</h1><br>
<h3>v0.8</h3><br>
- Balanced up to the first nitrogen upgrade

<br>
<br>
<br>

<h3>v0.7</h3><br>
- Added more token upgrades <br>
- Added more element upgrades <br>
- The game may not be balanced until medals <br>
- Added things <br>
- Fixed a few bugs

<br>
<br>
<br>

<h3>v0.6</h3><br>
- Medal layer is finished <br>
- Started working on medal and token layer <br>
- Balanced up to 1e4 tokesn <br>
- Added more token upgrades

<br>
<br>
<br>

<h3>v0.5</h3><br>
- Added more carbon upgrades <br>
- Added more nitrogen upgrades <br>
- Balanced up to 23 elements <br>
- Added more element upgrades

<br>
<br>
<br>

<h3>v0.4</h3><br>
- Added more oxygen upgrades <br>
- Added more carbon upgrades <br>
- Started working on nitrogen <br>
- Balanced up to 1e139 points

<br>
<br>
<br>

	<h3>v0.3</h3><br>
	- Added more oxygen upgrades <br>
	- Added more carbon upgrades

	<br>
	<br>
	<br>
	<h3>v0.2</h3><br>
	- Added more oxygen upgrades <br>
	- Started working on the carbon layer.

	<br>
	<br>
	<br>

	<h3>v0.1</h3><br>
		- Started mod<br>`

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
	if (hasUpgrade('o', 11)) gain = gain.times(2)
	if (hasUpgrade('o', 12)) gain = gain.times(3)
	if (hasUpgrade('o', 13)) gain = gain.times(upgradeEffect('o', 13))
	if (hasUpgrade('o', 14)) gain = gain.times(upgradeEffect('o', 14))
	if (hasUpgrade('o', 15)) gain = gain.times(100)
	if (hasUpgrade('o', 21)) gain = gain.times(4)
	if (hasUpgrade('o', 22)) gain = gain.times(8)
	if (hasUpgrade('o', 23)) gain = gain.times(16)
	if (hasUpgrade('o', 24)) gain = gain.times(24)
	if (hasUpgrade('e', 11)) gain = gain.times(upgradeEffect('e', 11))
	if (hasUpgrade('e', 12)) gain = gain.times(upgradeEffect('e', 12))
	if (hasUpgrade('e', 13)) gain = gain.times(1e3)
	if (hasUpgrade('o', 31)) gain = gain.times(100)
	if (hasUpgrade('o', 32)) gain = gain.times(100)
	if (hasUpgrade('o', 33)) gain = gain.times(100)
	if (hasUpgrade('c', 11)) gain = gain.times(upgradeEffect('c', 11))
	if (hasUpgrade('c', 12)) gain = gain.times(upgradeEffect('c', 12))
	if (hasUpgrade('n', 12)) gain = gain.times(upgradeEffect('n', 12))
	if (hasUpgrade('c', 31)) gain = gain.times(1e5)
	if (hasUpgrade('e', 16)) gain = gain.times(upgradeEffect('e', 16))
	if (hasUpgrade('e', 21)) gain = gain.times(upgradeEffect('e', 21))
	if (hasUpgrade('c', 33)) gain = gain.times(1e3)
	if (hasUpgrade('c', 34)) gain = gain.times(1e4)
	if (hasUpgrade('c', 35)) gain = gain.times(1e5)
	if (hasUpgrade('e', 23)) gain = gain.times(1e6)
	if (hasUpgrade('m', 11)) gain = gain.times(upgradeEffect('m', 11))
	if (hasUpgrade('t', 11)) gain = gain.times(upgradeEffect('t', 11))
	if (hasUpgrade('t', 41)) gain = gain.times(upgradeEffect('t', 41))
	if (hasUpgrade('t', 53)) gain = gain.times(upgradeEffect('t', 53))
	if (hasUpgrade('e', 24)) gain = gain.times(upgradeEffect('e', 24))
	if (hasUpgrade('p', 11)) gain = gain.times(upgradeEffect('p', 11))
	if (hasUpgrade('t', 24)) gain = gain.times(upgradeEffect('t', 24))
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
	return player.e.points.gte(new Decimal("999"))
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