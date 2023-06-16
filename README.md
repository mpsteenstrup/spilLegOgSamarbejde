# spil, leg og samarbejde
Forløb med spil og samarbejde.

## Indholdsfortegnelse
* [Introduktionsslides](#slides)
* [Projektopgaven](#projektopgaven)
* [Logbog](#logbog)
* [javaScript og P5JS web editorls](#javascript-og-p5js-web-editor)
* [Lyde i p5.js](#lyd---det-er-sjovest-med-lyd)
* [Introduktion til P5JS](#introduktion-til-p5js)
* [Idegenerering og innovation](dokumenter/innovation.md)
* [ATOMEditor og GithubTilmelding](dokumenter/ATOMEditorOgGithubTilmelding.md)
* [Grundbegreber i programmering](#Grundbegreber-i-programmering---Introduktion-til-P5JS)
* [Småprogrammer](#småprogrammer)


## Slides
* [spilLegOgSamarbejde1 slide](https://docs.google.com/presentation/d/1NOfr1dxWOD5ILCW3cHnLDb4eLC0OS75zl4aQ1EcTp_g/edit?usp=sharing)

* [spilLegOgSamarbejde2 slide](https://docs.google.com/presentation/d/128i1R1L-KWX1Hsw-6W990dY7erOQDklH3aIB9KR16oI/edit?usp=sharing)


### Øvelse 1
* Spil spillet [mmSpillet.js](https://editor.p5js.org/mpsteenstrup/present/hEprPTioZ).
* Tilslut Makey Makey og spil hvor I alle skal være med.

### Makey Makey spil
* [Super Mario](https://supermarioemulator.com/supermario.php)
* [The Bongos](https://apps.makeymakey.com/bongos/)

## Projektopgaven
Med udgangspunkt i følgende case, skal du udvikle en del af en løsning.
Dansk idrætsforbund er stærkt bekymret over en ny undersøgelse, der viser, at 3 ud af 4 børn og unge bevæger sig for lidt i hverdagen*. De mistænker at for meget stillesiddende skærmtid spiller en rolle og vil derfor gerne motivere unge mennesker til at bevæge sig mere og til at være mere sociale, når de spiller computerspil.
Derfor har de besluttet sig for at udvikle et spil i ```p5.js```, der

* Kan spilles i af to eller flere personer, der fysisk er i nærheden af hinanden.
* Involverer et samarbejdende eller konkurrerende element, gerne inspireret af sport.
* Styres med Makey Makey og ikke direkte fra computeren.

I logbogen skal I
* Redegøre for ideerne og målsætningerne bag spillet.
* Vise uddrag af spillet, gerne billeder, og beskriv dem.
* Præsenter **dele** af koden og beskriv den grundigt, hvor I kommer ind på lækker, forgreninger, variable og funktioner.
* Lav et rutediagram over spillet.
* Dokumenterer den iterative arbejdsproces og rapid prototyping, beskrevet her [Innovation](https://github.com/mpsteenstrup/InformatikRysensteen/blob/main/dokumenter/innovation.md#iterativ-arbejdsprocess).

(*) [http://fiibl.dk/born-og-unge-bevaeger-sig-for-lidt-trods-gode-rammer/](http://fiibl.dk/born-og-unge-bevaeger-sig-for-lidt-trods-gode-rammer/)


## Logbog
Oprettelse af logbog beskrives her, [InformatikRysensteen](https://github.com/mpsteenstrup/InformatikRysensteen)

## javaScript og P5JS web editor
Vi skal kunne lave om i spillet og I skal kunne skabe jeres egne spil. Det betyder at I skal lære at programmere i javaScript, js. Vi bruger det samme bibliotek som ved GCP4, `P5.js`, og en 
* online editor [editor.p5js.org](https://editor.p5js.org/). 
Introduktionen fra GCP4 kan I se her, [https://github.com/mpsteenstrup/GCP4](https://github.com/mpsteenstrup/GCP4).

### Fuld skærm
Det er sjovest at arbejde i fuld skærm. I ```P5.js-editor``` kan I få fuld skærm hvis I ```gemmer programmet (navngiv det fornuftigt) -> File -> Share -> Present linket ```. I behøver ikke lukke fanen for at updatere, når I gemmer koden skal I bare genindlæse ```Present``` siden.

### Vejledninger
Kristian Wichmann har lavet en række videovejledninger. [KWihkmann youtube](https://www.youtube.com/channel/UCRSqTiVe7Rho95hNtd3hJBQ/videos). Kodestumperne ligger her, [github.com/kwichmann](https://github.com/kwichmann/Kreativ-Kodning).

### Referencer
P5 har et godt bibliotek med [referencer](https://p5js.org/reference/), først kommmer et eksempel og nedenunder beskrivelsen.

### Arbejdsmetode
* Arbejd ud fra et eksempel som I kan ændre i.
* Keep it simple, nok det vigtigste råd her.
* Husk Variabelkontrol. Lav kun én ting om af gangen og kør programmet.
* Gem jeres program. Lav en ny version hver gang noget virker 1_1, 1_2 osv.

### Øvelse
* Nederst på siden er der en liste med småprogrammer. Den simpleste er ``helloWorld.js``
* Find videoen `helloworld` og koden og kopier den ind i P5Js editoren og kør programmet.
* Tal i gruppen om hvad de forskellige linjer gør og prøv at lav om i dem.
* Gem det I har lavet ved at kopiere det ind i en teksteditor på jeres computer, (windows: notepad, mac: textedit).

### Visual Studio Code
En god editor er Microsofts Visual Studio Code, [Link her](https://github.com/mpsteenstrup/InformatikRysensteen/blob/main/dokumenter/TekstEditorOgGithubTilmelding.md)


# Grundbegreber i programmering - Introduktion til P5JS
Før I skal lave jeres eget skal I have styr på hvordan programmere i p5.js. 

Der er få men vigtige grundelementer når man programmerer
* **variable**, beholder for information, tal eller tekst.
* **løkker**, får en del af programmet til at gentage sig, skrive med `while`eller `for`.
* **forgreninger**, får programmet at udfører en handling hvis input er sandt `True`, kaldes også `ìf`statements.
* **funktioner**, er med til at strukturere koden. Funktioner kan køres flere gange og man undgår at skrive det samme mange gange. 

Vi vil introducere de forskellige grundelementer ved at gennemgå programmet, [mmSimpelStart](JSfiler/mmSimpelStart.js).

## Variable
I linje 1 defineres fire variable `t1=0; t2=0; n=0; score=0;`. Det er standarden at definere variablene i starten af programmet. Variable kan også indeholde tekst eks. `tekst = "dette er en tekst"` hvor det angives med gåseøne. 

## Funktioner
JS er opbygget af funktioner som kan kaldes
* `function setup()`
* `function draw()`
* `function keyPressed()`

er indbyggede funktioner i p5.js, `function setup()` kører først. `function draw()` kører hele tiden i loop og alt i funktionen gentages til programmet sluttes. `function keyPressed()` kører når en tast bliver trykket ned.
* `function timeInterval()`
* `function randomNumber()`

er en funktioner jeg har defineret. `function timeInterval()` giver et tidsinterval på 1 sekund, 1000 milliskunder og `function randomNumber()` returnere et heltal mellem 0-3.

## Betingelser eller if-statements
if statements er en logisk betingelse hvor noget bliver udført hvis betingelsen er sand, `True`. Det modsatte er at betingelsen ikke er sand, `False`. Der sker dermed en *forgrening* i programmet, hvor enten det ene eller det andet sker.

### Øvelse
I `draw()` løkken er der en betingelse
```
if (n==0){
    fill(255,0,0);
    ellipse(500,500,200,200);
}
```
* Kør programmet.
* Lav `n` om så betingelsen er falsk.
* Prøv at brug `True`, `False`.

Det var den simple, bemærk de to `==` som bruges ved logiske udsagn.

### `timeInterval()`
Funktionen `timeInterval()` indeholder også en betingelse. Den indeholder faktisk også en ny funktion, `millis()` som tæller millisekunder fra programmet startede. Vi bruger det til at lave intervaller med.
funktionen `timeInterval()` indeholder koden
```
t2=millis();
if (t2-t1>1000){
  t1=t2;
  n=randomNumber();
}
```
`t2=millis()` opdatere hele tiden variablen `t2` med den nyeste tid.
`if (t2-t1>1000)` er sand hvis forskellen i tiderne `t2` og `t1` er større end 1000, altså der er gået et sekund.
Hvis der er gået mere end et sekund bliver `t1=t2` og der skabes et nyt tilfældigt tal, `n`.

### Øvelse
* Lav intervallet om til to sekuner.

### Øvelse
`keyPressed()`  indeholder også en betingelse.
* Find betingelse og beskriv hvad den gør.

### Øvelse
* Lav en kort liste over hvilken features I gerne vil implementere.
*  Ranglist den med det som er lettest at implementere først.
* Implementer de letteste.

## print(score) og andre meddelelser
Det er rigtig praktisk at se hvad programmet gør. Det gøres ved at printe relevant information i udviklingsfasen. Det kan så slettes når programmet er mere udviklet.


## Lister
Lister eller arrays, kan være en praktisk måde at behandle data. De virker som en mere fleksibel version at de kendte vektorer fra matematik.

### Øvelse
programmer [listeSimpel.js](JSfiler/listeSimpel.js) har en simpel liste, `l = ['hej','med','dig',9];`
* Kør programmet og åben js consolen.
* Få programmet til at printe værdien af variablen `i`. Hvad er værdien af `i` når 'dig' bliver udskrevet.

`i = (i+1)%4;` er en smart måde at tælle mellem 0 og 3. `%4` gør at vi regner modulus 4 d.v.s starter forfra hver gang vi når til 4 (0,1,2,3) osv.
* Prøv at lav det om til modulus 3 eller 2.

Hvis vi vil tilføje 'MP' til listen skal vi bruge `l.push('MP')`. Hvis vi i stedt vil erstatte tallet 9 i liste med 'MP' gøres det ved `l[3]='MP'`. Hvis man vil fjerne det sidste element i listen gøres det ved, `l.pop()`.

* Prøv de forskellige metoder til at ændre på listen.
* Brug 'int(random(4))' til at udvælge et tilfældigt element i listen.

### Billedeksempel
I filen [listeBilleder.js](JSfiler/listeBilleder.js) bruges listen til at holde styr på en masse billeder.
* Kør programmet og se hvad der sker.
* Undersøg hvordan billederne kommer ind i listen.
* Undersøg hvordan de bliver vist på skærmen.
* Hvad sker der når man trykker på musseknappen?


## Lyd - det er sjovest med lyd
filen [JSfiler/boing.js](JSfiler/boing.js) loader en mp3 fil og afspiller den hver gang musenklanppen trykkes. boind.mp3 ligger i mappen filer.

Vi skal bruge P5JS biblioteket ``p5.sound.min.js``som indlæses i ``index.html``filen med linjen;
``<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/addons/p5.sound.min.js"></script>``
Den skal placeres under der hvor vi loader ``
p5.js ``, da den skal bruges.

Recerence kan findes her, [p5.sound](https://p5js.org/reference/#/libraries/p5.sound).

## Øvelse
* Hent filen og koden og prøv at få den til at køre. Hvis det ikke virker så overvej hvordan stien til filen er lavet.
* Find lyde eks. på [https://freesound.org](https://freesound.org) og brug dem.



### Småprogrammer
Små programmer som I kan bruge i jeres egne programmer.

* [introduktion](programmer/introduktion.js), [video](https://youtu.be/2UyLpdzFQM0)
* [helloWorld](programmer/helloWorld.js), [video](https://youtu.be/n-HZZf-5TOg)
* [loadImage](programmer/loadImage.js), [video](https://youtu.be/W0agzwfQXPg)
* [followMe](programmer/followMe.js), [video](https://youtu.be/ayX7336Fsf0)
* [moveMe](programmer/moveMe.js), [video](https://youtu.be/_RCGfx-2K4w)
* [pressedMouse](programmer/pressedMouse.js), [video](https://youtu.be/AV-Nsb_RWaw)
* [random](programmer/random.js), [video](https://youtu.be/joHmvoPg-ho)
* [matematik](programmer/matematik.js),  [video](https://youtu.be/VVzZLOgQYD0)
* [lister](programmer/lister.js), [video](https://youtu.be/fODA4OegBoQ)
* [loekker](programmer/loekker.js), [video](https://youtu.be/Adri3AgWBA8)
* [skiftScene](programmer/skiftScene.js),[video](https://youtu.be/NLR-o1YDO0E)
* [fuglespil](https://editor.p5js.org/mpsteenstrup/sketches/xlkezV8Ng)
