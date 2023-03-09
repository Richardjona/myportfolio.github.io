const score = document.querySelector('#score')

const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const userStart = [230, 10]
let currentPosition = userStart
const boardwidth = 560
const ballStart = [270, 40]
let ballcurrentPosition = ballStart
let timeId
const boardHeight = 300
const ballDiameter = 20
let xDirection = -2
let yDirection = 2
let scorePoint = 0





//a class that creates blocks
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]

    }
}

//Array of Blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230,270), 
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230,240),
    new Block(340, 240),
    new Block(450, 240), 
    new Block(10, 210),
    new Block(120, 210),
    new Block(230,210),
    new Block(340, 210),
    new Block(450, 210), 
]


//A function that draw all blocks
function addBlocks(){
for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block') 
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
    }
}


const user = document.createElement('div')
    user.classList.add('user')
    grid.appendChild(user)
    drawUser()


function drawUser(){
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

//draw the ball
function drawBall(){
    createBall.style.left = ballcurrentPosition[0] + 'px'
    createBall.style.bottom = ballcurrentPosition[1] + 'px'
}


addBlocks() 


//Move our user
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drawUser()
            }
            break;
   
         case 'ArrowRight':
            if (currentPosition[0] < boardwidth  - blockWidth) {
                currentPosition[0] += 10
                drawUser()
            }
            break;
        }
}
document.addEventListener('keydown', moveUser)

const createBall = document.createElement('div')
createBall.classList.add('ball')
grid.appendChild(createBall)
drawBall()

//a function to move the ball
function moveBall(){
    ballcurrentPosition[0] += xDirection
    ballcurrentPosition[1] += yDirection
    drawBall()
    ballCollision()
}

timeId= setInterval(moveBall, 30)


//checking block collisions
function checkForcollisions(){
    for(let i = 0; i< blocks.length; i++){
        if(
            (ballcurrentPosition[0] > blocks[i].bottomLeft[0] && ballcurrentPosition[0] < blocks[i].bottomRight[0])&&
            ((ballcurrentPosition[1]+ballDiameter) > blocks[i].bottomLeft[1]&& ballcurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i,1)
            changeDirection()
            scorePoint++
            score.innerHTML = scorePoint

            //check for win
            if(blocks.length === 0) {
                score.innerHTML = 'YOU WIN'
                clearInterval(timeId)
                document.removeEventListener('keydown', moveUser)
            }
    }
}
    //userc collisions
    if((ballcurrentPosition[0] > currentPosition[0] && ballcurrentPosition[0] < currentPosition[0] + blockWidth) && 
    (ballcurrentPosition[1] > currentPosition[1] && ballcurrentPosition[1] < currentPosition[1]+ blockHeight)){
        changeDirection()
    }

}




//ballCollision
function ballCollision(){
    //blocks collisions
    checkForcollisions()
    if (ballcurrentPosition[0] >= (boardwidth - ballDiameter)||
        ballcurrentPosition[1] >= (boardHeight - ballDiameter)||
        ballcurrentPosition[0] <=0) {
            changeDirection()
        } 
        //checking gme over
    if (ballcurrentPosition[1] <= 0) {
        clearInterval(timeId)
        score.innerHTML ='You Lose'
        document.removeEventListener('keydown',moveUser)
    }

}


function changeDirection(){
    if (xDirection === 2 && yDirection ===2) {
        yDirection =-2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection  = -2
        return
    }
    if (xDirection === -2 && yDirection=== -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2){
        xDirection = 2
        return
    }

}

