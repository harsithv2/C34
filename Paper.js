class Paper{

    constructor(x,y,r)
{
 var options={
     
    frictionAir:0.005,
    density:1.2
}
this.x=x;
this.y=y;
this.r=r;
this.body= Bodies.circle(this.x, this.y, this.r, options)

World.add(world,this.body)
this.image=loadImage("polygon.png")
}

display()
{

    var paperpos=this.body.position;

    push ()
    translate(paperpos.x,paperpos.y)
    imageMode(CENTER)
    strokeWeight(3);
    fill (255,0,255)
    image(this.image,0,0, this.r,this.r)
    pop ()

    
}
}