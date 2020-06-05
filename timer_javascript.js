let seconds =0;
let minutes = 0;
let hours = 0;
// define vars to hold "display" value 

let displaySeconds = 0;
let displayMinutes =0;
let displayHours = 0;

var status = "stopped";

// stopwatch  function logic to determine  when to increament

function stopWatch(){

    seconds++;
    if(seconds/60===1){
        minutes++;
        if(minutes/60===1){
            hours++;
        }
    }

    if(seconds<10){
        displaySeconds = "0"+seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }


    if(minutes<10){
        displayMinutes = "0"+minutes.toString();
    }
    else
    {
        displayMinutes = minutes;
    }

    if(hours<10){
        displayHours = "0"+hours.toString();
    }
    else{
        displayHours = hours;
    }


    document.getElementById("display").innerHTML = displayHours+":"+displayMinutes+":"+displaySeconds;
}

function myStart(){
    if(status=="stopped")
    {
      
        interval = window.setInterval(stopWatch,1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start"
        status = "stopped";
    }
}
function myReset(){
    
    window.clearInterval(interval);
    seconds = 0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}
