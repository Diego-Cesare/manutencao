function updateInput() {
  var select = document.getElementById("options");
  var input = document.getElementById("selectedOption");
  input.value = select.options[select.selectedIndex].text;
}