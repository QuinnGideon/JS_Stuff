// This variable attaches to the h1 tag
var currentH1 = document.getElementById('heading1');
// This variable attaches to the input box
var inputValue = document.getElementById('boxInput');


// This function allows you to change the h1 after entering your argument
function changeH1(param) {
  currentH1.innerHTML = param;
}

// This function calls the changeH1 function, and uses the inputValue as arguments
function changeContent() {
  changeH1(inputValue.value);
}





// var myRE = /blue/;
// var changeColor = function() {
//   if (myRE.test(input1)) {
//     document.body.style.backgroundColor = "blue";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// }
// setTimeout(changeColor(),1000);
