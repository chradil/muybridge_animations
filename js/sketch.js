//WE DECLARE OUR ANIMATION AS A VARIABLE
let jumper;
let bg;

//WE LOAD OUR IMAGES IN THE BUILT-IN PRELOAD FUNCTION. 
//THIS HELPS OUR PAGE LOAD FASTER 
function preload(){
	bg = loadImage('assets/VPL.jpg')
	jumping = loadAnimation('assets/1.png', 'assets/20.png');
	running = loadAnimation('assets/1.png','assets/5.png');
}

function setup() {
	let canvas = createCanvas(1000,550);
	canvas.parent("drawingCanvas");
	jumper = createSprite(100, 400,100,200);
	jumper.addAnimation('jumping', jumping)
}

function draw() {
background(bg);

//DRAW THE ANIMATION AND GIVE IT AN X AND Y!
//ANIMATION(VARIABLE, X, Y) IS THE FUNCTION WE USE TO DO THIS
	if(mouseX < jumper.position.x - 10) {
    
    //flip horizontally
    jumper.mirrorX(-1);
    //negative x velocity: move left
    jumper.velocity.x = -4;
  }
  else if(mouseX > jumper.position.x + 10) {
    //unflip
    jumper.mirrorX(1);
    jumper.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    jumper.velocity.x = 0;
  }


	drawSprites();
	//jumper.velocity.x = 4;

}