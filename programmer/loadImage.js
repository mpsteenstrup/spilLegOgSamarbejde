/*
Billeder loades med url addressen. Det sker i funktionen "preload" som kører først, da det kan tage noget tid at loade.
FN billeder er samlet i "http://mpsteenstrup.dk/FN_maal/FN1.jpg", FN2, FN3 osv.
Billedet bliver vist med image(img,0,0) i venstre hjørne.
*/

let img;

function preload(){
  img = createImg('http://mpsteenstrup.dk/FN_maal/FN1.jpg','');
	img.hide();
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  image(img,0,0);
}

function draw(){
noLoop
}
