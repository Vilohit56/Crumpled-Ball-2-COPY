class Ball {
    constructor(x,y,radius,options) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.image = loadImage('paper.png')
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        translate(pos.x,pos.y);
        fill("white");
        circle(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        }
    };