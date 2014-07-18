window.onload=function(){
  var gView = new View
  var gController = new Controller(gView)
  gController.bindAllEvents()
}

function Controller(view) {
  this.view = view
}

Controller.prototype = {
  bindAllEvents: function() {
    // debugger
    var startButton = this.view.getStartButton()
    startButton.addEventListener('click', this.startAnimation.bind(this))
  },
  startAnimation: function() {
    var circleCollection = this.createObjectCollection(this.randomBallNumber(), Circle)
    // var startTime = (new Date()).getTime();
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    this.animate(circleCollection, canvas, context)
  },
  randomXCoord: function() {
    return Math.floor((Math.random() * 320) + 40)
  },
  randomYCoord: function() {
    return Math.floor((Math.random() * -100) -1 )
  },
  randomRadius: function() {
    return Math.floor((Math.random() * 60) + 20)
  },
  randomBallNumber: function() {
    return Math.floor((Math.random() * 10) +1 )
  },
  animate: function(circleCollection, canvas, context){
    for(i=0;i<circleCollection.length;i++){
      var time = (new Date()).getTime() - circleCollection[i].startTime;
      var newY = circleCollection[i].linearSpeed * time / 1000;
      var _this = this;
      // if(newY < canvas.height - circleCollection[i].radius) {
      //     circleCollection[i].y = newY
      // }
      // uncomment this to make circles stop at bottom of screen
      circleCollection[i].y = newY
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i=0;i<circleCollection.length;i++){
      this.view.drawCircle(circleCollection[i], context)
    }
    requestAnimationFrame(function() {

      _this.animate(circleCollection, canvas, context);
    })
  }, //end of function animate
  createObjectCollection: function(quantity, type) {
    var collection = []
    for(i=0;i<quantity;i++){
    collection.push(new type(this.randomXCoord(),this.randomYCoord(),this.randomRadius()))
    }
    return collection
  }
}

