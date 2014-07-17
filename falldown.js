window.onload=function(){



function drawCircle(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2*Math.PI, false);
  context.fillStyle = '#005E7E';
  context.fill();
}
function animate(circle1, circle2, canvas, context, startTime){
  var time = (new Date()).getTime() - startTime;
  var linearSpeed = 500;
  var newY = linearSpeed * time / 1000;
  if(newY < canvas.height - circle1.radius) {
    circle1.y = newY
  }
  if(newY < canvas.height - circle2.radius) {
    circle2.y = newY
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(circle1, context)
  drawCircle(circle2, context)


  requestAnimationFrame(function() {
    animate(circle1, circle2, canvas, context, startTime);
  })

}; //end of function animate
var startButton = document.getElementById('start');
startButton.addEventListener('click', startAnimation);
// drawCircle(myCircle, context)
function startAnimation(){
  var startTime = (new Date()).getTime();
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  function circle(){
    this.x = randomXcoord(),
    this.y = 40,
    this.radius = randomRadius()
  }

animate(new circle, new circle, canvas, context, startTime)

}

function randomXcoord(){
  return Math.floor((Math.random() * 320) + 40)
}

function randomRadius(){
  return Math.floor((Math.random() * 60) + 20)
}
};//end of window onload


