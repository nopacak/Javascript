/*

Officer: 4335840
CaseNum: 401-2-89135413-4335840

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When Snake_Venom goes above 0.55, or on the other hand, insecticide goes above 0.43 and warfarin dips below 0.42, decrease CalciumGluconate by 0.04
	- When mercury dips below 0.45 and hemlock goes above 0.42, or on the other hand, arsenic dips below 0.7, try increasing CalciumGluconate by 0.02
	- When arsenic dips below 0.37 or insecticide goes above 0.75, try decreasing ethanol by 0.03
	- If hemlock goes above 0.34 and Snake_Venom goes above 0.5, increase ethanol by 0.01
	- When hemlock goes above 0.35 and arsenic goes above 0.51, decrease chalk by 0.03
	- If insecticide goes above 0.55 or warfarin dips below 0.73, try increasing chalk by 0.05
	- If hemlock goes above 0.4 and insecticide goes above 0.52, try decreasing charcoal by 0.04
	- If arsenic goes above 0.31 or mercury goes above 0.75, whilst at the same time, warfarin goes above 0.26, raise charcoal by 0.03


Your conditional statements should:

consider the following poisons:

	- insecticide
	- Snake_Venom
	- mercury
	- arsenic
	- hemlock
	- warfarin


and modify the following antidotes:

	- CalciumGluconate
	- ethanol
	- chalk
	- charcoal


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var Snake_Venom;
var mercury;
var arsenic;
var hemlock;
var warfarin;


//Declare the antidote variables
var CalciumGluconate;
var ethanol;
var chalk;
var charcoal;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	Snake_Venom = 0.5;
	mercury = 0.5;
	arsenic = 0.5;
	hemlock = 0.5;
	warfarin = 0.5;
	CalciumGluconate = 0.5;
	ethanol = 0.5;
	chalk = 0.5;
	charcoal = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
    
    
	

    
    
    if(Snake_Venom > 0.55 || insecticide > 0.43 && warfarin < 0.42)
    {
        CalciumGluconate -= 0.04;
    }
    
    if(mercury < 0.45 && hemlock > 0.42 || arsenic < 0.7)
    {
        CalciumGluconate += 0.02;
    }
    
    if(arsenic < 0.37 || insecticide > 0.75)
    {
        ethanol -= 0.03;
    }
    
    if(hemlock > 0.34 && Snake_Venom > 0.5)
    {
        ethanol += 0.01;
    }
    
    if(hemlock > 0.35 && arsenic > 0.51)
    {
        chalk -= 0.03;
    }
    
    if(insecticide > 0.55 || warfarin < 0.73)
    {
        chalk += 0.05;
    }
    
    if(hemlock > 0.4 && insecticide > 0.52)
    {
        charcoal -= 0.04;
    }
    
    if((arsenic > 0.31 || mercury > 0.75) && warfarin > 0.26)
    {
        charcoal += 0.03;
    }


	//- If arsenic goes above 0.31 or mercury goes above 0.75, whilst at the same time, warfarin goes above 0.26, raise charcoal by 0.03


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	Snake_Venom = nextValue(graphs[1],Snake_Venom);
	mercury = nextValue(graphs[2],mercury);
	arsenic = nextValue(graphs[3],arsenic);
	hemlock = nextValue(graphs[4],hemlock);
	warfarin = nextValue(graphs[5],warfarin);


	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	chalk = constrain(chalk, 0, 1);
	charcoal = constrain(charcoal, 0, 1);


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
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);
	fill(colors[3]);
	text('arsenic: ' + nf(arsenic,1,2), 20,80);
	fill(colors[4]);
	text('hemlock: ' + nf(hemlock,1,2), 20,100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(CalciumGluconate,50,'CalciumGluconate');
	drawBar(ethanol,200,'ethanol');
	drawBar(chalk,350,'chalk');
	drawBar(charcoal,500,'charcoal');


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
