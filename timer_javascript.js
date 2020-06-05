let seconds =0;
let minutes = 0;
let hours = 0;
let milli =0;
// define vars to hold "display" value 

let displaySeconds = 0;
let displayMinutes =0;
let displayHours = 0;
let displayMilli =0;

var status = "stopped";

// stopwatch  function logic to determine  when to increament

function stopWatch(){

    milli++;
    if(milli/100===1){
    seconds++;
    milli=0;
    if(seconds/60===1){
        minutes++;
        seconds=0;
        if(minutes/60===1){
            hours++;
            minutes=0;
        }
    }
}

    if(milli<10){
        displayMilli="0"+milli.toString();
    }
    else{
        displayMilli = milli;
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


    document.getElementById("display").innerHTML = displayHours+":"+displayMinutes+":"+displaySeconds+":"+displayMilli;
}

function myStart(){
    if(status=="stopped")
    {
      
        interval = window.setInterval(stopWatch,10);
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
    status="stopped";
}
