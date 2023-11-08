let startButton = document.querySelector('.start')
let stopButton = document.querySelector('.stop')
let clock = document.querySelector('.circle');
let lap = document.querySelector('p');



let timer;
let hour = 0;
let min = 0;
let seconds = 0;

let store = {
    'lap1': ''
}

const displaytime = () =>{
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        min++
        if (min >= 60) {
            min = 0;
            hour++;
        }
    }
        const displayHours = hour < 10 ?`0${hour}` : hour;
        const displayMinute = min < 10 ? `0${min}` : min;
        const displaySecond = seconds < 10 ? `0${seconds}` : seconds;
        clock.textContent = `${displayHours}:${displayMinute}:${displaySecond}`
}



startButton.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(displaytime, 100);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = undefined;

    store.lap1 = clock.innerHTML;
    lap.innerText = `lap1: ${String(store.lap1)}`;
    console.log(store.lap1);
});

