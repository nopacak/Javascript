function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
}

function draw()
{
	strokeWeight(2);

	//robot body 1 - delete this code and make your own robot body
	fill(200,130,140,50);
    stroke(90,45,80);
	ellipse(150, 270, 120, 160);
    fill(140,250,200,100);
    stroke(135,170,220);
    triangle(90,200,210,200,150,290);
    fill(135,170,200,100);
    stroke(170,250,200);
    triangle(90,350,210,350,150,240);
    noStroke();
    fill(250,150,150);
	ellipse(75, 270, 30, 30);
	ellipse(225, 270, 30, 30);
    noStroke();
    fill(200,150,150);
	ellipse(130, 390, 30, 110);
	ellipse(170, 390, 30, 110);
    fill(250,180,190);
	ellipse(130, 390, 15, 50);
	ellipse(170, 390, 15, 50);

	//robot body 2 - delete this code and make your own robot body
    fill(50,200,180,50);
	triangle(380, 350, 520, 350, 450, 200);
    fill(150,100,135);
    ellipse(450,300,75,75);
	stroke(0,70,150);
    line(415, 270, 370, 240);
	line(482, 270, 533, 240);
    fill(250,240,0);
    stroke(0,70);
	rect(425, 350, 20, 110);
	rect(455, 350, 20, 110);
    line(455,370,475,370);
    line(455,380,475,380);
    line(455,390,475,390);
    line(455,400,475,400);
    line(455,410,475,410);
    line(455,420,475,420);
    line(455,430,475,430);
    line(455,440,475,440);
    line(455,360,475,360);
    line(455,450,475,450);
    line(425,370,445,370);
    line(425,380,445,380);
    line(425,390,445,390);
    line(425,400,445,400);
    line(425,410,445,410);
    line(425,420,445,420);
    line(425,430,445,430);
    line(425,440,445,440);
    line(425,360,445,360);
    line(425,450,445,450);

	//robot body 3 - delete this code and make your own robot body
    fill(50,150,50,100);
	rect(690, 200, 120, 150);
    fill(200,160,134,150);
    triangle(810,200,810,400,690,400);
    fill(255,200,50);
	rect(670, 200, 30, 100);
	rect(800, 200, 30, 100);
    fill(255,120,100,200);
    triangle(670,200,700,200,670,230);
    triangle(830,200,800,200,830,230);
    fill(150,100,130);
	rect(700, 400, 40, 30);
	rect(762, 400, 40, 30);
    fill(255,255,255);
	rect(767, 405, 30, 20);
	rect(705, 405, 30, 20);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(20,40,75,10);
    rect(126, 100, 50, 100,);
    stroke(100,200,200);
    line(151,100,151,75);
    line(151,100,126,75);
    line(151,100,176,75);
    line(151,100,163,75);
    line(151,100,139,75);
    stroke(0);
    //robot head 2
    fill(256,200,200);
    ellipse(450,150,100,100);
    fill(130,250,190);
	ellipse(450, 170, 140, 75, 10);
    //robot head 3
    fill(250,200,100);
	ellipse(750, 150, 100, 100, 10);

	//ears
	fill(130, 250, 180);

	//robot ears 1
	rect(93, 130, 10, 33);
	rect(197, 130, 10, 33);

	
	//robot ears 3
    fill(190,100,200);
	rect(688, 140, 15, 15);
	rect(797, 140, 15, 15);



	//robots' antennas
	fill(250, 250, 0);
   
    // robot antenna 2
	ellipse(450, 93, 10, 10);
    

    //robots' antennas
	fill(200, 0, 200);
    // robot antenna 1
	rect(140, 97, 20, 10);
    
  


	//robot 1's eyes
	fill(255);
	ellipse(125, 130, 26, 26);
	ellipse(175, 130, 26, 26);
	strokeWeight(6);
    stroke(30,0,150);
    point(130, 140);
	point(165, 135);
	strokeWeight(2);
    stroke(0);
    
	//robot 2's eyes
	ellipse(425, 130, 26, 26);
	point(425, 130);
	ellipse(475, 130, 26, 26);
	point(475, 130);

	//robot 3's eyes
    fill(150,200,140);
	ellipse(725, 130, 26, 30);
	point(725, 130);
	ellipse(775, 130, 26, 30);
	point(775, 130);


	//robots' noses
	fill(255, 0, 0);
    //robot 1 nose
	triangle(150, 135, 135, 160, 165, 160);
    //robot 2 nose
    fill(250,190,200);
	ellipse(450, 150, 10,10);
    //robot 3 nose
	triangle(750, 135, 735, 160, 765, 160);
    fill(255,180,150);
	triangle(750, 140, 740, 157, 760, 157);

	//robot 1 mouth
	fill(200,60,70,100);
	beginShape();
	
	vertex(136, 185);
	vertex(142, 175);
	vertex(150, 185);
	vertex(158, 175);
	vertex(166, 185);
	
	endShape();

	//robot 2 mouth
    fill(250,250,0);
	beginShape();
	vertex(428, 175);
	vertex(442, 175);
	vertex(450, 185);
	vertex(458, 175);
	vertex(474, 175);
	endShape();

	//robot 3 mouth
	noFill();
    beginShape();
	
	vertex(742, 175);
	vertex(750, 185);
	vertex(758, 175);
	
	endShape();
}