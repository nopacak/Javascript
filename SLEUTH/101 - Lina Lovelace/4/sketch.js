/*

Officer: 4335840
CaseNum: 101-3-73583886-4335840

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Medium Slate Blue filled rectangle with a Dark Violet outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Purple filled
rectangle with a Dark Blue outline around him.

Identify the man reading the newspaper by drawing a Midnight Blue filled rectangle
with a Deep Sky Blue outline around him.

Identify the woman with the dog by drawing a Sienna filled rectangle with a
Sandy Brown outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

    fill(123,104,238,alpha=100);
	stroke(148,0,211);
    rect(1588,254,332,685);
    
    
    fill(128,0,128,alpha=100);
	stroke(0,0,139);
    rect(618,557,377,516);
    
   
    fill(25,25,112,alpha=100);
	stroke(0,191,255);
    rect(20,307,424,851);
    
    
    fill(160,82,45,alpha=100);
	stroke(244,164,96);
    rect(1368,247,198,430);
	
}
