var select = document.getElementById("options");
var input = document.getElementById("selectedOption");

function updateInput() {
  input.value = select.options[select.selectedIndex].value;
}

function valideType() {
  let isValid = false;

  for (let i = 0; i < select.options.length; i++) {
    if (input.value === select.options[i].value) {
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    alert("Adicione um tipo válido");
    input.value = "";
  }
}