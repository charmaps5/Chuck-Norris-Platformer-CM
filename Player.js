//game canvas was undefined because i missed this whoops
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var self = this;
var Player = function() 
{
	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.width = 159;
	this.height = 163;
	this.velocityX = 0;
	this.velocityY = 0;
	this.angularVelocity = 0;
	this.rotation = 0;
	this.image.src = "hero.png";
};


var player = new Player();
var keyboard = new Keyboard();

Player.prototype.update = function(deltaTime)
{
	if( typeof(this.rotation))
	{
		console.log('IS THIS NOT WORKING TOO?')
		this.rotation = 0;
	}
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		console.log('WHAT IS THIS?')
		this.rotation -= deltaTime;
	}
	else
	{
		this.rotation += deltaTime;
	}
}


Player.prototype.draw = function()
{
	context.save();

	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}