//Create variables here
var dog, dogImg;
var happyDog;
var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  
  createCanvas(500, 500);
  
  dog = createSprite(250,250, 0, 0);
  dog.addImage(dogImg);
  dog.scale = 0.2 
}


function draw() {  

  drawSprites();
  //add styles here
  if(keyDown(UP_ARROW)){
      dog.addImage(happyDog);
  
  }
  else{
    dog.addImage(dogImg);
    }

  dog.display()

}






