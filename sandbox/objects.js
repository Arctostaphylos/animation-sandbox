function Circle(x, y, radius){
    this.x = x,
    this.y = y,
    this.radius = radius,
    this.startTime = (new Date()).getTime() + Math.floor((Math.random() *2000) +1),
    this.linearSpeed = Math.floor((Math.random() * 400) + 200)
  }

Circle.prototype = {
}
