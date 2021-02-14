/*

Officer: 4335840
CaseNum: 401-3-66401888-4335840

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If cyanide dips below 0.65, arsenic goes above 0.26, and also DeadlyNightshade goes above 0.49, reduce charcoal by 0.01
	- If alcohol dips below 0.31 or insecticide goes above 0.74, whilst at the same time, Spider_Venom dips below 0.71 or warfarin dips below 0.68, raise charcoal by 0.03
	- When either insecticide goes above 0.41, Spider_Venom dips below 0.3, or perhaps alcohol goes above 0.61, reduce ethanol by 0.01
	- When novichok dips below 0.28 or cyanide goes above 0.3, whilst at the same time, warfarin dips below 0.3 and DeadlyNightshade goes above 0.25, increase ethanol by 0.05
	- When Spider_Venom dips below 0.56, or on the other hand, DeadlyNightshade goes above 0.75 and cyanide goes above 0.54, reduce chalk by 0.03
	- When insecticide dips below 0.56, novichok goes above 0.37, and also arsenic goes above 0.51, increase chalk by 0.02
	- When insecticide goes above 0.6, cyanide goes above 0.33, and also novichok dips below 0.69, try decreasing calcium_gluconate by 0.02
	- If Spider_Venom dips below 0.28, warfarin goes above 0.28, and also alcohol goes above 0.64, increase calcium_gluconate by 0.01
	- If cyanide goes above 0.63 or warfarin goes above 0.36, whilst at the same time, arsenic goes above 0.51, try decreasing antitoxin by 0.04
	- When alcohol dips below 0.47, DeadlyNightshade dips below 0.7, and also insecticide goes above 0.56, raise antitoxin by 0.04


Your conditional statements should:

consider the following poisons:

	- arsenic
	- alcohol
	- Spider_Venom
	- insecticide
	- novichok
	- warfarin
	- DeadlyNightshade
	- cyanide


and modify the following antidotes:

	- charcoal
	- ethanol
	- chalk
	- calcium_gluconate
	- antitoxin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var alcohol;
var Spider_Venom;
var insecticide;
var novichok;
var warfarin;
var DeadlyNightshade;
var cyanide;


//Declare the antidote variables
var charcoal;
var ethanol;
var chalk;
var calcium_gluconate;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	alcohol = 0.5;
	Spider_Venom = 0.5;
	insecticide = 0.5;
	novichok = 0.5;
	warfarin = 0.5;
	DeadlyNightshade = 0.5;
	cyanide = 0.5;
	charcoal = 0.5;
	ethanol = 0.5;
	chalk = 0.5;
	calcium_gluconate = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ..

    
    if(cyanide < 0.65 && arsenic > 0.26 && DeadlyNightshade > 0.49)
    {
        charcoal -= 0.01;
    }
    
    if((alcohol < 0.31 || insecticide > 0.74) && (Spider_Venom < 0.71 || warfarin < 0.68))
    {
        charcoal += 0.03;
    }
    
    if(insecticide > 0.41 || Spider_Venom < 0.3 || alcohol > 0.61)
    {
        ethanol -= 0.01;
    }
    
    if((novichok < 0.28 || cyanide > 0.3) && (warfarin < 0.3 && DeadlyNightshade > 0.25))
    {
        ethanol += 0.05;
    }
    
    if(Spider_Venom < 0.56 || (DeadlyNightshade > 0.75 && cyanide > 0.54))
    {
        chalk -= 0.03;
    }
    
    if(insecticide < 0.56 && novichok > 0.37 && arsenic > 0.51)
    {
        chalk += 0.02;
    }
    
    if(insecticide > 0.6 && cyanide > 0.33 && novichok < 0.69)
    {
        calcium_gluconate -= 0.02;
    }
    
    if(Spider_Venom < 0.28 && warfarin > 0.28 && alcohol > 0.64)
    {
        calcium_gluconate += 0.01;
    }
    
    if((cyanide > 0.63 || warfarin > 0.36) && arsenic > 0.51)
    {
        antitoxin -= 0.04;
    }
    
    if(alcohol < 0.47 && DeadlyNightshade < 0.7 && insecticide > 0.56)
    {
        antitoxin += 0.04;
    }
       
       
       
       
       
       
       
       
   
    

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	alcohol = nextValue(graphs[1],alcohol);
	Spider_Venom = nextValue(graphs[2],Spider_Venom);
	insecticide = nextValue(graphs[3],insecticide);
	novichok = nextValue(graphs[4],novichok);
	warfarin = nextValue(graphs[5],warfarin);
	DeadlyNightshade = nextValue(graphs[6],DeadlyNightshade);
	cyanide = nextValue(graphs[7],cyanide);


	charcoal = constrain(charcoal, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	chalk = constrain(chalk, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals

	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,60);
	fill(colors[3]);
	text('insecticide: ' + nf(insecticide,1,2), 20,80);
	fill(colors[4]);
	text('novichok: ' + nf(novichok,1,2), 20,100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin,1,2), 20,120);
	fill(colors[6]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade,1,2), 20,140);
	fill(colors[7]);
	text('cyanide: ' + nf(cyanide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(ethanol,200,'ethanol');
	drawBar(chalk,350,'chalk');
	drawBar(calcium_gluconate,500,'calcium_gluconate');
	drawBar(antitoxin,650,'antitoxin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
