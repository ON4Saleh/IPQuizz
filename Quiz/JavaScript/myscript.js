const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const clearButton = document.getElementById("clear");
const resultDiv = document.getElementById("result");

addButton.addEventListener("click", () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const result = num1 + num2;
  resultDiv.textContent =result;
  resultDiv.classList.remove("result-hidden");
});

subtractButton.addEventListener("click", () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const result = num1 - num2;
  resultDiv.textContent = result;
  resultDiv.classList.remove("result-hidden");
});

clearButton.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  resultDiv.textContent = "";
  resultDiv.classList.add("result-hidden");
});