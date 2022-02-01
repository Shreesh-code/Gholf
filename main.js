var canvas = new fabric.Canvas('cnvs');


ball_image_width = 5;
ball_image_height = 5;

ball_x=10;
ball_y=10;

hole_x=800;
hole_y=400;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x,
	});
	canvas.add(hole_obj);
});
new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
			new_image();
			ball_obj.set({
				top:ball_y,
				left:ball_x
			});
			canvas.add(ball_obj);
		
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((ball_x==hole_x) && (ball_y==hole_y)){ 
		canvas.remove(ball_obj);
document.getElementById("cnvs").change.InnerHTML="Game Over";
	}
	
		if(keyPressed == '38')
		{
			up();
			console.log("when Up arrow is pressed ball's x axis ="+ ball_x +"and y axis="+ ball_y );
		}
		if(keyPressed == '40')
		{
			down();
			console.log("when Down arrow is pressed ball's x axis ="+ ball_x +"and y axis="+ ball_y);
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		if (ball_y>=0){

		ball_y=ball_y-ball_image_height;
		canvas.remove(ball_obj);
		new_image();
		}
	}

	function down()
	{
		if (ball_y<=450){
		ball_y=ball_y+ball_image_height;
		canvas.remove(ball_obj);
		new_image();
		}
	}

	function left()
	{
		if(ball_x >=50)
		{
			ball_x=ball_x-ball_image_width;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+ball_image_width;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}
