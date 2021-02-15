/*
Officer: 4335840
CaseNum: 601-2-93223721-4335840

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DarkCyan stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, RoyalBlue stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 32 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var caseyFryData = [ 
  { locX : 639, locY : 288},
  { locX : 681, locY : 286},
  { locX : 712, locY : 293},
  { locX : 756, locY : 310},
  { locX : 715, locY : 368},
  { locX : 701, locY : 425},
  { locX : 753, locY : 436},
  { locX : 815, locY : 468},
  { locX : 795, locY : 506},
  { locX : 788, locY : 497},
  { locX : 781, locY : 486},
  { locX : 768, locY : 489},
  { locX : 750, locY : 500},
  { locX : 732, locY : 506},
  { locX : 714, locY : 514},
  { locX : 695, locY : 531},
  { locX : 693, locY : 552},
  { locX : 654, locY : 523},
  { locX : 624, locY : 500},
  { locX : 594, locY : 484},
  { locX : 555, locY : 474} 
];


//Recent crime records.

var murderData = {
	PtX: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	PtY: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	VictimDetails: ['JAUNITA JOYER', 'LARRAINE PEGORD', 'LAVERNE JACQUELIN', 'JESSIA PORTOS', 'PIERRE DORCEY', 'NELSON TINTLE', 'JESUS FORSLIN', 'DEEDEE PHINNEY', 'DRUSILLA WARMAN', 'GAYLA WILLMAR', 'JENIFFER DEAUVILLE', 'ERMELINDA OORIN', 'BRAD SILVEIRA', 'LOUISE ZETLAND'],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    beginShape();
    for(var i = 0; i < caseyFryData.length; i++)
    {
        stroke(0,139,139);
        noFill();
        vertex(caseyFryData[i].locX, caseyFryData[i].locY);
    }
    endShape();
    
    
    for (var i = 0; i < murderData.PtX.length; i++)
    {
        stroke(65, 105, 225);
        noFill();
        rect(murderData.PtX[i] - 5, murderData.PtY[i] - 5, 10, 10);
        point(murderData.PtX[i], murderData.PtY[i]);
        text(murderData.VictimDetails[i], murderData.PtX[i], murderData.PtY[i]);    
    
    }
    
    
    for(var i = 0; i < murderData.PtX.length; i++)
    {
        if(dist(caseyFryData[i].locX, caseyFryData[i].locY, murderData.PtX[i], murderData.PtY[i]) < 32)
        {
            possibleMatches.push({suspect_x: caseyFryData[i].locX,
                                  suspect_y: caseyFryData[i].locY,
                                  crime_x: murderData.PtX[i],
                                  crime_y: murderData.PtY[i],
                                  victimName: murderData.VictimDetails[i]}
                                );
        }
    }
    



	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
        
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
