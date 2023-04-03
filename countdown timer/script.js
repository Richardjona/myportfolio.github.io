const days_c = document.getElementById('days-c')
const hours_c = document.getElementById('hours-c')
const min_c = document.getElementById('min-c')
const seconds_c = document.getElementById('seconds-c')



const newYear = new Date("1 jan 2024")
const currentDate = new Date()
let time = (newYear-currentDate)

function double (days){
   return days < 10 ? `0${days}`:days

}

function countDown(){
    let days = Math.floor(time/ (1000*60*60*24));
    let hours = Math.ceil((time % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.ceil((time%(1000*60*60))/(1000*60));
    let seconds = Math.floor((time %(1000*60))/1000);
    
    days_c.innerHTML = double(days)
    hours_c.innerHTML = double(hours)
    min_c.innerHTML = double(minutes)
    seconds_c.innerHTML = double(seconds)
    
}
    countDown();
    setInterval(countDown, 1000);
