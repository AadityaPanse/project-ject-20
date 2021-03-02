var fx,mx;






function setup() {
  createCanvas(800,400);
  fx=createSprite(400, 200, 50, 50);
  fx.shapeColor="green";
  mx=createSprite(600,200,50,50);
  mx.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  mx.x=World.mouseX;
  mx.y=World.mouseY;
 
   if(mx.x-fx.x<mx.width/2+fx.width/2&&
    fx.x-mx.x<mx.width/2+fx.width/2&&
    mx.y-fx.y<mx.height/2+fx.height/2&&
    fx.y-mx.y<mx.height/2+fx.height/2){
     fx.shapeColor="purple";
     mx.shapeColor="purple";
   }
   else{fx.shapeColor="green";
        mx.shapeColor="green";
  }

   








  drawSprites();
}