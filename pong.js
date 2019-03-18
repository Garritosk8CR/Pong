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

    get left() {
        return this.pos.x - this.size.x / 2
    }

    get right() {
        return this.pos.x + this.size.x / 2
    }

    get top() {
        return this.pos.y - this.size.y / 2
    }

    get bottom() {
        return this.pos.y + this.size.y / 2
    }
}

class Pong {

    constructor(canvas) {
        this._canvas = canvas
        this._context = canvas.getContext('2d')
        this.ball = new Ball;
        this.ball.pos.x = 100
        this.ball.pos.y = 50
        this.ball.vel.x = 100
        this.ball.vel.y = 100
        this.black = '#000'
        this.white = '#fff'
        let lastTime;
        const callback = (milliSeconds) => {
            if(lastTime) {
                this.update((milliSeconds - lastTime) / 1000)
            }
            lastTime = milliSeconds
            requestAnimationFrame(callback)
        }
        callback()
    }

    update(deltaTime) {
        this.ball.pos.x += this.ball.vel.x * deltaTime
        this.ball.pos.y += this.ball.vel.y * deltaTime
    
        if(this.ball.left < 0 || this.ball.right > this._canvas.width) {
            //invert
            this.ball.vel.x = -this.ball.vel.x
        }
        if(this.ball.top < 0 || this.ball.bottom > this._canvas.height) {
            //invert
            this.ball.vel.y = -this.ball.vel.y
        }
        this._context.fillStyle = this.black
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height)
        this._context.fillStyle = this.white
        this._context.fillRect(this.ball.pos.x, this.ball.pos.y, this.ball.size.x, this.ball.size.y)
        console.log(this.ball)
    }
}



const canvas = document.getElementById('pong')
const pong = new Pong(canvas)