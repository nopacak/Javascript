/*

Officer: 4335840
CaseNum: 202-3-80107152-4335840

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Orchid filled text with a Medium Violet Red outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(636,481);
	textSize(29);
}

function draw()
{
	background(255);

	push();
	fill(128,128,0);
	stroke(0,250,154);
	textFont(Melissa);
	//text("secret", 171,252);
	pop();
	fill(255,69,0);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("not", 296,222);
	fill(0,0,255);
	stroke(0,255,127);
	textFont(Melissa);
	//text("are", 458,120);
	fill(255,0,255);
	stroke(0,255,255);
	//text("this", 398,186);
	push();
	fill(127,255,0);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("I'm", 230,222);
	pop();
	textFont(Ballpointprint);
	//text("our", 541,186);
	push();
	fill(128,0,0);
	stroke(0,0,128);
	//text("should", 23,186);
	pop();
	fill(255,0,255);
	textFont(Diggity);
	//text("Is", 518,186);
	fill(148,0,211);
	stroke(160,82,45);
	textFont(Ballpointprint);
	//text("orever", 23,310);
	fill(173,216,230);
	stroke(0,0,128);
	//text("take", 55,252);
	fill(139,0,0);
	stroke(107,142,35);
	textFont(Diggity);
	//text("can", 13,252);
	push();
	fill(144,238,144);
	stroke(0,0,205);
	textFont(Melissa);
	//text("Bob,", 107,29);
	pop();
	fill(0,250,154);
	textFont(Melissa);
	//text("a", 250,186);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("you", 43,87);
	fill(255,140,0);
	stroke(178,34,34);
	textFont(Diggity);
	//text("me", 435,156);
	push();
	fill(255,127,80);
	stroke(0,128,0);
	textFont(RonsFont);
	//text("much", 459,222);
	pop();
	stroke(165,42,42);
	//text("My", 16,29);
	fill(154,205,50);
	textFont(Ballpointprint);
	//text("of", 159,87);
	fill(0,0,255);
	stroke(178,34,34);
	textFont(RonsFont);
	//text("ed", 90,156);
	fill(72,209,204);
	stroke(25,25,112);
	textFont(Diggity);
	//text("we", 584,156);
	fill(0,128,128);
	stroke(165,42,42);
	//text("send", 426,87);
	fill(0,100,0);
	stroke(154,205,50);
	//text("Daisy", 12,368);
	fill(0,255,255);
	stroke(128,0,128);
	textFont(Ballpointprint);
	//text("all", 436,186);
	fill(0,206,209);
	stroke(165,42,42);
	textFont(Melissa);
	//text("silence.", 291,252);
	fill(0,255,127);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("sure", 338,222);
	fill(0,100,0);
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("sort", 349,186);
	fill(106,90,205);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("away", 131,186);
	fill(0,128,0);
	stroke(0,206,209);
	textFont(Diggity);
	//text("s,", 146,310);
	push();
	fill(127,255,212);
	//text("I", 585,222);
	pop();
	stroke(199,21,133);
	//text("so", 491,120);
	fill(255,99,71);
	stroke(46,139,87);
	//text("so,", 317,87);
	push();
	fill(0,0,255);
	stroke(124,252,0);
	textFont(Melissa);
	//text("break", 266,186);
	pop();
	stroke(32,178,170);
	//text("your", 105,310);
	fill(139,0,139);
	stroke(0,191,255);
	textFont(RonsFont);
	//text("short", 89,87);
	fill(0,206,209);
	stroke(0,128,0);
	textFont(Ballpointprint);
	//text("continual", 239,120);
	push();
	fill(0,191,255);
	stroke(255,215,0);
	//text("relationship", 16,222);
	pop();
	fill(0,128,0);
	stroke(178,34,34);
	textFont(Diggity);
	//text("If", 292,87);
	fill(135,206,235);
	stroke(0,255,255);
	textFont(Melissa);
	//text("no", 10,120);
	fill(240,230,140);
	stroke(255,0,255);
	//text("and", 316,186);
	fill(0,255,0);
	stroke(0,100,0);
	textFont(Ballpointprint);
	//text("ign", 87,120);
	fill(139,69,19);
	stroke(0,128,0);
	textFont(Melissa);
	//text("The", 131,252);
	fill(0,0,205);
	stroke(220,20,60);
	textFont(RonsFont);
	//text("You", 407,120);
	fill(25,25,112);
	stroke(178,34,34);
	//text("s", 385,120);
	push();
	fill(176,224,230);
	stroke(124,252,0);
	textFont(Diggity);
	//text("more", 527,222);
	pop();
	fill(186,85,211);
	stroke(199,21,133);
	text("safe", 140,222);
	fill(139,0,139);
	stroke(0,255,255);
	textFont(Melissa);
	//text("?", 115,252);
	fill(0,100,0);
	stroke(139,0,0);
	textFont(Ballpointprint);
	//text("Perhaps", 489,156);
	push();
	fill(186,85,211);
	stroke(199,21,133);
	textFont(RonsFont);
	text("I", 351,87);
	pop();
	fill(218,165,32);
	stroke(0,206,209);
	//text("money", 199,87);
	push();
	fill(148,0,211);
	stroke(0,191,255);
	//text("x", 71,368);
	pop();
	fill(173,216,230);
	stroke(210,105,30);
	//text("these", 165,120);
	fill(255,127,80);
	stroke(124,252,0);
	textFont(Melissa);
	//text("?", 473,156);
	fill(154,205,50);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("?", 198,222);
	fill(240,230,140);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("can", 561,87);
	fill(72,209,204);
	stroke(128,0,0);
	textFont(Melissa);
	//text("longer", 34,120);
	fill(106,90,205);
	stroke(255,140,0);
	//text("dar", 51,29);
	push();
	fill(250,128,114);
	stroke(0,255,127);
	textFont(Ballpointprint);
	//text("avoiding", 337,156);
	pop();
	fill(127,255,0);
	stroke(32,178,170);
	//text("cash.", 479,87);
	fill(139,69,19);
	stroke(0,255,255);
	//text("s,", 225,252);
	fill(238,130,238);
	stroke(148,0,211);
	textFont(Ballpointprint);
	//text("I", 526,87);
	push();
	fill(0,128,0);
	stroke(0,0,128);
	textFont(Melissa);
	//text("Are", 7,87);
	pop();
	fill(186,85,211);
	stroke(199,21,133);
	textFont(RonsFont);
	text("for", 199,186);
	text("you", 287,156);
	text("can", 376,87);
	push();
	fill(199,21,133);
	stroke(218,165,32);
	textFont(Melissa);
	//text("Are", 251,156);
	pop();
	text("delay", 331,120);
	text("go", 98,186);
	fill(107,142,35);
	stroke(124,252,0);
	textFont(Melissa);
	//text("ling", 77,29);
	fill(144,238,144);
	stroke(0,191,255);
	textFont(Ballpointprint);
	//text("out.", 472,186);
	fill(186,85,211);
	stroke(199,21,133);
	textFont(RonsFont);
	text("guard", 14,156);
	push();
	fill(0,255,0);
	stroke(154,205,50);
	textFont(Diggity);
	//text("the", 247,252);
	pop();
	fill(127,255,0);
	textFont(Ballpointprint);
	//text("ore", 117,120);
	fill(0,0,128);
	stroke(50,205,50);
	//text("sometimes.", 129,156);
	fill(240,128,128);
	stroke(0,255,0);
	textFont(RonsFont);
	//text("how", 407,222);
	fill(0,255,127);
	stroke(25,25,112);
	textFont(Melissa);
	//text("?", 276,87);
	fill(128,0,128);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("F", 7,310);



}
