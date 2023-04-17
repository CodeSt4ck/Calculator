let currentOperation = document.querySelector(".current-operation");
let previousOperation = document.querySelector(".previous-operation");
let numberButton = document.querySelectorAll(".button-number");
let operatorButton = document.querySelectorAll(".button-operator");
let buttonEquals = document.querySelector(".button-equals");
let buttonClear = document.querySelector(".button-clear");
let buttonBack = document.querySelector(".button-back");

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperation.value += button.textContent;
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    let operator = button.textContent;
    if (currentOperation.value.length > 0) {
      if (
        currentOperation.value[currentOperation.value.length - 1] === "+" ||
        currentOperation.value[currentOperation.value.length - 1] === "-" ||
        currentOperation.value[currentOperation.value.length - 1] === "*" ||
        currentOperation.value[currentOperation.value.length - 1] === "/" ||
        currentOperation.value[currentOperation.value.length - 1] === "%"
      ) {
        currentOperation.value = currentOperation.value.slice(0, -1) + operator;
      } else {
        currentOperation.value += operator;
      }
    }
  });
});

buttonEquals.addEventListener("click", () => {
  if (
    currentOperation.value[currentOperation.value.length - 1] === "+" ||
    currentOperation.value[currentOperation.value.length - 1] === "-" ||
    currentOperation.value[currentOperation.value.length - 1] === "*" ||
    currentOperation.value[currentOperation.value.length - 1] === "/" ||
    currentOperation.value[currentOperation.value.length - 1] === "%"
  ) {
    currentOperation.value = currentOperation.value.slice(0, -1);
  }
  let result = eval(currentOperation.value);
  previousOperation.textContent = currentOperation.value;
  currentOperation.value = result;
});

buttonClear.addEventListener("click", () => {
  currentOperation.value = "";
  previousOperation.textContent = "";
});

buttonBack.addEventListener("click", () => {
  currentOperation.value = currentOperation.value.slice(0, -1);
});
