const gameplayMarginLeftNormal = '40px'; // 2.5em
const gameplayMarginLeftWide = '320px'; //20em

let dialogueLinks = [];

let playerName = "Niko";

document.addEventListener('DOMContentLoaded', Start);
document.addEventListener('keydown', OnKeyDown);

function Start() {
}

function OnKeyDown(ev) {
	if (!ev.code.includes("Digit")) { return; }
	if (ev.repeat) { return; }

	const digit = ev.code.substring(5, 6);

	if (digit == 0) { return; }
	if (dialogueLinks[digit - 1] == undefined) { return; }

	SetPage(dialogueLinks[digit - 1]);
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

// Gameplay

function StartGame() {
	const gameplayHolder = document.getElementById("gameplay-holder");
	const sidebar = document.getElementById("sidebar");

	ChangeGameplayMargin();

	SetPage("INTRO");
	gameplayHolder.style.textAlign = "left";
	sidebar.style.visibility = "visible";
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
	dialogueLinks = GenerateShortcuts();
}

function GenerateShortcuts() {
	const dialogueOptions = document.getElementsByClassName("dialogue-option");
	const dialogueOptionLinks = [];

	for (let i = 0; i < dialogueOptions.length; i++) {
		const option = dialogueOptions[i];
		const dialogueText = option.innerHTML;

		option.innerHTML = `(${i + 1}) ${dialogueText}`;

		if (!option.attributes['onclick']) { continue; }

		let onClick = option.attributes['onclick'].value;

		if (onClick.includes("SetPlayerName();")) {
			onClick = onClick.replace("SetPlayerName();", "");
		}

		dialogueOptionLinks[i] = onClick.substring(9, onClick.length - 2);
	}

	return dialogueOptionLinks;
}