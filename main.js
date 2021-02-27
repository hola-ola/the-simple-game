function preload() {
  music = loadSound("./sound/ten-walls-walking-with-elephants-original-mix.mp3");
}

let game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(game.background);
  game.draw();
}

  function mousePressed() {
    if (music.isPlaying() || game.collisionCount > 5) {
      music.stop();
    } else {
      music.play();
      startPage.style.visibility = "hidden";
    }
  }

function countTime() {
  game.countTime();
  game.countPoints();
  game.countLevel();
}
