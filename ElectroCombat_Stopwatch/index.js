const leftMessage = document.getElementById("left");
const rightMessage = document.getElementById("right");
const countdownElement = document.getElementById("countdown");
const display = document.getElementById("display");
const logoDiv=document.getElementById("logo_div")


let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let isPaused = false;
let countdownActive = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10);
        isRunning = true;
        display.style.display = "block";
        document.getElementById("container").style.backgroundColor = "green";
        document.body.style.backgroundColor = "green";
        openFullscreen();
    } else if (isPaused) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateStopwatch, 10);
        isPaused = false;
        document.getElementById("container").style.backgroundColor = "green";
        document.body.style.backgroundColor = "green";
    }
}

function pauseStopwatch() {
    if (isRunning && !isPaused) {
        clearInterval(timer);
        isPaused = true;
        document.getElementById("container").style.backgroundColor = "yellow";
        document.body.style.backgroundColor = "yellow";
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        isPaused = false;
        document.getElementById("container").style.backgroundColor = "red";
        document.body.style.backgroundColor = "red";
    }
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    isPaused = false;
    display.textContent = "00:00";
    display.style.display = "none";
    countdownElement.style.display = "none";
    leftMessage.style.display = "none";
    rightMessage.style.display = "none";
    document.getElementById("container").style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
    countdownActive = false;
}

function updateStopwatch() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    display.textContent = `${minutes}:${seconds}`;

    if (minutes === "03") {
        stopStopwatch();
    }
}

function openFullscreen() {
    const screen = document.getElementById("container");
    if (screen.requestFullscreen) {
        screen.requestFullscreen();
    } else if (screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
    } else if (screen.msRequestFullscreen) {
        screen.msRequestFullscreen();
    }
}

function startCountdown() {
    let count = 3;
    countdownElement.textContent = count;
    countdownElement.style.display = "block";

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownElement.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownElement.style.display = "none";
            startStopwatch();
        }
    }, 1000);
}

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyQ") {
        event.preventDefault();
        leftMessage.textContent = "Player One Ready";
        leftMessage.style.display = "block";
    } else if (event.code === "KeyP") {
        event.preventDefault();
        rightMessage.textContent = "Player Two Ready";
        rightMessage.style.display = "block";
    } else if (event.code === "Space") {
        event.preventDefault();
        if (!countdownActive) {
            countdownActive = true;
            leftMessage.style.display = "none";
            rightMessage.style.display = "none";
            startCountdown();
        } else if (isPaused) {
            startStopwatch(); // Resume stopwatch if it's paused
        } else if (isRunning) {
            pauseStopwatch(); // Pause stopwatch if it's running
        }
    } else if (event.code === "KeyR") {
        event.preventDefault();
        resetStopwatch();
    }
    else if (event.code === "KeyX") {
        event.preventDefault();
        logoPopup()
    }
});


function logoPopup(){
logoDiv.style.visibility="visible";
}