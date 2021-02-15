/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountain;
var trees_x;
var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    trees_x = [100,400,650,1000,1300,1450,1720,2000];
    clouds = [{x_pos:100,y_pos:70},{x_pos:350,y_pos:110},{x_pos:600,y_pos:85},{x_pos:900,y_pos:85},{x_pos:1010,y_pos:70},{x_pos:1200,y_pos:85},
             {x_pos:1880,y_pos:65},{x_pos:1350,y_pos:90},{x_pos:1790,y_pos:85},{x_pos:1630,y_pos:75}];
    canyon = [{x: 255, y: 432, width: 55, height: 144},
              {x: 545, y: 432, width: 55, height: 144},
              {x: 1500, y: 432, width: 55, height: 144},
              {x: 1045, y: 432, width: 55, height: 144},
              {x: 1185, y: 432, width: 55, height: 144}
             ];
    mountain = [{x:0, y:0},{x:1000, y:1000},{x:1500,y:1500}]; //PLEASE LET ME KNOW WHAT HAVE I DONE WRONG WITH THE MOUNTAIN CODE, THANK YOU :)
    collectable = [{x:900, y:410},{x:450, y:410},{x:1000, y:410},{x:1150, y:410},{x:1350, y:410},{x:1570, y:410},{x:1630, y:410},{x:1890, y:410}];
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos,0);

	// Draw clouds.
    for(var i = 0; i < clouds.length; i++)
    {
        fill(255,255,255);
        ellipse(clouds[i].x_pos+150,clouds[i].y_pos,55,55);
        ellipse(clouds[i].x_pos+120,clouds[i].y_pos,40,40);
        ellipse(clouds[i].x_pos+180,clouds[i].y_pos,40,40);
    }

	// Draw mountains.
    for(var i = 0; i < mountain.length; i++)
    {
        noStroke();
        fill(119,136,153,200);
        triangle(mountain[i].x+737.5,mountain[i].y+200,mountain[i].x+660,mountain[i].y+432,mountain[i].x+815,mountain[i].y+432);
        triangle(mountain[i].x+892.5,mountain[i].y+200,mountain[i].x+970,mountain[i].y+432,mountain[i].x+815,mountain[i].y+432);
    
        fill(47,79,79,200);
        triangle(mountain[i].x+815,mountain[i].y+150,mountain[i].x+700,mountain[i].y+432,mountain[i].x+925,mountain[i].y+432);
    }

	// Draw trees.
    for(var i = 0; i < trees_x.length; i++)
    {
        noStroke();
        fill(210,105,30);
        rect(trees_x[i],height/2,30,145);
        fill(0,100,0);
        ellipse(trees_x[i]+15,height/2,60,60);
        ellipse(trees_x[i]+50,height/2-22,60,60);
        ellipse(trees_x[i]-20,height/2-22,60,60);
        ellipse(trees_x[i]+15,height/2-32,60,60);
        ellipse(trees_x[i]+70,height/2-52,60,60);
        ellipse(trees_x[i]-40,height/2-52,60,60);
        ellipse(trees_x[i]+50,height/2-82,60,60);
        ellipse(trees_x[i]-20,height/2-82,60,60);
        ellipse(trees_x[i]+15,height/2-102,60,60);
        ellipse(trees_x[i]+15,height/2-82,90,90);
    }

	// Draw canyons
    for(var i = 0; i < canyon.length; i++)
    {
        fill(100,155,255);
        rect(canyon[i].x,canyon[i].y, canyon[i].width, canyon[i].height);        
    }

	// Draw collectable items
    for(var i = 0; i < collectable.length; i++)
    {
        fill(255,225,0);
        ellipse(collectable[i].x,collectable[i].y,20,30);
        fill(240,200,0);
        ellipse(collectable[i].x,collectable[i].y,15,25);
    }
    
    
    pop();

	// Draw the game character - this must be last
    fill(255,228,181);
    ellipse(gameChar_x, gameChar_y-50, 20, 20);
    fill(140,0,0);
    rect(gameChar_x-7.5,gameChar_y-40, 15,35);
    
    fill(0);
    rect(gameChar_x+2,gameChar_y-6,7,5);
    rect(gameChar_x-9,gameChar_y-6,7,5);
    
    stroke(0);
    strokeWeight(1);
    line(gameChar_x+7.5,gameChar_y-27,gameChar_x+15,gameChar_y-23);
    line(gameChar_x-7.5,gameChar_y-27,gameChar_x-15,gameChar_y-23);

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
