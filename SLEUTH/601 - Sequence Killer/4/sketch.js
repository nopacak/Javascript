/*
Officer: 4335840
CaseNum: 601-3-43720836-4335840

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing DodgerBlue stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, ForestGreen stroke rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 45 pixels of any of the crimes within no more than 0 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Criminal_Log_CoordinateX = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39];
var Criminal_Log_CoordinateY = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493];
var Criminal_Log_date = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22];


//Recent crime records.

var Crimescene_Data_coord_x = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var Crimescene_Data_coord_y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var Crimescene_Data_recordDate = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var Crimescene_Data_murdered_name = ['DRUSILLA WARMAN', 'BRIDGET BROADVIEW', 'MALINDA GOODBURY', 'LINETTE MOHWAWK', 'JENIFFER DEAUVILLE', 'DEEDEE PHINNEY', 'RANDEE CROME', 'LARRAINE PEGORD', 'TU DAVISWOOD', 'KITTY THAXTER', 'JAUNITA JOYER', 'NICOLE ASHELY', 'JESUS FORSLIN', 'LAKESHA SYMMES', 'LESLEY MONKSFORD'];


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
    for(var i = 0; i < Criminal_Log_CoordinateX.length; i++)
    {
        stroke(30, 144, 255);
        noFill();
        vertex(Criminal_Log_CoordinateX[i],Criminal_Log_CoordinateY[i]);
    }
    endShape();
    
    for(var i = 0; i < Crimescene_Data_coord_x.length; i++)
    {
        stroke(34, 139, 34);
        noFill();
        rect(Crimescene_Data_coord_x[i] - 5, Crimescene_Data_coord_y[i] - 5, 10, 10);
        point(Crimescene_Data_coord_x[i], Crimescene_Data_coord_y[i]);
    }

    for(var i = 0; i < Criminal_Log_date.length; i++)
    {
        if(dist(Criminal_Log_CoordinateX[i], Criminal_Log_CoordinateY[i], Crimescene_Data_coord_x[i], Crimescene_Data_coord_y[i]) < 45 && 
          abs(Criminal_Log_date[i] - Crimescene_Data_recordDate[i]) == 0)
            {
                possibleMatches.push({suspect_x: Criminal_Log_CoordinateX[i],
                                      suspect_y: Criminal_Log_CoordinateY[i],
                                      crime_x: Crimescene_Data_coord_x[i],
                                      crime_y: Crimescene_Data_coord_y[i],
                                      victimName: Crimescene_Data_murdered_name[i]});
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
