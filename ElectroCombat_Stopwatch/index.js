const leftMessage = document.getElementById("left");
const rightMessage = document.getElementById("right");
const countdownElement = document.getElementById("countdown");
const rightidelCountdownElement = document.getElementById("right-idel-countdown");
const leftidelCountdownElement = document.getElementById("left-idel-countdown");
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

// Variables to track idle countdowns
let leftIdleCountdownInterval = null;
let rightIdleCountdownInterval = null;
let leftIdleActive = false;
let rightIdleActive = false;

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
  leftidelCountdownElement.style.display = "none";
  rightidelCountdownElement.style.display = "none";

  // Reset container background color
  document.getElementById("container").style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";

  // Reset countdown state
  countdownActive = false;
  leftIdleActive = false;
  rightIdleActive = false;
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

// Function for left idle countdown
function leftidelCountdown() {
  let count = 30;
  leftIdleActive = true;
  leftIdleCountdownInterval = setInterval(() => {
    leftidelCountdownElement.textContent = count;
    leftidelCountdownElement.style.display = "block";
    leftidelCountdownElement.style.backgroundColor = "orange";
    leftidelCountdownElement.innerHTML = `
      <center>
        <p>
          ${team_one_h1.textContent}: idel
        </p>
        <p>
          ${count}
        </p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(leftIdleCountdownInterval);
      leftidelCountdownElement.style.display = "none";
      leftIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm("Idle time has ended. Confirm to proceed or Cancel to abort.");
      if (userConfirmed) {
        startStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        resetStopwatch();
      }
    }
  }, 1000);
}

// Function for right idle countdown
function rightidelCountdown() {
  let count = 30;
  rightIdleActive = true;
  rightIdleCountdownInterval = setInterval(() => {
    rightidelCountdownElement.textContent = count;
    rightidelCountdownElement.style.display = "block";
    rightidelCountdownElement.style.backgroundColor = "orange";
    rightidelCountdownElement.innerHTML = `
      <center>
        <p>
          ${team_two_h1.textContent}: idel
        </p>
        <p>
          ${count}
        </p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(rightIdleCountdownInterval);
      rightidelCountdownElement.style.display = "none";
      rightIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm("Idle time has ended. Confirm to proceed or Cancel to abort.");
      if (userConfirmed) {
        startStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        resetStopwatch();
      }
    }
  }, 1000);
}

// Function to handle left player idle
function leftplayerIdel() {
  if (leftIdleActive) {
    // Stop the idle countdown if it's active
    clearInterval(leftIdleCountdownInterval);
    leftIdleCountdownElement.style.display = "none";
    leftIdleActive = false;
  } else {
    leftMessage.textContent = "idel";
    leftMessage.style.display = "block";
    leftMessage.style.backgroundColor = "orange";
    leftidelCountdown();
  }
}

// Function to handle right player idle
function rightplayerIdel() {
  if (rightIdleActive) {
    // Stop the idle countdown if it's active
    clearInterval(rightIdleCountdownInterval);
    rightIdleCountdownElement.style.display = "none";
    rightIdleActive = false;
  } else {
    rightMessage.textContent = "idel";
    rightMessage.style.display = "block";
    rightMessage.style.backgroundColor = "orange";
    rightidelCountdown();
  }
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
  // Key A: Handle left player idle
  else if (event.code === "KeyA") {
    leftplayerIdel();
  }
  // Key L: Handle right player idle
  else if (event.code === "KeyL") {
    rightplayerIdel();
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
