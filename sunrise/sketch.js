var groundHeight;
var mountain1;
var mountain2;
var mountain3;

var tree;

var moon;
var sun;
var darkness;
var a;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 250
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 150
	};
    mountain3 = {
        x:350,
        y: groundHeight,
        height: mountain2.height,
        width: mountain2.width
    };

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		diameter: 50
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness
    moon = {
        x: 100,
        y: 450,
        diameter: sun.diameter,
        brightness: 0
    };


	//set the initial darkness
	darkness = 0;
    
    //stars
    for(var i=0; i<=500; i++){
        ellipse(random(0,width), random(0,height/3),5)
    }
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.

    //var yPos
	//draw the sky
	background(150, 200, 255);
	noStroke();
    
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
    fill(235);
    ellipse(moon.x, moon.y, sun.diameter);
    fill(150,200,255);
    ellipse(moon.x+7, moon.y-6, sun.diameter-9);
    moon.y = max(moon.y - 1, 70);
    
    //draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    sun.y = sun.y + 1;
    
	//draw the ground and make it green
	fill(70, 180, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);
    
    fill(47,79,79);
	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    triangle(mountain3.x, mountain3.y,
		mountain3.x + mountain2.width, mountain3.y,
		mountain3.x + (mountain2.width / 2), mountain3.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    fill(160,82,45);
    rect(tree.x + 5, tree.y-80, tree.trunkWidth - 10, tree.trunkHeight);
    fill(34,139,34);
    ellipse(tree.x + 20, tree.y - 90, tree.diameter, tree.diameter);
    ellipse(tree.x - 10, tree.y - 95, tree.diameter, tree.diameter);
    ellipse(tree.x + 50, tree.y - 95, tree.diameter, tree.diameter);
    ellipse(tree.x + 20, tree.y - 130, tree.diameter, tree.diameter);
    ellipse(tree.x + 20, tree.y - 170, tree.diameter, tree.diameter);
    ellipse(tree.x + 80, tree.y - 120, tree.diameter, tree.diameter);
    ellipse(tree.x + 60, tree.y - 120, tree.diameter, tree.diameter);
    ellipse(tree.x - 40, tree.y - 120, tree.diameter, tree.diameter);
    ellipse(tree.x - 20, tree.y - 120, tree.diameter, tree.diameter);
    ellipse(tree.x - 20, tree.y - 150, tree.diameter, tree.diameter);
    ellipse(tree.x + 60, tree.y - 150, tree.diameter, tree.diameter);
    

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
    
    
    fill(20,0,55,a);
    a = map(moon.y,450,70,0,200);
    rect(0, 0, 800, 800);
    
    //stars
}