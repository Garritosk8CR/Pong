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
ball.pos.x = 100
ball.pos.y = 50
ball.vel.x = 100
ball.vel.y = 100

let lastTime;
function callback(milliSeconds) {
    if(lastTime) {
        update((milliSeconds - lastTime) / 1000)
    }
    lastTime = milliSeconds
    requestAnimationFrame(callback)
}

function update(deltaTime) {
    ball.pos.x += ball.vel.x * deltaTime
    ball.pos.y += ball.vel.y * deltaTime
    context.fillStyle = black
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = white
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y)
    console.log(ball)
}


callback()