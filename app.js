const questions = [
  {cat:'Grundlagen', q:'Wofür steht EMP im Musikstudium?', a:['Elektronische Musikproduktion','Elementare Musikpädagogik','Europäische Musikpraxis','Ensemble-Musikprüfung'], c:1, e:'EMP steht für Elementare Musikpädagogik: ein ganzheitlicher, künstlerisch-pädagogischer Zugang zu Musik.'},
  {cat:'Grundlagen', q:'Was ist ein zentrales Merkmal der EMP?', a:['Nur Notenlehre im Einzelunterricht','Ganzheitliches Lernen mit Stimme, Körper, Bewegung, Instrumenten und Improvisation','Ausschließlich klassische Werkanalyse','Nur Vorbereitung auf Dirigieren'], c:1, e:'EMP verbindet Musik, Bewegung, Stimme, Wahrnehmung, Improvisation und Gruppenprozesse.'},
  {cat:'Didaktik', q:'Was bedeutet „elementar“ in der EMP am ehesten?', a:['Einfach im Sinne von anspruchslos','Grundlegend, körpernah, erfahrungsbezogen und schöpferisch','Nur für Grundschulkinder','Ohne künstlerischen Anspruch'], c:1, e:'Elementar meint grundlegende musikalische Erfahrungen, nicht eine niedrige Qualitätsstufe.'},
  {cat:'Zielgruppen', q:'Mit welchen Zielgruppen kann EMP arbeiten?', a:['Nur 3–6-jährige Kinder','Nur Musikhochschulstudierende','Menschen aller Altersgruppen und Voraussetzungen','Nur professionelle Musiker:innen'], c:2, e:'EMP kann mit Kindern, Jugendlichen, Erwachsenen, Senior:innen, inklusiven Gruppen und Profis arbeiten.'},
  {cat:'Methodik', q:'Welche Arbeitsform ist typisch für EMP?', a:['Frontalvortrag ohne Praxis','Kreative Gruppenarbeit mit musikalischem Handeln','Reines Auswendiglernen von Epochen','Ausschließlich Prüfungsvorspiel'], c:1, e:'EMP ist handlungsorientiert: Musik wird erfahren, gestaltet, reflektiert und weiterentwickelt.'},
  {cat:'Improvisation', q:'Warum spielt Improvisation in der EMP eine wichtige Rolle?', a:['Weil man dadurch keine Technik braucht','Weil sie Ausdruck, Reaktion, Kommunikation und musikalische Erfindung fördert','Weil Noten verboten sind','Weil sie nur im Jazz vorkommt'], c:1, e:'Improvisation eröffnet unmittelbare musikalische Gestaltung und soziale Kommunikation.'},
  {cat:'Bewegung', q:'Welche Funktion hat Bewegung in der EMP?', a:['Sie ersetzt Musik vollständig','Sie macht Rhythmus, Form, Raum und Ausdruck körperlich erfahrbar','Sie dient nur der Auflockerung','Sie ist nur Tanztechnik'], c:1, e:'Bewegung ist in EMP ein Erkenntnis- und Ausdrucksmedium.'},
  {cat:'Rhythmik', q:'Was beschreibt Rhythmik im Kontext von EMP besonders gut?', a:['Nur Schlagzeugunterricht','Die Verbindung von Musik, Bewegung, Wahrnehmung und Gestaltung','Ein Metronomtest','Eine Stilrichtung der Popmusik'], c:1, e:'Rhythmik arbeitet mit Körper, Zeit, Raum, Kraft, Klang und sozialer Interaktion.'},
  {cat:'Stimme', q:'Warum ist die Stimme in der EMP zentral?', a:['Sie ist ein unmittelbares, körperliches und für alle zugängliches Instrument','Sie ist nur für Sänger:innen wichtig','Sie ersetzt alle anderen Instrumente','Sie wird nur zum Sprechen benutzt'], c:0, e:'Die Stimme verbindet Körper, Atmung, Sprache, Klang, Emotion und musikalischen Ausdruck.'},
  {cat:'Instrumente', q:'Welche Instrumente werden in EMP-Prozessen häufig genutzt?', a:['Nur Konzertflügel','Orff-Instrumente, Alltagsgegenstände, Stimme, Körper, digitale Tools und Hauptfachinstrumente','Nur historische Instrumente','Nur elektronische Keyboards'], c:1, e:'EMP nutzt vielfältige Klangquellen, abhängig von Ziel, Gruppe und Situation.'},
  {cat:'Didaktik', q:'Was ist mit Prozessorientierung gemeint?', a:['Nur das Endkonzert zählt','Der Lern- und Gestaltungsweg ist ebenso wichtig wie das Ergebnis','Man arbeitet ohne Ziel','Man vermeidet Reflexion'], c:1, e:'EMP bewertet auch Entdeckung, Beteiligung, Entwicklung und Reflexion.'},
  {cat:'Lernen', q:'Was ist ein wichtiger Unterschied zwischen „Vormachen/Nachmachen“ und explorativem Lernen?', a:['Exploratives Lernen erlaubt eigene Entdeckungen und Entscheidungen','Exploratives Lernen ist immer chaotisch','Vormachen ist verboten','Nachmachen hat nie Sinn'], c:0, e:'EMP kombiniert Nachahmung, Variation, Experiment und eigene Gestaltung.'},
  {cat:'Inklusion', q:'Was bedeutet Inklusion in der EMP?', a:['Alle machen exakt dasselbe','Unterschiedliche Voraussetzungen werden als Ressource einbezogen','Nur Menschen mit Behinderung nehmen teil','Leistungsstarke werden bevorzugt'], c:1, e:'Inklusive EMP schafft Zugänge, Rollen und Ausdrucksmöglichkeiten für Verschiedenheit.'},
  {cat:'Gruppenleitung', q:'Welche Kompetenz ist für EMP-Lehrende besonders wichtig?', a:['Nur technische Virtuosität','Wahrnehmen, Anleiten, Strukturieren, flexibel Reagieren und künstlerisch Impulse geben','Möglichst lange Monologe halten','Fehler sofort bestrafen'], c:1, e:'EMP-Lehrende steuern Gruppenprozesse musikalisch, pädagogisch und situativ.'},
  {cat:'Kommunikation', q:'Was ist ein nonverbaler Impuls in einer EMP-Stunde?', a:['Ein langer Theorievortrag','Ein Blick, eine Geste, ein Klangsignal oder eine Bewegungsaktion','Ein schriftlicher Test','Eine Hausarbeit'], c:1, e:'Nonverbale Impulse sind in Musik- und Bewegungsprozessen sehr wirksam.'},
  {cat:'Planung', q:'Welche drei Ebenen sollte eine EMP-Stundenplanung häufig verbinden?', a:['Ziel, Inhalt, Methode','Tempo, Lautstärke, Preis','Kleidung, Bühne, Werbung','Pausen, Klausur, Verwaltung'], c:0, e:'Gute Planung klärt Ziele, Inhalte und methodische Wege.'},
  {cat:'Reflexion', q:'Warum ist Reflexion nach einer praktischen Phase wichtig?', a:['Sie unterbricht nur den Flow','Sie hilft, Erfahrungen zu benennen, zu verstehen und weiterzuentwickeln','Sie ersetzt Praxis','Sie ist nur für Prüfungen da'], c:1, e:'Reflexion verbindet Erleben mit Bewusstsein und fachlichem Lernen.'},
  {cat:'Kreativität', q:'Was fördert Kreativität in EMP besonders?', a:['Nur richtige Antworten zulassen','Offene Aufgaben, Materialvielfalt und sichere Experimentierräume','Ständige Bewertung','Ein einziges Lösungsmuster'], c:1, e:'Kreativität braucht Offenheit, Struktur und Vertrauen.'},
  {cat:'Musiktheorie', q:'Wie kann Musiktheorie in EMP vermittelt werden?', a:['Abstrakt und ohne Klang','Über Körper, Stimme, Hören, Spielen, Bewegen und anschließende Begriffsklärung','Gar nicht','Nur durch Klausuren'], c:1, e:'Theorie kann aus musikalischer Erfahrung heraus entstehen.'},
  {cat:'Form', q:'Wie lässt sich musikalische Form elementar erfahrbar machen?', a:['Durch Bewegen von Wiederholung, Kontrast, Übergang und Schluss','Nur durch Partiturlesen','Nur durch Jahreszahlen','Gar nicht'], c:0, e:'Form kann körperlich, räumlich, vokal und instrumental gestaltet werden.'},
  {cat:'Hören', q:'Was ist aktives Hören?', a:['Musik nebenbei laufen lassen','Gezieltes Wahrnehmen, Unterscheiden, Beschreiben und Reagieren','Nur laut hören','Hören ohne Aufmerksamkeit'], c:1, e:'Aktives Hören ist ein bewusster musikalischer Vorgang.'},
  {cat:'Ästhetik', q:'Was bedeutet ästhetische Erfahrung in der EMP?', a:['Nur schöne Musik hören','Sinnliche, emotionale, körperliche und reflektierte Auseinandersetzung mit Gestaltung','Nur Dekoration','Nur Geschmack bewerten'], c:1, e:'Ästhetische Erfahrung umfasst Wahrnehmen, Deuten, Gestalten und Erleben.'},
  {cat:'Pop/Jazz', q:'Warum können Pop, Jazz und aktuelle Musik in EMP sinnvoll sein?', a:['Weil klassische Musik ungeeignet ist','Weil sie Lebenswelt, Groove, Improvisation und Gruppenpraxis einbeziehen können','Weil Theorie dann wegfällt','Weil nur Pop beliebt ist'], c:1, e:'EMP kann verschiedene musikalische Kulturen verbinden, ohne Hierarchien zu zementieren.'},
  {cat:'Klassik', q:'Wie kann klassische Musik EMP-gerecht erschlossen werden?', a:['Nur durch Biografien großer Komponisten','Durch Bewegung, Szenen, Klangexperimente, Reduktion, Arrangement und eigene Gestaltung','Nur durch vollständige Partituranalyse','Gar nicht'], c:1, e:'Klassik kann körperlich, kreativ und handlungsorientiert zugänglich werden.'},
  {cat:'Material', q:'Was ist eine gute offene Aufgabenstellung?', a:['Spielt exakt Takt 1–8 ohne Abweichung','Findet drei verschiedene Klanggesten für „Ankommen“ und kombiniert sie','Macht irgendwas','Schreibt alle Dur-Tonleitern auswendig'], c:1, e:'Eine offene Aufgabe gibt Rahmen und Ziel, lässt aber Gestaltungsspielraum.'},
  {cat:'Bewertung', q:'Was sollte in EMP neben dem Produkt bewertet werden?', a:['Nur Lautstärke','Prozess, Kooperation, Kreativität, Wahrnehmung und Reflexion','Nur Fehlerzahl','Nur Schnelligkeit'], c:1, e:'EMP-Leistungen zeigen sich oft in Prozessqualität und Gestaltungskompetenz.'},
  {cat:'Praxis', q:'Was ist ein Warm-up in EMP nicht?', a:['Ein Einstieg zur Fokussierung','Eine Möglichkeit zur Körper-, Stimm- oder Gruppenaktivierung','Ein beliebiges Spiel ohne Bezug','Ein Übergang in das Thema'], c:2, e:'Ein gutes Warm-up hat Bezug zur Gruppe, zum Ziel oder zum Material.'},
  {cat:'Gruppendynamik', q:'Was hilft bei heterogenen Gruppen?', a:['Alle Unterschiede ignorieren','Differenzierte Rollen, Wahlmöglichkeiten und verschiedene Schwierigkeitsgrade','Nur die Besten spielen lassen','Tempo strikt erhöhen'], c:1, e:'Differenzierung ermöglicht Teilhabe ohne Unterforderung oder Überforderung.'},
  {cat:'Leitung', q:'Was ist Scaffolding?', a:['Eine Bühnentechnik','Unterstützende Lernstruktur, die nach und nach reduziert werden kann','Ein Tanzstil','Ein Aufnahmeverfahren'], c:1, e:'Scaffolding gibt Hilfen, bis Lernende selbstständiger handeln können.'},
  {cat:'Spiel', q:'Welche Rolle kann Spiel in EMP haben?', a:['Spiel ist nur Zeitvertreib','Spiel kann Regeln, Freiheit, Kreativität und musikalisches Lernen verbinden','Spiel verhindert Lernen','Spiel ist nur für Kleinkinder'], c:1, e:'Spielerische Settings können sehr ernsthafte musikalische Lernprozesse ermöglichen.'},
  {cat:'Digital', q:'Wie können digitale Medien sinnvoll in EMP eingesetzt werden?', a:['Nur als Ersatz für Lehrende','Für Looping, Sampling, Aufnahme, Reflexion, Komposition und interaktive Gestaltung','Gar nicht','Nur für Werbung'], c:1, e:'Digitale Tools können kreative, kollaborative und dokumentierende Funktionen übernehmen.'},
  {cat:'Community Music', q:'Wo berührt EMP das Feld Community Music?', a:['Bei partizipativen musikalischen Prozessen mit sozialen und kulturellen Bezügen','Nur im Sinfonieorchester','Nur bei Musiktheorie','Gar nicht'], c:0, e:'EMP und Community Music teilen partizipative, inklusive und kontextbezogene Ansätze.'},
  {cat:'Frühpädagogik', q:'Was ist bei Kindern im Vorschulalter besonders wichtig?', a:['Abstrakte Notation als Hauptzugang','Körper, Spiel, Stimme, Wiederholung, Bewegung und sinnliche Erfahrung','Lange Vorträge','Reines Stillarbeiten'], c:1, e:'Junge Kinder lernen stark über Körper, Spiel, Nachahmung und Wiederholung.'},
  {cat:'Jugendliche', q:'Was ist bei Jugendlichen oft didaktisch sinnvoll?', a:['Ihre musikalischen Lebenswelten ernst nehmen und mit fachlichen Zielen verbinden','Aktuelle Musik verbieten','Nur Kinderlieder verwenden','Keine Mitentscheidung erlauben'], c:0, e:'Partizipation und Lebensweltbezug erhöhen Relevanz und Motivation.'},
  {cat:'Senior:innen', q:'Welche Aspekte können in EMP mit Senior:innen wichtig sein?', a:['Nur Leistung und Tempo','Biografie, Erinnerung, soziale Teilhabe, Stimme, Bewegung und angepasste Anforderungen','Nur Prüfungen','Keine neuen Erfahrungen'], c:1, e:'EMP kann musikalische Aktivität, Erinnerung, Begegnung und Ausdruck unterstützen.'},
  {cat:'Inklusion', q:'Was ist eine barrierearme musikalische Aufgabe?', a:['Eine Aufgabe mit nur einer schweren Lösung','Eine Aufgabe mit mehreren Zugängen: hören, fühlen, bewegen, spielen, sprechen','Eine Aufgabe ohne Struktur','Eine Aufgabe nur für Notenlesende'], c:1, e:'Barrierearme Aufgaben bieten verschiedene Wege zur Beteiligung.'},
  {cat:'Körper', q:'Was bedeutet Body Percussion?', a:['Schlagzeug mit MIDI','Rhythmisches Klangerzeugen mit dem eigenen Körper','Nur Klatschen im Publikum','Eine Aufnahme-App'], c:1, e:'Body Percussion nutzt Klatschen, Stampfen, Schnipsen, Patschen und weitere Körperklänge.'},
  {cat:'Raum', q:'Warum ist Raum in EMP wichtig?', a:['Nur wegen Akustik','Raum beeinflusst Bewegung, Beziehung, Wahrnehmung, Form und Aufmerksamkeit','Raum ist egal','Nur für Bühnendeko'], c:1, e:'Raum kann musikalisch gestaltet und pädagogisch genutzt werden.'},
  {cat:'Ensemble', q:'Was lernt man in elementarer Ensemblearbeit?', a:['Nur gleichzeitig laut spielen','Hören, Reagieren, Timing, Rollen, Verantwortung und gemeinsames Gestalten','Nur Dirigieren','Nur Solo spielen'], c:1, e:'Ensemblearbeit verbindet musikalische und soziale Kompetenzen.'},
  {cat:'Anleitung', q:'Was ist eine gute verbale Anleitung?', a:['Lang, kompliziert und voller Fachbegriffe','Kurz, klar, handlungsnah und ggf. mit Beispiel','Möglichst unklar','Nur schriftlich'], c:1, e:'Klare Sprache unterstützt musikalisches Handeln.'},
  {cat:'Fehlerkultur', q:'Wie geht EMP produktiv mit Fehlern um?', a:['Fehler werden als Lern- und Gestaltungschance genutzt','Fehler müssen peinlich sein','Fehler führen sofort zum Abbruch','Fehler sind nur mangelnde Begabung'], c:0, e:'Eine offene Fehlerkultur stärkt Mut, Kreativität und Lernfähigkeit.'},
  {cat:'Transkulturalität', q:'Was bedeutet transkulturelles Arbeiten in EMP?', a:['Nur exotische Musik vorführen','Musikalische Kulturen respektvoll, reflektiert und dialogisch einbeziehen','Alle Musik gleich machen','Nur europäische Klassik nutzen'], c:1, e:'Transkulturelle EMP vermeidet Klischees und fördert Begegnung auf Augenhöhe.'},
  {cat:'Notation', q:'Welche Rolle kann grafische Notation spielen?', a:['Sie kann Klang, Verlauf und Struktur auch ohne traditionelle Notenschrift sichtbar machen','Sie ist falsch','Sie ersetzt jedes Hören','Sie ist nur Kunstunterricht'], c:0, e:'Grafische Notation kann niedrigschwellige Komposition und Reflexion ermöglichen.'},
  {cat:'Komposition', q:'Was ist eine elementare Kompositionsaufgabe?', a:['Eine Sinfonie in Sonatenhauptsatzform schreiben','Aus drei Klängen eine kurze Form mit Anfang, Entwicklung und Schluss bauen','Nur Noten abschreiben','Eine Fuge analysieren'], c:1, e:'Elementare Komposition reduziert Material, aber nicht künstlerische Qualität.'},
  {cat:'Performance', q:'Was kann Performance in EMP bedeuten?', a:['Nur perfekte Bühnenshow','Gestaltetes Zeigen von Klang, Körper, Raum, Szene und Interaktion','Nur Tanzen ohne Musik','Nur Wettbewerb'], c:1, e:'Performance verbindet künstlerische Präsenz, Form und Kommunikation.'},
  {cat:'Beobachtung', q:'Was sollte eine EMP-Lehrperson während einer Gruppenphase beobachten?', a:['Nur wer falsch spielt','Beteiligung, Verständigung, musikalische Ideen, Überforderung und Gruppendynamik','Nur Lautstärke','Nur Uhrzeit'], c:1, e:'Beobachtung ist Grundlage für flexible Interventionen.'},
  {cat:'Transfer', q:'Was bedeutet Transfer im EMP-Unterricht?', a:['Eine Übung wird sinnlos wiederholt','Erfahrungen werden auf neue musikalische Situationen übertragen','Man wechselt den Raum','Man kopiert ein Arbeitsblatt'], c:1, e:'Transfer zeigt, dass Lernende Prinzipien verstanden und anwenden können.'},
  {cat:'Berufsfeld', q:'Wo können EMP-Absolvent:innen arbeiten?', a:['Nur Opernorchester','Musikschulen, Kitas, Schulen, Hochschulen, freie Projekte, Kulturinstitutionen, Community-Projekte','Nur Tonstudios','Nur Verwaltung'], c:1, e:'Das Berufsfeld ist breit und verbindet Pädagogik, Kunst und Vermittlung.'},
  {cat:'Ethik', q:'Was ist pädagogisch problematisch?', a:['Teilnehmende ernst nehmen','Beschämung, Bloßstellung und Zwang als Methode','Klare Regeln','Wertschätzendes Feedback'], c:1, e:'EMP braucht Schutzräume, Respekt und verantwortungsvolle Leitung.'},
  {cat:'Abschluss', q:'Welche Aussage fasst EMP gut zusammen?', a:['EMP ist nur musikalische Früherziehung','EMP ist künstlerisch-pädagogische Arbeit mit Musik, Bewegung, Stimme, Körper, Gruppe und Reflexion','EMP ist nur Theorie','EMP ist nur Entertainment'], c:1, e:'EMP ist ein breites, künstlerisches und pädagogisches Praxisfeld.'}
];

