class Snake {
    constructor(){
        this.body=[]
        this.body[0] = createVector(floor(w/2), floor(h/2))
        this.xDir = 0
        this.yDir = 0
        this.length = 0
    }

    setDir(x, y){
        this.xDir = x;
        this.yDir = y;

    }

    grow(){
        var head = this.body[this.body.length - 1].copy();
        this.length+=1;
        this.body.push(head);
    }

    update(){
        var head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x = head.x + this.xDir;
        head.y = head.y + this.yDir;
        this.body.push(head);
    }

    display(){
        for( var i = 0; i < this.body.length; i++){
            noStroke();
            fill(83,100,114);
            ellipse(this.body[i].x , this.body[i].y, 1, 1);
        }
    }

    eat(pos){
        var x = this.body[this.body.length-1].x
        var y = this.body[this.body.length-1].y

        if(x===pos.x && y===pos.y){
            this.grow()
            return true
        } else {
            return false
        }
    }

    endGame(){
        var x = this.body[this.body.length-1].x
        var y = this.body[this.body.length-1].y

        if(x>w-1 || x<0 || y>h-1 || y<0){
            return true
        }

        for(var i=0; i<this.body.length-1; i++){
            var part = this.body[i]

            if(part.x===x && part.y===y){
                return true
            }
        }

        return false
    }
}