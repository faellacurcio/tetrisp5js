var pieces = []
var piecesCounter = 0
var numOfPieces = 3
function setup() {
    createCanvas(360,640)
    pieces.push(new Piece(floor(random(1,numOfPieces+1))))
}

function draw() {
    // frameRate(2)
    background(240)
    for(var i = 0; i < pieces.length; i++){
        pieces[i].show()
        pieces[i].update()
        piecesCounter += pieces[i].over()
    }
    if(piecesCounter === pieces.length){
        pieces.push(new Piece(floor(random(1,numOfPieces+1))))
    }
    piecesCounter = 0
}

function keyPressed() {
    for(var i = 0; i < pieces.length; i++){
        if (keyCode === LEFT_ARROW) {
            pieces[i].left()
        } else if (keyCode === RIGHT_ARROW) {
            pieces[i].right()
        }
    }
}