let current = 0;
let score = 0;
let mode = 'learning';
let selected = Array(questions.length).fill(null);
let locked = Array(questions.length).fill(false);

const $ = id => document.getElementById(id);
const startPanel = $('startPanel');
const quizPanel = $('quizPanel');
const resultPanel = $('resultPanel');

$('startLearning').onclick = () => start('learning');
$('startExam').onclick = () => start('exam');
$('nextBtn').onclick = next;
$('prevBtn').onclick = prev;
$('restartBtn').onclick = () => location.reload();
$('printBtn').onclick = () => window.print();

function start(chosenMode) {
  mode = chosenMode;
  startPanel.classList.add('hidden');
  resultPanel.classList.add('hidden');
  quizPanel.classList.remove('hidden');
  $('modeTag').textContent = mode === 'learning' ? 'Lernmodus' : 'Prüfungsmodus';
  render();
}

function render() {
  const item = questions[current];
  $('questionText').textContent = item.q;
  $('categoryTag').textContent = item.cat;
  $('progressText').textContent = `Frage ${current + 1} / ${questions.length}`;
  $('scoreText').textContent = `${calculateScore()} Punkte`;
  $('progressBar').style.width = `${((current + 1) / questions.length) * 100}%`;
  $('answers').innerHTML = '';
  $('feedback').classList.add('hidden');
  $('feedback').textContent = '';

  item.a.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.textContent = answer;
    if (selected[current] === index) btn.classList.add('selected');
    if (mode === 'learning' && locked[current]) {
      if (index === item.c) btn.classList.add('correct');
      if (selected[current] === index && index !== item.c) btn.classList.add('incorrect');
      btn.disabled = true;
      showFeedback();
    }
    btn.onclick = () => choose(index);
    $('answers').appendChild(btn);
  });

  $('prevBtn').disabled = current === 0;
  $('nextBtn').disabled = selected[current] === null;
  $('nextBtn').textContent = current === questions.length - 1 ? 'Auswerten' : 'Weiter';
}

