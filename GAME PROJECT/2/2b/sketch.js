/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    canyon = {
        x_pos:0,
        width:100
    };
    
    
    mountain = {
        x_pos:0,
        y_pos:0
    };
    
    cloud = {
        x_pos:100,
        y_pos:100,
        size:60
    };
    
    collectable = {
        x_pos:100,
        y_pos:100,
        size:50
    };
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    
    
    
    //draw a mountain
    noStroke();
    fill(119,136,153);
    triangle(mountain.x_pos+358,mountain.y_pos+250,mountain.x_pos+300,mountain.y_pos+432,mountain.x_pos+415,mountain.y_pos+432);
    triangle(mountain.x_pos+473,mountain.y_pos+250,mountain.x_pos+530,mountain.y_pos+432,mountain.x_pos+415,mountain.y_pos+432);
    
    fill(47,79,79,250);
    triangle(mountain.x_pos+415,mountain.y_pos+200,mountain.x_pos+330,mountain.y_pos+432,mountain.x_pos+495,mountain.y_pos+432);
    
    
    //draw a canyon
    fill(100,155,255);
    rect(canyon.x_pos+150,canyon.width+332,canyon.x_pos+50,canyon.width+44);
    
    
    //draw collectable
    fill(255,225,0);
    ellipse(collectable.x_pos+210,collectable.y_pos+300,35,45);
    fill(240,200,0);
    ellipse(collectable.x_pos+210,collectable.y_pos+300,25,40);
    
    
    //draw clouds
    fill(255,255,255);
    ellipse(cloud.x_pos+150,cloud.y_pos+50,cloud.size);
    ellipse(cloud.x_pos+120,cloud.y_pos+50,cloud.size-15);
    ellipse(cloud.x_pos+180,cloud.y_pos+50,cloud.size-15);
    
    ellipse(cloud.x_pos+250,cloud.y_pos,cloud.size);
    ellipse(cloud.x_pos+220,cloud.y_pos,cloud.size-15);
    ellipse(cloud.x_pos+280,cloud.y_pos,cloud.size-15);
    
    
    
    //draw a tree
    noStroke();
    fill(210,105,30);
    rect(treePos_x,treePos_y,30,150);
    fill(0,100,0);
    ellipse(treePos_x+15,treePos_y,60,60);
    ellipse(treePos_x+50,treePos_y-22,60,60);
    ellipse(treePos_x-20,treePos_y-22,60,60);
    ellipse(treePos_x+15,treePos_y-32,60,60);
    ellipse(treePos_x+70,treePos_y-52,60,60);
    ellipse(treePos_x-40,treePos_y-52,60,60);
    ellipse(treePos_x+50,treePos_y-82,60,60);
    ellipse(treePos_x-20,treePos_y-82,60,60);
    ellipse(treePos_x+15,treePos_y-102,60,60);
    ellipse(treePos_x+15,treePos_y-82,90,90);
    
    
    
    
     //draw the game character
    fill(250,228,181);
    ellipse(gameChar_x, gameChar_y-60, 20, 20);
    
    fill(140,0,0);
    rect(gameChar_x-7.5,gameChar_y-50, 15,35);
    
    fill(0);
    rect(gameChar_x+2,gameChar_y-16,7,5);
    rect(gameChar_x-9,gameChar_y-16,7,5);
    
    stroke(0);
    strokeWeight(1);
    line(gameChar_x+7.5,gameChar_y-37,gameChar_x+15,gameChar_y-33);
    line(gameChar_x-7.5,gameChar_y-37,gameChar_x-15,gameChar_y-33);
    


}

function mousePressed()
{
    gameChar_x=mouseX;
    gameChar_y=mouseY;


}


function mouseMoved()
//{
  //  cloud.x_pos=mouseX;
    //cloud.y_pos=mouseY;
//}
