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

	ChangeGameplayMargin();

	SetPage("INTRO");
	sidebar.style.visibility = "visible";
	body.style.backgroundImage = "none";
}

// Extra shit

function RandomRange(min, max) { // Source: https://www.w3schools.com/JS/js_random.asp
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Pages

function SetPage(newPageID) {
	const gameplayContainer = document.getElementById("gameplay-content");

	gameplayContainer.innerHTML = GetPage(newPageID);
}

function GetPage(newPageID) {
	switch (newPageID) {
		case "DEBUG":
			return `
				<p>Langer Text bzw. Text eines NPCs</p>
		
				<p class="dialogue-option not-selectable">(1) Interaktion A</p>
				<p class="dialogue-option not-selectable">(2) Interaktion B</p>
				<p class="dialogue-option not-selectable">(3) Interaktion C</p>
		
				<p>Spielernamen eingeben:</p>
				<input type="" name="" id="input-player-name"> <br><br>

				<button onclick="ChangeGameplayMargin()">debug margin-left</button>  <br><br>
				<button onclick="ChangeMenuBackground()">debug menu background</button>

				<p id="debug-text"></p>

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Weiter</p>
			`;
		case "INTRO":
			return `
				<h1>Willkommen bei AdventureCraft!</h1>

				<br><br>

				[WICHTIGE PLOT-PUNKTE HIER SCHREIBEN]

				<br><br>

				[ZUSÄTZLICHER TIPP HIER]

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('smth that does not exist')">Weiter</p>
			`;
		default:
			return `
				<h1>! Achtung !</h1>

				Keine gültige Seiten-ID eingegeben!

				<br><br>

				Zurück zur Startseite:

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('DEBUG')">Weiter</p>
			`;
	}
}