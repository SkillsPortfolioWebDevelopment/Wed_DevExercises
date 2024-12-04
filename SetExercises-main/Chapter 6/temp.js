/*the ids i used in my html file is being used her */
/*defining it */
const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusOutput = document.getElementById('celsius');
const kelvinOutput = document.getElementById('kelvin');
const convertButton = document.getElementById('convert');



// Function to convert temperature from Fahrenheit to Celsius and Kelvin

function convertTemp() {
// Convert the input value to a floating-point number
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
//checks if the input is valid  or not by using 'isNaN'
    if (isNaN(fahrenheitTemp)) {
    alert('Please enter a valid temperature in Fahrenheit.');// will show when input is not valid
    return;
    }
 
    //if valid //
    // The formula //
    //converts//
    const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
    const kelvinTemp = celsiusTemp + 273.15;
    
    //after converting i display it //
    //this code displays the converted temperatures in the output fields//
    celsiusOutput.value = celsiusTemp.toFixed(2) + ' °C'; // the value will show and the °C after
    kelvinOutput.value = kelvinTemp.toFixed(2) + ' K'; //the value is also rounded off to 2 decimal places
    }
    
    // Now we use Event listener for the convert button
    // event listener is for the Convert button to call the convertTemperature function when the button is clicked
    convertButton.addEventListener('click', convertTemp);
    
  
    // Here Event listener is used for the enter key in the input //
    fahrenheitInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
    event.preventDefault();// i add this to prevent the default behavior of the Enter key, which is to be submitted
     // if the Enter key is pressed, simulate a click on the Convert button to call the convertTemperature function
    convertButton.click();
    }
    });
    
    // lastly i added an event listener to Focus on the input every time the page loads
    window.addEventListener('load', function() {
    fahrenheitInput.focus();
    });