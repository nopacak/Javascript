/*

Officer: 4335840
CaseNum: 701-2-38776371-4335840

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from juliana crome. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It was very dark and I could barely see, They were wearing a white fur coat. They seemed to be between the age of 30 and 52 years old. The person I saw was female. It's so hard to remember right now. I'll never forget their green eyes. I remember they had a jellyfish tattoo. They brobably weigh between 69 and 78 kg. They were fairly tall, I think between a height of 155 and 195 cm. Their expression seemed depressed. Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "JENIFFER PEGORD",
		"eyes": "grey",
		"coat": "black hoodie",
		"expression": "sad",
		"tattoo": "ox",
		"weight": 79,
		"age": 49,
		"height": 177
	},
	{ 
		"name": "JULIANA SYMMES",
		"eyes": "pale",
		"coat": "green jacket",
		"expression": "menacing",
		"tattoo": "sword",
		"weight": 63,
		"age": 33,
		"height": 184
	},
	{ 
		"name": "ERMELINDA ZETLAND",
		"eyes": "blue",
		"coat": "yellow poncho",
		"expression": "menacing",
		"tattoo": "facial",
		"weight": 71,
		"age": 38,
		"height": 183
	},
	{ 
		"name": "LARRAINE MYRLE",
		"eyes": "pale",
		"coat": "black overcoat",
		"expression": "confused",
		"tattoo": "dark black",
		"weight": 73,
		"age": 48,
		"height": 166
	},
	{ 
		"name": "BRIDGET COURTWOOD",
		"eyes": "green",
		"coat": "white fur coat",
		"expression": "depressed",
		"tattoo": "jellyfish",
		"weight": 75,
		"age": 45,
		"height": 156
	},
	{ 
		"name": "KITTY ADVERSANE",
		"eyes": "black",
		"coat": "red parka",
		"expression": "nerveous",
		"tattoo": "big arrow",
		"weight": 72,
		"age": 64,
		"height": 167
	},
	{ 
		"name": "LESLEY NIEMELA",
		"eyes": "black",
		"coat": "blue overcoat",
		"expression": "empty",
		"tattoo": "bull",
		"weight": 68,
		"age": 32,
		"height": 176
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

/*
I remember walking down the street and then I saw them. It was very dark and I could barely see, They were wearing a white fur coat. They seemed to be between the age of 30 and 52 years old. The person I saw was female. It's so hard to remember right now. I'll never forget their green eyes. I remember they had a jellyfish tattoo. They brobably weigh between 69 and 78 kg. They were fairly tall, I think between a height of 155 and 195 cm. Their expression seemed depressed. Can I go home now Sir? 
*/
// Declare your function here

function matchSuspect(lineupLog)
{
    var match = 0;
    
    if(lineupLog.coat == "white fur coat")
    {
        match++;
    }
    if(lineupLog.age < 52 && lineupLog.age > 30)
    {
        match++;
    }
    if(lineupLog.gender == "female")
    {
        match++;
    }
    if(lineupLog.eyes == "green")
    {
        match++;
    } 
    if(lineupLog.tattoo == "jellyfish")
    {
        match++;
    }
    if(lineupLog.weight > 69 && lineupLog.weight < 78)
    {
        match++;
    }
    if(lineupLog.height > 155 && lineupLog.height < 195)
    {
        match++;
    }
    if(lineupLog.expression == "depressed")
    {
        match++;
    }
    
    return match;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    let matchingProperties = matchSuspect(lineupLog[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + lineupLog[i].name, 60, 60 + i * 20);
  }
}
