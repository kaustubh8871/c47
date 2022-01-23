var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var zombieGroup;
var bullets,bulletImg;
var bulletGroup;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg=loadImage("assets/zombie.png");

  bgImg = loadImage("assets/bg.jpeg");
bulletImg = loadImage("assets/bullet1.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   
   
   

  
   zombieGroup=createGroup();
bulletGroup=createGroup();




}

function draw() {
  background(0); 
  
  if(frameCount % 60===0){
    spawnZombies();
  }
  
  if(keyDown("space")){
    shootBullet();
  }



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)



 }

drawSprites();
fill('white');
  text(mouseX+','+mouseY,mouseX,mouseY);
 
}
function spawnZombies(){
  zombie=createSprite(displayWidth -900,displayHeight-200,50,50);
  zombie.y=Math.round(random(50,100));
  
  zombie.addImage(zombieImg)
  zombie.scale=0.1
  zombie.velocityX=-4
  zombie.lifetime=400
zombieGroup.add(zombie);

}
function shootBullet(){
  bullet = createSprite(displayWidth-1200, displayHeight-350,50,50);
   bullet.addImage(bulletImg)
   bullet.scale= 0.08
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}


