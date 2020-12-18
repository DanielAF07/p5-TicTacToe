let colorOn = [200,200,200];
let colorOff = [250,250,250];
let scl = 100;
let gap = 15;

class Button {
    constructor(x, y){
        this.pos = createVector(x*scl, y*scl);
        this.state = 0;
        this.isHover = false;
        this.color = colorOff;
    }

    show(){
        this.updateColor();
        stroke(0);
        strokeWeight(2);
        fill(this.color[0],this.color[1],this.color[2]);
        rect(this.pos.x + gap, this.pos.y + gap, scl, scl);
        if(this.state === 1){ this.drawX(); }
        if(this.state === 2){ this.drawO(); }
    }

    updateColor(){
        if(this.hover()){
            this.color = colorOn;
        } else {
            this.color = colorOff;
        }
    }

    hover(){
        if((mouseX > this.pos.x) && (mouseX < this.pos.x + scl) && (mouseY > this.pos.y) && (mouseY < this.pos.y + scl)){
            this.isHover = true;
            return true;
        }
        else{
            this.isHover = false;
            return false;
        }
    }

    drawX() {
        strokeWeight(8);
        line(this.pos.x+scl/3.4, this.pos.y+scl/3.4, this.pos.x+scl, this.pos.y+scl)
        line(this.pos.x+scl/3.4, this.pos.y+scl, this.pos.x+scl, this.pos.y+scl/3.4)
    }

    drawO(){
        strokeWeight(8);
        ellipse(this.pos.x+scl/1.55, this.pos.y+scl/1.55, scl-15, scl-15)
    }

};