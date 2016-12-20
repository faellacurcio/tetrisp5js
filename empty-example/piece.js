function Piece(type){
    this.lenx = 20
    this.leny = 20
    this.posx = 0
    this.posy = 0
    this.finished = false
    this.type = type

// creates/prints the piece
    this.show = function() {
        fill(128)
        if(type === 1){
            rect(this.posx,this.posy,this.lenx,this.leny)
        }else if(type === 2){
            rect(this.posx,this.posy,this.lenx,this.leny)
            rect(this.posx+this.lenx,this.posy,this.lenx,this.leny)
            rect(this.posx+this.lenx,this.posy+this.leny,this.lenx,this.leny)
            rect(this.posx+2*this.lenx,this.posy+this.leny,this.lenx,this.leny)
        }else if(type === 3){
            rect(this.posx,this.posy,this.lenx,this.leny)
            rect(this.posx+this.lenx,this.posy,this.lenx,this.leny)
            rect(this.posx+this.lenx,this.posy+this.leny,this.lenx,this.leny)
            rect(this.posx+this.lenx,this.posy+2*this.leny,this.lenx,this.leny)
        }
    }
// Moves the piece down
    this.update = function() {
        if(type === 1){
            if(this.posy<height-this.leny){
                this.posy += this.leny
            }else{
                this.finished = true
            }
        }else if(type === 2){
            if(this.posy<height-this.leny*2){
                this.posy += this.leny
            }else{
                this.finished = true
            }
        }else if(type === 3){
            if(this.posy<height-this.leny*2){
                this.posy += this.leny
            }else{
                this.finished = true
            }
        }
    }
// Moves the piece to the left
    this.left = function() {
        if(this.posx > 0 && !this.finished){
            this.posx -= this.lenx
            console.log("LEFT")
        }
    }
// Moves the piece to the right
    this.right = function() {
        if(this.posx < width-this.lenx && !this.finished){
            this.posx += this.lenx
            console.log("RIGHT")
        }
    }

// Used to acknowledge the fact that a new tetronimes is required
    this.over = function(){
        if(this.finished === true){
            return 1
        }else{
            return 0
        }
    }
}
