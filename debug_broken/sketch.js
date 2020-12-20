
function setup()
{
    createCanvas(400,600);
}


function draw()
{
    background(0);
    
    for(var i = 0; i < 10; i++)
    {
        fill(128,0,128);
        ellipse(50 + 30 * i, 50 + 30 * i, 30);
    }
    
    
    for(var i = 0; i < 10; i++)
    {
        fill(255,155,0);
        ellipse(50 + 30 * i, 120 + 30 * i,30);
    }
    
    
    for(var i = 0; i < 10; i++)
    {
        fill(0,155,0);
        ellipse(50 + 30 * i, 190 + 30 * i,30);
    }
    
    
    for(var i = 0; i < 10; i++)
    {
        fill(205,55,55);
        ellipse(50 + 30 * i, 260 + 30 * i, 30);
    }
    
     
}