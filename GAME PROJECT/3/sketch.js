/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;

var isLeft;
var isRight;
var isJumping;
var isFalling;

var collectable;
var canyon;
var cloud;
var mountain;
var tree;

function setup()
{
	createCanvas(1024, 576);
    
	floorPos_y = height * 3/4;
	
    gameChar_x = width/14;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isJumping = false;
    isFalling = false;
    
    //variable to control the background scrolling
    scrollPos = 0;
    
    //initialize arrays of scenery objects
    tree = [];
    cloud = [];
    canyon = [];
    mountain = [];
    collectable = [];
}

function draw()
{

	///////////DRAWING CODE//////////

	
    background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    push();
    translate(scrollPos,0);
    
    //drawing mountains
    for(var i = 0; i < mountain.length; i++)
    {
        noStroke();
        fill(119,136,153,200);
        triangle(mountain[i].x+737.5,mountain[i].y+200,mountain[i].x+660,mountain[i].y+432,mountain[i].x+815,mountain[i].y+432);
        triangle(mountain[i].x+892.5,mountain[i].y+200,mountain[i].x+970,mountain[i].y+432,mountain[i].x+815,mountain[i].y+432);
    
        fill(47,79,79,200);
        triangle(mountain[i].x+815,mountain[i].y+150,mountain[i].x+700,mountain[i].y+432,mountain[i].x+925,mountain[i].y+432);
    }
    
    //drawing trees
    for(var i = 0; i < tree.length; i++)
    {
        noStroke();
        fill(210,105,30);
        rect(tree[i],height/2,30,145);
        fill(0,100,0);
        ellipse(tree[i]+15,height/2,60,60);
        ellipse(tree[i]+50,height/2-22,60,60);
        ellipse(tree[i]-20,height/2-22,60,60);
        ellipse(tree[i]+15,height/2-32,60,60);
        ellipse(tree[i]+70,height/2-52,60,60);
        ellipse(tree[i]-40,height/2-52,60,60);
        ellipse(tree[i]+50,height/2-82,60,60);
        ellipse(tree[i]-20,height/2-82,60,60);
        ellipse(tree[i]+15,height/2-102,60,60);
        ellipse(tree[i]+15,height/2-72,90,90);
    }
    
    //drawing clouds
    for(var i = 0; i < cloud.length; i++)
    {
        fill(255,255,255);
        ellipse(cloud[i].x_pos+150,cloud[i].y_pos,55,55);
        ellipse(cloud[i].x_pos+120,cloud[i].y_pos,40,40);
        ellipse(cloud[i].x_pos+180,cloud[i].y_pos,40,40);
    }

    
    //draw the canyon
    for(var i = 0; i < canyon.length; i++)
    {
        fill(100,155,255);
        rect(canyon[i].x,canyon[i].y, canyon[i].width, canyon[i].height);        
    }
    
    //condition for character falling down the canyon
    //if((gameChar_x < 310 && gameChar_x > 255 && gameChar_y > 422) || (gameChar_x < 600 && gameChar_x > 545 && gameChar_y > 422))
    //{
    //    isFalling = true;
    //    isJumping = false;
    //}
    
    //if(isFalling == true)
    //{
    //    gameChar_y = max(gameChar_y + 1, height);
    //}
    
    //if(dist(gameChar_x,gameChar_y,collectable[i].x,collectable[i].y) <= 10)
    //    {
    //        collectable.isFound = true;
    //    }
    //    if(collectable.isFound == false) ===> NOT SURE HOW TO INCLUDE IF STATEMENT FOR THE COLLECTABLE TO DISSAPEAR
 
    //collectable
   for(var i = 0; i < collectable.length; i++)
   {
       fill(255,225,0);
       ellipse(collectable[i].x,collectable[i].y,20,30);
       fill(240,200,0);
       ellipse(collectable[i].x,collectable[i].y,15,25);
   }
    
    

    pop();
    
	//the game character
    
	if(isLeft && isJumping)
	{
		// add your jumping-left code
        fill(255,228,181);
        ellipse(gameChar_x, gameChar_y-50, 20, 20);
    
        fill(140,0,0);
        rect(gameChar_x-7.5,gameChar_y-40, 15,35);
    
        fill(0);
        rect(gameChar_x-10,gameChar_y-12,5,8);
        rect(gameChar_x,gameChar_y-6,5,8);
    
        stroke(0);
        strokeWeight(1);
        line(gameChar_x,gameChar_y-27,gameChar_x-15,gameChar_y-32);

	}
	else if(isRight && isJumping)
	{
		// add your jumping-right code
        fill(255,228,181);
        ellipse(gameChar_x, gameChar_y-50, 20, 20);
    
        fill(140,0,0);
        rect(gameChar_x-7.5,gameChar_y-40, 15,35);
    
        fill(0);
        rect(gameChar_x+4,gameChar_y-12,5,8);
        rect(gameChar_x-6,gameChar_y-6,5,8);
    
        stroke(0);
        strokeWeight(1);
        line(gameChar_x,gameChar_y-27,gameChar_x+15,gameChar_y-33);

	}
	else if(isLeft)
	{
		// add your walking left code
        fill(255,228,181);
        ellipse(gameChar_x, gameChar_y-50, 20, 20);
    
        fill(140,0,0);
        rect(gameChar_x-7.5,gameChar_y-40, 15,35);
    
        fill(0);
        rect(gameChar_x-10,gameChar_y-6,7,5);
        rect(gameChar_x-8,gameChar_y-6,7,5);
    
        stroke(0);
        strokeWeight(1);
        line(gameChar_x,gameChar_y-27,gameChar_x-15,gameChar_y-23);

	}
	else if(isRight)
	{
		// add your walking right code
        fill(255,228,181);
        ellipse(gameChar_x, gameChar_y-50, 20, 20);
    
        fill(140,0,0);
        rect(gameChar_x-7.5,gameChar_y-40, 15,35);
    
        fill(0);
        rect(gameChar_x+3,gameChar_y-6,7,5);
        rect(gameChar_x+1,gameChar_y-6,7,5);
    
        stroke(0);
        strokeWeight(1);
        line(gameChar_x,gameChar_y-27,gameChar_x+15,gameChar_y-23);

	}
	else if(isFalling || isJumping)
	{
		// add your jumping facing forwards code
        fill(255,228,181);
        ellipse(gameChar_x, gameChar_y-50, 20, 20);
    
        fill(140,0,0);
        rect(gameChar_x-7.5,gameChar_y-40, 15,35);
    
        fill(0);
        rect(gameChar_x+2,gameChar_y-11,5,8);
        rect(gameChar_x-9,gameChar_y-6,7,5);
    
        stroke(0);
        strokeWeight(1);
        line(gameChar_x+7.5,gameChar_y-27,gameChar_x+15,gameChar_y-31);
        line(gameChar_x-7.5,gameChar_y-27,gameChar_x-15,gameChar_y-31);

	}
	else
	{
		// add your standing front facing code
        fill(255,228,181);
        //ellipse(gameChar_x, gameChar_y-60, 20, 20);
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

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft == true)
    {
        gameChar_x = max(gameChar_x-5,0);
    }
    
    
    if(isRight == true)
    {
        gameChar_x = min(gameChar_x+5,width);
    }
    
    
    if(isJumping == true)
    {
        gameChar_y = max(gameChar_y-7,height/2);
    }
    else
    {
        gameChar_y = min(gameChar_y+2,floorPos_y);
    }

    
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	//console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if(keyCode == 37)
    {
        isLeft = true;    
    }
    else if(keyCode == 39)
    {
        isRight = true;
    }
    else if(keyCode == 38)
    {
        isJumping = true;
    }
   
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	//console.log("keyReleased: " + key);
	//console.log("keyReleased: " + keyCode);
    
    if(keyCode == 37)
    {
        isLeft = false;    
    }
    else if(keyCode == 39)
    {
        isRight = false;
    }
    else if(keyCode == 38)
    {
        isJumping = false;
    }
}
