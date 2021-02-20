/*
801
Stage 3: La Traviata

Officer: 4335840
CaseNum: 801-2-16839107-4335840

La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row. You’ll have to untangle the array.

Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have scarf so that might be helpful in your task. If we can identify this lot maybe they'll lead us to the Cooley gang.

You’ll have to use a single for loop to pick them out and set caught property of the audience to true.
Solve the case using only:
For (not nested)
audience[ ][ ]

*/

var crowdImg;
var spotlight;

var audience = [[{"x":50,"y":50,"caught":false},{"x":150,"y":50,"caught":false},{"x":250,"y":50,"caught":false},{"x":350,"y":50,"caught":false},{"x":450,"y":50,"caught":false},{"x":550,"y":50,"caught":false},{"x":650,"y":50,"caught":false},{"x":750,"y":50,"caught":false},{"x":850,"y":50,"caught":false},{"x":950,"y":50,"caught":false}],[{"x":50,"y":130,"caught":false},{"x":150,"y":130,"caught":false},{"x":250,"y":130,"caught":false},{"x":350,"y":130,"caught":false},{"x":450,"y":130,"caught":false},{"x":550,"y":130,"caught":false},{"x":650,"y":130,"caught":false},{"x":750,"y":130,"caught":false},{"x":850,"y":130,"caught":false},{"x":950,"y":130,"caught":false}],[{"x":50,"y":210,"caught":false},{"x":150,"y":210,"caught":false},{"x":250,"y":210,"caught":false},{"x":350,"y":210,"caught":false},{"x":450,"y":210,"caught":false},{"x":550,"y":210,"caught":false},{"x":650,"y":210,"caught":false},{"x":750,"y":210,"caught":false},{"x":850,"y":210,"caught":false},{"x":950,"y":210,"caught":false}],[{"x":50,"y":290,"caught":false},{"x":150,"y":290,"caught":false},{"x":250,"y":290,"caught":false},{"x":350,"y":290,"caught":false},{"x":450,"y":290,"caught":false},{"x":550,"y":290,"caught":false},{"x":650,"y":290,"caught":false},{"x":750,"y":290,"caught":false},{"x":850,"y":290,"caught":false},{"x":950,"y":290,"caught":false}],[{"x":50,"y":370,"caught":false},{"x":150,"y":370,"caught":false},{"x":250,"y":370,"caught":false},{"x":350,"y":370,"caught":false},{"x":450,"y":370,"caught":false},{"x":550,"y":370,"caught":false},{"x":650,"y":370,"caught":false},{"x":750,"y":370,"caught":false},{"x":850,"y":370,"caught":false},{"x":950,"y":370,"caught":false}],[{"x":50,"y":450,"caught":false},{"x":150,"y":450,"caught":false},{"x":250,"y":450,"caught":false},{"x":350,"y":450,"caught":false},{"x":450,"y":450,"caught":false},{"x":550,"y":450,"caught":false},{"x":650,"y":450,"caught":false},{"x":750,"y":450,"caught":false},{"x":850,"y":450,"caught":false},{"x":950,"y":450,"caught":false}],[{"x":50,"y":530,"caught":false},{"x":150,"y":530,"caught":false},{"x":250,"y":530,"caught":false},{"x":350,"y":530,"caught":false},{"x":450,"y":530,"caught":false},{"x":550,"y":530,"caught":false},{"x":650,"y":530,"caught":false},{"x":750,"y":530,"caught":false},{"x":850,"y":530,"caught":false},{"x":950,"y":530,"caught":false}],[{"x":50,"y":610,"caught":false},{"x":150,"y":610,"caught":false},{"x":250,"y":610,"caught":false},{"x":350,"y":610,"caught":false},{"x":450,"y":610,"caught":false},{"x":550,"y":610,"caught":false},{"x":650,"y":610,"caught":false},{"x":750,"y":610,"caught":false},{"x":850,"y":610,"caught":false},{"x":950,"y":610,"caught":false}],[{"x":50,"y":690,"caught":false},{"x":150,"y":690,"caught":false},{"x":250,"y":690,"caught":false},{"x":350,"y":690,"caught":false},{"x":450,"y":690,"caught":false},{"x":550,"y":690,"caught":false},{"x":650,"y":690,"caught":false},{"x":750,"y":690,"caught":false},{"x":850,"y":690,"caught":false},{"x":950,"y":690,"caught":false}],[{"x":50,"y":770,"caught":false},{"x":150,"y":770,"caught":false},{"x":250,"y":770,"caught":false},{"x":350,"y":770,"caught":false},{"x":450,"y":770,"caught":false},{"x":550,"y":770,"caught":false},{"x":650,"y":770,"caught":false},{"x":750,"y":770,"caught":false},{"x":850,"y":770,"caught":false},{"x":950,"y":770,"caught":false}]];
var gang = [0,9,7,2,4,8,2,3,6,2];


function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
    for (var i = 0; i < audience.length; i++)
    {
        audience[i][gang[i]].caught = "true";
    }


	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < audience.length; i++)
	{
		for (var j = 0; j < audience[i].length; j++)
		{
			if (audience[i][j].caught)
			{
				image(spotlight, audience[i][j].x, audience[i][j].y, 100 , 100 );
			}
		}
	}
}
