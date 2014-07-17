window.onload=function(){



function drawCircle(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2*Math.PI, false);
  context.fillStyle = '#005E7E';
  context.fill();
}
function animate(circleCollection, canvas, context, startTime){


  var time = (new Date()).getTime() - startTime;
  var linearSpeed = 500;
  var newY = linearSpeed * time / 1000;

  for(i=0;i<circleCollection.length;i++){
    if(newY < canvas.height - circleCollection[i].radius) {
        circleCollection[i].y = newY
    }
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  for(i=0;i<circleCollection.length;i++){
    drawCircle(circleCollection[i], context)
  }


  requestAnimationFrame(function() {
    animate(circleCollection, canvas, context, startTime);
  })

}; //end of function animate
var startButton = document.getElementById('start');
startButton.addEventListener('click', startAnimation);
// drawCircle(myCircle, context)
function startAnimation(){
  var startTime = (new Date()).getTime();
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  var circleQuantity = 3

  var circleCollection = []
    for(i=0;i<circleQuantity;i++){
    circleCollection.push(new circle)
  }

  animate(circleCollection, canvas, context, startTime)

}
  function circle(){
    this.x = randomXcoord(),
    this.y = 40,
    this.radius = randomRadius()
  }

function randomXcoord(){
  return Math.floor((Math.random() * 320) + 40)
}

function randomRadius(){
  return Math.floor((Math.random() * 60) + 20)
}
};//end of window onload


