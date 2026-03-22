// ============================================================
// SHARED QUIZ ENGINE + ALL QUESTION BANKS
// ============================================================

// ---- PROGRESS TRACKER ----
function gp(){try{return JSON.parse(localStorage.getItem('polski_progress')||'{}')}catch{return{}}}
function sp(d){try{localStorage.setItem('polski_progress',JSON.stringify(d))}catch{}}
function saveScore(topicId,score,total){
  const p=gp();if(!p[topicId])p[topicId]={};
  if(!p[topicId].history)p[topicId].history=[];
  const pct=Math.round(score/total*100);
  p[topicId].history.push({score,total,pct,ts:Date.now()});
  if(p[topicId].history.length>10)p[topicId].history=p[topicId].history.slice(-10);
  p[topicId].lastScore=score;p[topicId].lastTotal=total;p[topicId].lastPct=pct;
  sp(p);
}
function getTopicData(id){return(gp()[id]||{});}

// ---- SHUFFLE ----
function shuffle(arr){return[...arr].sort(()=>Math.random()-.5)}

// ---- QUESTION BANKS ----

const QB_FERDYDURKE = [
  // --- TYTUŁ ---
  {cat:"Tytuł",catColor:"#c84b2f",q:'Co oznacza tytuł „Ferdydurke"?',opts:["Imię głównego bohatera","Celowo bezsensowne słowo — bunt wobec powagi literatury","Stare słowo oznaczające formę","Pseudonim autora"],ans:1,explain:"Gombrowicz wymyślił tytuł bez etymologicznego sensu. Absurd tytułu jest programem artystycznym — brak sensu jest sensem powieści."},
  {cat:"Tytuł",catColor:"#c84b2f",q:"Jaką funkcję pełni infantylne brzmienie tytułu?",opts:["Ułatwia zapamiętanie","Wpisuje się w temat niedojrzałości i zniewolenia przez formę","Wskazuje gatunek powieści","Jest przypadkowe"],ans:1,explain:"Dziecięco brzmiące słowo koresponduje z głównym tematem — niedojrzałością i procesem upupiania."},
  {cat:"Tytuł",catColor:"#c84b2f",q:'Wobec czego wyraża ironię tytuł „Ferdydurke"?',opts:["Wobec czytelnika","Wobec wielkich dzieł pisanych z wielką literą — bunt przeciw powadze literatury","Wobec nauczycieli","Wobec języka polskiego"],ans:1,explain:"Gombrowicz drwi z tytułów wielkich, poważnych dzieł — jego bezsensowny tytuł jest świadomym gestem artystycznego buntu."},
  {cat:"Tytuł",catColor:"#c84b2f",q:"Kiedy ukazało się Ferdydurke?",opts:["1930","1937","1945","1952"],ans:1,explain:"Ferdydurke ukazało się w 1937 roku — przełomowe dzieło polskiej awangardy literackiej."},
  {cat:"Tytuł",catColor:"#c84b2f",q:"Ferdydurke należy do nurtu:",opts:["realizmu socjalistycznego","naturalizmu","awangardy literackiej","neoromantyzmu"],ans:2,explain:"Powieść to manifest awangardy – zrywa z realizmem, używa metafikcji, groteski i eksperymentu z formą."},
  // --- MIEJSCE AKCJI ---
  {cat:"Miejsce akcji",catColor:"#2a7d5f",q:"Gdzie rozgrywa się pierwsza część powieści?",opts:["W Krakowie","W Warszawie — szkoła i pensjonat Młodziaków","We Lwowie","W Poznaniu"],ans:1,explain:"Akcja szkolna toczy się w Warszawie — Józio trafia do szkoły i domu Młodziaków, środowisko miejskiej inteligencji."},
  {cat:"Miejsce akcji",catColor:"#2a7d5f",q:"Jak nazywa się dworek szlachecki w powieści?",opts:["Nawłoć","Bolimowo — dworek Hurleckich","Dwór Pimków","Rębajło"],ans:1,explain:"Dworek Hurleckich w Bolimowie — symbolizuje skostniały świat szlacheckiej tradycji."},
  {cat:"Miejsce akcji",catColor:"#2a7d5f",q:"Czym staje się każde miejsce akcji dla Józia?",opts:["Schronieniem","Więzieniem formy — narzucone role uniemożliwiają bycie sobą","Miejscem miłości","Przestrzenią twórczą"],ans:1,explain:"W każdej przestrzeni Józio dostaje narzuconą rolę — nigdzie nie może być autentycznie sobą."},
  {cat:"Miejsce akcji",catColor:"#2a7d5f",q:"Jakie trzy główne przestrzenie akcji można wyróżnić?",opts:["Las, góry, morze","Warszawa, dworek Hurleckich, przestrzeń snu i wstawek","Kraków, Łódź, Gdańsk","Szkoła, więzienie, szpital"],ans:1,explain:"Warszawa (szkoła, Młodziakowie), wieś (Hurleccy), oniryczna przestrzeń wewnętrzna i wstawki narracyjne."},
  // --- ABSURD ---
  {cat:"Absurd",catColor:"#b87020",q:"Kim jest profesor Pimko i co robi z Józiem?",opts:["Wydawcą książek Józia","Pedagogiem, który absurdalnie zamienia dorosłego Józia w ucznia","Przyjacielem Józia","Dyrektorem szkoły"],ans:1,explain:"Pimko bez logicznego uzasadnienia cofa dorosłego pisarza do rangi ucznia szkolnego — centralny absurdalny chwyt powieści."},
  {cat:"Absurd",catColor:"#b87020",q:"Na czym polegają bójki na miny?",opts:["Na fizycznych walkach","Na rywalizacji planszowej","Na walce za pomocą gestów twarzy — irracjonalny rytuał szkolny","Na konkursach matematycznych"],ans:2,explain:"Bójki na miny to absurdalny rytuał — uczniowie walczą gestami twarzy, demaskując irracjonalność szkolnych mechanizmów władzy."},
  {cat:"Absurd",catColor:"#b87020",q:"Jaka jest relacja człowieka i formy w powieści?",opts:["Człowiek tworzy własną formę","Są równorzędne","Forma rządzi człowiekiem wbrew jego woli","Forma służy człowiekowi"],ans:2,explain:"W Ferdydurke forma determinuje postępowanie człowieka — to odwrócenie naturalnego porządku i sedno absurdu."},
  {cat:"Absurd",catColor:"#b87020",q:"Czym jest upupianie?",opts:["Uczeniem dzieci manier","Sprowadzaniem człowieka do roli bezwolnego dziecka — akt władzy i zniewolenia","Rytuałem nagradzającym posłusznych","Techniką pedagogiczną"],ans:1,explain:"Upupianie to celowy akt infantylizacji — silniejszy sprowadza słabszego do roli dziecka, odbierając mu podmiotowość."},
  {cat:"Absurd",catColor:"#b87020",q:"Co reprezentuje Zuta Młodziakówna?",opts:["Symbol tradycji","Parodię nowoczesnej dziewczyny — fałszywa nowoczesność","Symbol miłości","Idealną uczennicę"],ans:1,explain:"Zuta jest parodią nowoczesności — jej wyzwolenie jest tak samo sztuczną formą jak konserwatyzm szlachty."},
  {cat:"Absurd",catColor:"#b87020",q:"Co charakteryzuje Młodziaków jako rodzinę?",opts:["Są konserwatywną szlachtą","Są parodią 'nowoczesności' — fałszywie wyzwolona inteligencja","Są prawdziwymi rewolucjonistami","Są chłopami aspirującymi do wyższej klasy"],ans:1,explain:"Młodziakowie pozują na nowoczesnych i wyzwolonych, ale ich 'nowoczesność' to kolejna sztuczna forma."},
  // --- AWANGARDA ---
  {cat:"Awangarda",catColor:"#2458a0",q:"Co to jest metafikcja w Ferdydurke?",opts:["Opis realistycznej rzeczywistości","Autor wkracza do tekstu i komentuje własne pisanie — obnażanie konwencji","Narracja z perspektywy dziecka","Dokumentacja historyczna"],ans:1,explain:"Gombrowicz przerywa narrację autokomentarzem — świadome obnażanie fikcji jako fikcji, typowy chwyt awangardowej metafikcji."},
  //{cat:"Awangarda",catColor:"#2458a0",q:"Jak nazywają się wstawki narracyjne w powieści?",opts:["Diabeł i dziecko","Filidor dzieckiem podszyty i Filidron dzieckiem podszyty","Gęba i Pupa","Szkolne wybryki"],ans:1,explain:"„Filidor dzieckiem podszyty" i „Filidron dzieckiem podszyty" — autonomiczne wstawki burzące spójność powieści."},
  {cat:"Awangarda",catColor:"#2458a0",q:"Jaką rolę pełni język w Ferdydurke?",opts:["Opisuje rzeczywistość wiernie","Demaskuje i zniewala — jest formą przemocy symbolicznej","Służy do poetyckiego wyrażania uczuć","Jest neutralnym narzędziem"],ans:1,explain:"Neologizmy, groteska słowna, deformacja składni — język nie opisuje rzeczywistości, on ją tworzy i zniewala."},
  {cat:"Awangarda",catColor:"#2458a0",q:"Na czym polega awangardowość kompozycji powieści?",opts:["Na linearnej fabule","Na fragmentaryczności, wstawkach, metafikcji i zerwaniu z realizmem","Na długich opisach psychologicznych","Na naśladowaniu XIX w."],ans:1,explain:"Ferdydurke łamie konwencje narracyjne — fragmentaryczność, wstawki, metafikcja, zerwanie z realizmem tworzą awangardową konstrukcję."},
  {cat:"Awangarda",catColor:"#2458a0",q:"Co łączy Ferdydurke z europejską awangardą?",opts:["Realistyczny opis codzienności","Eksperyment z formą, fragmentaryczność, metafikcja, krytyczny stosunek do konwencji","Klasyczne wzorce narracyjne","Nacjonalistyczna tematyka"],ans:1,explain:"Ferdydurke wpisuje się w awangardę przez eksperyment z formą, odrzucenie realizmu, metafikcję i językową grę."},
  // --- GROTESKA ---
  {cat:"Groteska",catColor:"#9c3060",q:"Na czym polega groteska w powieści?",opts:["Na czystym humorze","Na łączeniu komizmu i grozy jednocześnie — czytelnik nie wie, jak reagować","Na tragizmie bez humoru","Na realistycznym opisie"],ans:1,explain:"Groteska łączy to, co śmieszne, z tym, co przerażające — efekt wyobcowania i dezorientacji."},
  {cat:"Groteska",catColor:"#9c3060",q:"Kto jest groteskową karykaturą pedagoga?",opts:["Józio","Zuta","Profesor Pimko","Hurlecki"],ans:2,explain:"Pimko jest groteskową karykaturą pedagoga — wcielenie absurdalnej władzy, który zamienia dorosłego w ucznia."},
  {cat:"Groteska",catColor:"#9c3060",q:"Które grupy są karykaturowane w powieści?",opts:["Tylko szlachta","Tylko inteligencja","Inteligencja, szlachta i chłopi — wszystkie warstwy","Tylko środowisko szkolne"],ans:2,explain:"Gombrowicz demaskuje kolejno każdą warstwę — inteligencja (Młodziakowie), szlachta (Hurleccy), chłopi."},
  {cat:"Groteska",catColor:"#9c3060",q:"Jak cielesność funkcjonuje w groteskowym świecie powieści?",opts:["Jest idealizowana","W upokarzających kontekstach — demaskuje fałsz form","Jest całkowicie pominięta","Buduje napięcie romantyczne"],ans:1,explain:"Ciało w Ferdydurke pojawia się w groteskowych sytuacjach, wzmacniając efekt demaskacji fałszywych form."},
  {cat:"Groteska",catColor:"#9c3060",q:"Czym różni się groteska Gombrowicza od zwykłej satyry?",opts:["Niczym — to synonimy","Groteska łączy komizm z grozą — nie poucza moralnie, dezorientuje egzystencjalnie","Groteska jest łagodniejsza","Satyra jest bardziej artystyczna"],ans:1,explain:"Satyra krytykuje dla poprawy. Groteska Gombrowicza nie daje wyjścia — dezorientuje, niepokoi, stawia pytania bez odpowiedzi."},
  // --- SYMBOLE ---
  {cat:"Symbole",catColor:"#3a6820",q:"Co symbolizuje gęba?",opts:["Dosłownie usta bohatera","Maskę i formę narzuconą przez społeczeństwo — więzienie tożsamości","Zdolność do komunikacji","Ekspresję artystyczną"],ans:1,explain:"Gęba to maska przytwierdzona człowiekowi wbrew jego woli — definiuje go bez jego zgody."},
  {cat:"Symbole",catColor:"#3a6820",q:"Co oznacza pupa i upupianie?",opts:["Dojrzałość","Infantylizację — sprowadzenie do roli dziecka, narzędzie władzy","Symbol pożądania","Zbiorowe działanie"],ans:1,explain:"Pupa symbolizuje infantylizację — pozbawienie człowieka podmiotowości i sprowadzenie go do roli dziecka."},
  {cat:"Symbole",catColor:"#3a6820",q:"Jaką siłę symbolizuje łydka Zuty?",opts:["Siłę tradycji","Siłę intelektu","Erotyczne irracjonalne pożądanie rozbijające wszelką formę","Symbol tożsamości narodowej"],ans:2,explain:"Łydka symbolizuje cielesną, irracjonalną siłę pożądania — żywioł wymykający się każdej formie."},
  {cat:"Symbole",catColor:"#3a6820",q:"Co symbolizuje kupa?",opts:["Bogactwo materialne","Zbiorowy instynkt i stado — utratę indywidualności w grupie","Siłę jednostki","Solidarność społeczną"],ans:1,explain:"Kupa to żywioł zbiorowy — w grupie człowiek traci indywidualność. Symbol tego, co prymitywne — antyteza kultury wysokiej."},
  {cat:"Symbole",catColor:"#3a6820",q:"Jaką relację tworzą symbole gęba, pupa, łydka i kupa?",opts:["Są niezależne","Tworzą spójny system obrazowania zniewolenia: maska, infantylizacja, bunt cielesności, stado","Dotyczą tylko wątku szkolnego","Symbolizują różne epoki"],ans:1,explain:"Cztery symbole tworzą spójny obraz zniewolenia człowieka przez formę — każdy z innej strony."},
  {cat:"Symbole",catColor:"#3a6820",q:"Który symbol reprezentuje zbiorowy wymiar zniewolenia?",opts:["Gęba","Pupa","Łydka","Kupa"],ans:3,explain:"Kupa to żywioł zbiorowy — w grupie człowiek traci indywidualność, staje się częścią stada."},
  // --- FILOZOFIA ---
  {cat:"Filozofia",catColor:"#c9a84c",q:"Jaki jest główny temat filozoficzny Ferdydurke?",opts:["Miłość i samotność","Zniewolenie człowieka przez formę narzuconą z zewnątrz","Historia Polski w XX w.","Tajemnica śmierci"],ans:1,explain:"Gombrowicz bada, jak forma — społeczna, kulturowa, literacka — zniewala człowieka i odbiera mu autentyczność."},
  {cat:"Filozofia",catColor:"#c9a84c",q:"Co Gombrowicz rozumie przez 'formę'?",opts:["Formę gramatyczną zdania","Schemat narzucony człowiekowi przez społeczeństwo — maska, rola, konwenans","Gatunek literacki","Fizyczną sylwetkę bohatera"],ans:1,explain:"'Forma' to kluczowe pojęcie — każda rola społeczna, konwenans, oczekiwanie więzi człowieka."},
  {cat:"Filozofia",catColor:"#c9a84c",q:"Co to jest 'niedojrzałość' u Gombrowicza?",opts:["Wada do pokonania","Stan wyższy od dojrzałości — autentyczność, brak skamienienia w formie","Cecha złych bohaterów","Synonim głupoty"],ans:1,explain:"Paradoks Gombrowicza: niedojrzałość jest wartością — oznacza brak skostnienia, możliwość zmiany. Dojrzałość = śmierć w formie."},
  {cat:"Filozofia",catColor:"#c9a84c",q:"Jak kończy się powieść?",opts:["Józio odnajduje wolność","Józio ucieka, ale forma i niedojrzałość gonią go — brak rozwiązania, ucieczka bez wyzwolenia","Józio zostaje nauczycielem","Józio wyjeżdża za granicę i jest wolny"],ans:1,explain:"Finał jest otwarty — Józio ucieka, ale nie jest wolny. Forma jest wszechobecna i nie można przed nią uciec."},
  {cat:"Filozofia",catColor:"#c9a84c",q:"Dlaczego Gombrowicz krytykuje zarówno tradycję, jak i nowoczesność?",opts:["Bo jest nihilistą","Bo obie są formami — obie narzucają schematy i pozbawiają autentyczności","Bo preferuje umiarkowanie","Bo był konserwatystą"],ans:1,explain:"Kluczowy wniosek: i tradycja (Hurleccy), i nowoczesność (Młodziakowie) to formy. Żadna nie jest 'naturalna' — obie więzią człowieka."},
];

