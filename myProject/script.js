const colors = document.querySelectorAll('.color')

const blue   = document.getElementById("blue")
const purple = document.getElementById("purple")
const yellow = document.getElementById("yellow")
const green  = document.getElementById("green")
const pause  = document.getElementById("pause")


const clickTimes= {'green':0, 'purple':0, 'yellow':0, 'blue':0}
const counter = colors.forEach(color => {color.onclick = ()=>{
    clickTimes[color.id] +=1
    color.innerText = clickTimes[color.id]
   }  
})

pause.onclick = () => {
    colors.forEach(color => color.innerText = "")
}

//enter bill total
//enter tip amount
// plus button
//minus button
//people number
//total peron numbr
const billTotal = document.getElementById('total')
const tipAmount = document.getElementById('tipamount')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const peopleNumber = document.getElementById('ppl')
const totalPersons = document.getElementById('tlperson')

//get the bill total,
//get the tip amount
//multiiply the bill total by the tip amount
//divide the amount by the number of people paying for the bill, then
//make the discounted amount appear uner the total per person


let numberofPeople = 0;



function calcuatesTip(){
     total = Number(billTotal.value)
     tip = tipAmount.value/100

     total_persons = total - (total * tip)
        all = totalPersons.innerText = total_persons
//adds the number of people to share the bill equally and make payment
        plusBtn.addEventListener("click", ()=>{
            people = peopleNumber.innerText = Number(numberofPeople += 1)
            addPeople = all/people
            totalPersons.innerText = `#${Math.ceil(addPeople)}`
            })

            minusBtn.addEventListener("click", ()=>{
                if(numberofPeople > 1){
                    reducepeople = peopleNumber.innerText = Number(numberofPeople -= 1)
                    reducedprice = all/reducepeople
                    totalPersons.innerText = `#${Math.ceil(reducedprice)}`
                }
                             
            })
   }
calcuatesTip()


//rock paper and scissors
const rps = document.querySelectorAll(".rps")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const resultdiv = document.getElementById("result")
const scorediv = document.getElementById("scores")
const compchoice = document.getElementById("computerchoice")
const playerch = document.getElementById("playerchoice")

let result = 0;
let score = 0;
let getcomputerchoice;
let getPlayer;


//playerChoice = {rock: "rock", paper:"paper", scissors:"scissors"}
const computer = ["Rock", "Paper", "Scissors"]

   computerChoice =()=>{
    const random = Math.floor(Math.random()*computer.length)
    getcomputerchoice = computer[random]
    compchoice.innerText = `Computer:  ${getcomputerchoice}` 
   }
   
user = ()=>{
   
    rps.forEach(btn => {
     btn.onclick = (e) =>{ 
         getPlayer =  e.target.id
          playerch.innerText = `player: ${getPlayer}`
          computerChoice()
          if(getPlayer =='Rock' && getcomputerchoice  == 'Paper'){
            result = " you win"    
            score += 1
            }else if(getPlayer === getcomputerchoice){
                result = "You draw"
                score += 0
            }else if(getPlayer =='Rock' && getcomputerchoice =='Scissors'){
                    result = "You win"
                    score += 1
            }else if(getPlayer === 'Scissors' && getcomputerchoice === 'paper'){
                result = "you win"    
                score += 1

            }else{
                result = "you Lose"    
                score -= 1
            }
                scorediv.innerText =  `Your score: ${score}`
                resultdiv.innerText = result
            return score, result         
        } })   
}

function clearGame(){
    btn = document.getElementById('btn').onclick=()=>{
        scorediv.innerText = ''
        resultdiv.innerText = ''
        compchoice.innerText = ''
        playerch.innerText = ''
        }
    }
    
user()
clearGame()

/**superhero app*/
const randomHerobtn = document.getElementById('random')
const heroNameSearch = document.getElementById("heroName")
const searchBtn = document.getElementById("btnHero")
let imgHero = document.getElementById('imgHero')
let herostats = document.getElementById("herostats")

const Baseurl ='https://superheroapi.com/api.php/205776685341168' 
let heroId;
let heroName = '/search'
let randomH

function generateHeroesName(randomH){
    randomH = Math.floor(Math.random()*733)
    console.log(randomH)
    fetch(`${Baseurl}/${randomH}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)

        divname =`<h1 id ="hename">${json.name}</h1>` 
        intelligence = json.powerstats.intelligence
        strength =  json.powerstats.strength
        speed = json.powerstats.speed
        durability=  json.powerstats.durability
        imgHero.innerHTML = `${divname}<img src =" ${json.image.url}" height= 200 width= 300 />
        <div><li>Intelligence:${intelligence}</li>
        <li>Strength: ${strength}</li>
        <li>speed:${speed}</li>
        <li>durability: ${durability}</li></div>`
   // herostats.innerHTML = `<div id ="intel">Intelligence:"${json.powerstats.intelligence}"</div>`    
})
   
}
randomHerobtn.addEventListener("click", generateHeroesName)

searchHeroByName = (name) =>{
    name = heroNameSearch.value
    fetch(`${Baseurl}/${heroName}/${name}`)
    .then(response => response.json())
    .then(json => {{
        intelligence = json.results[0].powerstats.intelligence
        strength =  json.results[0].powerstats.strength
        speed = json.results[0].powerstats.speed
        durability= json.results[0].powerstats.durability
        console.log(json)
        divname = `<h1 id="hename">${json.results[0].name}</h1>`
        imgHero.innerHTML = `${divname}<img id ="imageh" src =" ${json.results[0].image.url}" height= 200 width= 300 />
        <div><li>Intelligence:${intelligence}</li>
        <li>Strength: ${strength}</li>
        <li>speed:${speed}</li>
        <li>durability: ${durability}</li></div>`
        
    }
    
}) 
   // herostats.innerHTML = `<div>Intelligence${json.results[0].powerstats.intelligence}</div>`
}
searchBtn.addEventListener("click", searchHeroByName)
