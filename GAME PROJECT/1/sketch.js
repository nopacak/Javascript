/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	//text("cloud", 200, 100);
    
    fill(255,255,255);
    ellipse(220,150,80,60);
    ellipse(260,150,60,40);
    ellipse(180,150,60,40);
    
    ellipse(350,100,80,60);
    ellipse(390,100,60,40);
    ellipse(310,100,60,40);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	//text("mountain", 550, 256);
    
    
    fill(119,136,153);
    triangle(658,250,600,432,715,432);
    triangle(773,250,830,432,715,432);
    fill(47,79,79);
    triangle(715,200,630,432,795,432);
    
    
	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	//text("tree", 850, 346);
    
    fill(210,105,30);
    rect(930,282,30,150);
    fill(0,100,0);
    ellipse(945,282,60,60);
    ellipse(980,260,60,60);
    ellipse(910,260,60,60);
    ellipse(945,250,60,60);
    ellipse(1000,230,60,60);
    ellipse(890,230,60,60);
    ellipse(980,200,60,60);
    ellipse(910,200,60,60);
    ellipse(945,180,60,60);
    ellipse(945,200,80,80);
    

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	//text("canyon", 100, 480);
    
    fill(100,155,255);
    rect(150,432,50,144);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	//text("collectable item", 400, 400);
    
    fill(255,225,0);
    ellipse(510,400,35,45);
    
}
