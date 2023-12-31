const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");

const calculate = {
  "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
  "=": (firstNumber, secondNumber) => secondNumber,
};

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

eventlisteners();

function eventlisteners() {
  clearBtn.addEventListener("click", resetAll);
  inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
      inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains("operator")) {
      inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains("decimal")) {
      inputBtn.addEventListener("click", () => addDecimal());
    }
  });
}

function sendNumberValue(number) {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);

  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }

  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  }
  awaitingNextValue = true;
  operatorValue = operator;
}

function addDecimal() {
  if (awaitingNextValue) {
    return;
  }
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;

  calculatorDisplay.textContent = "0";
}

function name(params) {}
