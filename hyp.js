var angle = document.querySelectorAll(".input-field");
var check = document.querySelector(".btn");
var showMessage = document.querySelector(".hyp-output");

function clickHandler() {
  var base = Number(angle[0].value);
  var height = Number(angle[1].value);

  if (base > 0 && height > 0) {
    var hyp = Math.sqrt(base * base + height * height);
    hyp = hyp.toFixed(2);
    showMessage.innerHTML = "Hypotenuse = " + hyp;
  } else {
    showMessage.innerHTML = "Please, enter some values in the fields.";
  }
}

check.addEventListener("click", clickHandler);
