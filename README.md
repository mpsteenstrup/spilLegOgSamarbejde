# spil, leg og samarbejde
Forløb med spil og samarbejde.

## SLIDES
* [spilLegOgSamarbejde1 slide](https://docs.google.com/presentation/d/1NOfr1dxWOD5ILCW3cHnLDb4eLC0OS75zl4aQ1EcTp_g/edit?usp=sharing)

### Øvelse 1
* Spil spillet [mm2.js](https://mpsteenstrup.github.io/spilLegOgSamarbejde/index.html).
* Tilslut Makey Makey og spil hvor I alle skal være med.

### Makey Makey spil
* [Super Mario](https://supermarioemulator.com/supermario.php)
* [The Bongos](https://apps.makeymakey.com/bongos/)

## Projektopgaven
Projektopgaven er beskrevet her, [SLSProjekt](filer/SLSProjekt.pdf).

### Øvelse
* Download Atom og installer det.
* Gem det I har lavet på Teddavis med endelsen .js. Nu har I farvekode.


## javaScript og teddavislive
Vi skal kunne lave om i spillet og I skal kunne skabe jeres egne spil. Det betyder at I skal lære at programmere i javaScript, js. Vi bruger det samme bibliotek som ved GCP4, `P5.js`, og en online editor [teddavis.org/p5live](https://teddavis.org/p5live/). Introduktionen beskrives her, [https://github.com/mpsteenstrup/GCP4](https://github.com/mpsteenstrup/GCP4).


### Øvelse
* Brug vejledningen [https://github.com/mpsteenstrup/GCP4](https://github.com/mpsteenstrup/GCP4) til at komme ind på teddavis.org så I alle har adgang til samme editor, i grupper.
* Find videoen `helloworld` og implementer det manden gør.
* Tal i gruppen om hvad de forskellige linjer gør og prøv at lav om i dem.
* Gem det I har lavet ved at kopiere det ind i en teksteditor på jeres computer, (windows: notepad, mac: textedit).

### Atom editor og Github
Hvis I hellere vil bruge Atom editoren til at samarbejde og køre js filer skal I følge denne vejledning, [ATOMEditorOgGithubTilmelding.md](ATOMEditorOgGithubTilmelding.md).


## Introduktion til P5JS
Før I skal lave jeres eget skal I have styr på hvordan programmere i p5.js.

Vi gennemgår programmet, [mmSimpelStart](JSfiler/mmSimpelStart.js).

### funktioner
JS er opbygget af funktioner som kan kaldes

* `function setup()`
* `function draw()`
* `function keyPressed()`

er indbyggede funktioner i p5.js, `function setup()` kører først. `function draw()` kører hele tiden i loop og alt i funktionen gentages til programmet sluttes. `function keyPressed()` kører når en tast bliver trykket ned.
* `function timeIngerval()`
* `function randomNumber()`

er en funktioner jeg har defineret. `function timeIngerval()` giver et tidsinterval på 1 sekund, 1000 milliskunder og `function randomNumber()` returnere et heltal mellem 0-3.

## if statement
if statements er en logisk betingelse hvor noget bliver udført hvis betingelsen er sand, `True`. Det modsatte er at betingelsen ikke er sand, `False`.

### Øvelse
I `draw()` loopet er der en betingelse
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

## print(score) og js console
Det kan være rigtigt rart at kunne se en konsol hvor fejlmeddeleler og andet bliver vist. Hvis I bruger Chrome browseren kan I finden en

Se under `View->Developer->javaScript console`.

### Øvelse
* find konsollen og se jeres score.

# Idegenerering og innovation
Vi skal i gang med idegenerering hvor vi skal lave nogen øvelser. Øvelserne bruges mange steder og bl.a. på Københavns Universitet. De har samlet øvelserne i denne side,

[innovation.sites.ku.dk/metoder](https://innovation.sites.ku.dk/metoder/)

## Idegenerering
Vi skal bruge øvelsen **Brainwalkig**. Det er en afart af den normale brainstorm, men her bliver I tvunget til at forholde jer til de andres ideer og selv bidrage til deres udvikling.

## Øvelse - brainwalking
Øverst på papiret skal I skrive
* Hvad er jeres målgruppe.
* Hvilket problem prøver I at løse.

Vi starter med 5 minutters klassisk brainstorm, hvorefter vi tager hul på vandringen.

* Find reglerne for brainwalking på websiden.
