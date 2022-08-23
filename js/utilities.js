function getInputFieldValueById(inputId) {
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputValue = parseFloat(inputFieldValueString);

    return inputValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue
}

function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}