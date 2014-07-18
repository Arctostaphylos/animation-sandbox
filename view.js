function View(){
}

View.prototype = {
  drawCircle: function(myCircle, context) {
    context.beginPath();
    context.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2*Math.PI, false);
    context.fillStyle = '#005E7E';
    context.fill();
    },
  getStartButton: function() {
    return document.getElementById('start');
  }

}
