var canvas, ctx, height, width, frames = 0
const velocity = 1
    var vx = 0
    var vy = 0
    var px = 10
    var py = 15
    var tp = 20
    var qp = 20
    var ax = 15
    var ay = 15

    var trail = [];
    tail = 5

floor = {
    y: 550,
    height: 1000,
    color: '#ffdf70',

    drawn: function(){
        ctx.fillStyle = this.color
        ctx.fillRect(0, this.y, width, this.height)
    }
},

block = {
    x: 10,
    y: 0,
    height: 50,
    width: 50,
    color: "#ff4e4e",
    gravity: 0.5,
    velocity: 0,
    jumpForce: 10,
    nJump: 0,

    update: function(){
        this.velocity += this.gravity
        this.y += this.velocity

        if(this.y > floor.y - this.height){
            this.y = floor.y - this.height
            this.nJump = 0
        }
    },

    jump: function(){
        this.velocity = -this.jumpForce
        this.nJump++
        
    },

    drawn: function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}


function click(event){
    block.jump()
    // move
function move(){
    px += vx
        py += vy
        if(px < 0){
            px = qp - 1

        }
        if(px > qp - 1){
            px = 0

        }
        if(py < 0){
            py = qp - 1
        }
        if(py > qp -1){
            py = 0
        }
}

for (var i = 0; i < trail.length; i++){
    ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp, tp)

    if(trail[i].x == px && trail[i].y == py){
        vx = vy = 0
    }
}


trail({x:px, y:py })
    while (trail.length > tail){
        trail.shift()
    }

    if(ax==px && ay==py){
        tail++
        ax = Math.floor(Math.random()*qp)
        ay = Math.floor(Math.random()*qp)
    }
}

function main(){
    height = innerHeight
    width = innerWidth

    canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    canvas.style.border = "2px solid #222"

    ctx = canvas.getContext("2d")
    document.body.appendChild(canvas)
    document.addEventListener("mousedown", click)

    run()

}

function run(){
    update()
    drawn()

    window.requestAnimationFrame(run)
}

function update(){
    frames++

    block.update()
}

function drawn(){
    ctx.fillStyle = "#50beff"
    ctx.fillRect(0, 0, width, height)

    floor.drawn()
    block.drawn()
}




//start game

main()