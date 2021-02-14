/*

Officer: 4335840
CaseNum: 403-3-80493736-4335840

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Adele Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 113 meters from Jerry's Wine Bar then alert local police by drawing a DarkOrange circle around it with a radius of 113 pixels.
- if Shiffman is in Aaron Swartz Memorial Park then the neighbourhood watch must be notified by drawing a DarkBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple rectangle covering the area between Reynolds Street, Turing Place, Adele Street and Meyers Way.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    
    
    if(dist(mouseX, mouseY,2748,877) <= 113)
    {
        fill(255,140,0);
        ellipse(2748,877,226,226);
    }
    
    else if(mouseX > 2028 && mouseX < 2375 && mouseY > 550 && mouseY < 730)
    {
        fill(0,0,139);
        rect(2028,550,350,180);
    }

    else
    {
        fill(147,112,219);
        rect(835,515,1165,550);
    }
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
