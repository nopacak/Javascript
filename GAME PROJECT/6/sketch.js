/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountain;
var trees_x;
var canyon;
var collectable;

var game_score;
var flagpole;
var lives;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	
    lives = 3;
    startGame();
}

function startGame()
{
    gameChar_x = width/14;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    trees_x = [100,400,650,1000,1300,1450,1720,2000];
    
    clouds = [{x_pos:100,y_pos:70},
              {x_pos:350,y_pos:110},
              {x_pos:600,y_pos:85},
              {x_pos:900,y_pos:85},
              {x_pos:1010,y_pos:70},
              {x_pos:1200,y_pos:85},
              {x_pos:1880,y_pos:65},
              {x_pos:1350,y_pos:90},
              {x_pos:1790,y_pos:85},
              {x_pos:1630,y_pos:75}];
    
    canyon = [{x: 255, y: 432, width: 55, height: 144},
              {x: 545, y: 432, width: 55, height: 144},
              {x: 1500, y: 432, width: 55, height: 144},
              {x: 1045, y: 432, width: 55, height: 144},
              {x: 1185, y: 432, width: 55, height: 144}
             ];
    
    mountain = [{x:0, y:0},
                {x:1000, y:1000},
                {x:1500,y:1500}];
    
    collectable = [{x:900, y:floorPos_y - 22, size:20, isFound:false},
                   {x:450, y:floorPos_y - 22, size:20, isFound:false},
                   {x:1000, y:floorPos_y - 22, size:20, isFound:false},
                   {x:1150, y:floorPos_y - 22, size:20, isFound:false},
                   {x:1350, y:floorPos_y - 22, size:20, isFound:false},
                   {x:1570, y:floorPos_y - 22, size:20, isFound:false},
                   {x:1630, y:floorPos_y - 22, size:20, isFound:false},
                   {x:1890, y:floorPos_y - 22, size:20, isFound:false}
                  ];
    
    game_score = 0;
    flagpole = {isReached: false, x_pos: 2200};
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos,0);

	// Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();

	// Draw trees.
    drawTrees();

	// Draw canyons.
    for(var i = 0; i < canyon.length; i++)
    {
        drawCanyon(canyon[i]); 
        checkCanyon(canyon[i]);
    }
    
    
	// Draw collectable items.
    for(var i = 0; i < collectable.length; i++)
    {
        if(collectable[i].isFound == false)
        {
            drawCollectable(collectable[i]);
            checkCollectable(collectable[i]);
        }
       
    }

  
    renderFlagpole();
    checkPlayerDie();
    
    pop();

	// Draw game character.
	
	drawGameChar();
    
    //draw game score and lives counter
    
    fill(255);
    noStroke();
    text("Score: " + game_score, 20, 20);
    text("Lives remaining: " + lives, 100, 20);
    
    //gameWin and gameOver conditions
   
    if(lives < 1)
    {
        gameOver();
        return;
        
    }
    
    
    if(flagpole.isReached == true)
    {
        gameWin();
        return;
    }
    

	// Logic to make the game character move or the background scroll.
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
    

    

    // Logic to make the game character rise and fall.
    
   if(gameChar_y < floorPos_y)
    {
        gameChar_y += 2;
        isFalling = true;
    }
    else
    {
        isFalling = false;    
    }
    
    if(isPlummeting)
    {
        gameChar_y += 5;
    }
    
    if(flagpole.isReached == false)
    {
        checkFlagpole();
    }
    

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{

    if(keyCode == 37)
    {
        isLeft = true;    
    }
    
   if(keyCode == 39)
    {
        isRight = true;
    }
    
    if(key == " " || key == "w")
    {
        if(!isFalling)
        {
            gameChar_y -= 100;
        }
    }
    

}

function keyReleased()
{

	if(keyCode == 37)
    {
        isLeft = false;    
    }
    
    
    if(keyCode == 39)
    {
        isRight = false;
    }

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
    if(isLeft && isFalling)
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
	else if(isRight && isFalling)
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
	else if(isFalling || isPlummeting)
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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
    {
        fill(255,255,255);
        ellipse(clouds[i].x_pos+150,clouds[i].y_pos,55,55);
        ellipse(clouds[i].x_pos+120,clouds[i].y_pos,40,40);
        ellipse(clouds[i].x_pos+180,clouds[i].y_pos,40,40);
    }
}

// Function to draw mountains objects.
function drawMountains()
{
    for(var i = 0; i < mountain.length; i++)
    {
        noStroke();
        fill(119,136,153,200);
        triangle(mountain[i].x+737.5,mountain[i].y+200,mountain[i].x+660,mountain[i].y+432,mountain[i].x+815,mountain[i].y+432);
        triangle(mountain[i].x+892.5,mountain[i].y+200,mountain[i].x+970,mountain[i].y+432,mountain[i].x+815,mountain[i].y+432);
    
        fill(47,79,79,200);
        triangle(mountain[i].x+815,mountain[i].y+150,mountain[i].x+700,mountain[i].y+432,mountain[i].x+925,mountain[i].y+432);
    }
}

// Function to draw trees objects.
function drawTrees()
{
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
        ellipse(trees_x[i]+15,height/2-72,90,90);
    }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    fill(100,155,255);
    rect(t_canyon.x, t_canyon.y, t_canyon.width, t_canyon.height);          
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if (gameChar_world_x > t_canyon.x && gameChar_world_x < t_canyon.x + t_canyon.width && gameChar_y == floorPos_y)
    {
        isPlummeting = true;
    }
}

function checkPlayerDie()
{
    if(gameChar_y > height)
    {
        lives --;
        if(lives > 0)
        {
            startGame();
        }
        else
        {
            lives = 0;
        }


    }
}



// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    fill(255,225,0);
    ellipse(t_collectable.x,t_collectable.y,t_collectable.size + 10,t_collectable.size + 20);
    fill(240,200,0);
    ellipse(t_collectable.x,t_collectable.y,t_collectable.size,t_collectable.size + 10);

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x, t_collectable.y) < 30)
    {
        t_collectable.isFound = true;
        game_score += 1;
    }

}

function renderFlagpole()
{   
    push();
    strokeWeight(6);
    stroke(120, 0, 125);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    fill(255, 160, 122);
    strokeWeight(1);
    
    if(flagpole.isReached)
    {
        rect(flagpole.x_pos, floorPos_y - 250, 50, 40);   
    }
    else
    {
        rect(flagpole.x_pos, floorPos_y - 50, 50, 40);
    }
    
    pop();
}

function checkFlagpole()
{
    var d = abs(gameChar_world_x - flagpole.x_pos);
    if(d < 15)
    {
        flagpole.isReached = true;
    }
}

function gameWin()
{
    push();
    fill(250,235,215);
    textSize(20);
    text("Congratulations!!! Level completed!!", width * 2/4, height/2);
    text("Press space to continue", width/2 + 30, height/2 + 30);
    pop();
}

function gameOver()
{
    push();
    textSize(40);
    fill(255,0,0);
    text("GAME OVER!!", width/3, height/2 - 30);
    textSize(20);
    fill(255,228,111);
    text("Press space to start from the beginning.", width/4 + 50, height/2);
    pop();
}

