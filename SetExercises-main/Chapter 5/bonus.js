
/*recycled this part of my javascript on my previous work */


const audioButtons = document.querySelectorAll('.btn');// This part of my script is to selects all the classes with the name btn and assigns them to the audioButtons//

// Creating a new Audio element and store it in audioPlayer variable//
const audioPlayer = new Audio();//to be use later on //

// for the audio to start playing //
//playAudio function is responsible for playing an audio file with the specified link//
function playAudio(audioSrc) { 
    audioPlayer.src = audioSrc; // Setting the audio src of audioPlayer to the provided audio source//
    audioPlayer.play();//to Enable for the sound to Play i used '.play'//
}
 
//Loop & click//
//by 'forEach' loop method i was able to to iterate and customize through all the audioButtons elements//
audioButtons.forEach(button => { 
    button.addEventListener('click', () => { // a click event listener is added for every button. //
    // When click it will be played //
        const audioSrc = button.dataset.audio; // Get the audio source from button tag//
        playAudio(audioSrc);//Then play it plays the audio//
    });
});



//-----------------------------------------------------------------------------------------------------------//

// this is for the text-to-speech button and part
let twitchTTS = new SpeechSynthesisUtterance();


  function talk() { // defines a function named talk that will be called when the user clicks on the "Speak Up" button.//
    twitchTTS.text = document.querySelector("textarea").value; //* data in textarea
    window.speechSynthesis.speak(twitchTTS); // * the ai the will say it
  };
//----------------------------------------------------------------------------------------------------------------//
  

//declaring variables wit 'let'//
  //all helps to move// section
let nxt = document.querySelector(".next"); 
let prev = document.querySelector(".previous"); 
let section = 0; 
let sections = document.querySelectorAll(".section"); 
let nav = document.querySelectorAll(".nav > li");


 // in this script i looped through navigation links and add click event listener
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {

    // then on I remove active class from current section
    sections[section].classList.remove("active");

    // this now will set current section to selected index and add active class
    sections[section = i].classList.add("active");

    // now is the button feature - to show/hide previous and next buttons based on section index
    if (i < 1 ) {  
      document.getElementById("previous").classList.remove("activeBtn"); // hide previous button on first section
      document.getElementById("next").classList.add("activeBtn"); // show next button
    } else if(i == 2) { // if on last section
      document.getElementById("previous").classList.add("activeBtn"); // show previous button
      document.getElementById("next").classList.remove("activeBtn"); // hide next button
    } else { // any other section
      document.getElementById("previous").classList.add("activeBtn"); // show previous button
      document.getElementById("next").classList.add("activeBtn"); // show next button
    }
  });
}

// add click event listeners for previous and next buttons
nxt.addEventListener("click", function() {
  if (section < nav.length - 1) { // check if not on last section
    nav[section + 1].click(); // simulate click on next section link
  }
});

prev.addEventListener("click", function() {
  if (section > 0) { // check if not on first section
    nav[section - 1].click(); // simulate click on previous section link
  }
});


