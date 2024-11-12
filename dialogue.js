function GetPage(newPageID) {
	document.body.style.backgroundImage = "none";

	switch (newPageID) {
		case "DEBUG":
			return `
				<p>Langer Text bzw. Text eines NPCs</p>
		
				<p class="dialogue-option not-selectable">(1) Interaktion A</p>
				<p class="dialogue-option not-selectable">(2) Interaktion B</p>
				<p class="dialogue-option not-selectable">(3) Interaktion C</p>
		
				<p>Spielernamen eingeben:</p>
				<input type="" name="" id=""> <br><br>

				<button onclick="ChangeGameplayMargin()">debug margin-left</button>  <br><br>
				<button onclick="ChangeMenuBackground()">debug menu background</button>

				<p id="debug-text"></p>

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Zurück zum Start</p>
			`;
		case "INTRO":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Opening.png')";

			return `
				<h1>Willkommen bei AdventureCraft!</h1>

				<br><br>

				[WICHTIGE PLOT-PUNKTE HIER SCHREIBEN]

				<br><br>

				[ZUSÄTZLICHER TIPP HIER]

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO_SECOND')">Weiter</p>
			`;
		case "INTRO_SECOND":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Meteor.png')";

			return `
				KABUMM! <i>Ein lauter Knall ertönt in der Ferne.</i>

				<br><br>

				"War war das? Ist die Sonne explodiert oder bricht gerade der Dritte Weltkrieg aus? Hoffentlich habe ich nicht vergessen, den Ofen auszuschalten!"

				<br><br>

				"Nein, dann kann nicht sein... Nanu? WAS GEHT DENN DA AB?!?! Es brennt, schnell hin!", denkt sich Diegmüller.

				<br><br>

				Diegmüller setzt sich in seinen Rollstuhl und raßt aus seinem Haus und entdeckt ein rießiges Loch, aus dem Rauch austritt.
				
				<br><br>

				Nach genauem Hinsehen entdeckt er, dass das Loch perfekt genau rund ist. Außerdem bemerkt er, dass sich mitten im Krater eine schwarze Kapsel befindet.
				
				<br><br>

				Diegmüller erkennt ohne Lineal sofort, dass sie genau 25m x 15m x 10m groß ist.
				
				<br><br>

				Unmittelbar danach öffnet sich eine Klappe an der Kapsel.
				
				<br><br>

				Diegmüller steigt aus seinem Flitzer aus und nähert sich langsam der Kapsel...
	
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO_THIRD')">Weiter</p>
			`;
		case "INTRO_THIRD":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Inspection.png')";

			return `
				<i>Du wachst in einem Meteorkrater auf und tust dich schwer, deinen Orientierungssinn unter Kontrolle zu bekommen.</i>

				<br><br>
			
				"Huh? Wo bin ich...?", schreist du.

				<br><br>

				<i>Du versuchst, dich zu bewegen, aber merkst, dass du feststeckst.</i>

				<br><br>
				
				"Ich stecke fest! HILFE!!!"

				<br><br>

				<i>Aber wegen deiner Versuche, dich zu befreien, und deinen Hilferufen fällst du erschöpfungsbedingt in Ohnmacht.</i>

				<br><br>

				Der noch in der Nähe stehende Diegmüller hört deinen Ruf und alarmiert mit einer wahnsinnigen Reaktionszeit von null Sekunden und der Hilfe seiner Aufmerksamkeitsdefizitmaschine die Krankenschwester aus dem Dorf.

				<br><br>

				Nach einer kurzen Weile taucht auch schon der Krankenwagen auf.

				<br><br>

				"Hallo, Herr Diegmüller." "Morge, Döring." "Also sie haben gebimmelt, Diegmüller. What is going on?" "Ach so, ja. Kommen Sie!"

				<br><br>

				"Sehen Sie das?", Diegmüller zeigt auf die Kapsel im Krater. "Ja? Was ist das?!" "Ich vermute, es handelt sich hierbei um eine Art Deportationsmittel."

				<br><br>

				Schwester Döring transportiert deinen regungslosen Körper daraufhin in seinen Krankenwagen und fährt mit dir ins Krankenhaus.

				<br><br>

				Währendessen steigt Diegmüller schonmal auf seinen Rollstuhl und eilt mit Lichtgeschwindigkeit vorraus.
	
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO_FOURTH')">Weiter</p>
			`;
		case "INTRO_FOURTH":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Hospital.png')";

			return `
				"Hallo...? Wie geht es dir? Ähm, actually, who are you?", spricht Döring dich nun im Krankenzimmer an, wodurch du langsam zu dir kommst: "Ehm... Wer sind Sie?" "Wenn ich mich vorstellen darf", funkt Diegmüller dazwischen, bevor Döring antworten kann, "mein Name ist Dr. Frank Diegmüller; Professor für Informationstechnik und Mathematik. Ich habe 1987 mein Mathematik-Studium-" "Jetzt mach mal halblang, Diegmüller", unterbricht Döring ihn endlich.

				<br><br>

				"Also ich bin Herr Döring, die Krankenschwester des Dorfes. Geht es dir gut?" Nach einem kurzen Moment fängst du schließlich zu reden an: "Also eigentlich schon, aber ich habe starke Kopfschmerzen."

				<br><br>

				"Um deine Kopfschmerzen können wir uns gleich kümmern, aber wie heißt du denn überhaupt?", fragt Schwester Döring. "Also mein Name ist... ich bin... ich... weiß es nicht mehr..."

				<br><br>

				"Und wie sollen wir dich dann ansprechen?"

				<br><br>

				<label for="input-player-name">Dein Name:</label>
				<input name="input-player-name" id="input-player-name">
	
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPlayerName();SetPage('INTRO_FINAL')">Weiter</p>
			`;
		case "INTRO_FINAL":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Hospital.png')";
	
			return `
				"[playername] also?", fängt Döring an, "Na gut, [playername], willst du lieber eine pflanzliche enviromentally friendly Tablette von mir oder einen ekelhaften Tee von Diegmüller?"

				<br><br>

				Kaum gesprochen, geht's bei Diegmüller auch schon los: "Ey! Der schmeckt lecker und ist gesund!"
		
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO_FINAL_A')">Diegmüllers Tee trinken</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO_FINAL_B')">Dörings "pflanzliche enviromentally friendly" Tablette schlucken</p>
			`.replaceAll("[playername]", playerName);
		case "INTRO_FINAL_A": // Diegmüller
			return `
				"Jawoll! Genau das und nichts anderes habe ich von dir erwartet!", ruft Diegmüller voller Freude.

				<br><br>

				Ein nun leicht genervter Döring reicht dir den Tee und verlässt das Zimmer.

				<br><br>

				Während du deinen Tee genießt, empfiehlt dir Diegmüller: "Ruhe dich noch etwas aus. Wenn es dir besser geht, komm einfach zu mir. Dann führe ich dich rum und zeige dir alles."
		
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('EXPLORING_VILLAGE_A')">Von Diegmüller rumführen lassen</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('EXPLORING_VILLAGE_B')">Von Döring rumführen lassen</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('EXPLORING_VILLAGE_C')">Alleine das Dorf erkunden</p>
			`;
		case "INTRO_FINAL_B": // Döring
			return `
				"Ich habe gleich gewusst, dass du mich magst. Ich weiß, ich bin schon ein komischer Typ, aber das macht nunmal die Besten aus", prahlt Döring vor sich her.

				<br><br>

				Außerdem reicht dir Schwester Döring gleich die besagten Tabletten samt einem Glas Wasser.

				<br><br>

				Diegmüller ist aber in der Zwischenzeit auch schon verschwunden.

				<br><br>

				Während du die Tabletten einnimmst, empfiehlt dir Döring noch: "Ruhe dich noch etwas aus. Wenn es dir besser geht, komm einfach zu mir. Dann führe ich dich rum und zeige dir alles."
		
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('EXPLORING_VILLAGE_A')">Von Diegmüller rumführen lassen</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('EXPLORING_VILLAGE_B')">Von Döring rumführen lassen</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('EXPLORING_VILLAGE_C')">Alleine das Dorf erkunden</p>
			`;
		case "EXPLORING_VILLAGE_A": // Diegmüller
			return `
				"Ah, da bist du ja! Sos, dann gehts jetzt los."
				
				<br><br>

				"Also, das ist mein Haus - klein aber fein."
				
				<br><br>

				"Das dort vorne ist das Krankenhaus; da wohnt Döring, die Krankenschwester."
				
				<br><br>

				"Und wenn du mal vergisst, dein Gesicht zu schützen, dann solltest du lieber nicht beim Haus vom Schlossbauer vorbei laufen. Er wohnt nämlich in einem kleinen selbstgebauten Schloss; und außerdem mag er Bälle."
				
				<br><br>

				"Wenn ihm langweilig ist, schmeißt er die Dinger jedem um die Ohren, der nicht aufmerksam ist - also immer wachsam wie ein Fuchs bleiben!"
				
				<br><br>

				"Ein weiteres hoch angesehenes Mitglied unserer Gemeinschaft ist der Alchemist Drescher. Eine sehr ausgewogene Person, <b><i>aber</i></b> wenn du unbefugt auf seinen Rasen trittst, verdrescht er dich!"
				
				<br><br>

				"Er wohnt in einem kleinen Haus mit einer sehr großen Rasenfläche."
				
				<br><br>

				"Ja und sonst wohnt irgendwo noch Rathgeber und Brechtken, aber die kenne ich nicht so gut", beendet Diegmüller endlich seinen Monolog.
				
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('AFTER_EXPLORING_A')">Weiter</p>
			`;
		case "EXPLORING_VILLAGE_B": // Döring
			return `
				"Ah, da bist du ja!"
				
				<br><br>

				"So at first haben wir Rathgeber, jener wohnt in einer Hobbithöhle. Seine mathematischen Kenntnisse sind von nobody zu übertreffen maybe von Diegmüller aber i dont know about diese."
				
				<br><br>

				"Dann haben wir noch Frau Brechtken. She lives in ihrer historischen Bunker-Nachbildung und is fanatisch interesiert in the Geschichte und weiß daher very much about the Herstellung of Werkzeuge and Waffen."
				
				<br><br>

				"Ja bei mir at home warst ja schon und sonst gibts noch den Drescher and the allmighty Schlossbauer", vollendet Döring seine Zusammenfassung über die Mitglieder des Dorfes.
				
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('')">Weiter</p>
			`;
		case "EXPLORING_VILLAGE_C": // Alleine
			let randomizedPerson = RandomRange(0, 100) >= 50
				? "Diegmüller"
				: "Döring";

			return `
				Du läufst den Pfad vom Krankenhaus entlang und bewunderst diese verrückte Siedlung. "Wow, ist das schön hier!", denkst du.
				
				<br><br>

				Plötzlich kommt ein Mann mit Kittel und mit einem Rasenmäher auf dich zu gerollt.

				<br><br>

				Du wurdest von Herr Drescher verdroschen. [randomizedPerson] hilft dir auf und sagt: "Tja. Wärst du mal zu mir gekommen."

				<br><br><br>
				<div style="text-align: center;">
				<b><u>Du bist gestorben!</u></b>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Nochmal?</p>
			`.replaceAll("[randomizedPerson]", randomizedPerson);
		case "AFTER_EXPLORING_A": // Diegmüller
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Waking up.png')";
	
			return `
				Nach der langen Führung durchs Dorf erwachst du am nächsten Tag.
				
				<br><br>

				Du öffnest deine Augen und zeitgleich ertönt es in deinem Ohr:
				
				<br><br>

				"<i>Wischer, Wischer, Wischer...</i> Hallo, aufstehen!"
				
				<br><br>

				"Warum stehst du da?", fragst du Diegmüller, welcher auf dem Querbalken direkt unter dem Dach hockt.
				
				<br><br>

				"Ja ich bin vorhin hochgegangen, weil mir langweilig war. Achso, und ich wollte außerdem, dass du dir nischt tust", antwortet er.
				
				<br><br>

				"Aha", antwortest du verwundert, "Okay, danke."
				
				<br><br>

				Plötzlich wirft Diegmüller in den Raum: "Also wollen wir zusammen gemütlich am morge frühstücken?"
				
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('BREAKFAST_A')">"Gerne"</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('BREAKFAST_B')">"Will noch ein bisschen schlafen"</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('BREAKFAST_C')">"Gerade keine Lust darauf"</p>
			`;
		case "BREAKFAST_A":
			return `
				Wird noch geschrieben...

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Zurück zum Start</p>
			`;
		case "BREAKFAST_B":
			return `
				"Ja, kein Problem. Ich rufe dich dann, wenn das Mahl serviert ist."

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('BREAKFAST_B_SECOND')">Weiter</p>
			`;
		case "BREAKFAST_B_SECOND":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Breakfast.png')";

			return `
				"Sos! Komm runter, es gibt Frühstuck!"

				<br><br>

				Du gehst die Trendelweppe herunter und erblickst einen sehr ordentlichen, nein sogar einen perfekt aufgeräumten und sauber strukturierten Raum.

				<br><br>
				
				Alles ist genau so, wie man es bei Diegmüller erwarten würde.

				<br><br>
				
				Ihr beide genießt nun frischen Tee und Diegmüllers köstliche Pfannkuchen, während ihr den Sonnenaufgang bewundert.

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Zurück zum Start</p>
			`;
		case "BREAKFAST_C":
			return `
				Wird noch geschrieben...

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Zurück zum Start</p>
			`;
		case "DEATH":
			return `
				
			`;
		default:
			return `
				<h1>! Achtung !</h1>

				Keine gültige Seiten-ID eingegeben!

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Zurück zum Start</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('DEBUG')">Debug</p>
			`;
	}
}