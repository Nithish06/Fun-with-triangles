var base = document.querySelector("#base");
var height = document.querySelector("#height");
var areaBtn = document.querySelector("#area-Btn");
var outputDiv = document.querySelector("#outputDiv");

areaBtn.addEventListener("click", clickHandler);

function clickHandler() {
  if (Number(base.value) <= 0 || Number(height.value) <= 0) {
    outputDiv.innerText = "Please Enter the valid value of base and height. ";
  } else {
    outputDiv.innerText =
      "Area of the triangle is " +
      (Number(base.value) * Number(height.value)) / 2;
  }
}
