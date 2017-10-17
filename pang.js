
function setup() {
  createCanvas(1000, 1000);
  fill(0);
  textSize(60);
  background(0);
}

var value = 0;


function draw() {
  text(key, 200, 200);
  text(key, 600, 600);
  text(key, 650, 650);
  text(key, 700, 700);
  rect(200, 200, 400, 400);
  
}

function keyPressed() 

// UP key
  if(keyCode == UP_ARROW)
  {
    fill(40, 255, 0);
  }
 
  // DOWN key
  if(keyCode == DOWN_ARROW)
  { 
    fill(20, 105, 0);
  }
 
  // RIGHT key
  if(keyCode == RIGHT_ARROW)
  {
    fill(5, 73, 10);
  }
 
  // LEFT key
  if(keyCode == LEFT_ARROW)
  {
    fill(70, 215, 5);
  }



}
