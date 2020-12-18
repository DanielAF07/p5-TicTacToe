let btnAceptar;
let btnNo;

let game;
function setup() {
  createCanvas(340, 340);
  game = new TicTacToe();
}

function draw() {
  if(game.turn == 1){
    background(200, 40, 40);
  } else { background(40, 40, 200);}
  game.show();
}

function mousePressed(){
  for(let j = 0; j < 3; j++){
    for(let i = 0; i < 3; i++){
      if(game.buttons[j][i].hover()){
        game.buttonClicked(j, i)
      }
    }
  }
}