const QB_NAWLOC = [
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Czym jest Nawłoć w Przedwiośniu?",opts:["Rewolucyjnym centrum robotniczym","Ziemiańskim dworkiem Wielosławskich — sielankowe miejsce pełne kontrastów","Miastem portowym","Fabryką w Łodzi"],ans:1,explain:"Nawłoć to dworek Wielosławskich opisywany jak raj — bujne parki, stawy, polowania. Ale tuż za bramą rozciąga się nędzny folwark."},
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Co symbolizuje kontrast parku i folwarku?",opts:["Różnicę estetyczną","Przepaść klasową — dobrobyt szlachty oparty na nędzy chłopów","Różnicę między latem a zimą","Kontrast architektury i natury"],ans:1,explain:"Kontrast jest dosłownie geograficzny — piękny park i nędzny folwark leżą tuż obok. Żeromski pokazuje przepaść klasową jako fakt fizycznej przestrzeni."},
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Dlaczego Nawłoć jest anachroniczna?",opts:["Bo jest nowoczesna","Bo szlachta żyje jak przed wojną, ignorując zmiany w odrodzonej Polsce","Bo zbudowana ze starych materiałów","Bo mieszkańcy mówią staropolskim językiem"],ans:1,explain:"Nawłoć to skansen — szlachta zachowuje przedwojenne obyczaje, jakby rewolucja i odrodzona Polska jej nie dotyczyły."},
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Jak Żeromski opisuje pejzaż Nawłoci?",opts:["Surowo i chłodno","Ciepło i zmysłowo — celowo, by uwydatnić kontrast z nędzą","Realistycznie i dokumentalnie","Jako miejsce zniszczone"],ans:1,explain:"Żeromski maluje Nawłoć w ciepłych barwach — ale celowo, żeby kontrast z folwarczną nędzą był jak najbardziej uderzający."},
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Czym jest Nawłoć jako przestrzeń kulturowa?",opts:["Symbolem nowoczesnej Polski","Ucieleśnieniem mitu arkadyjskiego dworku — ale zdekonstruowanego i skrytykowanego","Symbolem rewolucji","Centrum polskiej kultury"],ans:1,explain:"Nawłoć nawiązuje do tradycji arkadyjskiego dworku, ale Żeromski ją dekonstruuje — za każdym ogrodem stoi folwark, za każdym balem głód."},
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Gdzie geograficznie leży folwark w stosunku do dworku?",opts:["Kilka kilometrów dalej","Tuż za ogrodzeniem dworku — bliskość jest dosłowna i symboliczna","Po drugiej stronie wsi","W pobliskim mieście"],ans:1,explain:"Folwark jest dosłownie tuż za płotem. Żeromski nie daje szlachcie alibi odległości."},
  {cat:"Przestrzeń",catColor:"#2a7d5f",q:"Nawłoć jako 'lustro polskiego społeczeństwa' — co to oznacza?",opts:["Że w dworku są lustrzane sale","Przez Nawłoć Żeromski diagnozuje fundamentalny problem odrodzonej Polski: piękna fasada, niesprawiedliwa struktura","Że Cezary przegląda się w lustrze","Że Nawłoć jest odbiciem Warszawy"],ans:1,explain:"Nawłoć jest diagnozą w skali mikro — to, co dzieje się w tym dworku, jest symptomem choroby całego kraju."},
  {cat:"Bohaterowie",catColor:"#3a6880",q:"Kim jest Cezary Baryka na Nawłoci?",opts:["Synem Wielosławskich","Przybyszem z rewolucyjnej Rosji — obserwatorem z zewnątrz, widzącym Nawłoć inaczej","Zarządcą folwarku","Nauczycielem dzieci"],ans:1,explain:"Cezary to przybysz z zewnątrz, wychowany w rewolucyjnym chaosie. Widzi Nawłoć inaczej — dostrzega kontrast piękna i niesprawiedliwości."},
  {cat:"Bohaterowie",catColor:"#3a6880",q:"Jaką rolę odgrywa Laura Kościeniecka?",opts:["Jest rewolucjonistką","Symbolizuje uwodzicielskość szlacheckiego świata — miłość do niej paraliżuje sumienie Cezarego","Reprezentuje biedotę","Jest wzorem emancypacji"],ans:1,explain:"Laura kocha Cezarego, ale nie może wyjść poza świat Nawłoci. Jej miłość działa jak narkotyk uśmierzający sumienie Cezarego."},
  {cat:"Bohaterowie",catColor:"#3a6880",q:"Jak Żeromski charakteryzuje Hipolita Wielosławskiego?",opts:["Jako złego szlachcica","Jako dobrodusznego, gościnnego człowieka — dobry człowiek w niesprawiedliwej strukturze","Jako rewolucjonistę po cichu","Jako postać groteskową"],ans:1,explain:"Hipolit to serdeczny gospodarz — ale Żeromski pokazuje, że dobra wola nie zmienia faktu, że korzysta z systemu wyzysku."},
  {cat:"Bohaterowie",catColor:"#3a6880",q:"Jaką rolę pełnią chłopi folwarczni?",opts:["Są głównymi bohaterami z głosem","Zbiorowym bohaterem tła bez imion — ucieleśnienie niesprawiedliwości społecznej","Sprzymierzeńcami szlachty","Buntują się i przeprowadzają rewolucję"],ans:1,explain:"Chłopi nie mają imion ani głosu — są milczącym tłem. Ich nędza jest realna. Dla Cezarego stają się symbolem niesprawiedliwości."},
  {cat:"Bohaterowie",catColor:"#3a6880",q:"Jaki jest los matki Cezarego?",opts:["Umiera na Nawłoci","Ginie podczas rewolucji w Baku","Zostaje w Rosji szczęśliwie","Wraca do Polski wcześniej niż Cezary"],ans:1,explain:"Matka Cezarego ginie w trakcie rewolucji w Baku. Ta trauma kształtuje jego stosunek do gwałtownych zmian."},
  {cat:"Kontrast",catColor:"#a0402a",q:"Co symbolizuje zestawienie bali szlacheckich z głodem chłopów?",opts:["Bogactwo kulturowe szlachty","Niesprawiedliwość systemu klasowego — dobrobyt jednych zbudowany na wyzysku drugich","Naturalny porządek społeczny","Różnicę upodobań estetycznych"],ans:1,explain:"Żeromski celowo zestawia luksus szlachty z nędzą chłopów — diagnoza systemu, w którym dobrobyt jednych wynika z wyzysku drugich."},
  {cat:"Kontrast",catColor:"#a0402a",q:"Jak miłość do Laury wpływa na Cezarego?",opts:["Czyni go aktywnym rewolucjonistą","Działa jak narkotyk — chwilowo uśmierza sumienie i sprawia, że Cezary akceptuje niesprawiedliwy świat","Nie wpływa na poglądy","Wzmacnia krytycyzm"],ans:1,explain:"Zachwyt Laurą paraliżuje wolę zmiany — ilustracja, jak zmysłowe piękno może osłabiać wrażliwość społeczną i moralną."},
  {cat:"Kontrast",catColor:"#a0402a",q:"Jak Żeromski ocenia szlachtę z Nawłoci?",opts:["Potępia wprost jako złych ludzi","Nie potępia — pokazuje mechanizm: dobrzy ludzie w niesprawiedliwej strukturze — krytyka systemu, nie jednostek","Gloryfikuje ich","Ignoruje kwestię moralną"],ans:1,explain:"Autor nie potępia Wielosławskich wprost — Hipolit to serdeczny człowiek. Ale diagnozuje: dobra wola nie wystarczy, gdy ktoś korzysta z systemu wyzysku."},
  {cat:"Kontrast",catColor:"#a0402a",q:"Dlaczego Nawłoć jest piękna i zepsuta jednocześnie?",opts:["Bo architektura jest stara","Bo łączy zmysłowe piękno z głęboką niesprawiedliwością — piękna fasada zepsutego systemu","Bo mieszkańcy są nieszczerzy","Bo pejzaż jest malowniczy i zniszczony"],ans:1,explain:"To paradoks Nawłoci — jej piękno jest autentyczne, ale opiera się na niesprawiedliwości. Żeromski nie fałszuje żadnej ze stron."},
  {cat:"Znaczenie",catColor:"#7a2040",q:"Czym jest Nawłoć w kontekście drogi życiowej Cezarego?",opts:["Końcowym etapem","Środkowym etapem dojrzewania — między Bakujem a Warszawą","Miejscem urodzenia","Nieistotnym epizodem"],ans:1,explain:"Nawłoć to etap między rewolucyjnym Bakujem a Warszawą — Cezary poznaje szlachecką polskość i odrzuca ją. Odejście stamtąd to akt dorosłości."},
  {cat:"Znaczenie",catColor:"#7a2040",q:"Do jakiej tradycji literackiej nawiązuje Nawłoć?",opts:["Do tradycji industrialnej","Do arkadyjskiego dworku (Pan Tadeusz, Nad Niemnem) — ale krytycznie","Do tradycji gotyckiej","Do tradycji morskiej przygody"],ans:1,explain:"Żeromski nawiązuje do motywu dworku jako symbolu polskości, ale dekonstruuje go — Nawłoć jest piękna i chora jednocześnie."},
  {cat:"Znaczenie",catColor:"#7a2040",q:"Co symbolizuje odejście Cezarego z Nawłoci?",opts:["Tchórzostwo","Odrzucenie szlacheckiej pięknej, ale niesprawiedliwej wersji Polski — gest dorosłości","Zakończenie miłości z inicjatywy Laury","Chęć powrotu do Rosji"],ans:1,explain:"Cezary odchodzi, bo nie może pogodzić się z niesprawiedliwością. To odrzucenie pięknego mitu — gest dojrzałości."},
  {cat:"Znaczenie",catColor:"#7a2040",q:"Jak Żeromski traktuje tradycję dworku?",opts:["Gloryfikuje ją","Dekonstruuje krytycznie — nawiązuje do tradycji, ale pokazuje ciemne strony","Ignoruje całkowicie","Ironizuje groteskowo jak Gombrowicz"],ans:1,explain:"Żeromski lubi tradycję dworku, ale jako realista z sumieniem nie może jej idealizować. Dekonstruuje mit sielanki."},
  {cat:"Znaczenie",catColor:"#7a2040",q:"Jaką rolę pełni Nawłoć jako lustro polskiego społeczeństwa?",opts:["Pokazuje ideał polskiego życia","Demaskuje fundamentalny problem odrodzonej Polski — piękna fasada skrywa niesprawiedliwość klasową","Dokumentuje folklorystyczne tradycje","Chwali kulturę szlachecką"],ans:1,explain:"Żeromski używa Nawłoci, by pokazać problem Polski po odzyskaniu niepodległości — szlacheckie piękno ukrywa głęboką niesprawiedliwość."},
  {cat:"Nawłoć a Polska",catColor:"#2a7d5f",q:"Dlaczego Nawłoć jest ważna dla pytania o odbudowę Polski?",opts:["Bo jest centrum politycznym","Bo pokazuje, że szlachecka tradycja jest niewystarczająca bez reformy społecznej","Bo jest symbolem sukcesu demokracji","Bo Gajowiec mieszka w Nawłoci"],ans:1,explain:"Nawłoć ilustruje, że piękna szlachecka tradycja nie wystarczy jako fundament nowej Polski — konieczna jest reforma stosunków klasowych."},
  {cat:"Nawłoć a Polska",catColor:"#2a7d5f",q:"Jak pobyt na Nawłoci wpływa na poglądy Cezarego?",opts:["Przekonuje do konserwatyzmu","Uświadamia, że polska tradycja jest piękna, ale niesprawiedliwa — przybliża go do poszukiwania radykalniejszej zmiany","Przekonuje do drogi Gajowca","Nie wpływa na poglądy"],ans:1,explain:"Nawłoć uczy Cezarego, że polskość ma wiele twarzy — ale żadna nie jest wystarczająca. Pobyt tam przybliża go do buntu."},
  {cat:"Nawłoć a Polska",catColor:"#2a7d5f",q:"Jaki jest ostateczny wyrok Żeromskiego na Nawłoć?",opts:["Jednoznacznie pozytywny","Ambiwalentny — kocha ją i krytykuje: piękna, ale chora, wspaniała, ale niesprawiedliwa","Jednoznacznie negatywny","Obojętny — Nawłoć to tylko tło"],ans:1,explain:"Żeromski traktuje Nawłoć z nostalgią i bólem — rozumie jej urok, ale nie może jej bronić. To diagnoza z miłości, nie z nienawiści."},
  {cat:"Nawłoć a Polska",catColor:"#2a7d5f",q:"Jak Nawłoć kontrastuje z rewolucyjną Rosją Cezarego?",opts:["Nawłoć jest chaotyczna jak Rosja","Nawłoć jest spokojna i piękna — ale Cezary widzi te same napięcia klasowe, które wywołały rewolucję w Rosji","Nawłoć i Rosja są podobne","Rosja była spokojniejsza"],ans:1,explain:"Cezary widzi w Nawłoci zapowiedź tego, co znał z Rosji — napięcia klasowe, głód obok przepychu. Dlatego boi się rewolucji, ale też ją rozumie."},
];

