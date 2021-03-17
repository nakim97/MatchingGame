// Set up  global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1500; //how long to wait before starting playback of the clue sequence

// Set up the global variables
var clueHoldTime = 2000; //how long to hold each clue's light/sound
var pattern = [2, 5, 1, 4, 3, 6, 1, 2, 4, 6, 3, 5];
var progress = 0;
var guessLose = 3; // keep track of number of mistakes
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
document.getElementById("counter").innerHTML = guessLose;
// Function to start game
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomGenerator();
  resetSpeed();
  playClueSequence();
  
}

// function to randomly generate a pattern
function randomGenerator() {
  for (var i = pattern.length - 1; i > 0; i--) {
    var array = Math.floor(Math.random() * (i + 1));
    [pattern[i], pattern[array]] = [pattern[array], pattern[i]];
  }
}

// Function to stop game
function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Function to light or clear button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Function to play a single cue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// Function to reset clue playback speed
function resetSpeed() {
  clueHoldTime = 1500;
}

// Function to play a sequence of clues
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 50; // increase speed by 50 increments
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Function if user loses the game
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

// Function if user wins the game
function winGame() {
  stopGame();
  alert("Game Over. You won! ");
}

// Function to reset strike count
function resetStrike() {
  guessLose = 3;
}

// Function to keep track of guesses
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // if the guess is correct, continue iterating
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    // if user makes 3 mistakes, lose game and reset
    if (pattern[guessCounter] != btn) {
      guessLose--;
      if (guessLose == 0) {
        resetStrike();
        loseGame();
      }
    }
  }
  document.getElementById("counter").innerHTML = guessLose;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500.1,
  6: 650.4
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

