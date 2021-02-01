class Paper{
    constructor(x,y,r){
    var options ={
        isStatic:false,
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3
    }
      this.r = r
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);



    
}
   

 display(){
var paperpos=this.body.position
push()
translate(paperpos.x,paperpos.y)
 
 fill("yellow")
 
 ellipseMode(RADIUS)
 ellipse(0,0,this.r,this.r);
 pop();
 }
    
}
