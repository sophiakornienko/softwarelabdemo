class Particle {
  constructor(x,y){
    this.x = x
    this.y = y
    this.xspeed = random(-1,1)
    this.yspeed = random(-1,0)
    this.life = 255
  }
  
  move() {
    this.x = this.x + this.xspeed
    this.y = this.y + this.yspeed 
    this.yspeed = this.yspeed + 0.05
    this.life = this.life - 2
  }
  
  isDead() {
    if(this.life < 0) {
      return true
    } else {
      return false
    }
  }
  render(){
    noStroke()
    fill(255,165,0,this.life)
    circle(this.x, this.y, 12)
  }
}
