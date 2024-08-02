const leftMessage = document.getElementById("left");
const rightMessage = document.getElementById("right");
const countdownElement = document.getElementById("countdown");
const rightidelCountdownElement = document.getElementById(
  "right-idel-countdown"
);
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
const countdownMessage = document.getElementById("countdownMessage");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
const startingMinutes = 3;
let time = startingMinutes * 60; // Initial countdown time in seconds
let isRunning = false;
let isPaused = false;
let countdownActive = false;
let isLeftPlayerReady = false;
let isRightPlayerReady = false;

let minutes;
let seconds;

// Variables to track idle countdowns
let leftIdleCountdownInterval = null;
let rightIdleCountdownInterval = null;
let leftIdleActive = false;
let rightIdleActive = false;

// Function to start the stopwatch
function startStopwatch() {
  countdownMessage.textContent = "";
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 1000);
    isRunning = true;
    display.style.display = "block";
    document.getElementById("container").style.backgroundColor = "#4feb34";
    document.body.style.backgroundColor = "green";
    openFullscreen();
  } else if (isPaused) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 1000);
    isPaused = false;
    document.getElementById("container").style.backgroundColor = "#4feb34";
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
    countdownMessage.textContent = "Paused";
    countdownMessage.style.fontFamily = "LCDMono2";
    countdownMessage.style.fontSize = "xx-large";
  }
}

function matchTerminate() {
  const userConfirmed = window.confirm(
    "Are You Sure you Wont to Terminate This Match"
  );
  if (userConfirmed) {
    if (isRunning && !isPaused) {
      clearInterval(timer);
      isPaused = true;
      document.getElementById("container").style.backgroundColor = "red";
      document.body.style.backgroundColor = "red";
      countdownMessage.textContent = "Match Terminated";
      countdownMessage.style.fontFamily = "LCDMono2";
      countdownMessage.style.fontSize = "xx-large";
    }
  } else {
    startStopwatch();
  }
}

function leftPlayerSurrender() {
  const userConfirmed = window.confirm("Are You Sure You Wont To Surrender");
  if (userConfirmed) {
    if (isRunning) {
      clearInterval(timer);
      elapsedTime = Date.now() - startTime;
      isRunning = false;
      isPaused = false;
      document.getElementById("container").style.backgroundColor = "red";
      document.body.style.backgroundColor = "red";
      countdownMessage.textContent = `${team_one_h1.textContent} Surrendered`;
      countdownMessage.style.fontFamily = "LCDMono2";
      countdownMessage.style.fontSize = "xx-large";
    } // Proceed with starting the stopwatch
  } else {
    // Handle cancellation (e.g., reset or stop the stopwatch)
    startStopwatch();
  }
}

