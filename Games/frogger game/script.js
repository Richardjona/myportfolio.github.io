const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseBtn = document.querySelector('#start-pause')
const squares = document.querySelectorAll('.grid div')
let loggLeft = document.querySelector('.log-left')
// const loggRight = document.querySelectorAll('.log-right')
// // const carLeft = document.querySelectorAll('.car-left')
// // const carRight = document.querySelectorAll('.car-right')

const width = 9
let currentIndex = 76;

function moveFrog(e){
    squares[currentIndex].classList.remove('frog')
    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex % width !== 0) currentIndex -= 1
        break
        case 'ArrowRight':
            if(currentIndex % width < width - 1) currentIndex += 1
        break
        case 'ArrowUp':
            if(currentIndex - width >= 0)currentIndex -= width 
        break
        case 'ArrowDown':
            if(currentIndex + width < width * width )currentIndex += width
            break

    }
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)


function autoMoveLog(){
    loggLeft.forEach(logsLeft => moveLogLeft(logsLeft))
}

 
function moveLogLeft(logsLeft){
    switch(true) {
        case loggLeft.classList.contains('l1'):
            loggLeft.classList.remove('l1')
            loggLeft.classList.add('l2')
            break

        case loggLeft.classList.contains('l2'):
            loggLeft.classList.remove('l2')
            loggLeft.classList.add('l3')
            break

        case loggLeft.classList.contains('l3'):
                loggLeft.classList.remove('l3')
                loggLeft.classList.add('l4')
                break

        case loggLeft.classList.contains('l4'):
            loggLeft.classList.remove('l4')
            loggLeft.classList.add('l5')
            break
             
        case loggLeft.classList.contains('l5'):
                loggLeft.classList.remove('l5')
                loggLeft.classList.add('l1')
                break
    }
}

setInterval(autoMoveLog, 100)