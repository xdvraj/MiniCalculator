const inputValue = document.getElementById("user-input");
const add = document.getElementById("addition");
const sub = document.getElementById("subtraction");
const mul = document.getElementById("multiply");
const div = document.getElementById("division");
const clearData = document.getElementById("clearNum");
const currentValue = document.getElementById("current-value");
const resultValue = document.getElementById("result-value");
const defaultValue = 0;

let current = "";
let FinalResult = defaultValue;

function addition() {
  const EnteredNum = parseFloat(inputValue.value);
  current = `${FinalResult} + ${EnteredNum}`;
  FinalResult = FinalResult + EnteredNum;
  outputResult(FinalResult, current);
}

function subtraction() {
  const EnteredNum = parseFloat(inputValue.value);
  current = `${FinalResult} - ${EnteredNum}`;
  FinalResult = FinalResult - EnteredNum;
  outputResult(FinalResult, current);
}

function multiply() {
  const EnteredNum = parseFloat(inputValue.value);
  if (FinalResult === 0) {
    FinalResult = EnteredNum;
  } else {
    current = `${FinalResult} * ${EnteredNum}`;
    FinalResult = FinalResult * EnteredNum;
  }
  outputResult(FinalResult, current);
}

function division() {
  const EnteredNum = parseFloat(inputValue.value);
  if (EnteredNum === 0) {
    alert("Cannot divide by zero");
    return;
  }
  current = `${FinalResult} / ${EnteredNum}`;
  FinalResult = FinalResult / EnteredNum;
  outputResult(FinalResult, current);
}

function clearX() {
  inputValue.value = "";
  current = "";
  FinalResult = 0;
  outputResult(FinalResult, current);
}

add.addEventListener("click", addition);
sub.addEventListener("click", subtraction);
mul.addEventListener("click", multiply);
div.addEventListener("click", division);
clearData.addEventListener("click", clearX);

function outputResult(result, text) {
  currentValue.textContent = text;
  resultValue.textContent = result;
}
