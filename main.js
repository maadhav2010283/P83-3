mousevent = "";
color = "red";
radius = 0;
width = 0;

canvas = document.getElementById("myCanvas");
ctx = document.getElementById("myCanvas").getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);



function my_mousedown (e) 
{
  color = document.getElementById("color").value;
  width = document.getElementById("width").value;
  radius = document.getElementById("radius").value;
  mousevent = "mousedown";
 

}


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {

mousevent = "mouseup"



}
  

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {

mousevent = "mouseleave"
  
}
 canvas.addEventListener("mousemove",my_mousemove);


function my_mousemove (e) 
  {

  CurrentX = e.clientX - canvas.offsetLeft;
  CurrentY = e.clientY - canvas.offsetTop;
    


   if(mousevent == "mousedown") {
    console.log("Current position of the x and y coordinates of your mouse = ");
    console.log( CurrentX,CurrentY);
     
     ctx.beginPath()
     ctx.lineWidth = 1
     ctx.strokeStyle = "red"
     ctx.moveTo(LastX,LastY);
     ctx.lineTo(CurrentX,CurrentY);
     ctx.stroke();


  }
  LastX = CurrentX
  LastY = CurrentY
}
