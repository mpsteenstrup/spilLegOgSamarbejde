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
Det kan være rigtigt rart at kunne se en konsol hvor fejlmeddeleler og andet bliver vist. Hvis I bruger  browseren kan I finden en

* Chrome: `View->Developer->javaScript console`.
* Firefox: `Tools->web Developer-> web console`

### Øvelse
* find konsollen og se jeres score.

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
* Brug 'int[random(4)]' til at udvælge et tilfældigt element i listen.

### Billedeksempel
I filen [listeBilleder.js](JSfiler/listeBilleder.js) bruges listen til at holde styr på en masse billeder.
* Kør programmet og se hvad der sker.
* Undersøg hvordan billederne kommer ind i listen.
* Undersøg hvordan de bliver vist på skærmen.
* Hvad sker der når man trykker på musseknappen?






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

## Rapid prototyping
Noget af det vigtigste er at I prøver at hold det simpelt. Det er vigtigere og sjovere at have noget simpelt der virker end noget kompliceret som ikke virker. En af måderne er **rapid prototyping** hvilket Tom Chi fra Google innovation lab beskriver,

[Tom Chi ted talk](https://www.youtube.com/watch?v=d5_h1VuwD6g&feature=youtu.be).

### Øvelse
* Beskriv hvordan den simpleste fysiske del af jeres projekt kan se ud.
* Beskriv hvordan den simpleste programmeringsmæssige kan se ud.

### PROTOTYPE, definition fra [Informatik-gym.dk](Informatik-gym.dk)
"En prototype er en tidlig udgave af et produkt. I Informatik bygges papir prototyper som anvendes i brugertest med det formål at blive klogere på produktet. Fordelen ved prototyper er, at det er nemt og billigt at ændre dem (sammenlignet med ændringer af færdige produkter)."

### Øvelse
I skal foretage en brugertest som beskrevet her, [innovation.sites.ku.dk/metode/brugertest/](https://innovation.sites.ku.dk/metode/brugertest/).
* Læs vejledningen.
* Foretag en brugertest.
* Diskuter og skriv ned hvad I har fået ud af den.
