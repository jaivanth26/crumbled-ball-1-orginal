class Log{
    constructor(x,y,width,height){
    var options ={
        isStatic:true,
        
    }
      
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width
        this.height=height
        World.add(world, this.body);



    
}
   

 display(){
var logpos=this.body.position
push()
translate(logpos.x,logpos.y)
 
 fill("orange")
 
 rectMode(CENTER)
 rect(0,0,this.width,this.height)
 pop();
 }
    
}

