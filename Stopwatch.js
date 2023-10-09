// console.log("script loaded");
// let [seconds,minutes,hours]= [0,0,0];
// let displaytime = document.getElementById('displaytime');
// let timing=null;

// function time (){
//     seconds++;
//     if(seconds==60){
//         seconds=0;
//         minutes++;
//         if(minutes==60){
//             minutes=0;
//             hours++;
//         }
//     }
//   displaytime.innerHTML=hours+":"+ minutes + ":"+ seconds; 
// }



// function startswitch(){
//     if(timing!==null){
//         clearInterval (timing);
//     }
//     timing = setInterval(time,1000);
// }

// function stopswitch(){
//     if(timing!==null){
//         clearInterval(timing);
//     }
    
// }
// function resetswitch(){
//     // if(timing!==null){
//     //     clearInterval(timing);
//     // }
//     // displaytime.innerHTML=00+":"+ 00 + ":"+ 00; 
//     console.log("hello");
// }

console.log("script loaded");
let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById('displaytime');
let timing = null;

function time() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displaytime.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(timeValue) {
    // Ensure that the time value is always displayed with two digits (e.g., 01, 02, 03)
    return timeValue < 10 ? "0" + timeValue : timeValue;
}

function startswitch() {
    if (timing !== null) {
        clearInterval(timing);
    }
    timing = setInterval(time, 1000);
}

function stopswitch() {
    if (timing !== null) {
        clearInterval(timing);
    }
}

function resetswitch() {
    clearInterval(timing);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displaytime.innerHTML = "00:00:00";
}