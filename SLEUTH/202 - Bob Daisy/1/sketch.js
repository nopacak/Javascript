/*

Officer: 4335840
CaseNum: 202-0-86409007-4335840

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Dark Goldenrod text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(670,606);
	textFont(letterFont);
	textSize(29);
}

function draw()
{
	background(255);

	fill(199,21,133);
	//text("I", 541,121);
	fill(240,128,128);
	//text("make", 309,188);
	fill(0,255,0);
	//text("luckiest", 10,366);
	fill(255,127,80);
	//text("that", 141,121);
	fill(128,128,0);
	//text("be", 555,330);
	//text("voice", 505,294);
	//text("harp.", 372,330);
	fill(184,134,11);
	text("date", 288,224);
	text("April", 370,87);
	fill(128,0,128);
	//text("sunny", 178,87);
	fill(107,142,35);
	//text("of", 279,330);
	fill(0,206,209);
	//text("s", 342,156);
	fill(0,250,154);
	//text("few", 178,156);
	//text("day", 273,87);
	//text("It", 382,259);
	fill(255,0,255);
	//text("last", 227,224);
	//text("I", 362,224);
	fill(222,184,135);
	//text("the", 316,330);
	fill(244,164,96);
	//text("I", 208,121);
	fill(139,69,19);
	//text("our", 170,224);
	//text("alive", 238,366);
	fill(65,105,225);
	//text("I", 338,294);
	fill(72,209,204);
	//text("think", 511,224);
	fill(124,252,0);
	//text("moment", 11,121);
	//text("in", 335,87);
	fill(144,238,144);
	//text("am", 401,366);
	//text("Ever", 12,224);
	fill(184,134,11);
	text("chosen", 530,366);
	fill(127,255,212);
	//text("the", 133,294);
	fill(173,216,230);
	//text("the", 600,330);
	fill(186,85,211);
	//text("knew", 559,121);
	fill(50,205,50);
	//text("person", 130,366);
	fill(244,164,96);
	//text("the", 526,87);
	//text("lovely", 66,29);
	//text("l", 143,188);
	fill(255,69,0);
	//text("mu", 185,330);
	fill(153,50,204);
	//text("can", 380,224);
	fill(128,0,0);
	//text("You", 9,87);
	fill(0,0,205);
	//text("Daisy,", 161,29);
	//text("face,", 461,121);
	fill(176,224,230);
	//text("sic", 231,330);
	fill(127,255,0);
	//text("that", 316,366);
	fill(219,112,147);
	//text("e", 296,259);
	//text("your", 456,366);
	fill(0,191,255);
	//text("From", 445,87);
	//text("my", 575,156);
	fill(233,150,122);
	//text("alone", 9,294);
	fill(220,20,60);
	//text("saw", 226,121);
	//text("uiet", 207,294);
	//text("when", 443,259);
	fill(25,25,112);
	//text("yes.", 314,259);
	fill(220,20,60);
	//text("confession", 416,188);
	fill(250,128,114);
	//text("Bob", 9,482);
	//text("your", 431,294);
	//text("you", 433,156);
	fill(128,0,128);
	//text("Oh", 16,29);
	fill(184,134,11);
	text("second", 239,156);
	text("is", 411,259);
	text("a", 389,188);
	fill(255,165,0);
	//text("May", 222,188);
	//text("and", 86,424);
	//text("of", 592,224);
	fill(0,139,139);
	//text("?", 579,188);
	fill(139,0,139);
	//text("darling,", 86,259);
	fill(0,128,0);
	//text("blessed", 66,330);
	fill(0,255,127);
	//text("from", 13,156);
	fill(255,0,255);
	//text("those", 89,156);
	//text("green", 204,259);
	fill(0,139,139);
	//text("one", 12,188);
	fill(0,0,128);
	//text("kisses,", 149,424);
	fill(205,133,63);
	//text("only", 441,224);
	//text("q", 189,294);
	fill(178,34,34);
	//text("your", 12,259);
	fill(255,255,0);
	//text("first", 582,87);
	fill(72,209,204);
	//text("in", 98,294);
	fill(135,206,250);
	//text("hear", 356,294);
	fill(148,0,211);
	//text("like", 591,294);
	fill(123,104,238);
	//text("I", 291,188);
	fill(255,0,255);
	//text("that", 366,156);
	fill(139,69,19);
	//text("I", 383,366);
	fill(178,34,34);
	//text("x", 74,482);
	fill(148,0,211);
	//text("Love", 9,424);
	fill(0,255,255);
	//text("I", 530,259);
	//text("were", 495,156);
	fill(123,104,238);
	//text("are", 68,87);
	//text("lovely", 366,121);
	fill(0,128,128);
	//text("that", 271,294);
	fill(255,140,0);
	//text("since", 86,224);
	fill(0,0,139);
	//text("ove.", 151,188);
	fill(138,43,226);
	//text("your", 292,121);
	fill(255,255,0);
	//text("must", 474,330);
	fill(0,100,0);
	//text("am", 548,259);
	fill(205,133,63);
	//text("the", 10,330);
	fill(255,215,0);
	//text("true", 75,188);
	fill(0,139,139);
	//text("I", 456,330);
	fill(0,206,209);
	//text("my", 124,87);



}
