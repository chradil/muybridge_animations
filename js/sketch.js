//WE DECLARE OUR ANIMATION AS A VARIABLE
let jumper;

//WE LOAD OUR IMAGES IN THE BUILT-IN PRELOAD FUNCTION. 
//THIS HELPS OUR PAGE LOAD FASTER 
function preload(){
	jumping = loadAnimation('assets/1.png', 'assets/20.png');
	running = loadAnimation('assets/1.png','assets/5.png');
}

function setup() {
	let canvas = createCanvas(800,800);
	canvas.parent("drawingCanvas");
	jumper = createSprite(100, 200,100,200);
	jumper.addAnimation('jumping', jumping)
}

function draw() {
background(255);

//DRAW THE ANIMATION AND GIVE IT AN X AND Y!
//ANIMATION(VARIABLE, X, Y) IS THE FUNCTION WE USE TO DO THIS
	drawSprites();
	//jumper.velocity.x = 4;

}