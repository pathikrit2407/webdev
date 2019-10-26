var numsquares=6;
var colors = generaterandomcolors(numsquares);
var colorpicked = pickedcolor();
var colordisplay =document.querySelector("#colordisplay");
colordisplay.textContent=colorpicked;
var messagedisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var square=document.querySelectorAll(".square");
var reset=document.querySelector("#reset");
var easy =document.querySelector("#easy");
var hard =document.querySelector("#hard");

for(var i=0 ;i<square.length ;i++)
{
	square[i].style.backgroundColor = colors[i];
    //to select the clicked color
	square[i].addEventListener("click",function(){
    var clickedcolor=this.style.backgroundColor;
    //compare whelther the picked color and clicked color are same
    if(colorpicked===clickedcolor){
    	messagedisplay.textContent="Right !" ;
    changecolor(clickedcolor);
    h1.style.backgroundColor=clickedcolor;
    reset.textContent="Play Again ? ";
}
    else
    {
    	this.style.backgroundColor="#232323";
        messagedisplay.textContent="Try Again !" ;
	}
});

}
reset.addEventListener("click",function(){
	//generation of new colors
	colors = generaterandomcolors(numsquares);
	//random selection of color 
	colorpicked = pickedcolor();
	//change the rgb color in h1
	colordisplay.textContent=colorpicked;
    //show the colors in square div
    for(var i=0 ;i<square.length ;i++)
    square[i].style.backgroundColor = colors[i];
    reset.textContent="New Colors";
    h1.style.backgroundColor="steelblue";
    message.textContent=" ";
});


easy.addEventListener("click",function(){
	numsquares=3;
   easy.classList.add("selected");
   hard.classList.remove("selected");
   colors=generaterandomcolors(numsquares);
   colorpicked=pickedcolor();
   colordisplay.textContent=colorpicked;
   for(var i=0 ; i<square.length;i++){
   	if(colors[i])
   square[i].style.backgroundColor=colors[i];   
   	else
   	square[i].style.display="none";
   }
   h1.style.background="steelblue";
    message.textContent=" ";
    reset.textContent="New Colors";
});



hard.addEventListener("click",function(){
	numsquares=6
   hard.classList.add("selected");
   easy.classList.remove("selected");
   colors=generaterandomcolors(numsquares);
   colorpicked=pickedcolor();
   colordisplay.textContent=colorpicked;
   for(var i=0 ; i<square.length;i++){
   square[i].style.backgroundColor=colors[i];   
   	square[i].style.display="block";
   }
    h1.style.background="steelblue";
    message.textContent=" ";
    reset.textContent="New Colors";
});


function changecolor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
}


function pickedcolor(){
	var random =Math.floor(Math.random() * colors.length);
	return colors[random];
}

 
function generaterandomcolors(num){
	//make an array
	var arr=[];
	//repeat num times
	for(var i=0 ; i<num ; i++){
	//get random color and push into arr
		arr.push(randomcolor());
    }
    //return that array
    return arr;
}

function randomcolor(){
	//pick red
	var r =Math.floor(Math.random()*256);
	//pick green
	var g =Math.floor(Math.random()*256);
	//pick blue
	var b =Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

