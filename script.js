let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateDisplay, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.querySelector('.display');
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