function choose(index) {
  if (mode === 'learning' && locked[current]) return;
  selected[current] = index;
  if (mode === 'learning') locked[current] = true;
  render();
}

function showFeedback() {
  const item = questions[current];
  const ok = selected[current] === item.c;
  $('feedback').classList.remove('hidden');
  $('feedback').innerHTML = `<strong>${ok ? 'Richtig.' : 'Nicht ganz.'}</strong> ${item.e}`;
}

function next() {
  if (current < questions.length - 1) {
    current++;
    render();
  } else {
    finish();
  }
}

function prev() {
  if (current > 0) {
    current--;
    render();
  }
}

function calculateScore() {
  return selected.reduce((sum, answer, i) => answer === questions[i].c ? sum + 1 : sum, 0);
}

function finish() {
  score = calculateScore();
  quizPanel.classList.add('hidden');
  resultPanel.classList.remove('hidden');
  $('progressText').textContent = `Fertig`;
  $('scoreText').textContent = `${score} / ${questions.length}`;
  const percent = Math.round(score / questions.length * 100);
  $('resultTitle').textContent = `${score} von ${questions.length} Punkten (${percent}%)`;
  $('resultText').textContent = percent >= 85 ? 'Sehr stark – gute EMP-Grundlagen und sichere Begriffe.' : percent >= 65 ? 'Solide Basis – einige Begriffe und didaktische Konzepte können noch vertieft werden.' : 'Guter Einstieg – nutze die Auswertung als Lernliste für Seminar und Selbststudium.';
  $('reviewList').innerHTML = '';
  questions.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'review-item';
    const userAnswer = selected[i] === null ? 'Nicht beantwortet' : item.a[selected[i]];
    const correct = item.a[item.c];
    div.innerHTML = `<strong>${i + 1}. ${item.q}</strong><small>Deine Antwort: ${userAnswer}</small><small>Richtig: ${correct}</small><small>${item.e}</small>`;
    $('reviewList').appendChild(div);
  });
}
