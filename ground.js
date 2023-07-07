class ground{
    constructor(x,y,width,height){
    var ground_options={
        isStatic: true,
    }
    this.ground1= Matter.Bodies.rectangle(x,y,width,height,ground_options)
    this.h=height
    this.w=width
    Matter.World.add(world,this.ground1)

    }

    display(){
     push()
     rectMode(CENTER)
     rect(this.ground1.position.x,this.ground1.position.y,this.w,this.h)
     pop()

    }
}