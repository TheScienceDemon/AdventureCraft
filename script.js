const gameplayMarginLeftNormal = '40px'; // 2.5em
const gameplayMarginLeftWide = '320px'; //20em

const menuBackgrounds = [
	"url(assets/GFX/Storyline/Meteor.png)",
	"url(assets/GFX/Storyline/Inspection.png)"
];

document.addEventListener('DOMContentLoaded', Start);

function Start() {
	//setInterval(ChangeMenuBackground, 2000);
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
	const gameplayContainer = document.getElementById("gameplay-content");
	const sidebar = document.getElementById("sidebar");
	const body = document.body;

	gameplayContainer.innerHTML = null;
	sidebar.style.visibility = "visible";
	body.style.backgroundImage = "none";
}

// Extra shit

function RandomRange(min, max) { // Source: https://www.w3schools.com/JS/js_random.asp
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}