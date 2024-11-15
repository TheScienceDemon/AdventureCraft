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

				<button onclick="ChangeGameplayMargin()">debug margin-left</button>

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

				"So at first haben wir Rathgeber, jener wohnt in einer Hobbithöhle. Seine mathematischen Kenntnisse sind von nobody zu übertreffen maybe von Diegmüller aber I dont know about diese."
				
				<br><br>

				"Dann haben wir noch Frau Brechtken. She lives in ihrer historischen Bunker-Nachbildung und is fanatisch interesiert in the Geschichte und weiß daher very much about the Herstellung of Waffen and Werkzeuge."
				
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
				"Perfekt", spricht Diegmüller, "Kannst du schonmal den Wasserkocher für Tee anmachen, während ich uns Pfannkuchen mache?"
				
				<br><br>

				"Klar, mach ich", kommt's von dir.
				
				<br><br>

				Diegmüller ist fertig und geht nun zu dir, um zu sehen, ob du's geschaft hast.
				
				<br><br>

				"Wie wär's, wenn wir das Kabel im Ausgang tauschen? Klivver!", strahlt Diegmüller voller Geistesblitzen.
				
				<br><br>

				"Lass mich mal sehen. Mach mal platz... Ja, da. Genau da dran geh ich jetzt."
				
				<br><br>

				"So ein Trottel", faselt Elektriker Diegmüller leise vor sich hin.
				
				<br><br>

				Natürlich kannst du solch einen Diegmüller'schen Ausdruck nicht auf dir sitzen lassen und versuchst es erneut:
				
				<br><br>

				Du gehst auf den Stecker erneut zu, rutscht aber auf dem perfekt glatten, reibungslosen Boden aus und kommst durch eine Abfolge an unerwarteter und ungünstiger Ereignisse in Kontakt mit der 230 Volt und 128 Ampere Steckdose, die deinen gesammten Körper in einen elektrischen Schock versetzt.

				<br><br><br>
				
				<div style="text-align: center;">
				<b><u>Du bist gestorben!</u></b>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Nochmal?</p>
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

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('FREETIME')">Weiter</p>
			`;
		case "BREAKFAST_C":
			return `
				"Ich kann auch anders, wenn du es so willst", hörst du nur, bevor deine Füße wuchtvoll von Diegmüller auf seinem Rollstuhl ergriffen werden und du vom Bett in die Küche gezerrt wirst.

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('BREAKFAST_C_SECOND')">Weiter</p>
			`;
		case "BREAKFAST_C_SECOND":
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Breakfast.png')";

			return `
				"Sorry, ich wollte dich nicht verägern", kannst du nach dieser rasanten Spritztour nur über deine Lippen kommen lassen.
				
				<br><br>

				"So... Das gibt jetzt erstmal einen Vermerk." Diegmüller setzt sich daraufhin an seinen Küchentisch direkt zu seiner Aufmerksamkeitsüberschussmaschine.
				
				<br><br>

				"Mein Mäuschen geht schon. Wo ist denn der Ordner? Ach jetzt auch egal", verzweifelt er.
				
				<br><br>

				"Hast du denn Hunger?", fragt er dich nach genauen 0,75 Sekunden, worauf du extremst verunsichert nur mit "Ja?" antworten kannst.
				
				<br><br>
				
				Ihr beide genießt nun frischen Tee und Diegmüllers köstliche Pfannkuchen, während ihr den Sonnenaufgang bewundert.

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('FREETIME')">Weiter</p>
			`;
		case "FREETIME":
			return `
				Diegmüllers bereits pattentierte Pfannkuchen nach einem alten Familienrezept haben dich für den Tag gestärkt, aber was nun?
				
				<br><br>

				Welchen der Dorfbewohner des Dorfs Dingenskirchen kann man denn mal besuchen?

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_A')">Herr Schlossbauer</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_B')">Herr Rathgeber</p>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_C')">Herr Drescher</p>
			`;
		case "VISIT_A": // Schlossbauer
			document.body.style.backgroundImage = "url('assets/GFX/Storyline/Castle.png')";

			return `
				Da du sehr neugierig bist, willst du trotz vorheriger Warnung mehr über Schlossbauer erfahren und begibst dich zum kleinen Schloss des Herren.
				
				<br><br>

				Und da steht es vor dir: das Schloss inklusive Burggraben, welches doch eigentlich recht klein aussieht.
				
				<br><br>

				Du klingelst... Und schon hörst du aus dem Fenster über dir: "Ja hallo erstmal. Ich weiß gar nicht, ob sie es wissen, aber es ist Sonntag und ich will meine Ruhe!"
				
				<br><br>

				"Ja hallo", fängst du trotz dieser Bemerkung an, "Ich wollte mich erstmal vorstellen. Also ich bi-" Doch du unterbrichst dich selbst durch lautes Geschrei: "AH!! Aua!!!"
				
				<br><br>

				Auf dich fliegt ein Ball nach dem anderen, die alle deinen Kopf treffen.
				
				<br><br>

				In den letzten Augenblicken, bevor du umfällst, hörst du nur noch: "So... Endlich kann ich mich wieder hinlegen."

				<br><br><br>
				<div style="text-align: center;">
				<b><u>Du bist gestorben!</u></b>
				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('INTRO')">Nochmal?</p>
			`;
		case "VISIT_B": // Rathgeber
			return `
				Nach einem kleinen Spaziergang erreichst du die kleine Elektrotechnik-Höhle des Herrn Rathgebers.
				
				<br><br>

				"Hallo. Gut, dass Sie da sind. Ich habe sie bereits erwartet... Nun kommen Sie doch rein", begrüßt dich Rathgeber freundlich.
				
				<br><br>

				"Also was führt Sie zu mir?", fragt er.
				
				<br><br>

				"Ich dachte, dass wüssten Sie?"
				
				<br><br>

				"Nein, natürlich nicht. Ich habe lediglich erwartet, dass Sie heute zur Mittagszeit hier bei mir aufkreuzen werden."
				
				<br><br>

				"Und wieso haben Sie das erwartet?"
				
				<br><br>

				"Also wissen Sie, ich hatte mal einen Schüler, der... Na also erst einmal müssen Sie wissen, dass ich Lehrer hier im Dorf bin. Und so wie an den meisten Tagen kam vor kurzer Zeit einer meiner Schüler zur mir, um mich um Rat zu bitten. Er saß genau da, wo Sie jetzt sitzen. Und er erzählte mir, dass er eine Wahrscheinlichkeitsberechnungseinheit entworfen habe. Er wollte von mir wissen, ob es ethisch okay wäre, sie zu benutzen, um damit zu berechnen, wo und wann seine unwissende Liebe auftaucht. Nachdem ich ihm einen Rat gab, schenkte er mir jedoch die Maschine, da er sie nicht für solche Zwecke misbrauchen wollte. Ein plus für mich, denn jetzt habe ich diese Wundermaschine. Ja und so habe ich quasi berechnet, wann sie mich aufsuchen werden."
				
				<br><br>

				"Ahm, ich verstehe."
				
				<br><br>

				"Nun ja, also warum sind Sie zu mir gekommen?", fragt Rathgeber dich jetzt schon zum zweiten Mal.
				
				<br><br>

				Du denkst nach, doch es will dir nicht zu Sinn kommen. Das liegt vermutlich an der sehr langen und umfangreichen Erzählung des Rathgeber.
				
				<br><br>

				Du spichst schließlich: "Ich weiß es nicht, aber vielleicht können Sie mir da einen Rat geben?"
				
				<br><br>

				"Aber klar! Wissen Sie... Ich denke, Sie wollten fragen, was es hier so für Sie zu entdecken gibt. Wenn man dieser Vermutung nachgeht, könnten sie ja vieleicht zum alljährigen Mathe-Wettbewerb hier im Dorf kommen, um mich zu unterstützen. Das macht Spaß und ist sinnvoll für ihre Zukunft!"

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_B_SECOND')">"Aber gerne!"</p>
			`;
		case "VISIT_B_SECOND":
			return `
				"Das ist wirklich nett von Ihnen", freut sich Rathgeber.
				
				<br><br>

				"Also," führt er fort, "wenn wir diesen Wettbewerb gewinnen wollen, müssen wir eine Reihe mehrerer Aufgaben richtig lösen. Sie sind ja gut in Mathematik, nicht wahr?"
				
				<br><br>

				"Das sollte mir hoffentlich möglich sein."
				
				<br><br>

				"Nun gut, denn genau das werden wir auch brauchen, wenn wir unseren Rivalen, Herrn Drescher, besiegen wollen."

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_B_THIRD')">"Und wie stellen wir das am besten an?"</p>
			`;
		case "VISIT_B_THIRD":
			return `
				"Das kann ich Ihnen gleich erzählen, kommen Sie mit", fordert dich Rathgeber auf, während er bereits einen mit Logikgattern gefüllten Gang hinab läuft.
				
				<br><br>

				Während du ihm folgst, erklärt er dir die Regeln des Wettbewerbs und wie dieser abläuft.
				
				<br><br>

				Außerdem übt Rathgeber mit dir nochmal die UND-, ODER-, NAND- und NOR-Schaltung, damit du begreifst, dass Mathematik deutlich mehr als nur Zahlen ist.
				
				<br><br>

				Du fühlst dich nun bereit, mit Herr Rathgeber gegen Herrn Drescher anzutreten.

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('MATH_CONTEST_A')">"Dann mal los!"</p>
			`;
		case "VISIT_C": // Drescher
			return `
				Du suchst das Anwesen des Herrn Drescher auf, achtest dabei auf die Warnungen von Diegmüller und klingelst.
				
				<br><br>

				Es sind inzwischen fünf Minuten vergangen und es hat noch immer keiner geöffnet. Du rufst "Hallo? Wer da?", um Aufmerksamkeit auf dich zu ziehen.
				
				<br><br>

				Ein gigantische Explosion ist im Hintergrund zu hören - fast so, als wäre eine Knallgasprobe schiefgelaufen.
				
				<br><br>

				Plotzlich kommt ein älterer man im Laborkittel mit einem Rasenmäher um die Hausecke und auf dich zu geraßt.
				
				<br><br>

				Er kommt immer näher und näher, bis er kurz vor dir anhält. "Guuuten Morgen, damit sie wissen, dass ich nun hier bin."
				
				<br><br>

				"Schön, sie kennenzulernen! Ich bin Herr Drescher und wer sind Sie?", fragt der verrückte Chemiker.
				
				<br><br>

				"Ich bin [playerName]", erklärst du, worauf Drescher natürlich fragt: "Und was suchen Sie hier?"
				
				<br><br>

				"Ja also ich wollte Sie besuchen."
				
				<br><br>

				"Aber ganz ohne Geschenk, wie ich sehe? Wie frech!", lacht Drescher dich an, "Ja jetzt auch egal. Kommen sie erstmal rein."

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_C_SECOND')">Weiter</p>
			`.replaceAll("[playerName]", playerName);
		case "VISIT_C_SECOND":
			return `
				"Tatsächlich hätte ich direkt eine große bitte an dich", spricht Drescher.
				
				<br><br>

				"Oh? Welche wäre das denn?", fragst du verwundert, während du irgendwelche giftigen Chemikalien im Hintergrund riechst.
				
				<br><br>

				"Nun, der jährliche Mathematikwettbewerb steht demnächst an und ich bräuchte dafür noch einen Partner. Denn alleine kann man den zweiten großen Mathematiker dieses Dorfes, Herr Rathgeber, nicht besiegen"

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('VISIT_C_THIRD')">"Und wie besiegt man einen so erstaunlichen Mathematiker?"</p>
			`;
		case "VISIT_C_THIRD":
			return `
				"Das ist ja auch das Problem: Ich weiß es nicht wirklich.", entgegnet dir Drescher.
				
				<br><br>

				"Ich kann nur hoffen", spricht Drescher weiter, "dass Herr Rathgeber im Chemie-Unterricht nicht aufgepasst hat, denn er als Meister der Elektrotechnik sollte hoffentlich nie viel mit chemischen Formeln, Eigenschaften, etc. zu tun gehabt haben."
				
				<br><br>

				"Chemie also? Na gut. Ich helfe dir, wenn du mir dafür Quantenphysik und die Chaos-Theorie näher erläuterst und mir ein Anleitungsdiagramm für (S)-N-Methyl-1-phenylpropan-2-amin gibst", forderst du von Drescher ganz eingenommen.
				
				<br><br>

				"Wenn's nur das ist, dann gerne. Also... Dafür brauchst du...", aber der Geruch giftiger Chemikalien wird zu stark für dich und du vergisst, was bis zum Wettbewerb passiert.

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('MATH_CONTEST_B')">Zum Mathe-Wettbewerb</p>
			`;
		case "MATH_CONTEST_A":
			return `
				[MATHE-WETTBEWERB A HIER EINFÜGEN]

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('ENDING_A')">"Gewonnen!"</p>
			`;
		case "MATH_CONTEST_B":
			return `
				[MATHE-WETTBEWERB B HIER EINFÜGEN]

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('ENDING_B')">"Gewonnen!"</p>
			`;
		case "ENDING_A":
			return `
				[ENDE A HIER EINFÜGEN]

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('GAME_OVER')">Spiel beenden</p>
			`;
		case "ENDING_B":
			return `
				[ENDE B HIER EINFÜGEN]

				<p class="dialogue-option not-selectable clickable-interaction" onclick="SetPage('GAME_OVER')">Spiel beenden</p>
			`;
		case "GAME_OVER":
			return `
				<div style="text-align: center;">
				Vielen Dank fürs Spielen unseres kleinen Text-Adventures (dem TKDV-Projekt).
				
				<br><br>

				<div style="text-align: left;">
				- Joshua Kryjom, Nico Nebenführ und Louis Ruppert; 11BG1 der FBS
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