/*
The case of the Python Syndicate
Stage 4

Officer: 4335840
CaseNum: 301-3-13319167-4335840

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecil_karpinski_image;
var anna_karpinski_image;
var bones_karpinski_image;
var countess_hamilton_image;
var robbie_kray_image;
var pawel_karpinski_image;

var robbie_kray_object;
var cecil_karpinski_object;
var anna_karpinski_object;
var bones_karpinski_object;
var countess_hamilton_object;
var pawel_karpinski_object;


//declare your new objects below


//var cecil_karpinski_x_loc = 115;
//var cecil_karpinski_y_loc = 40;
//var anna_karpinski_x_loc = 408;
//var anna_karpinski_y_loc = 40;
//var bones_karpinski_x_loc = 701;
//var bones_karpinski_y_loc = 40;
//var countess_hamilton_x_loc = 115;
//var countess_hamilton_y_loc = 309;
//var pawel_karpinski_x_loc = 701;
//var pawel_karpinski_y_loc = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_object = {
		x: 408,
		y: 309,
		image: robbie_kray_image
	};
    
    cecil_karpinski_object = {
        x: 115,
        y: 40,
        image: cecil_karpinski_image
    };
    
    anna_karpinski_object = {
        x: 408,
        y: 40,
        image: anna_karpinski_image
    };
    
    bones_karpinski_object = {
        x: 701,
        y: 40,
        image: bones_karpinski_image
    };
    
    countess_hamilton_object = {
        x: 115,
        y: 309,
        image: countess_hamilton_image
    };
    
    pawel_karpinski_object = {
        x: 701,
        y: 309,
        image: pawel_karpinski_image
    };



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);


}