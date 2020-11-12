/*
The case of the Python Syndicate
Stage 3


Officer: 4335840
CaseNum: 301-2-99699603-4335840

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Anna karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var countess_hamilton_image;
var cecil_karpinski_image;
var rocky_kray_image;
var anna_karpinski_image;
var lina_lovelace_image;
var pawel_karpinski_image;

var anna_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_obj = {
		x: 115,
		y: 309,
		image: anna_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);

	image(countess_hamilton_image, anna_karpinski_obj.x, anna_karpinski_obj.y-269);
	image(cecil_karpinski_image, anna_karpinski_obj.x+293, anna_karpinski_obj.y-269);
	image(rocky_kray_image, anna_karpinski_obj.x+586, anna_karpinski_obj.y-269);
	image(lina_lovelace_image, anna_karpinski_obj.x+293, anna_karpinski_obj.y);
	image(pawel_karpinski_image, anna_karpinski_obj.x+586, anna_karpinski_obj.y);

}