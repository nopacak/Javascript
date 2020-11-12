/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 4335840
CaseNum: 201-3-51624977-4335840

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    
    vertex(385,260);
    vertex(385,374);
    vertex(472,382);
    vertex(476,399);
    vertex(653,398);
    vertex(658,439);
    vertex(745,473);
    vertex(748,435);
    vertex(697,420);
    vertex(787,323);
    vertex(781,245);
    vertex(740,222);
    vertex(729,74);
    vertex(680,73);
    vertex(674,260);
    vertex(385,260);
    
    endShape();
}