const QB_WIZJE = [
  {cat:"Seweryn – szklane domy",catColor:"#2458a0",q:"Kim jest Seweryn Baryka i jaka jest jego wizja?",opts:["Rewolucjonistą zbrojnym","Ojcem Cezarego — emigrantem marzącym o szklanych domach, modernizacji bez przemocy","Urzędnikiem jak Gajowiec","Chłopem popierającym reformę"],ans:1,explain:"Seweryn to emigrant, który opowiada synowi o szklanych domach — metaforze nowoczesnej Polski osiągniętej przez postęp techniczny, bez rewolucji."},
  {cat:"Seweryn – szklane domy",catColor:"#2458a0",q:"Co symbolizują szklane domy?",opts:["Dosłownie budynki ze szkła","Utopię techniczną — modernizację i dobrobyt jako drogę do sprawiedliwej Polski bez przemocy","Bezduszne życie w mieście","Wizję komunizmu zachodniego"],ans:1,explain:"Szklane domy to wieloznaczna metafora — postęp bez rewolucji, dobrobyt bez krwi, nowoczesność jako rozwiązanie problemów."},
  {cat:"Seweryn – szklane domy",catColor:"#2458a0",q:"Co się dzieje, gdy Cezary szuka szklanych domów?",opts:["Znajduje je i jest zachwycony","Nie znajduje — mit ojca się nie sprawdził. Pierwsze wielkie rozczarowanie Cezarego","Szklane domy istnieją, ale tylko dla bogatych","Domy są w budowie"],ans:1,explain:"Szklanych domów nie ma. Ojciec umiera w drodze, zostawiając Cezaremu złudne marzenie. To punkt wyjścia do poszukiwań — czym naprawdę jest Polska?"},
  {cat:"Seweryn – szklane domy",catColor:"#2458a0",q:"Dlaczego wizja Seweryna jest określana jako mit?",opts:["Bo jest zbyt nowoczesna","Bo jest nierealistyczna — ignoruje napięcia klasowe, to marzenie emigranta, nie program polityczny","Bo Seweryn sam w nią nie wierzy","Bo szklane domy naprawdę istniały"],ans:1,explain:"Wizja Seweryna jest piękna, ale oderwana od realiów — nie odpowiada na pytanie, jak konkretnie rozwiązać nierówności."},
  {cat:"Seweryn – szklane domy",catColor:"#2458a0",q:"Jaki jest los Seweryna Baryki?",opts:["Dożywa końca powieści","Umiera w drodze do Polski zanim dotrze do ojczyzny","Zostaje aresztowany","Wraca do Baku"],ans:1,explain:"Seweryn umiera w podróży — marzenie i marzyciel giną razem, zanim zderzą się z rzeczywistością."},
  {cat:"Gajowiec – reforma",catColor:"#2a7d5f",q:"Kim jest Gajowiec i co reprezentuje?",opts:["Rewolucjonistą komunistycznym","Urzędnikiem, reformatorem, mentorem Cezarego — symbolem ewolucyjnej drogi przebudowy Polski","Szlachcicem broniącym tradycji","Chłopem domagającym się ziemi"],ans:1,explain:"Gajowiec to pragmatyczny reformator — wierzy w stopniową przebudowę od wewnątrz: instytucje, prawo, oświata, demokracja."},
  {cat:"Gajowiec – reforma",catColor:"#2a7d5f",q:"Na czym polega droga Gajowca?",opts:["Natychmiastowej rewolucji","Reformie ewolucyjnej — praca organiczna, instytucje, praworządność, demokracja, bez przemocy","Powrocie do tradycji","Modernizacji technicznej"],ans:1,explain:"Gajowiec wierzy w stopniową przebudowę od wewnątrz — droga powolna, ale bez destrukcji i przemocy."},
  {cat:"Gajowiec – reforma",catColor:"#2a7d5f",q:"Jak Żeromski traktuje Gajowca?",opts:["Jednoznacznie negatywnie","Z sympatią — ale pokazuje ograniczenia. Reforma jest zbyt powolna wobec ogromu biedy","Jako bohatera bez wad","Jako postać groteskową"],ans:1,explain:"Autor lubi Gajowca i daje mu rację w wielu kwestiach. Ale Lulek ma rację: reformy idą za wolno, gdy ludzie głodują."},
  {cat:"Gajowiec – reforma",catColor:"#2a7d5f",q:"Jaki zarzut stawia Lulek wobec Gajowca?",opts:["Że jest zbyt radykalny","Że broni status quo i hipokrytycznie zwodzi masy — reforma jest zwodzeniem, nie rozwiązaniem","Że nie kocha Polski","Że jest zbyt stary"],ans:1,explain:"Lulek atakuje Gajowca jako obrońcę systemu — reform jest za mało, idą za wolno, a bieda jest teraz, nie za dwadzieścia lat."},
  {cat:"Gajowiec – reforma",catColor:"#2a7d5f",q:"Dlaczego Cezary szanuje Gajowca, ale go nie naśladuje?",opts:["Bo go nie rozumie","Bo rozumie rację, ale czuje jej niewystarczalność wobec skali niesprawiedliwości widzianej na Nawłoci i w Rosji","Bo Gajowiec jest zbyt stary","Bo woli Seweryna"],ans:1,explain:"Cezary widział nędzę Nawłoci i koszty rewolucji w Baku — Gajowiec jest zbyt powolny. Szanuje go, ale wie, że ta droga nie wystarczy."},
  {cat:"Lulek – rewolucja",catColor:"#c84b2f",q:"Kim jest Antoni Lulek?",opts:["Szlachcicem broniącym tradycji","Działaczem robotniczym i komunistą — symbolem rewolucji proletariackiej jako jedynej możliwej drogi","Urzędnikiem reformującym system","Poetą opisującym nędzę"],ans:1,explain:"Lulek to głos proletariatu i komunizmu — odrzuca reformę jako zwodzenie mas, chce natychmiastowego obalenia systemu."},
  {cat:"Lulek – rewolucja",catColor:"#c84b2f",q:"W czyim imieniu przemawia Lulek?",opts:["W imieniu szlachty","W imieniu proletariatu i bezrolnych chłopów — tych, których Nawłoć chciała nie widzieć","W imieniu inteligencji","W imieniu emigracji"],ans:1,explain:"Lulek jest głosem najuboższych — robotników rolnych, chłopów bez ziemi, proletariatu miejskiego."},
  {cat:"Lulek – rewolucja",catColor:"#c84b2f",q:"Dlaczego Lulek ma moralną siłę w powieści?",opts:["Bo jest najinteligentniejszy","Bo jego gniew i diagnoza biedy są uzasadnione i trafne — Żeromski nie odbiera mu racji moralnej","Bo jest sympatyczny","Bo popiera Gajowca"],ans:1,explain:"Żeromski daje Lulkowi siłę moralną — bo ma on rację w diagnozie. Nędza jest realna, system jest niesprawiedliwy, reforma za wolna."},
  {cat:"Lulek – rewolucja",catColor:"#c84b2f",q:"Dlaczego Cezary nie może bezkrytycznie przyjąć drogi Lulka?",opts:["Bo nie zna robotników","Bo widział rewolucję w Baku — zna jej cenę w ludzkim cierpieniu i boi się powtórzenia","Bo preferuje drogę Gajowca","Bo Lulek jest niewiarygodny"],ans:1,explain:"Cezary przeżył bolszewicką rewolucję — znał jej chaos, przemoc i terror. Rozumie rację Lulka, ale boi się kosztów."},
  {cat:"Lulek – rewolucja",catColor:"#c84b2f",q:"Jak Żeromski traktuje wizję Lulka?",opts:["Jednoznacznie popiera rewolucję","Z ambiwalencją — rozumie jej moralną siłę, ale zna koszty. Nie potępia, ale i nie gloryfikuje","Jednoznacznie potępia","Ignoruje jako marginalną ideologię"],ans:1,explain:"Autor traktuje Lulka z ambiwalencją — rozumie rację i siłę moralną, ale pamięta o rewolucji rosyjskiej i jej ofiarach."},
  {cat:"Dylemat Cezarego",catColor:"#b87020",q:"Na czym polega dylemat Cezarego?",opts:["Nie ma dylematu — wie czego chce","Jest rozdarty: szklane domy rozczarowały, Gajowiec za powolny, Lulek za krwawy — żadna droga nie jest prosta","Wybiera reformę Gajowca","Wraca do Rosji"],ans:1,explain:"Cezary dziedziczy rozczarowanie po micie ojca, szanuje Gajowca, ale rozumie Lulka. Żaden z wyborów nie jest czysty."},
  {cat:"Dylemat Cezarego",catColor:"#b87020",q:"Jak kończy się Przedwiośnie?",opts:["Cezary deklaruje wiarę w szklane domy","Cezary idzie z marszem robotników — ale Żeromski nie mówi dokąd. Finał jest otwarty — żadna wizja nie wygrywa","Cezary wraca na Nawłoć","Cezary emigruje do Ameryki"],ans:1,explain:"Finał jest celowo ambiwalentny — Cezary idzie z robotnikami, ale bez pewności. To nie manifest, to rana. Żeromski nie wskazuje właściwej drogi."},
  {cat:"Dylemat Cezarego",catColor:"#b87020",q:"Co łączy wszystkie trzy wizje?",opts:["Wszystkie odrzucają demokrację","Wszystkie odpowiadają na tę samą diagnozę: Polska jest niesprawiedliwa i wymaga zmiany — różnią się środkami","Wszystkie popierają szlachtę","Wszystkie są czysto utopijne"],ans:1,explain:"Seweryn, Gajowiec i Lulek zgadzają się, że Polska wymaga zmiany — różnią ich tempo i środki."},
  {cat:"Porównanie wizji",catColor:"#b87020",q:"Jak wizja Seweryna różni się od wizji Gajowca?",opts:["Nie różnią się","Seweryn oferuje utopię techniczną bez programu, Gajowiec proponuje konkretną pracę organiczną z poszanowaniem prawa","Seweryn jest bardziej radykalny","Gajowiec popiera rewolucję"],ans:1,explain:"Seweryn daje mit i marzenie, Gajowiec daje konkretny program — instytucje, prawo, oświata. Obaj odrzucają przemoc, ale Gajowiec jest bliższy realiom."},
  {cat:"Porównanie wizji",catColor:"#b87020",q:"Co różni Gajowca od Lulka?",opts:["Gajowiec popiera chłopów, Lulek szlachtę","Gajowiec wierzy w reformę bez przemocy, Lulek żąda rewolucji i akceptuje przemoc jako konieczność","Chcą tego samego, różnią ich szczegóły","Gajowiec to komunista, Lulek liberał"],ans:1,explain:"Fundamentalna różnica: ewolucja vs. rewolucja, prawo vs. siła, cierpliwość vs. natychmiastowość. Centralna oś ideologiczna powieści."},
  {cat:"Porównanie wizji",catColor:"#b87020",q:"Która wizja jest najbliższa Cezaremu na końcu?",opts:["Szklane domy","Reforma Gajowca","Rewolucja Lulka — Cezary idzie z robotnikami, choć bez pewności","Żadna — wyjeżdża za granicę"],ans:2,explain:"Finałowy marsz sugeruje, że wizja Lulka jest mu najbliższa — ale Żeromski celowo nie daje pewności. To gest rozdarcia, nie deklaracja."},
  {cat:"Żeromski",catColor:"#b87020",q:"Dlaczego Żeromski jest ambiwalentny wobec rewolucji?",opts:["Bo sam był szlachcicem broniącym przywilejów","Bo rozumiał rację moralną, ale widział koszty rewolucji rosyjskiej i bał się powtórzenia w Polsce","Bo nie interesowała go polityka","Bo był zbyt stary"],ans:1,explain:"Żeromski pochodzi ze środowiska szlacheckiego, ale ma wrażliwość społeczną. Rozumie biedę i gniew Lulka, ale zna historię rewolucji bolszewickiej."},
  {cat:"Żeromski",catColor:"#b87020",q:"Co Przedwiośnie mówi o odrodzonej Polsce?",opts:["Że Polska jest idealna","Że jest piękna, ale głęboko niesprawiedliwa — i musi wybrać drogę zmiany, zanim nastąpi katastrofa","Że powinna wrócić pod zabory","Że jest zbyt słaba"],ans:1,explain:"Żeromski mówi: Polska odrodziła się, ale nie jest sprawiedliwa. Czas wyboru nadchodzi — i każda z trzech dróg ma swoją cenę."},
  {cat:"Żeromski",catColor:"#b87020",q:"Co jest największą siłą artystyczną Przedwiośnia?",opts:["Jednoznaczna odpowiedź o najlepszej drodze","Ambiwalencja i otwartość — Żeromski stawia pytania i pokazuje koszty każdego wyboru, nie dając prostych odpowiedzi","Gloryfikacja rewolucji","Piękny opis przyrody"],ans:1,explain:"Przedwiośnie jest wielkie właśnie dlatego, że nie daje prostej odpowiedzi. Żeromski jest uczciwszy niż propagandyści — pokazuje, że każda droga boli."},
  {cat:"Porównanie wizji",catColor:"#b87020",q:"Który bohater akceptuje przemoc jako narzędzie zmiany?",opts:["Seweryn Baryka","Szymon Gajowiec","Antoni Lulek","Hipolit Wielosławski"],ans:2,explain:"Tylko Lulek akceptuje przemoc jako konieczne narzędzie rewolucji. Seweryn wierzy w postęp techniczny, Gajowiec w prawo i reformę."},
];

