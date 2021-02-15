/*
Officer: 4335840
CaseNum: 601-0-83079834-4335840

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Green stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

//Sightings of Casey Fry.

var CaseyFry_Sightings = [ 
  { Location_X : 127, Location_Y : 175},
  { Location_X : 156, Location_Y : 158},
  { Location_X : 179, Location_Y : 192},
  { Location_X : 200, Location_Y : 154},
  { Location_X : 220, Location_Y : 133},
  { Location_X : 228, Location_Y : 168},
  { Location_X : 249, Location_Y : 149},
  { Location_X : 269, Location_Y : 139},
  { Location_X : 292, Location_Y : 168},
  { Location_X : 321, Location_Y : 133},
  { Location_X : 354, Location_Y : 159},
  { Location_X : 390, Location_Y : 144},
  { Location_X : 396, Location_Y : 225},
  { Location_X : 429, Location_Y : 228},
  { Location_X : 456, Location_Y : 230},
  { Location_X : 467, Location_Y : 277},
  { Location_X : 483, Location_Y : 267},
  { Location_X : 531, Location_Y : 291},
  { Location_X : 547, Location_Y : 278},
  { Location_X : 571, Location_Y : 274},
  { Location_X : 589, Location_Y : 318},
  { Location_X : 637, Location_Y : 280} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    for(var i = 0; i < CaseyFry_Sightings.length; i++)
    {
        stroke(0, 128, 0);
        noFill();
        rect(CaseyFry_Sightings[i].Location_X - 5, CaseyFry_Sightings[i].Location_Y - 5, 10, 10);
        point(CaseyFry_Sightings[i].Location_X, CaseyFry_Sightings[i].Location_Y);
    }


}

//We are not using the draw function this time
