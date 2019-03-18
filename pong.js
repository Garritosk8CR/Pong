class Vec {
    constructor(x = 0, y= 0) {
        this.x = x
        this.y = y
    }
}

class Rect {
    constructor(width, height) {
        this.pos = new Vec;
        this.size = new Vec(width, height)
    }
}

class Ball extends Rect {
    constructor() {
        super(10,10)
        this.vel = new Vec;
    }
}

const black = '#000'
const white = '#fff'

const canvas = document.getElementById('pong')
const context = canvas.getContext('2d')
const ball = new Ball;

console.log(ball)

context.fillStyle = black
context.fillRect(0, 0, canvas.clientWidth, canvas.height)
context.fillStyle = white
context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y)