// TEMAT 4 — FABUŁA, BOHATEROWIE, TYTUŁ PRZEDWIOŚNIA
const QB_PRZEDWIOSNIE = [
  // --- FABUŁA ---
  {cat:"Fabuła – Baku",catColor:"#b87020",q:"Gdzie spędza dzieciństwo i młodość Cezary Baryka?",opts:["W Warszawie","W Baku na Kaukazie, w rodzinie polskich emigrantów","W Nawłoci na Kielecczyźnie","W Krakowie u dziadków"],ans:1,explain:"Cezary dorasta w Baku — mieście naftowym na Kaukazie. Jego ojciec Seweryn to polski emigrant, który osiedlił się tam przed laty."},
  {cat:"Fabuła – Baku",catColor:"#b87020",q:"Co przeżywa Cezary w Baku w czasie rewolucji?",opts:["Idylliczne dzieciństwo bez przeszkód","Chaos, przemoc, śmierć matki i starcie dwóch światów — rewolucja niszczy jego dom","Aktywny udział w walkach po stronie bolszewików","Spokojne obserwowanie wydarzeń z bezpiecznej odległości"],ans:1,explain:"Rewolucja bolszewicka w Baku to trauma Cezarego — ogląda przemoc, traci matkę, przeżywa głód i chaos. To doświadczenie kształtuje całą jego późniejszą postawę."},
  {cat:"Fabuła – Baku",catColor:"#b87020",q:"Co Seweryn Baryka opowiada Cezaremu przed wyjazdem do Polski?",opts:["Że Polska jest zniszczona i biedna","O szklanych domach — nowoczesnej, szczęśliwej Polsce zbudowanej dzięki postępowi technicznemu","Że powinien zostać w Rosji","O rewolucji jako jedynej drodze do wolności"],ans:1,explain:"Seweryn snuje Cezaremu wizję szklanych domów — mit o nowoczesnej Polsce, który sprowadza syna do ojczyzny i jest punktem wyjścia całej powieści."},
  {cat:"Fabuła – Droga",catColor:"#b87020",q:"Co dzieje się z Sewerynem Baryką w drodze do Polski?",opts:["Dociera do Warszawy i zostaje urzędnikiem","Umiera w podróży, zanim dotrze do ojczyzny","Wraca do Baku","Zatrzymuje się w Kijowie na stałe"],ans:1,explain:"Seweryn umiera w drodze — nie doczeka zobaczenia Polski. Zostawia Cezaremu tylko marzenie o szklanych domach, które okazuje się być mitem."},
  {cat:"Fabuła – Droga",catColor:"#b87020",q:"Jakie jest pierwsze wielkie rozczarowanie Cezarego w Polsce?",opts:["Że Laura go nie kocha","Że nie ma szklanych domów — Polska jest biedna i niesprawiedliwa, nie jak obiecał ojciec","Że Gajowiec odrzuca jego poglądy","Że Warszawa jest zniszczona"],ans:1,explain:"Cezary przyjeżdża do Polski z wyobrażeniem o szklanych domach — i zderza się z biedą, niesprawiedliwością i rzeczywistością daleko odbiegającą od marzenia ojca."},
  {cat:"Fabuła – Nawłoć",catColor:"#b87020",q:"Jak Cezary trafia na Nawłoć?",opts:["Przypadkowo podczas podróży","Przez Gajowca, który wysyła go tam, by odpocząć i poznać polską wieś","Na zaproszenie Laury","Ucieka tam przed policją"],ans:1,explain:"Gajowiec, jako opiekun Cezarego w Polsce, kieruje go na Nawłoć — do ziemiańskiego dworku rodziny Wielosławskich, by poznał kraj od strony szlacheckiej tradycji."},
  {cat:"Fabuła – Nawłoć",catColor:"#b87020",q:"Co robi Cezary na Nawłoci?",opts:["Organizuje rewolucję","Zakochuje się w Laurze, poluje, bawi się — i powoli konfrontuje piękno dworku z nędzą folwarku","Pracuje jako zarządca","Szpieguje dla komunistów"],ans:1,explain:"Na Nawłoci Cezary przeżywa idyllę — kocha Laurę, uczestniczy w życiu szlacheckim. Ale jako outsider widzi też kontrast między pięknem a niesprawiedliwością."},
  {cat:"Fabuła – Warszawa",catColor:"#b87020",q:"Co Cezary robi po powrocie z Nawłoci do Warszawy?",opts:["Wraca do Baku","Słucha debat politycznych między Gajowcem a Lulkiem i szuka swojej drogi","Zostaje żołnierzem","Wyjeżdża za granicę"],ans:1,explain:"W Warszawie Cezary staje między dwoma wizjami — Gajowca (reforma) i Lulka (rewolucja). Słucha obu, nie może wybrać, szuka własnej odpowiedzi."},
  {cat:"Fabuła – Finał",catColor:"#b87020",q:"Jak kończy się powieść?",opts:["Cezary żeni się z Laurą i osiada na wsi","Cezary dołącza do robotniczego marszu na Belweder — otwarty, ambiwalentny finał","Cezary wraca do Baku","Cezary ginie w wojnie polsko-bolszewickiej"],ans:1,explain:"Powieść kończy się marszem na Belweder — Cezary idzie z robotnikami. Żeromski nie mówi, co się wydarzy. To gest rozdarcia, nie deklaracja ideologiczna."},
  {cat:"Fabuła – Finał",catColor:"#b87020",q:"Dlaczego finał Przedwiośnia jest celowo otwarty?",opts:["Bo Żeromski nie zdążył go napisać","Bo każda droga ma swoją cenę — Żeromski stawia pytanie, nie daje odpowiedzi","Bo cenzura usunęła zakończenie","Bo Cezary nie mógł wybrać z powodów osobistych"],ans:1,explain:"Żeromski celowo nie rozstrzyga dylematu — każda z trzech dróg (szklane domy, reforma, rewolucja) ma swoje koszty. Otwarte zakończenie to uczciwa odpowiedź artysty."},
  {cat:"Fabuła – Chronologia",catColor:"#b87020",q:"W jakiej kolejności następują główne etapy życia Cezarego?",opts:["Warszawa → Nawłoć → Baku → finał","Baku (dzieciństwo i rewolucja) → droga do Polski (śmierć ojca) → Warszawa / Nawłoć → marsz robotników","Nawłoć → Baku → Warszawa → finał","Warszawa → Baku → Nawłoć → finał"],ans:1,explain:"Chronologia: Baku (dzieciństwo, rewolucja, śmierć matki) → droga do Polski (śmierć Seweryna) → Polska (Nawłoć, Warszawa) → finalny marsz."},
  // --- BOHATEROWIE ---
  {cat:"Bohaterowie – Cezary",catColor:"#c84b2f",q:"Kim jest Cezary Baryka?",opts:["Polskim szlachcicem z tradycjami","Synem polskiego emigranta, wychowanym w Baku — człowiekiem między kulturami, szukającym tożsamości i sprawiedliwości","Komunistycznym agitatoremm","Zwykłym chłopcem z Warszawy"],ans:1,explain:"Cezary to bohater rozdartych tożsamości — Polak z Baku, przybysz w ojczyźnie, który rozumie rewolucję, ale boi się jej. Szuka miejsca między tradycją a zmianą."},
  {cat:"Bohaterowie – Cezary",catColor:"#c84b2f",q:"Jaką rolę odgrywa doświadczenie rewolucji w Baku dla postawy Cezarego?",opts:["Żadną — szybko o tym zapomina","Kluczową — widział cenę rewolucji (przemoc, śmierć, chaos), dlatego rozumie Lulka, ale nie może go poprzeć bez zastrzeżeń","Sprawia, że popiera rewolucję w Polsce","Sprawia, że odrzuca politykę całkowicie"],ans:1,explain:"Baku to klucz do zrozumienia Cezarego. Znał rewolucję od środka. Dlatego stoi między Gajowcem a Lulkiem — rozumie obu, żadnego nie może w pełni naśladować."},
  {cat:"Bohaterowie – Cezary",catColor:"#c84b2f",q:"Jak zmienia się Cezary w toku powieści?",opts:["Zostaje konserwatystą","Dojrzewa — od naiwnego marzenia o szklanych domach przez doświadczenie Nawłoci do politycznego rozdarcia w Warszawie","Staje się komunistą","Nie zmienia się — jest taki sam od początku do końca"],ans:1,explain:"Cezary przechodzi drogę od mitu (szklane domy) przez konfrontację ze szlachecką polskością (Nawłoć) do politycznego dylematu w Warszawie. To powieść o dojrzewaniu."},
  {cat:"Bohaterowie – Seweryn",catColor:"#2458a0",q:"Jaka jest rola Seweryna Baryki w powieści?",opts:["Głęboko rozwinięty bohater pierwszoplanowy","Ojciec Cezarego — symboliczna postać, której mit (szklane domy) uruchamia całą akcję i stanowi punkt wyjścia powieści","Negatywny antagonista","Polityczny przywódca rewolucji"],ans:1,explain:"Seweryn nie jest bohaterem pierwszoplanowym — pełni funkcję symboliczną. Jego mit szklanych domów jest katalizatorem całej powieści i metaforą polskich złudzeń."},
  {cat:"Bohaterowie – Seweryn",catColor:"#2458a0",q:"Co Seweryn symbolizuje jako postać?",opts:["Ziemiańską tradycję","Polską emigrację, jej tęsknotę i nierealistyczne wyobrażenia o ojczyźnie — piękny mit zamiast prawdy","Rewolucję bolszewicką","Pragmatyczną reformę"],ans:1,explain:"Seweryn to emigrant snujący marzenia o idealnej Polsce. Jego szklane domy to symbol polskiego mitu emigracyjnego — pięknego, ale oderwany od rzeczywistości."},
  {cat:"Bohaterowie – Laura",catColor:"#9c3060",q:"Kim jest Laura Kościeniecka?",opts:["Chłopką dążącą do awansu społecznego","Piękną, inteligentną córką szlachecką — symbolem uroku i jałowości szlacheckiego świata","Komunistyczną działaczką","Przyjaciółką Gajowca"],ans:1,explain:"Laura to wcielenie Nawłoci — piękna, wykształcona, zakorzeniona w szlacheckim świecie. Kocha Cezarego, ale nie może wyjść poza swój świat."},
  {cat:"Bohaterowie – Laura",catColor:"#9c3060",q:"Jaką funkcję pełni miłość Laury i Cezarego?",opts:["Jest prostą historią miłosną bez głębszego znaczenia","Jest metaforą: piękno i spokój Nawłoci uwodzą Cezarego i chwilowo paraliżują jego bunt społeczny","Prowadzi do rewolucji","Jest głównym tematem powieści"],ans:1,explain:"Miłość do Laury to ideologiczna pułapka — zmysłowe piękno (Laura, dworek, park) działa jak narkotyk uśmierzający sumienie. Żeromski pokazuje, jak uczucie może osłabiać wrażliwość moralną."},
  {cat:"Bohaterowie – Gajowiec",catColor:"#2a7d5f",q:"Jaką rolę pełni Szymon Gajowiec wobec Cezarego?",opts:["Jest jego wrogiem","Jest jego mentorem i opiekunem w Warszawie — próbuje przekonać do stopniowej reformy","Jest jego rywalem w miłości","Jest głosem rewolucji"],ans:1,explain:"Gajowiec opiekuje się Cezarym, wprowadza go w polskie realia, argumentuje za reformą. Cezary go szanuje, ale nie potrafi naśladować — widzi niewystarczalność tej drogi."},
  {cat:"Bohaterowie – Lulek",catColor:"#c84b2f",q:"Jaką funkcję pełni Antoni Lulek?",opts:["Jest komicznym antybohaterem","Jest głosem proletariatu i rewolucji — moralnie uzasadnionym, ale budzącym strach u Cezarego","Jest prywatnym przyjacielem Cezarego","Jest głosem tradycji szlacheckiej"],ans:1,explain:"Lulek przemawia w imieniu najuboższych — jego gniew jest uzasadniony moralnie. Ale Cezary zna koszty rewolucji z Baku i nie może go naśladować bez zastrzeżeń."},
  {cat:"Bohaterowie – zestawienie",catColor:"#b87020",q:"Jakie trzy główne postawy wobec przyszłości Polski reprezentują Seweryn, Gajowiec i Lulek?",opts:["Tradycja, modernizacja, emigracja","Mit techniczny (Seweryn), reforma ewolucyjna (Gajowiec), rewolucja proletariacka (Lulek)","Monarchizm, republikanizm, anarchizm","Konserwatyzm, liberalizm, socjaldemokracja"],ans:1,explain:"Trzy postacie = trzy drogi: Seweryn (mit i utopia techniczna), Gajowiec (ewolucja, praca organiczna), Lulek (rewolucja, natychmiastowa zmiana). Żeromski nie wskazuje właściwej."},
  // --- TYTUŁ ---
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Jakie jest dosłowne znaczenie słowa 'przedwiośnie'?",opts:["Wczesna jesień","Pora między zimą a wiosną — czas przejścia, kiedy zima jeszcze nie odeszła, a wiosna jeszcze nie nadeszła","Nazwa miejscowości","Metafora rewolucji"],ans:1,explain:"Przedwiośnie to dosłownie pora roku między zimą a wiosną — stan przejścia, niepewności i oczekiwania. Żeromski używa tej metafory dla opisu stanu Polski."},
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Co tytuł 'Przedwiośnie' symbolizuje w kontekście odrodzonej Polski?",opts:["Że Polska jest już w pełni rozkwitu — jak wiosna","Że Polska wyszła z zimy zaborów, ale wciąż nie jest sprawiedliwa ani wolna — to stan niepełnego odrodzenia","Że Polska zmierza ku jesieni — dekadencji","Że wiosna to rewolucja, a nie reformy"],ans:1,explain:"Polska odrodziła się po zaborach (koniec zimy), ale nie rozwiązała problemów społecznych i klasowych (wiosna jeszcze nie przyszła). Przedwiośnie = oczekiwanie, niepewność, ból niezrealizowanej obietnicy."},
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Jak tytuł odnosi się do postaci Cezarego Baryki?",opts:["Cezary urodził się przedwiosną","Cezary sam jest 'przedwiosniem' — w stanie przejścia między dzieciństwem a dojrzałością, między Bakujem a Polską, między różnymi wyborami","Cezary nienawidzi wiosny","Tytuł nie odnosi się do bohatera"],ans:1,explain:"Cezary jest w stanie przedwiośnia — między przeszłością (Baku) a przyszłością (Polska), między marzeniem (szklane domy) a rzeczywistością, między reformą a rewolucją. Jego dojrzewanie to przedwiośnie."},
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Które stwierdzenie najlepiej opisuje symbolikę tytułu?",opts:["Tytuł sugeruje, że rewolucja jest nieuchronna jak wiosna","Tytuł wyraża stan między nadzieją a niespełnieniem — Polska ma potencjał (wiosna jest blisko), ale jeszcze nie jest wolna i sprawiedliwa","Tytuł to tylko poetyckie ozdobienie","Tytuł sugeruje, że Żeromski popiera reformę Gajowca"],ans:1,explain:"Przedwiośnie to najważniejsza metafora powieści: jest nadzieja (Polska odrodziła się), jest potencjał (wiosna nadejdzie), ale jest też ból, że jeszcze mróz — niesprawiedliwość, bieda, niezdecydowanie."},
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Kiedy ukazało się Przedwiośnie Żeromskiego?",opts:["1918 — w roku odzyskania niepodległości","1924 — sześć lat po odzyskaniu niepodległości","1930 — tuż przed wielkim kryzysem","1939 — tuż przed wojną"],ans:1,explain:"Przedwiośnie ukazało się w 1924 roku — sześć lat po odzyskaniu niepodległości. Żeromski diagnozuje, że wolność polityczna nie rozwiązała głębokich problemów społecznych."},
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Jak tytuł odnosi się do struktury powieści (trzy wizje Polski)?",opts:["Nie ma związku","Każda wizja (szklane domy, reforma, rewolucja) jest inną odpowiedzią na pytanie: jak przejść z przedwiośnia do pełnej wiosny — żadna nie jest prosta","Tytuł sugeruje, że wiosna to tylko Gajowiec","Tytuł odnosi się do pory roku, w której rozgrywa się akcja"],ans:1,explain:"Trzy wizje to trzy drogi do 'wiosny' (sprawiedliwej Polski). Seweryn oferuje mit szybkiej drogi, Gajowiec cierpliwą pracę, Lulek rewolucyjny przełom. Żeromski pyta, która jest prawdziwa — i nie odpowiada."},
  {cat:"Tytuł powieści",catColor:"#2a7d5f",q:"Z którym dziełem polskiej literatury najsilniej kontrastuje tytuł 'Przedwiośnie'?",opts:["Z 'Ferdydurke' Gombrowicza","Z 'Panem Tadeuszem' Mickiewicza — gdzie Soplicowo to pełna wiosna polskości. Żeromski pokazuje, że wiosna jeszcze nie nadeszła","Z 'Potopem' Sienkiewicza","Z 'Lalką' Prusa"],ans:1,explain:"Pan Tadeusz to mityczna wiosna polskości — arkadia, pełnia, szlacheckie piękno. Żeromski polemizuje: nie jesteśmy jeszcze w wiośnie. Nawłoć to fałszywa wiosna ukrywająca mróz niesprawiedliwości."},
  // --- ANALIZA CAŁOŚCIOWA ---
  {cat:"Analiza całościowa",catColor:"#3a6820",q:"Czym jest Przedwiośnie — jakim gatunkiem literackim?",opts:["Komedią obyczajową","Powieścią społeczno-polityczną i powieścią inicjacyjną (Bildungsroman) jednocześnie","Thrillerem politycznym","Baśnią alegoryczną"],ans:1,explain:"Przedwiośnie to jednocześnie Bildungsroman (dojrzewanie Cezarego) i powieść polityczna (debata o drogach odbudowy Polski). Oba wątki są nierozłączne."},
  {cat:"Analiza całościowa",catColor:"#3a6820",q:"Jaką diagnozę stawia Żeromski odrodzonej Polsce?",opts:["Polska jest idealna i powinna być wzorem","Polska odrodziła się politycznie, ale nie rozwiązała problemów społecznych — jest piękna i niesprawiedliwa jednocześnie","Polska powinna wrócić pod zabory","Polska jest zbyt słaba, by przetrwać"],ans:1,explain:"Diagnoza Żeromskiego: niepodległość to dopiero przedwiośnie — zimę zaborów zostawiliśmy za sobą, ale wiosna sprawiedliwości jeszcze nie nadeszła. To diagnoza bez gotowych recept."},
  {cat:"Analiza całościowa",catColor:"#3a6820",q:"Jak Przedwiośnie porównuje się z Ferdydurke Gombrowicza?",opts:["Obie to wesołe komedie","Obie rozliczają się z polskością: Gombrowicz z kulturową sztucznością form, Żeromski z klasową niesprawiedliwością. Dwa wymiary tej samej diagnozy","Obie gloryfikują szlachtę","Nie ma między nimi żadnego związku"],ans:1,explain:"Gombrowicz atakuje formę kulturową (każda rola, konwenans, maska). Żeromski atakuje system klasowy i ekonomiczny. Dwie różne, ale komplementarne krytyki polskości."},
  {cat:"Analiza całościowa",catColor:"#3a6820",q:"Co stanowi o trwałości Przedwiośnia jako dzieła literackiego?",opts:["Prosta fabuła miłosna","Ambiwalencja i brak gotowych odpowiedzi — Żeromski stawia pytania ważne dla każdego pokolenia: jak budować sprawiedliwe społeczeństwo?","Gloryfikacja rewolucji","Piękne opisy przyrody"],ans:1,explain:"Przedwiośnie jest ponadczasowe, bo jego pytania są wciąż aktualne: jak zmieniać niesprawiedliwy system? Kiedy reforma wystarczy, a kiedy potrzeba radykalniejszych zmian? Żeromski nie daje łatwych odpowiedzi."},
];

