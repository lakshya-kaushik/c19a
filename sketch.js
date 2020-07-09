//var restart,restart_Animination;
//var gameOver,gameOver_Animination;
var ground,groundImage;
var player, player_running;
var obstaclesGroup,obstacle;

function preload()  {
  backImage=loadImage("jungle.jpg");
  player_running=loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
}
function setup() {
  createCanvas(600, 400);
  player = createSprite(50,180,20,50);
  player.addAnimation("running", player_running);
  player.scale = 0.8;
  
   ground = createSprite(0,0,400,400);
  ground.addImage("ground",backImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  obstaclesGroup=new Group();
}

function draw() {
  background(180);

    if(keyDown("space")) {
    player.velocityY = -10;
  }
 player.velocityY = player.velocityY + 0.8;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
 
  drawSprites();
}
    function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
        //obstacle.setAnimation("obstacle" + rand);
    
  
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
}
