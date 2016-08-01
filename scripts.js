var currentH0 = document.getElementById('heading1').innerHTML;

// This variable attaches to the h1 tag
var currentH1 = document.getElementById('heading1');
// This variable attaches to the input box
var inputValue = document.getElementById('boxInput');
var myDoc = document.body.style;
// This variable sets up the REGEX
var myRE = /blue/;


// This function allows you to change the h1 after entering your argument
function changeH1(param) {
  currentH1.innerHTML = param;
}

// This function calls the changeH1 function, and uses the inputValue as arguments
function changeContent() {
  // changeH1(inputValue.value);
  if (inputValue.value.length > 0) {
    changeH1(inputValue.value);
  } else {
    currentH1.innerHTML = currentH0;
  }
}

// This function listens for the input and checks against the regex variable to change color
function changeColor() {
  if (myRE.test(inputValue.value)) {
    myDoc.backgroundColor = "RGBA(0, 160, 217, 1.00)";
  } else {
    myDoc.backgroundColor = "white";
  }
}