const ALL_BANKS = {
  ferdydurke: QB_FERDYDURKE,
  nawloc: QB_NAWLOC,
  wizje: QB_WIZJE,
  przedwiosnie: QB_PRZEDWIOSNIE,
  all: [...QB_FERDYDURKE, ...QB_NAWLOC, ...QB_WIZJE, ...QB_PRZEDWIOSNIE],
};

const BANK_LABELS = {
  ferdydurke: "Ferdydurke",
  nawloc: "Nawłoć",
  wizje: "Wizje Polski",
  przedwiosnie: "Przedwiośnie – Analiza",
  all: "MEGA QUIZ",
};

// ---- QUIZ STATE ----
let qaState = {mode:"",current:-1,score:0,answers:[],shuffled:[],catScores:{}};
let quizTopicId = ""; // set by each topic page

// ---- RENDER QUIZ ----
function launchQuiz(mode, topicId) {
  quizTopicId = topicId || mode;
  qaState = {mode, current:0, score:0, answers:[], shuffled:shuffle(ALL_BANKS[mode]), catScores:{}};
  document.getElementById("quiz-hub").style.display = "none";
  document.getElementById("quiz-result-screen") && (document.getElementById("quiz-result-screen").style.display = "none");
  document.getElementById("quiz-active").style.display = "block";
  renderQA();
}

