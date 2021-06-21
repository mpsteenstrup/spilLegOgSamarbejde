# Atom teksetditor
Vi har brug for en editor som ikke laver om i koden, som word gør. Github har udviklet [Atom](https://atom.io/), som er rigtig god.


## javaScript programmer på computeren
javaScript kører i en browser og browseren har brug for en html fil kaldet, `index.html`.

Denne fil kan bruges som template, [index.html](index.html).

Filen loader p5.js biblioteket. javaScript filen bliver loadet i linje 10, `<script src="JSfiler/mm2.js"></script>`. Hvis I lægger jeres js fil og index.html i samme mappe er syntaksen `<script src="jsfilnavn"></script>`.

På grund af sikkerhedsbegrænsninger kan I ikke bare åbne `index.html` filen ved at dobbeltklikke på den. Eller det kan I godt med den vil ikke køre js filen. Det I skal gøre at at lave en liveserver på Atom.

## Opsætning af Atom liveserver
For at kunne køre js programmerne lokalt, skal der oprettes en server. Det kan gøres gennem Atom med live-server installeret.

Gå ind på:

Præferencer -> install -> søg på 'atom-live-server' og enable den.

CTRL+ALT+q -> quit liveserver

CTRL+ALT+l -> aktiver liveserver

## Opsætning af Teletype

Hvis man vil samarbejde om samme dokument, kan man bruge Teletype. Efter en har delt sit dokument kan det gemmes og køres lokalt.

Gå ind på:

Præferencer -> install -> Teletype og enable den.

Klik nederst på "radiotårnet" og følge linket til en token.

Del filen med på "radiotårnet" og send link til de andre.

## Github konto
I skal have en Github konto for at kunne bruge Teletype. Det mega fedt at have en Github konto og det er gratis. I kan oprette jer her, [github.com](https://github.com/), vælge et fornuftigt havn det hænder ved.

## Repository lokalt og på github
Github er lavet til at dele programmer. Her er en video som forklare hvordan det bruges.
Den simple version er at;
* Log ind på Github i browseren.
* Oprette et repository (+ i højre hjørne).
* Uploade de filer du har brug for (```uploading an existing file```).

Folderen skal indeholder;
* en index fil, ```index.html```.
* minimum en js fil som index filen henviser til.

opsætning af webside
* Ind under ```Settings```(tandhjulet).
* Scroll ned til ```GithubPages``` under ```source```vælg ```master``` og ```save```.
* Scroll ned igen og link find addressen. Hvis siden ikke viser sig så tilføj ``ìndex.html```i url addressen, eks. ```https://mpsteenstrup.github.io/githubTestmmSpil/index.html ``` .

Her er en mumlevideo om hvordan man opsætter github rigtigt. Det er ikke lige så let.
[https://youtu.be/8IQjE56NIoU](https://youtu.be/8IQjE56NIoU)
