class Trash {
    constructor(x,y,width,height){
       var options = {
            isStatic: true
        }
        this.image = loadImage('dustbingreen.png')
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        translate(pos.x,pos.y);
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    }
}; 