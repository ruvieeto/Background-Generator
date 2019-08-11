var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

function updateColour(){
	body.style["background-image"] = "linear-gradient(90deg,"+ color1.value + ", " + color2.value + ")";
	css.textContent = "linear-gradient(90deg,"+ color1.value + ", " + color2.value + ")";
	// css.textContent = body.style.backgroundImage + ";";
}

updateColour();

color1.addEventListener("input", updateColour);
color2.addEventListener("input", updateColour);


//Random colour scheme generator
function randomize(){

	//array of objects with colour pairs for gradient. Not completely random,
	//10 presets made in advance
	var randomthemes = [
	{colora: "#ff272f", colorb: "#7e6fff"},
	{colora: "#fff617", colorb: "#77ffc1"},
	{colora: "#6cffea", colorb: "#00ff1a"},
	{colora: "#3121ff", colorb: "#00ffba"},
	{colora: "#ffff00", colorb: "#ff6b00"},
	{colora: "#26fffd", colorb: "#ff6b00"},
	{colora: "#ff39e2", colorb: "#7e6fff"},
	{colora: "#ff0096", colorb: "#ff5d6d"},
	{colora: "#01ff3f", colorb: "#58ffd0"},
	{colora:"#ff000a" , colorb: "#ff8200"},
	];

	//randomly selecting one of the objects
	var randomcolorindex = Math.floor(Math.random()*10);
	body.style["background-image"] = "linear-gradient(90deg," 
	+ randomthemes[randomcolorindex].colora 
	+ ", " 
	+ randomthemes[randomcolorindex].colorb 
	+ ")";

	//updating text to match randomized colour
	css.textContent = "linear-gradient(90deg," 
	+ randomthemes[randomcolorindex].colora 
	+ ", " 
	+ randomthemes[randomcolorindex].colorb 
	+ ")";

	//updating color input to match the randomized colour
	color1.value = randomthemes[randomcolorindex].colora;
	color2.value = randomthemes[randomcolorindex].colorb;

}

button.addEventListener("click", randomize);