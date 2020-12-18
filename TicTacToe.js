//Empieza en 50, 50


class TicTacToe{
    constructor(){
        this.turn = 1;
        this.buttons = [];
        for(let j = 0; j < 3; j++){
            this.buttons[j] = [];
            for(let i = 0; i < 3; i++){
                this.buttons[j][i] = new Button(i ,j);
            }
        }
    }

    show(){
        for(let j = 0; j < 3; j++){
            for(let i = 0; i < 3; i++){
                this.buttons[i][j].show();
            }
        }
    }

    buttonClicked(j, i){
        if(this.buttons[j][i].state == 0){
            this.buttons[j][i].state = this.turn
            if(this.turn == 1){ this.turn = 2 } 
            else { this.turn = 1 }
        }
    }
}