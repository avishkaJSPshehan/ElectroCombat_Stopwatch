const leftMessage = document.getElementById("left");
const rightMessage = document.getElementById("right");
const countdownElement = document.getElementById("countdown");
const display = document.getElementById("display");
const logoDiv = document.getElementById("logo");
const visibleForms = document.querySelectorAll(".visible");
const team_one = document.getElementById("team-one");
const team_two = document.getElementById("team_two");
const team_name_bttn = document.getElementById("team_name_bttn");
const team_one_h1 = document.getElementById("team_one_name");
const counterContainer = document.querySelector("#container");
const team_two_h1 = document.getElementById("team_two_name");
const vs_canteiner = document.querySelector(".vs_canteiner");
const background = document.querySelector(".background");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
const startingMinutes = 3;
let time = startingMinutes * 60; // Initial countdown time in seconds
let isRunning = false;
let isPaused = false;
let countdownActive = false;

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 1000);
    isRunning = true;
    display.style.display = "block";
    document.getElementById("container").style.backgroundColor = "green";
    document.body.style.backgroundColor = "green";
    openFullscreen();
  } else if (isPaused) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 1000);
    isPaused = false;
    document.getElementById("container").style.backgroundColor = "green";
    document.body.style.backgroundColor = "green";
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  if (isRunning && !isPaused) {
    clearInterval(timer);
    isPaused = true;
    document.getElementById("container").style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "yellow";
  }
}

// Function to stop the stopwatch
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

// Function to reset the stopwatch and countdown
function resetStopwatch() {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  isPaused = false;
  time = startingMinutes * 60; // Reset the countdown time

  // Reset display
  display.textContent = "00:00";
  display.style.display = "none";
  countdownElement.style.display = "none";
  leftMessage.style.display = "none";
  rightMessage.style.display = "none";

  // Reset container background color
  document.getElementById("container").style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";

  // Reset countdown state
  countdownActive = false;
}

// Function to update the stopwatch display
function updateStopwatch() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 4 ? '0' + minutes : minutes;

  display.textContent = `${minutes}:${seconds}`;
  time--;

  // Change background color to orange during the last 10 seconds
  if (time <= 10 && time >= 0) {
    document.getElementById("container").style.backgroundColor = "orange";
    document.body.style.backgroundColor = "orange";
  }

  // Stop the stopwatch after 3 minutes
  if (minutes === "00" && seconds === "00") {
    stopStopwatch();
  }
}

// Function to open fullscreen mode
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

// Function to start the countdown
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

// Event listener for keydown events
document.addEventListener("keydown", (event) => {
  if (document.activeElement.tagName === "INPUT") {
    return; // Skip if input field is focused
  }

  // Key Q: Show "Player One Ready" message
  if (event.code === "KeyQ") {
    event.preventDefault();
    leftMessage.textContent = "Ready";
    leftMessage.style.display = "block";
  }
  // Key P: Show "Player Two Ready" message
  else if (event.code === "KeyP") {
    event.preventDefault();
    rightMessage.textContent = "Ready";
    rightMessage.style.display = "block";
  }
  // Spacebar: Start countdown, pause, or resume stopwatch
  else if (event.code === "Space") {
    background.style.display = "none";
    vs_canteiner.style.display = "none";
    counterContainer.style.display = "flex";
    event.preventDefault();
    if (!countdownActive) {
      countdownActive = true;
      leftMessage.style.display = "none";
      rightMessage.style.display = "none";
      startCountdown();
    } else if (isPaused) {
      startStopwatch(); // Resume stopwatch
    } else if (isRunning) {
      pauseStopwatch(); // Pause stopwatch
    }
  }
  // Key R: Reset the stopwatch
  else if (event.code === "KeyR") {
    event.preventDefault();
    resetStopwatch();
  }
  // Key X: Show logo with pop-up animation
  else if (event.code === "KeyX") {
    event.preventDefault();
    logoPopup();
  }
  // Key C: Show team name input forms
  else if (event.code === "KeyC") {
    event.preventDefault();
    teamFormView();
  }

  // Key V: Show counter container
  else if (event.code === "KeyV") {
    event.preventDefault();
    showCounter();
  }
});

// Function to show logo with a pop-up animation
function logoPopup() {
  logoDiv.style.visibility = "visible";
  logoDiv.style.animation = "popup 4s forwards";
}

// Function to show team name input forms with a pop-up animation
function teamFormView() {
  visibleForms.forEach((form) => {
    form.style.visibility = "visible";
    form.style.animation = "popup 3s forwards";
  });
}

// Event listener for team name input changes
team_one.onchange = (e) => {
  team_one_name = e.target.value;
};

team_two.onchange = (e) => {
  team_two_name = e.target.value;
};

// Event listener for the "Start Combat" button
team_name_bttn.addEventListener("click", () => {
  // Hide the background with fade-out animation
  background.classList.add("fade-out");

  // After the fade-out animation ends, hide the background div and show vs_canteiner with fade-in animation
  background.addEventListener(
    "animationend",
    () => {
      background.style.display = "none"; // Ensure it is removed from the layout
      const vsCanteiner = document.querySelector(".vs_canteiner");
      vsCanteiner.style.display = "flex"; // Show VS container
      vsCanteiner.classList.add("fade-in");
    },
    { once: true }
  ); // Ensure the event listener is triggered only once

  // Set team names from inputs
  team_one_h1.textContent = team_one_name || "Team One";
  team_two_h1.textContent = team_two_name || "Team Two";

  // Optionally reset the input fields
  team_one.value = "";
  team_two.value = "";
});

// Function to show counter container
function showCounter() {
  background.style.display = "none";
  vs_canteiner.style.display = "none";
  counterContainer.style.display = "flex";
}
