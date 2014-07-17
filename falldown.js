window.onload=function(){



function drawCircle(myCircle, context) {
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2*Math.PI, false);
  context.fillStyle = '#005E7E';
  context.fill();
}
function animate(myCircle, canvas, context, startTime){
  var time = (new Date()).getTime() - startTime;
  var linearSpeed = 500;
  var newY = linearSpeed * time / 1000;
  if(newY < canvas.height - myCircle.radius) {
    myCircle.y = newY
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(myCircle, context)

  requestAnimationFrame(function() {
    animate(myCircle, canvas, context, startTime);
  })

}; //end of function animate
var startButton = document.getElementById('start');
startButton.addEventListener('click', startAnimation);
// drawCircle(myCircle, context)
function startAnimation(){
  var startTime = (new Date()).getTime();
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var myCircle = {
    x: 200,
    y: 40,
    radius: 40
  }
animate(myCircle, canvas, context, startTime)

}
};//end of window onload


