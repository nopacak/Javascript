/*

Officer: 4335840
CaseNum: 701-3-68250398-4335840

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from jesus goodbury.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspectTraits function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. The person I saw was female. It's so hard to remember right now. They had dark brown hair. It was so scary! They probably weigh between 65 and 78 kg. They were fairly tall, I think between a height of 168 and 205 cm. I'll never forget their black eyes. They seemed to be between the age of 30 and 65 years old. They were wearing a green army coat. I distinctly remember that they were wearing a pair of leather trousers, I remember thinking that was quite unusual. It was so scary! They were carrying a plastic box. Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "LOUISE MONKSFORD",
		"accessory": "red backpack",
		"item": "orange socks",
		"coat": "red parka",
		"gender": "female",
		"weight": 73,
		"height": 180,
		"age": 35
	},
	{ 
		"name": "PIERRE PHINNEY",
		"accessory": "orange plasic bag",
		"item": "dotted necktie",
		"coat": "yellow poncho",
		"gender": "male",
		"weight": 68,
		"height": 175,
		"age": 24
	},
	{ 
		"name": "LESLEY CASIMERE",
		"accessory": "metal briefcase",
		"item": "net weave shirt",
		"coat": "black hoodie",
		"gender": "male",
		"weight": 78,
		"height": 186,
		"age": 34
	},
	{ 
		"name": "JACQUELINE JOYER",
		"accessory": "glass bottle",
		"item": "pink scarf",
		"coat": "blue overcoat",
		"gender": "male",
		"weight": 86,
		"height": 149,
		"age": 46
	},
	{ 
		"name": "BRIDGET MAUBERT",
		"accessory": "laptop bag",
		"item": "fur vest",
		"coat": "green jacket",
		"gender": "female",
		"weight": 69,
		"height": 181,
		"age": 47
	},
	{ 
		"name": "MALINDA TINTLE",
		"accessory": "plastic box",
		"item": "pair of leather trousers",
		"coat": "green army coat",
		"gender": "female",
		"weight": 68,
		"height": 190,
		"age": 40
	},
	{ 
		"name": "JESUS THAXTER",
		"accessory": "brown paper bag",
		"item": "purple hat",
		"coat": "black overcoat",
		"gender": "female",
		"weight": 89,
		"height": 179,
		"age": 29
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

// Declare both your functions here
function checkSuspectTraits(suspectList)
{
    var match = 0;
    if(suspectList.accessory == "plastic box")
    {
        match++;
    }
    if(suspectList.item == "pair of leather trousers")
    {
        match++;
    }
    if(suspectList.coat == "green army coat")
    {
        match++;
    }
    if(suspectList.gender == "female")
    {
        match++;
    }
    if(suspectList.weight > 65 && suspectList.weight < 78)
    {
        match++;
    }
    if(suspectList.height > 168 && suspectList.height < 205)
    {
        match++;
    }
    if(suspectList.age > 30 && suspectList.age < 65)
    {
        match++;
    }
    
    return match;
}

function traverseSuspects()
{
    var suspect = {};
    for(var i = 0; i < suspectList.length; i++)
    {
        if(checkSuspectTraits(suspectList[i]) == 7)
        {
            suspect = suspectList[i];
        }
    }

    return suspect;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
