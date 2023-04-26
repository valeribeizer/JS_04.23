class Calculator {
  constructor(firstNumTextEl, secondNumTextEl) {
    this.firstNumTextEl = firstNumTextEl;
    this.secondNumTextEl = secondNumTextEl;
    this.isFinish = false;
    this.clear();
  }

  clear() {
    this.currNum = "";
    this.prevNum = "";
    this.sign = undefined;
  }

  delete() {
    this.currNum = this.currNum.toString().slice(0, -1);
  }

  appendNumber(number) {
    if ((number === "." && this.currNum.includes(".")) || this.currNum.length >= 15) return;

    if (this.isFinish) {
      this.currNum = "";
      this.isFinish = false;
    }

    this.currNum = this.currNum.toString() + number.toString();
  }

  chooseSign(sign) {
    if (this.currNum === "") return;

    if (this.prevNum !== "") {
      this.calculate();
    }

    this.sign = sign;
    this.prevNum = this.currNum;
    this.currNum = "";
  }

  calculate() {
    let res;
    const prev = parseFloat(this.prevNum);
    const curr = parseFloat(this.currNum);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (this.sign) {
      case "+":
        res = prev + curr;
        break;
      case "-":
        res = prev - curr;
        break;
      case "*":
        res = prev * curr;
        break;
      case "÷":
        if (curr === 0) {
          this.secondNumTextEl.innerText = "Error (press C)";
          this.firstNumTextEl.innerText = "";
        } else {
          res = prev / curr;
        }
        break;
      default:
        return;
    }

    this.currNum = res;
    this.sign = undefined;
    this.prevNum = "";
    this.isFinish = true;
  }

  changePlusMinus() {
    if (this.currNum === "") return;

    if (this.currNum < 0) {
      this.currNum = Math.abs(this.currNum);
    } else {
      this.currNum = -Math.abs(this.currNum);
    }
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.secondNumTextEl.innerText = this.getDisplayNumber(this.currNum);

    if (this.sign != null && this.sign !== "+/-") {
      this.firstNumTextEl.innerText = `${this.getDisplayNumber(this.prevNum)} ${this.sign}`;
    } else if (this.sign === "+/-") {
      this.calculate();
    } else {
      this.firstNumTextEl.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const signButtons = document.querySelectorAll("[data-sign]");
const equalsButton = document.querySelector("[data-equals]");
const switchPlusMinusButton = document.querySelector("[data-switch]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const firstNumTextEl = document.querySelector("[data-first-num]");
const secondNumTextEl = document.querySelector("[data-second-num]");

const calculator = new Calculator(firstNumTextEl, secondNumTextEl);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

signButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseSign(button.innerText);
    calculator.updateDisplay();
  });
});

switchPlusMinusButton.addEventListener("click", () => {
  calculator.changePlusMinus();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
