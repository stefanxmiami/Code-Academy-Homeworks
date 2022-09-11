var timeElapsed = 0;
var timerID = -1;
function tick() {
    timeElapsed++
    console.log(timeElapsed);
}

function start() {
    if(timerID == -1){
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if(timerID != -1){
        clearInterval(timerID)
        timerID = -1
    }
}

function reset() {
    stop();
    timeElapsed = -1;
    tick()
}
function newDoc() {
    window.location.assign("https://www.youtube.com/watch?v=_7rT-ixivWU&ab_channel=KeepOnCoding");
    console.log(window.location.href);
    console.log(window.location.protocol);
    console.log(window.location.hostname);
    console.log(window.location.pathname);
    console.log(window.location.search);
    console.log(window.location.hash);
}

