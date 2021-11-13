class Paper
{
	constructor(x,y,r)
	{ var options = {
           isStatic : false,
           restitution: 0.3,
           friction : 0,
           density : 1.2, 
      }

		this.x=x;
		this.y=y;
    this.r=r;
    this.PapelWidth=80;
		this.PapelHeight=80;
		
		this.image=loadImage("paper.png")
		this.PapelBody=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
    
		World.add(world, this.PapelBody)
	
	}
	display()
	{
			var posPapel=this.PapelBody.position;

			push()
			translate(posPapel.x, posPapel.y); 
			angleMode(RADIANS)
			imageMode(CENTER);
      image(this.image, 0,-this.PapelHeight/2,this.PapelWidth, this.PapelHeight)
      ellipse()
			pop()
	}
  
}
//intente poner esta función aqui, esperando que funcionara 
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(PapelBody.body, PapelBody.body.position,{x:130,y:-145});
	 
	}}