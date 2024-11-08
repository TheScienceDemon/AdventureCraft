const gameplayMarginLeftNormal = '40px'; // 2.5em
const gameplayMarginLeftWide = '320px'; //20em

const menuBackgrounds = [
	"url(assets/GFX/Storyline/Meteor.png)",
	"url(assets/GFX/Storyline/Inspection.png)"
];

let playerName = "Niko";

document.addEventListener('DOMContentLoaded', Start);

function Start() {
}

// Debug shit

function ButtonTest() {
	alert("Knopf funktioniert!");
}

// Style management

function ChangeGameplayMargin() {
	const gameplayHolder = document.getElementById("gameplay-holder");

	let newMargin = getComputedStyle(gameplayHolder).marginLeft == "40px"
		? gameplayMarginLeftWide
		: gameplayMarginLeftNormal;

	gameplayHolder.style.marginLeft = newMargin;
}

function ChangeMenuBackground() {
	document.body.style.backgroundImage = menuBackgrounds[RandomRange(0, 1)];
}

// Gameplay

function StartGame() {
	const gameplayHolder = document.getElementById("gameplay-holder");
	const sidebar = document.getElementById("sidebar");
	const body = document.body;

	ChangeGameplayMargin();

	SetPage("INTRO");
	gameplayHolder.style.textAlign = "left";
	sidebar.style.visibility = "visible";
	body.style.backgroundImage = "none";
}

function SetPlayerName() {
	const inputPlayerName = document.getElementById("input-player-name");
	const newPlayerName = inputPlayerName.value;

	if (newPlayerName == "") { return; }

	playerName = newPlayerName;
}

// Extra shit

function RandomRange(min, max) { // Source: https://www.w3schools.com/JS/js_random.asp
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Pages
// -- GetPage function moved to own file: dialogue.js --

function SetPage(newPageID) {
	const gameplayContainer = document.getElementById("gameplay-content");

	gameplayContainer.innerHTML = GetPage(newPageID);
}