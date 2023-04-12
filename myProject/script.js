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
            people = peopleNumber.innerText = Number(numberofPeople +=1)
            addPeople = all/people
            totalPersons.innerText = `#${Math.ceil(addPeople)}`
            })

            minusBtn.addEventListener("click", ()=>{
                if(numberofPeople > 1){
                    reducepeople = peopleNumber.innerText = Number(numberofPeople -=1)
                    reducedprice = all/reducepeople
                    totalPersons.innerText = `#${Math.ceil(reducedprice)}`
                }
               
                            
            })
        
    }


console.log(calcuatesTip())

