# spil, leg og samarbejde
Forløb med spil og samarbejde. 

[Link til hjemmesideopsætning](https://mpsteenstrup.github.io/spilLegOgSamarbejde/#slides)

[Link til githubopsætning](https://github.com/mpsteenstrup/spilLegOgSamarbejde)

## Indholdsfortegnelse
* [Introduktionsslides](#slides)
* [Projektopgaven](#projektopgaven)
* [Logbog](#logbog)
* [javaScript og P5JS web editorls](#javascript-og-p5js-web-editor)
* [Grundbegreber i programmering](#grundbegreber-i-programmering---introduktion-til-p5js)
* [Gennemgang af programmet mmSimpleStart.js](#gennemgang-af-programmet-mmsimplestartjs)
* [Lån, brug og forstå](#lån-brug-og-forstå)
* [VS-Code editor og github](https://github.com/mpsteenstrup/InformatikRysensteen/blob/main/dokumenter/TekstEditorOgGithubTilmelding.md)



## Slides
* [spilLegOgSamarbejde1 slide](https://docs.google.com/presentation/d/1NOfr1dxWOD5ILCW3cHnLDb4eLC0OS75zl4aQ1EcTp_g/edit?usp=sharing)

* [spilLegOgSamarbejde2 slide](https://docs.google.com/presentation/d/128i1R1L-KWX1Hsw-6W990dY7erOQDklH3aIB9KR16oI/edit?usp=sharing)


### Øvelse 1
* Spil spillet [mmSpil.js](https://editor.p5js.org/mpsteenstrup/present/hEprPTioZ).
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
* Lav et rutediagram over spillet, beskrecet her [rutediagram](https://github.com/mpsteenstrup/InformatikRysensteen/blob/main/dokumenter/flowchart.md).
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
* **sekvens**, ting sker i rækkefølge.
* **løkker**, får en del af programmet til at gentage sig, skrive med `while`eller `for`.
* **forgreninger**, får programmet at udfører en handling hvis input er sandt `True`, kaldes også `ìf`statements.
* **funktioner**, er med til at strukturere koden. Funktioner kan køres flere gange og man undgår at skrive det samme mange gange. 

Vi vil introducere de forskellige grundelementer ved at gennemgå programmet, [mmSimpelStart](JSfiler/mmSimpelStart.js).

## Variable
I linje 1 defineres fire variable `t1=0; t2=0; n=0; score=0;`. Det er standarden at definere variablene i starten af programmet. Variable kan også indeholde tekst eks. `tekst = "dette er en tekst"` hvor det angives med gåseøne. 

## Sekvens
En sekvens er en den af programmet hvor koden bliver eksekveret linje for linje. Helt generelt kan programmer læses fra toppen og ned og rækkefølgen er også fra toppen til bund.
her skrives i værdien to gange i konsollen
```
i = 0
console.log(i)
i += 1
console.log(i)
```
outputtet er 
```
0
1
```
### Øvelse
* lav om i koden så den skriver tallene i omvendt rækkefølge.

## Løkker eller loops
Nedenstående kode skriver tallene i konsollen med ```console.log()```, skriver dem på skærmen, ```0,1,2,3```.
```
i = 0
while (i<4){
    console.log(i)
    i += 1;
}
```
løkken kører så længe ```while```betinelsen er sand, d.v.s. så længe i er mindre end 4. I linjen ``` i +=1 ```bliver der lagt én til variablen i.

### Øvelse
* Lav om i koden så der bliver talt ned, ```3,2,1,0```

I P5.js er ```function draw()``` også en løkke. Den er indbygget i programmet og kører hele tiden. Hvis man selv skal lave en løkke som bliver ved med at kører kan man skrive ```while (True)```



## Funktioner
Funktioner virker næsten som I kender dem fra matematik hvor en input-værdi bliver til en output-værdi. Funktionen gør lidt løst formuleret noget ved inputtet og returnerer det som output. I programmering er vores forståelse af funktioner lidt mere flektible. 

Definition:
*En funktion er den del kode som udfører en opgave.*

Det smarte er at funktionen kan kaldes flere gange og at man derfor undgør at skrive det samme flere gange. Det giver også overskuelighed når én funktion udfører én opgave.

Funktioner kan
* Udføre en opgave uden input og output.
* Udføre en opgave med input.
* Udføre en opgave og give et output.

Her er et eksempel på en funktion som tager to tal og lægger dem sammen og retunerer resultatet.
```
function addNumbers(n,m){
  return n+m
}
sum = addNumbers(10,32);
console.log(sum)
```
Funktionen defineres med ```function``` og indholdet er mellem ```{}```. Denne funktion har to input ```n``` og ```m``` og returnerer én værdi.

### Øvelse
* kopier koden ind i p5.js editoren og kør den.
* Lav en funktion der dividerer og tjek hvad der sker ved division med nul.

Input og output behøver ikke være tal. I denne funktion skrives en hilsen. 
```
function skrivHilsen(navn){
  console.log("hej med dig " + navn);
}

skrivHilsen("Mads Peter")
```
### Øvelse
* Hvad er input.
* Er der et output.
* Forklar hvorfor det kan være smart med funktioner til gentagne opgaver.

p5JS har indbyggede funktionersom kan kaldes
* `function setup()`
* `function draw()`
* `function keyPressed()`

`function setup()` kører som det første. `function draw()` kører hele tiden i loop og alt i funktionen gentages til programmet sluttes. `function keyPressed()` kører når en tast bliver trykket ned.
* `function timeInterval()`
* `function randomNumber()`

er en funktioner jeg har defineret. `function timeInterval()` giver et tidsinterval på 1 sekund, 1000 milliskunder og `function randomNumber()` returnere et heltal mellem 0-3.

## Forgreninger eller if-statements
if statements er en logisk betingelse hvor noget bliver udført hvis betingelsen er sand, `True`. Det modsatte er at betingelsen ikke er sand, `False`. Der sker dermed en *forgrening* i programmet, hvor enten det ene eller det andet sker.

```
n = 0;
if (n==8){
  console.log('That is my lucky number 8');
}
if (n!=8){
  console.log(n + ' is not my lucky number');
}
```

### Øvelse
* Kør programmet og forklar forskellen på ```n==8```og ```n!=8```.
* Lav en løkke  med tallene 1 til 10 og skriv med ```console.log()``` og en if-statement alle de lige tal.


## Lister
Lister eller arrays, kan være en praktisk måde at behandle data. De virker som en mere fleksibel version at de kendte vektorer fra matematik.

### Øvelse
programmer [listeSimpel.js](JSfiler/listeSimpel.js) har en simpel liste, `l = ['hej','med','dig',9];`
* Kør programmet og forklar hvad der sker.
* Flyt ```addInformatik();``` oven over løkken, hvad er forskellen?
Vi sletter sidste element i listen med ```l.pop()``` og tilføjer i stedet 'informatik med'  `l.push('infomatik')`. Vi kan også ændre enkeltelementer eks. erstatte 'hej' med 'MP' ved at skrive ```l[0]='MP'```

## gennemgang af programmet mmSimpleStart.js
Vi vil arbejde med programmet [mmSimpleStart.js](https://editor.p5js.org/mpsteenstrup/sketches/SKNtdTNPU). Spillet indeholder funktioner som er indbygget i p5JS biblopteket.

### Øvelse
* Kør programmet og beskriv den overordnede funktionalitet.
* Find de variable der er i programmet og vurder om de ændrer sig i løbet af programmet.
* Find de funktioner der er i programmet. 
* Find de forgreninger der er i programmet.

javaScript og p5JS her indbyggede funktioner,
* ```setup()``` kører først.
* ```draw()``` er en løkke som kører i gennem hele programmet.
* ```random(n)``` giver et tilfældigt tal 0 til n.
* ```int()``` laver et kommatal om til et heltal (integer på engelsk).
* ```millis()``` tæller antal millisekunder siden programmet startede.
* ```keyPressed()``` trigger når en tast bliver trykket.

Det er også en funktion som jeg har lavet,
* ```timeInterval()```

Funktionen `timeInterval()` indeholder også en betingelse. Den indeholder faktisk også en ny funktion, `millis()` som tæller millisekunder fra programmet startede. Vi bruger det til at lave intervaller med.
funktionen `timeInterval()` indeholder koden
```
	t2=millis();
	if (t2-t1>1000){
		t1=t2;
		n=int(random(4));
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
* Ranglist den med det som er lettest at implementere først.
* Implementer de letteste.

### Lån, brug og forstå
Ved udvikling af programmer er det heldigtvis ok at tage udgangspunkt i og låne fra hvad andre har gjort. Nedenfor er en samling småprogrammer som I kan tage udgangspunkt i, når I laver jeres eget program. Det er meget lettere at modificere et eksisterende program end at starte med en blank side. 

Det vigtigtste krav er **I skal forstå og kunne forklare alt den kode I tager med, også selv om det er noget I ikke selv har skrevet**. Det gælder hvis I tager udgangspunkt i eksempler, eller hvis I samarbejder om at lave programmet.  

### Vejledninger
Kristian Wichmann har lavet en række videovejledninger. [KWihkmann youtube](https://www.youtube.com/channel/UCRSqTiVe7Rho95hNtd3hJBQ/videos). Kodestumperne ligger her, [github.com/kwichmann](https://github.com/kwichmann/Kreativ-Kodning).

### Referencer
P5 har et godt bibliotek med [referencer](https://p5js.org/reference/), først kommmer et eksempel og nedenunder beskrivelsen.


### Billedeksempel
I filen [listeBilleder.js](JSfiler/listeBilleder.js) bruges listen til at holde styr på en masse billeder.
* Kør programmet og se hvad der sker.
* Undersøg hvordan billederne kommer ind i listen.
* Undersøg hvordan de bliver vist på skærmen.
* Hvad sker der når man trykker på musseknappen?


### Lyd - det er sjovest med lyd
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
