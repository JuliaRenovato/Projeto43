var bg1, form, system, code, security;
var score = 0;

function preload() {
  bg1 = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("aladdin_cave2.jpg");
}

function setup() {
  createCanvas(1000, 500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg1);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Pontuação: " + score, 450, 50);

  if (score === 3) {
    clear();
    background(bg2);
    fill("white");
    textSize(40);
    text("TESOURO ENCONTRADO", 250, 200);
  }

  drawSprites();
}
