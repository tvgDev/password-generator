function getChartTypes() {
  const upperCase = document.querySelector("#include_uppercase").checked;
  const lowerCase = document.querySelector("#include_lowercase").checked;
  const Number = document.querySelector("#include_number").checked;
  const specialNumber = document.querySelector(
    "#include_special_character"
  ).checked;
}

document.querySelector("#generate").addEventListener("click", function () {
  getChartTypes();
});
