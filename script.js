

setInterval(setClock, 1000)

//// har yarim soatda clock ni rasmi o'zgarib turishyi kerak ?
// function changeBg() {

//   let images = [
//     "(./images/bg-1.jpg)",
//     "(./images/bg-2.jpg)",
//     "(./images/bg-3.jpg)",
//     "(./images/bg-4.jpg)",
//     "(./images/bg-5.jpg)",
//     "(./images/bg-6.jpg)"
// ]


// let random = Math.floor(Math.random() * images.length)

//   clock.style.backgroundImage = url images[random]
//   console.log(images[random]);
  
// }

// setInterval(changeBg, 2000 )
    



const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
let clock = document.querySelector('.clock')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60

    
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12


   
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  
}
setClock()