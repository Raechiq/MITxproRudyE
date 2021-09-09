//Set global variable that would contain the position, velocity and the html element "ball"

var velocity = 20;
var positionX = 0; 
var positionY=200;
var ball = document.getElementById("ball");
var reverse = false;
var reverseY= false;
//write a function that can change the position of the html element "ball"

function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax =400;
  var halfway = Xmax/2;

  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  if (positionX === Xmax){ 
    reverse = true;
    reverseY=false;
  } else if(positionX===Xmin){
    reverse = false;
    reverseY=true;
  }; 

  if ((positionX)=== halfway){ 
    reverseY = !reverseY;
  };

if(reverse===false && reverseY === false){
  positionX=positionX+velocity;
  positionY=positionX-200;
} else if(reverse===false && reverseY === true){
  positionX=positionX+velocity;
  positionY=-positionX+200;
} else if (reverse===true && reverseY === false){
  positionX=positionX-velocity;
  positionY=-positionX+600;
} else if(reverse===true && reverseY === true){
  positionX=positionX-velocity;
  positionY=positionX+200;
};


ball.style.left=positionX + 'px';
ball.style.top=positionY + 'px';
ball.style.background= "#" + randomColor;

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
