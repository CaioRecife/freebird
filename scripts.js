var canvas, ctx, height, width, frames = 0, jumpMax = 3,

floor = {
    y: 550,
    height: 50,
    color: '#ffdf70',

    drawn: function(){
        ctx.fillStyle = this.color
        ctx.fillRect(0, this.y, width, this.height)
    }
},

block = {
    x: 50,
    y: 0,
    height: 50,
    width: 50,
    color: "#ff4e4e",
    gravity: 1.5,
    velocity: 0,
    jumpForce: 15,
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
        if(this.nJump < jumpMax){
        this.velocity = -this.jumpForce
        this.nJump++
        }
    },

    drawn: function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}


function click(event){
    block.jump()
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