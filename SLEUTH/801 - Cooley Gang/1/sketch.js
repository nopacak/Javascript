/*
801
Stage 1: Rigoletto

Officer: 4335840
CaseNum: 801-0-12870090-4335840

The deeper we dig into the underworld of this city the higher up the echelons of power we find ourselves.  These aren’t just small time crooks kid. We are looking into the secret orders, societies and gangs. They are cultured, educated and filthy smart. We are sure they are all connected to the Cooley gang, the real owners of this city. Their power and influence make them hard to track down.

Word has it that Order of The Knuth's are at the command performance of Rigoletto at the console city Opera house tonight. Lucky for us, our person on the inside is working the box office. We’ve got their seat numbers and access to the lighting desk. Set the spotlights to shine on the member’s of the order. This is where they will be seated:

the 5th row, 6th seat
the 3rd row, 4th seat
the 7th row, 2nd seat
the 1st row, 9th seat
the 3rd row, 10th seat
the 3rd row, 6th seat
the 7th row, 6th seat
the 10th row, 3rd seat


Set the caught property of the audience to true and the lights will highlight the gang in the darkness. I’ll be hiding in the wings to nab a photo during the first act and we’ll be able to ID this secret society.

Oh yeah, I almost forgot. Our informant also told us to look out for the orders trademark tall hair, it’ll help us in our task. This is our first step in covering the network of secret organisations which will lead us to the Cooley's.

There are many ways to complete the case but you should only use:
audience[#][#] to update the property


*/

var crowdImg;
var spotlight;

var audience = [[{"x":50,"y":50,"caught":false},{"x":150,"y":50,"caught":false},{"x":250,"y":50,"caught":false},{"x":350,"y":50,"caught":false},{"x":450,"y":50,"caught":false},{"x":550,"y":50,"caught":false},{"x":650,"y":50,"caught":false},{"x":750,"y":50,"caught":false},{"x":850,"y":50,"caught":false},{"x":950,"y":50,"caught":false}],[{"x":50,"y":130,"caught":false},{"x":150,"y":130,"caught":false},{"x":250,"y":130,"caught":false},{"x":350,"y":130,"caught":false},{"x":450,"y":130,"caught":false},{"x":550,"y":130,"caught":false},{"x":650,"y":130,"caught":false},{"x":750,"y":130,"caught":false},{"x":850,"y":130,"caught":false},{"x":950,"y":130,"caught":false}],[{"x":50,"y":210,"caught":false},{"x":150,"y":210,"caught":false},{"x":250,"y":210,"caught":false},{"x":350,"y":210,"caught":false},{"x":450,"y":210,"caught":false},{"x":550,"y":210,"caught":false},{"x":650,"y":210,"caught":false},{"x":750,"y":210,"caught":false},{"x":850,"y":210,"caught":false},{"x":950,"y":210,"caught":false}],[{"x":50,"y":290,"caught":false},{"x":150,"y":290,"caught":false},{"x":250,"y":290,"caught":false},{"x":350,"y":290,"caught":false},{"x":450,"y":290,"caught":false},{"x":550,"y":290,"caught":false},{"x":650,"y":290,"caught":false},{"x":750,"y":290,"caught":false},{"x":850,"y":290,"caught":false},{"x":950,"y":290,"caught":false}],[{"x":50,"y":370,"caught":false},{"x":150,"y":370,"caught":false},{"x":250,"y":370,"caught":false},{"x":350,"y":370,"caught":false},{"x":450,"y":370,"caught":false},{"x":550,"y":370,"caught":false},{"x":650,"y":370,"caught":false},{"x":750,"y":370,"caught":false},{"x":850,"y":370,"caught":false},{"x":950,"y":370,"caught":false}],[{"x":50,"y":450,"caught":false},{"x":150,"y":450,"caught":false},{"x":250,"y":450,"caught":false},{"x":350,"y":450,"caught":false},{"x":450,"y":450,"caught":false},{"x":550,"y":450,"caught":false},{"x":650,"y":450,"caught":false},{"x":750,"y":450,"caught":false},{"x":850,"y":450,"caught":false},{"x":950,"y":450,"caught":false}],[{"x":50,"y":530,"caught":false},{"x":150,"y":530,"caught":false},{"x":250,"y":530,"caught":false},{"x":350,"y":530,"caught":false},{"x":450,"y":530,"caught":false},{"x":550,"y":530,"caught":false},{"x":650,"y":530,"caught":false},{"x":750,"y":530,"caught":false},{"x":850,"y":530,"caught":false},{"x":950,"y":530,"caught":false}],[{"x":50,"y":610,"caught":false},{"x":150,"y":610,"caught":false},{"x":250,"y":610,"caught":false},{"x":350,"y":610,"caught":false},{"x":450,"y":610,"caught":false},{"x":550,"y":610,"caught":false},{"x":650,"y":610,"caught":false},{"x":750,"y":610,"caught":false},{"x":850,"y":610,"caught":false},{"x":950,"y":610,"caught":false}],[{"x":50,"y":690,"caught":false},{"x":150,"y":690,"caught":false},{"x":250,"y":690,"caught":false},{"x":350,"y":690,"caught":false},{"x":450,"y":690,"caught":false},{"x":550,"y":690,"caught":false},{"x":650,"y":690,"caught":false},{"x":750,"y":690,"caught":false},{"x":850,"y":690,"caught":false},{"x":950,"y":690,"caught":false}],[{"x":50,"y":770,"caught":false},{"x":150,"y":770,"caught":false},{"x":250,"y":770,"caught":false},{"x":350,"y":770,"caught":false},{"x":450,"y":770,"caught":false},{"x":550,"y":770,"caught":false},{"x":650,"y":770,"caught":false},{"x":750,"y":770,"caught":false},{"x":850,"y":770,"caught":false},{"x":950,"y":770,"caught":false}]];

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

    audience[4][5].caught = "true";
    audience[2][3].caught = "true";
    audience[6][1].caught = "true";
    audience[0][8].caught = "true";
    audience[2][9].caught = "true";
    audience[2][5].caught = "true";
    audience[6][5].caught = "true";
    audience[9][2].caught = "true";



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
