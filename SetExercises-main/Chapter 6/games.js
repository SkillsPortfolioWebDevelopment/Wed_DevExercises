
/* declaring some variable to used later on */
/*for styling*/
let cursor = document.querySelector('.cursor');
let holes = document.querySelectorAll('.hole');

/*getting for the score to change */
let scoreEl = document.getElementById('score');
let score = 0;

// here i was getting the timer element and set the initial timer count to 30 //
let timerEl = document.getElementById('timer');
let timerCount = 30;
//// now im declaring a variable to hold the countdown interval
let countdown = null;


/* * * * styling the cursor * * * */
// here what i did is every time the event happen, the cursor element is selected and its position is updated to match the position of the mouse//
document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// here i made an hammer illusion //
// "mousedown" event happens, the "active" class is added to the cursor element, which makes it look like a hammer. //
// When the "mouseup" happens, the "active" class is removed, which reverts the cursor back to its default state. //
document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});
  
document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// now finally to run the game! //
function run() {
    // this is to randomize which hole the mole will pop up
    let i = Math.floor(Math.random() * holes.length);
    let hole = holes[i];

    // getting the image and showing it to the hole with append
    let img = document.createElement('img');
    img.src = 'mole.png';
    hole.appendChild(img);

    let timer = null; // it would pop up anytime

    // when the mole is clicked on!
    img.addEventListener('click', () => {
        img.src = 'mole-whacked.png'; // this image will show //
        score += 10; // the score //
        scoreEl.innerText = score;

          // then here ill be setting an interval to remove mole and start the game again.
        timer = setInterval(() => {
            hole.removeChild(img);
            run();
        }, 400); // this is the speed of the mole disappear (i can make it faster as it decreases)
    });

    timer = setInterval(() => {
        hole.removeChild(img);
        run();
    }, 800); // the speed where the appeal appears
}

// "run" function to start the game
run();


// here is when the game finishes. it resets to the score and time
function reset() {
  score = 0;
  scoreEl.innerText = score;
  timerCount = 30; // set timerCount to the initial value
  timerEl.innerText = timerCount;
  clearInterval(countdown); // clear any existing countdown interval
  countdown = setInterval(() => {
    timerCount--;
    timerEl.innerText = timerCount;

    if (timerCount <= 0) {
      clearInterval(countdown);
      alert('Time is up! Final score: ' + score); // when time goes to 0 //
      reset();
    }
  }, 500);
}

reset();
// to let reset happen //


