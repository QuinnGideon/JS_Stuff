function changeTitle() {
  document.getElementById('input1').onkeyup = function() {
    var input1 = document.getElementById('input1').value;


    var newHeading = document.getElementById('heading1');
    var changeContent = function (content) {
      newHeading.innerHTML = `${content}`;
      //console.log(content);
    }
    changeContent(input1);
  };
}

setTimeout(changeTitle,1000);
