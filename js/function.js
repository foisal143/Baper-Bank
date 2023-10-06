function getValueInput(input) {
  const inputField = document.getElementById(input);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  inputField.value = '';
  return inputValue;
}

function getValueInnerText(inner) {
  const innerField = document.getElementById(inner);
  const innerString = innerField.innerText;
  const innerValue = parseFloat(innerString);
  return innerValue;
}

function calculation(inputId, value) {
  const setText = document.getElementById(inputId);
  setText.innerText = value;
}

function inputValueSt(id) {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
}
