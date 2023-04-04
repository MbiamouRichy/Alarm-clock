const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEl.addEventListener('click', (e) =>{
    const html= document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        toggleEl.innerHTML = `<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" version="1.1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <title>moon</title> <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path> </g></svg>`
    }else{
        html.classList.add('dark')
        toggleEl.innerHTML = `<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z" stroke="#000000"></path> <path d="M12 3.5V5.5" stroke="#000000" stroke-linecap="round"></path> <path d="M20.5 12H18.5" stroke="#000000" stroke-linecap="round"></path> <path d="M5.5 12H3.5" stroke="#000000" stroke-linecap="round"></path> <path d="M12 18.5V20.5" stroke="#000000" stroke-linecap="round"></path> <path d="M16.5 7.5L18 6" stroke="#000000" stroke-linecap="round"></path> <path d="M6 18L7.5 16.5" stroke="#000000" stroke-linecap="round"></path> <path d="M6 6L7.5 7.5" stroke="#000000" stroke-linecap="round"></path> <path d="M16.5 16.5L18 18" stroke="#000000" stroke-linecap="round"></path> </g></svg>`
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()

    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