function backToHub() {
  document.getElementById("quiz-hub").style.display = "block";
  document.getElementById("quiz-active").style.display = "none";
  if(document.getElementById("quiz-result-screen")) document.getElementById("quiz-result-screen").style.display = "none";
}

function replayQuiz() { launchQuiz(qaState.mode, quizTopicId); }

function renderQA() {
  const q = qaState.shuffled[qaState.current];
  const total = qaState.shuffled.length;
  document.getElementById("qa-label").textContent = BANK_LABELS[qaState.mode] + " · Pytanie " + (qaState.current+1) + " z " + total;
  document.getElementById("qa-score").textContent = "Punkty: " + qaState.score;
  document.getElementById("qa-fill").style.width = (qaState.current/total*100) + "%";
  document.getElementById("qa-num").textContent = "Pytanie " + (qaState.current+1);
  const catEl = document.getElementById("qa-cat");
  catEl.textContent = q.cat; catEl.style.color = q.catColor; catEl.style.borderColor = q.catColor+"66"; catEl.style.background = q.catColor+"15";
  document.getElementById("qa-text").textContent = q.q;
  document.getElementById("qa-feedback").className = "quiz-feedback";
  document.getElementById("qa-next").className = "quiz-next";
  const order = shuffle([0,1,2,3]); q._fo = order;
  const letters = ["A","B","C","D"];
  const optsEl = document.getElementById("qa-opts"); optsEl.innerHTML = "";
  order.forEach((origIdx, pos) => {
    const btn = document.createElement("button"); btn.className = "quiz-opt";
    btn.innerHTML = '<span class="opt-letter">'+letters[pos]+'</span><span>'+q.opts[origIdx]+'</span>';
    btn.addEventListener("click", () => selectQA(origIdx));
    optsEl.appendChild(btn);
  });
}

