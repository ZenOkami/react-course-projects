const timerDisplay = document.querySelector('.time-left');
const startStopBtn = document.querySelector('#start-stop-btn');
const taskForm = document.querySelector('#task-form');
const taskTitle = document.querySelector('#task-title');
const taskList = document.querySelector('#task-list');

let timerInterval;
let timeLeft = 25 * 60; // 25 minutes
let isPaused = false;
let tasks = [];
let newTaskTitle = '';

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft === 0) {
    timerDisplay.textContent = 'Enter a Task to Begin!';
  } else {
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

timerInterval = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
      }
    if (timeLeft <= 0) {
        isPaused = true;
        clearInterval(newTask.timer.intervalId);
        pauseTimer();
        updateTimerDisplay();
        alert('🕛Time is up! \nTake a Break!')
      if (tasks.length > 0) {
        const nextTask = tasks.shift();
        nextTask.timer.start();
      }
    }
  }, 1000);

function startTimer() {
  if (timeLeft <= 0) {
    return;
  }
  isPaused = false;
  document.querySelectorAll('.start-btn').classList.add('disabled')
  document.querySelectorAll('.start-btn').forEach(btn => btn.disabled = true);
  document.querySelectorAll('.pause-btn').forEach(btn => btn.disabled = false);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      isPaused = true;
      clearInterval(newTask.timer.intervalId);
      pauseTimer();
      updateTimerDisplay();
      alert('🕛Time is up! \nTake a Break!')
      if (tasks.length > 0) {
        const nextTask = tasks.shift();
        nextTask.timer.start();
      }
    }
  }, 1000);
}

// Create a function to stop the timer and end the timer
function stopTimer() {
  clearInterval(newTask.timer.intervalId);
  timeLeft = 0;
  isPaused = true;
}

function pauseTimer() {
  clearInterval(newTask.timer.intervalId);
  isPaused = true;
  document.querySelectorAll('.start-btn').forEach(btn => btn.disabled = false);
  document.querySelectorAll('.pause-btn').forEach(btn => btn.disabled = true);
  timerDisplay.textContent = 'Enter a Task to Begin!'
  timeLeft = 0;
  clearInterval(timerInterval);
  }

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskTitle.value.trim() === '') {
    return;
  }
  const newTask = {
    title: taskTitle.value,
    timer: {
      timeLeft: 25 * 60,
      isPaused: true,
      intervalId: null,
      updateDisplay: () => {
        timerDisplay.innerHTML = `${newTask.title}: ${Math.floor(newTask.timer.timeLeft / 60)}:${(newTask.timer.timeLeft % 60).toString().padStart(2, '0')} <button class="start-btn">Start</button>
        <button class="pause-btn">Pause</button>`;
        document.querySelectorAll('.pause-btn').forEach(btn => btn.disabled = false);
        newTaskTitle = newTask.title;
        timerDisplay.querySelector('.start-btn').addEventListener('click', () => {
            newTask.timer.start();
            document.querySelectorAll('.start-btn').forEach(btn => btn.disabled = true);
            document.querySelectorAll('.pause-btn').forEach(btn => btn.disabled = false);
            document.querySelectorAll('.start-btn').classList.add('disabled');
            document.querySelectorAll('.pause-btn').classList.remove('disabled');
          });
          timerDisplay.querySelector('.pause-btn').addEventListener('click', () => {
            newTask.timer.pause();
            document.querySelectorAll('.start-btn').forEach(btn => btn.disabled = false);
            document.querySelectorAll('.pause-btn').forEach(btn => btn.disabled = true); 
            document.querySelectorAll('.start-btn').classList.remove('disabled');
            document.querySelectorAll('.pause-btn').classList.add('disabled');       
          });
          if (newTask.timer.isPaused) {
            timerDisplay.querySelector('.start-btn').disabled = false;
            timerDisplay.querySelector('.pause-btn').disabled = true;
            document.querySelectorAll('.start-btn').classList.remove('disabled');
            document.querySelectorAll('.pause-btn').classList.add('disabled');
          } else {
            timerDisplay.querySelector('.start-btn').disabled = true;
            timerDisplay.querySelector('.pause-btn').disabled = false;
          }
      },
      start: () => {
        newTask.timer.isPaused = false;
        newTask.timer.intervalId = setInterval(() => {
          newTask.timer.timeLeft--;
          newTask.timer.updateDisplay();
          if (newTask.timer.timeLeft <= 0) {
            clearInterval(newTask.timer.intervalId);
            newTask.timer.isPaused = true;
            if (tasks.length > 0) {
              const nextTask = tasks.shift();
              nextTask.timer.start();
            } else {
              // Encourage a break after every 3 tasks
              if (document.querySelectorAll('#task-list li').length % 3 === 0) {
                alert('Take a break! 🍅');
              }
            }
          }
        }, 1000);
      },
      pause: () => {
        newTask.timer.isPaused = true;
        clearInterval(newTask.timer.intervalId);
        document.querySelectorAll('.start-btn').classList.remove('disabled');
        document.querySelectorAll('.pause-btn').classList.add('gray-disabled');
      }
    }
  };
  tasks.push(newTask);
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${newTask.title}</span>
    <button class="start-btn">Start</button>
  `;

  li.querySelector('.start-btn').addEventListener('click', () => {
    newTask.timer.start();
    document.querySelectorAll('.start-btn').forEach(btn => btn.disabled = true);
    document.querySelectorAll('.pause-btn').forEach(btn => btn.disabled = false);    
  });
  taskList.appendChild(li);
  taskTitle.value = ''; 
});

li.querySelector('.start-btn').addEventListener('click', () => {
  newTask.timer.start();
  newTask.timer.updateDisplay(); // Update button states
});

li.querySelector('.pause-btn').addEventListener('click', () => {
  newTask.timer.pause();
  newTask.timer.updateDisplay(); // Update button states
});


// Initialize the timer display
updateTimerDisplay();