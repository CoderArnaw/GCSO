var bullet, thicknesss, speed, wall, weight ;0
function setup() {
  createCanvas(1600,400);
  thickness=random (22,83)
 wall= createSprite(1200, 200, thickness, 200); 
 wall.shapeColor="white"
 car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
if(wall.x-car.x < (car.width-wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed speed/22509;
if(deformation >180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
car.shapeColor=color(0,255,0);
}

