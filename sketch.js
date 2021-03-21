var canvas;
var music;
var fixsprite1,fixsprite2 ,fixsprite3, fixsprite4;
var ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  
   ball=createSprite(random(10,750,300,20,20)) ;
   ball.shapeColour="white";
   ball.velocityX=3;
   ball.velocityY=3;

   fixsprite1=createSprite(100,590,180,20);
   fixsprite1.shapeColour="red";

   fixsprite2=createSprite(300,590,180,20);
   fixsprite2.shapeColour="green";

   fixsprite3=createSprite(500,590,180,20);
   fixsprite3.shapeColour="blue";

   fixsprite4=createSprite(700,509,180,20);
   fixsprite4.shapeColour="yellow"


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

   if(ball.x<0){
    music.stop()
    ball.velocityX=3
   } else if(ball.x>800){
       music.stop()
       ball.velocityX=-3
   }

   if(isTouching(ball,fixsprite4)){
       music.play()
       ball.shapeColour="yellow";
       bounceOff(ball,fixsprite4);
   }

    //add condition to check if box touching surface and make it box
}
