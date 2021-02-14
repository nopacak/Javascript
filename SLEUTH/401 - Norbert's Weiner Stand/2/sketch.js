/*

Officer: 4335840
CaseNum: 401-1-39606772-4335840

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When nerveGas goes above 0.37, try decreasing ethanol by 0.01
	- When polonium goes above 0.75 and methanol goes above 0.49, increase ethanol by 0.03
	- When polonium goes above 0.68, try decreasing antitoxin by 0.03
	- When warfarin dips below 0.27, increase antitoxin by 0.01
	- If polonium dips below 0.7, decrease SodiumBicarbonate by 0.04
	- If methanol goes above 0.55 and warfarin dips below 0.29, increase SodiumBicarbonate by 0.04
	- When polonium dips below 0.59, reduce Calcium_Gluconate by 0.01
	- If nerveGas dips below 0.41, increase Calcium_Gluconate by 0.01


Your conditional statements should:

consider the following poisons:

	- nerveGas
	- polonium
	- methanol
	- warfarin


and modify the following antidotes:

	- ethanol
	- antitoxin
	- SodiumBicarbonate
	- Calcium_Gluconate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var nerveGas;
var polonium;
var methanol;
var warfarin;


//Declare the antidote variables
var ethanol;
var antitoxin;
var SodiumBicarbonate;
var Calcium_Gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	nerveGas = 0.5;
	polonium = 0.5;
	methanol = 0.5;
	warfarin = 0.5;
	ethanol = 0.5;
	antitoxin = 0.5;
	SodiumBicarbonate = 0.5;
	Calcium_Gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
	//Write conditional statements to change the amount of each substance ...
    
	
	

    
    if(nerveGas > 0.37)
    {
        ethanol -= 0.01;
    }
    
    if(polonium > 0.75 && methanol > 0.49)
    {
        ethanol += 0.03;
    }
    
    if(polonium > 0.68)
    {
        antitoxin -= 0.03;
    }
    
    if(warfarin < 0.27)
    {
        antitoxin += 0.01;
    }
    
    if(polonium < 0.7)
    {
        SodiumBicarbonate -= 0.04;
    }
    
    if(methanol > 0.55 && warfarin < 0.29)
    {
        SodiumBicarbonate += 0.04;
    }
    
    if(polonium < 0.59)
    {
        Calcium_Gluconate -= 0.01;
    }
    
    if(nerveGas < 0.41)
    {
        Calcium_Gluconate += 0.01;
    }




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	nerveGas = nextValue(graphs[0],nerveGas);
	polonium = nextValue(graphs[1],polonium);
	methanol = nextValue(graphs[2],methanol);
	warfarin = nextValue(graphs[3],warfarin);


	ethanol = constrain(ethanol, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);


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
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,20);
	fill(colors[1]);
	text('polonium: ' + nf(polonium,1,2), 20,40);
	fill(colors[2]);
	text('methanol: ' + nf(methanol,1,2), 20,60);
	fill(colors[3]);
	text('warfarin: ' + nf(warfarin,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(antitoxin,200,'antitoxin');
	drawBar(SodiumBicarbonate,350,'SodiumBicarbonate');
	drawBar(Calcium_Gluconate,500,'Calcium_Gluconate');


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