function rightPlayerSurrender() {
  const userConfirmed = window.confirm("Are You Sure You Wont To Surrender");
  if (userConfirmed) {
    if (isRunning) {
      clearInterval(timer);
      elapsedTime = Date.now() - startTime;
      isRunning = false;
      isPaused = false;
      document.getElementById("container").style.backgroundColor = "red";
      document.body.style.backgroundColor = "red";
      countdownMessage.textContent = `${team_two_h1.textContent} Surrendered`;
      countdownMessage.style.fontFamily = "LCDMono2";
      countdownMessage.style.fontSize = "xx-large";
    } // Proceed with starting the stopwatch
  } else {
    // Handle cancellation (e.g., reset or stop the stopwatch)
    startStopwatch();
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
    countdownMessage.textContent = "Match Ended";
    countdownMessage.style.fontFamily = "LCDMono2";
    countdownMessage.style.fontSize = "xx-large";
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
  countdownMessage.style.display = "none";

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
  minutes = Math.floor(time / 60);
  seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 4 ? "0" + minutes : minutes;

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

let remainingTime; // To store the remaining time when paused

function leftidelCountdown() {
  let count = 60 - (180 - time);
  remainingTime = count; // Initialize remaining time
  leftIdleActive = true;

  leftIdleCountdownInterval = setInterval(() => {
    if (isPaused) return; // If paused, skip updating

    leftidelCountdownElement.textContent = count;
    leftidelCountdownElement.style.display = "block";
    leftidelCountdownElement.style.backgroundColor = "orange";
    leftidelCountdownElement.innerHTML = `
      <center>
        <p>${team_one_h1.textContent}: Idle</p>
        <p>${count}</p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(leftIdleCountdownInterval);
      leftidelCountdownElement.style.display = "none";
      leftIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm(
        "Idle time has ended. Confirm to proceed or Cancel to abort."
      );
      if (userConfirmed) {
        stopStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        startStopwatch();
      }
    }
  }, 1000);
}

function pauseLeftIdleCountdown() {
  if (!leftIdleActive || isPaused) return; // No action if not active or already paused

  clearInterval(leftIdleCountdownInterval);
  isPaused = true;
  remainingTime = parseInt(leftidelCountdownElement.textContent); // Update remaining time
}

function resumeLeftIdleCountdown() {
  if (!leftIdleActive || !isPaused) return; // No action if not active or already running

  isPaused = false;
  leftidelCountdown();
}

// Function for right idle countdown

let rightRemainingTime; // To store the remaining time when paused
let rightIsPaused = false; // To check if the countdown is paused

function rightidelCountdown() {
  let count = 60 - (180 - time);
  rightIdleActive = true;

  rightIdleCountdownInterval = setInterval(() => {
    if (isPaused) return; // If paused, skip updating

    rightRemainingTime = count; // Update remaining time
    rightidelCountdownElement.textContent = count;
    rightidelCountdownElement.style.display = "block";
    rightidelCountdownElement.style.backgroundColor = "orange";
    rightidelCountdownElement.innerHTML = `
      <center>
        <p>${team_two_h1.textContent}: Idle</p>
        <p>${count}</p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(rightIdleCountdownInterval);
      rightidelCountdownElement.style.display = "none";
      rightIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm(
        "Idle time has ended. Confirm to proceed or Cancel to abort."
      );
      if (userConfirmed) {
        stopStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        startStopwatch();
      }
    }
  }, 1000);
}

function pauseRightIdleCountdown() {
  if (!rightIdleActive || isPaused) return; // No action if not active or already paused

  clearInterval(rightIdleCountdownInterval);
  isPaused = true;
  rightRemainingTime = parseInt(rightidelCountdownElement.textContent); // Update remaining time
}

function resumeRightIdleCountdown() {
  if (!rightIdleActive || !isPaused) return; // No action if not active or already running

  isPaused = false;
  rightidelCountdown(); // Restart the countdown from the last remaining time
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

let leftRemainingTime; // To store the remaining time when paused

function leftPlayerStackCountdown() {
  let count = 60;
  leftIdleActive = true;

  leftIdleCountdownInterval = setInterval(() => {
    if (isPaused) return; // If paused, skip updating

    leftRemainingTime = count; // Update remaining time
    leftidelCountdownElement.textContent = count;
    leftidelCountdownElement.style.display = "block";
    leftidelCountdownElement.style.backgroundColor = "orange";
    leftidelCountdownElement.innerHTML = `
      <center>
        <p>${team_one_h1.textContent}: Stucked</p>
        <p>${count}</p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(leftIdleCountdownInterval);
      leftidelCountdownElement.style.display = "none";
      leftIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm(
        "Stuck time has ended. Confirm to proceed or Cancel to abort."
      );
      if (userConfirmed) {
        stopStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        startStopwatch();
      }
    }
  }, 1000);
}

function pauseLeftPlayerStackCountdown() {
  if (!leftIdleActive || isPaused) return; // No action if not active or already paused

  clearInterval(leftIdleCountdownInterval);
  isPaused = true;
  leftRemainingTime = parseInt(leftidelCountdownElement.textContent); // Update remaining time
}

function resumeLeftPlayerStackCountdown() {
  if (!leftIdleActive || !isPaused) return; // No action if not active or already running

  isPaused = false;
  leftPlayerStackCountdown(); // Restart the countdown from the last remaining time
}

function hideAnyleftCountDown() {
  clearInterval(leftIdleCountdownInterval);
  leftidelCountdownElement.style.display = "none";
  leftIdleActive = false;
}

function hideAnyrightCountDown() {
  clearInterval(rightIdleCountdownInterval);
  rightidelCountdownElement.style.display = "none";
  rightIdleActive = false;
}

function leftplayerStack() {
  if (leftIdleActive) {
    // Stop the idle countdown if it's active
    clearInterval(leftIdleCountdownInterval);
    leftIdleCountdownElement.style.display = "none";
    leftIdleActive = false;
  } else {
    leftMessage.textContent = "idel";
    leftMessage.style.display = "block";
    leftMessage.style.backgroundColor = "orange";
    leftPlayerStackCountdown();
  }
}

function rightPlayerStackCountdown() {
  let count =  60;
  rightIdleActive = true;

  rightIdleCountdownInterval = setInterval(() => {
    if (isPaused) return; // If paused, skip updating

    rightRemainingTime = count; // Update remaining time
    rightidelCountdownElement.textContent = count;
    rightidelCountdownElement.style.display = "block";
    rightidelCountdownElement.style.backgroundColor = "orange";
    rightidelCountdownElement.innerHTML = `
      <center>
        <p>${team_two_h1.textContent}: Stucked</p>
        <p>${count}</p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(rightIdleCountdownInterval);
      rightidelCountdownElement.style.display = "none";
      rightIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm(
        "Stack time has ended. Confirm to proceed or Cancel to abort."
      );
      if (userConfirmed) {
        stopStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        startStopwatch();
      }
    }
  }, 1000);
}

function pauseRightPlayerStackCountdown() {
  if (!rightIdleActive || isPaused) return; // No action if not active or already paused

  clearInterval(rightIdleCountdownInterval);
  isPaused = true;
  rightRemainingTime = parseInt(rightidelCountdownElement.textContent); // Update remaining time
}

function resumeRightPlayerStackCountdown() {
  if (!rightIdleActive || !isPaused) return; // No action if not active or already running

  isPaused = false;
  rightPlayerStackCountdown(); // Restart the countdown from the last remaining time
}

function rightplayerStack() {
  if (leftIdleActive) {
    // Stop the idle countdown if it's active
    clearInterval(leftIdleCountdownInterval);
    leftIdleCountdownElement.style.display = "none";
    leftIdleActive = false;
  } else {
    leftMessage.textContent = "idel";
    leftMessage.style.display = "block";
    leftMessage.style.backgroundColor = "orange";
    rightPlayerStackCountdown();
  }
}

function leftNotMovingCountdown() {
  let count = 15;
  leftIdleActive = true;

  leftIdleCountdownInterval = setInterval(() => {
    if (isPaused) return; // If paused, skip updating

    leftRemainingTime = count; // Update remaining time
    leftidelCountdownElement.textContent = count;
    leftidelCountdownElement.style.display = "block";
    leftidelCountdownElement.style.backgroundColor = "orange";
    leftidelCountdownElement.innerHTML = `
      <center>
        <p>${team_one_h1.textContent}: Not Moving</p>
        <p>${count}</p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(leftIdleCountdownInterval);
      leftidelCountdownElement.style.display = "none";
      leftIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm(
        "Not Moving time has ended. Confirm to proceed or Cancel to abort."
      );
      if (userConfirmed) {
        stopStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        startStopwatch();
      }
    }
  }, 1000);
}

function pauseLeftNotMovingCountdown() {
  if (!leftIdleActive || isPaused) return; // No action if not active or already paused

  clearInterval(leftIdleCountdownInterval);
  isPaused = true;
  leftRemainingTime = parseInt(leftidelCountdownElement.textContent); // Update remaining time
}

function resumeLeftNotMovingCountdown() {
  if (!leftIdleActive || !isPaused) return; // No action if not active or already running

  isPaused = false;
  leftNotMovingCountdown(); // Restart the countdown from the last remaining time
}

function rightNotMovingCountdown() {
  let count = 15;
  rightIdleActive = true;

  rightIdleCountdownInterval = setInterval(() => {
    if (isPaused) return; // If paused, skip updating

    rightRemainingTime = count; // Update remaining time
    rightidelCountdownElement.textContent = count;
    rightidelCountdownElement.style.display = "block";
    rightidelCountdownElement.style.backgroundColor = "orange";
    rightidelCountdownElement.innerHTML = `
      <center>
        <p>${team_two_h1.textContent}: Not Moving</p>
        <p>${count}</p>
      </center>`;

    count--;
    if (count <= -2) {
      clearInterval(rightIdleCountdownInterval);
      rightidelCountdownElement.style.display = "none";
      rightIdleActive = false;

      // Show confirmation dialog
      const userConfirmed = window.confirm(
        "Not Moving time has ended. Confirm to proceed or Cancel to abort."
      );
      if (userConfirmed) {
        stopStopwatch(); // Proceed with starting the stopwatch
      } else {
        // Handle cancellation (e.g., reset or stop the stopwatch)
        startStopwatch();
      }
    }
  }, 1000);
}

function pauseRightNotMovingCountdown() {
  if (!rightIdleActive || isPaused) return; // No action if not active or already paused

  clearInterval(rightIdleCountdownInterval);
  isPaused = true;
  rightRemainingTime = parseInt(rightidelCountdownElement.textContent); // Update remaining time
}

function resumeRightNotMovingCountdown() {
  if (!rightIdleActive || !isPaused) return; // No action if not active or already running

  isPaused = false;
  rightNotMovingCountdown(); // Restart the countdown from the last remaining time
}

// Function to handle left player idle
function leftplayerNotMoving() {
  if (leftIdleActive) {
    // Stop the idle countdown if it's active
    clearInterval(leftIdleCountdownInterval);
    leftIdleCountdownElement.style.display = "none";
    leftIdleActive = false;
  } else {
    leftMessage.textContent = "idel";
    leftMessage.style.display = "block";
    leftMessage.style.backgroundColor = "orange";
    leftNotMovingCountdown();
  }
}

function rightplayerNotMoving() {
  if (rightIdleActive) {
    // Stop the idle countdown if it's active
    clearInterval(rightIdleCountdownInterval);
    rightIdleCountdownElement.style.display = "none";
    rightIdleActive = false;
  } else {
    rightMessage.textContent = "idel";
    rightMessage.style.display = "block";
    rightMessage.style.backgroundColor = "orange";
    rightNotMovingCountdown();
  }
}

// Event listener for keydown events
document.addEventListener("keydown", (event) => {
  if (document.activeElement.tagName === "INPUT") {
    return; // Skip if input field is focused
  }

  console.log(event.code);

  // Key Q: Show "Player One Ready" message
  if (event.code === "KeyQ") {
    isLeftPlayerReady = true;
    event.preventDefault();
    leftMessage.textContent = "Ready";
    leftMessage.style.display = "block";
  }
  // Key P: Show "Player Two Ready" message
  else if (event.code === "KeyP") {
    isRightPlayerReady = true;
    event.preventDefault();
    rightMessage.textContent = "Ready";
    rightMessage.style.display = "block";
  }
  // Spacebar: Start countdown, pause, or resume stopwatch
  else if (event.code === "Space") {
    if (isLeftPlayerReady && isRightPlayerReady) {
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
    } else {
      alert("Players are Not Ready Yet.");
    }
  }
  // Key R: Reset the stopwatch
  else if (event.code === "KeyR") {
    event.preventDefault();
    resetStopwatch();
  }
  // Key X: Show logo with pop-up animation
  else if (event.code === "Digit9") {
    event.preventDefault();
    logoPopup();
  }
  // Key C: Show team name input forms
  else if (event.code === "Digit0") {
    event.preventDefault();
    teamFormView();
  }
  // Key A: Handle left player idle
  else if (event.code === "KeyA") {
    leftplayerIdel();
  }
  // Key L: Handle right player idle
  else if (event.code === "KeyJ") {
    rightplayerIdel();
  } else if (event.code === "KeyD") {
    leftplayerNotMoving();
  } else if (event.code === "KeyL") {
    rightplayerNotMoving();
  } else if (event.code === "KeyS") {
    leftplayerStack();
  } else if (event.code === "KeyK") {
    rightplayerStack();
  } else if (event.code === "KeyZ") {
    hideAnyleftCountDown();
  } else if (event.code === "KeyM") {
    hideAnyrightCountDown();
  } else if (event.code === "KeyC") {
    leftPlayerSurrender(); // player 1 Surrender
  } else if (event.code === "KeyB") {
    rightPlayerSurrender(); // Player 2 Surrender
  } else if (event.code === "KeyT") {
    matchTerminate(); // MatchTerminated
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

  background.addEventListener(
    "animationend",
    () => {
      background.style.display = "none";
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