function selectQA(chosen) {
  const q = qaState.shuffled[qaState.current];
  if(document.querySelector("#qa-opts .quiz-opt.correct, #qa-opts .quiz-opt.wrong")) return;
  const correct = chosen === q.ans;
  if(correct) qaState.score++;
  qaState.answers.push(correct);
  if(!qaState.catScores[q.cat]) qaState.catScores[q.cat] = {ok:0,total:0};
  qaState.catScores[q.cat].total++;
  if(correct) qaState.catScores[q.cat].ok++;
  document.querySelectorAll("#qa-opts .quiz-opt").forEach(btn => {
    btn.classList.add("answered");
    const pos = "ABCD".indexOf(btn.querySelector(".opt-letter").textContent);
    const oi = q._fo[pos];
    if(oi === q.ans) btn.classList.add("correct");
    if(oi === chosen && !correct) btn.classList.add("wrong");
  });
  const fb = document.getElementById("qa-feedback");
  fb.className = "quiz-feedback show " + (correct?"ok":"bad");
  fb.innerHTML = (correct?"<strong>✓ Dobrze!</strong>":"<strong>✗ Niepoprawnie.</strong>") + q.explain;
  document.getElementById("qa-next").className = "quiz-next show";
  document.getElementById("qa-score").textContent = "Punkty: " + qaState.score;
  // streak
  let s=0; for(let i=qaState.answers.length-1;i>=0;i--){if(qaState.answers[i])s++;else break;}
  if(s>=3){const el=document.getElementById("streak-badge");if(el){el.textContent=s+"× z rzędu! 🔥";el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1800);}}
}

