# spil, leg og samarbejde

Forløb med spil og samarbejde.

### Opgave 1
* Spil spillet [mm2.js](https://mpsteenstrup.github.io/spilLegOgSamarbejde/index.html).
* Tilslut Makey Makey og spil hvor I alle skal være med.

## javaScript og teddavislive
Vi skal kunne lave om i spillet og I skal kunne skabe jeres egne spil. Det betyder at I skal lære at programmere i javaScript, js. Vi bruger det samme bibliotek som ved GCP4, `P5.js`, og en online editor [teddavis.org](teddavis.org). Introduktionen beskrives her, [https://github.com/mpsteenstrup/GCP4](https://github.com/mpsteenstrup/GCP4).


### Opgave 2
* Brug vejledningen [https://github.com/mpsteenstrup/GCP4](https://github.com/mpsteenstrup/GCP4) til at komme ind på teddavis.org så I alle har adgang til samme editor, i grupper.
* Find videoen `helloworld` og implementer det manden gør.
* Tal i gruppen om hvad de forskellige linjer gør og prøv at lav om i dem.
* Gem det I har lavet ved at kopiere det ind i en teksteditor på jeres computer, (windows: notepad, mac: textedit).

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

``
function setup() {
createCanvas(windowWidth, windowHeight);
n = 0;
}

function draw() {
	background(0);
	if (n==0){
			fill(255,0,0);
			ellipse(500,500,200,200);
	}
}
``
