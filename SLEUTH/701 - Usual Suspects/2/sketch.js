/*

Officer: 4335840
CaseNum: 701-1-21117579-4335840

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They definately weigh less than 101 Kg. Their expression seemed blank. They were carrying a brown paper bag. I distinctly remember that they were wearing a fur vest, I remember thinking that was quite unusual. It's so hard to remember right now. The person I saw was male. I'm pretty sure they were above the age of 38. It was so scary! Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "LESLEY PEGORD",
		"item": "fur vest",
		"gender": "male",
		"expression": "blank",
		"age": 47,
		"weight": 92
	},
	{ 
		"name": "RANDEE BROADVIEW",
		"item": "orange socks",
		"gender": "male",
		"expression": "empty",
		"age": 21,
		"weight": 62
	},
	{ 
		"name": "HANG ZETLAND",
		"item": "pink scarf",
		"gender": "female",
		"expression": "menacing",
		"age": 45,
		"weight": 70
	},
	{ 
		"name": "KITTY DAVISWOOD",
		"item": "dotted necktie",
		"gender": "male",
		"expression": "angry",
		"age": 42,
		"weight": 100
	},
	{ 
		"name": "TAMICA JOYER",
		"item": "net weave shirt",
		"gender": "female",
		"expression": "sad",
		"age": 36,
		"weight": 71
	}
];

var myFont;
var backgroundImg;

function preload() 
{
    myFont = loadFont('SpecialElite.ttf');
    backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function testProperties(lineupLog)
{
    if(lineupLog.weight < 101 &&
       lineupLog.gender == "male" &&
       lineupLog.expression == "blank" &&
       lineupLog.item == "fur vest" &&
       lineupLog.age > 38)
    {
        return true;
    }
    
    return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(testProperties(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