function nextQA() {
  qaState.current++;
  if(qaState.current >= qaState.shuffled.length) {
    showQAResults();
  } else {
    renderQA();
    document.getElementById("quiz-active").scrollIntoView({behavior:"smooth",block:"start"});
  }
}

function showQAResults() {
  document.getElementById("quiz-active").style.display = "none";
  const res = document.getElementById("quiz-result-screen"); res.style.display = "block";
  const total = qaState.shuffled.length, score = qaState.score;
  const pct = Math.round(score/total*100);
  // save to progress
  saveScore(quizTopicId, score, total);
  let emoji, title, msg;
  if(pct===100){emoji="🏆";title="Perfekcja!";msg="Wszystkie pytania poprawnie — jesteś gotowy/a na sprawdzian!";}
  else if(pct>=80){emoji="🎓";title="Świetnie!";msg="Bardzo solidny wynik. Przejrzyj kategorie, na których straciłeś/aś punkty.";}
  else if(pct>=60){emoji="📚";title="Dobra robota!";msg="Znasz materiał, ale warto przejrzeć słabsze kategorie.";}
  else if(pct>=40){emoji="🌀";title="Jeszcze trochę pracy...";msg="Wróć do teorii, a potem spróbuj znowu!";}
  else{emoji="📖";title="Czas na powtórkę!";msg="Skorzystaj z notatek w zakładkach teorii — a po powtórce wróć!";}
  document.getElementById("qr-emoji").textContent = emoji;
  document.getElementById("qr-title").textContent = title;
  document.getElementById("qr-big").textContent = score+"/"+total;
  document.getElementById("qr-of").textContent = pct+"% poprawnych odpowiedzi";
  document.getElementById("qr-msg").textContent = msg;
  setTimeout(()=>document.getElementById("qr-bar").style.width=pct+"%",100);
  const cats = document.getElementById("qr-cats"); cats.innerHTML="";
  Object.entries(qaState.catScores).forEach(([cat,{ok,total}])=>{
    const chip=document.createElement("div"); chip.className="res-cat-chip";
    const p=Math.round(ok/total*100); const col=p>=80?"#2a7d5f":p>=50?"#b87020":"#c84b2f";
    chip.innerHTML=`<div class="rcc-name">${cat}</div><div class="rcc-val" style="color:${col}">${ok}/${total} (${p}%)</div>`;
    cats.appendChild(chip);
  });
  res.scrollIntoView({behavior:"smooth",block:"start"});
  // update hub button scores if present
  setTimeout(updateHubScores, 100);
}

function updateHubScores() {
  // Update qhub-count elements with latest scores if on topic page
  const p = gp();
  const topicIds = ['ferdydurke','nawloc','wizje','przedwiosnie'];
  topicIds.forEach(id => {
    const el = document.getElementById('hub-score-'+id);
    if(el && p[id]?.lastPct !== undefined) {
      el.textContent = p[id].lastPct + '% ostatnio';
    }
  });
}