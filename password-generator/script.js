function getChartTypes() {
  const upperCase = document.querySelector("#include_uppercase").checked;
  const lowerCase = document.querySelector("#include_lowercase").checked;
  const Number = document.querySelector("#include_number").checked;
  const specialNumber = document.querySelector(
    "#include_special_character"
  ).checked;
  const ChartTypes = [];
  if (upperCase) {
    ChartTypes.push("ABCDEFGHIJKLMNPQRSTUVWXYZ");
  }
  if (lowerCase) {
    ChartTypes.push("abcdefghijklmnpqrstuvwxyz");
  }
  if (Number) {
    ChartTypes.push("1234567890");
  }
  if (specialNumber) {
    ChartTypes.push("!@#$%^&*()_-+={}[]|\\/?><:;\"'.,~`");
  }

  return ChartTypes;
}

function getPasswordSize() {
  const size = document.querySelector("#size").value;

  if (isNaN(size) || size < 4 || size > 128) {
    alert("Tamanho inválido, Digite um número entre 4 e 128!");
  }

  return size;
}

function randomCharType(ChartTypes) {
  const randomIndex = Math.floor(Math.random() * ChartTypes.length);

  return ChartTypes[randomIndex][
    Math.floor(Math.random() * ChartTypes[randomIndex].length)
  ];
}

function generatePassword(size, ChartTypes) {
  let passwordGenerated = "";

  while (passwordGenerated.length < size) {
    passwordGenerated += randomCharType(ChartTypes);
  }

  return passwordGenerated;
}

document.querySelector("#generate").addEventListener("click", function () {
  const size = getPasswordSize();
  const ChartTypes = getChartTypes();

  const passwordGenerated = generatePassword(size, ChartTypes);

  document.querySelector("#password_container").classList.add("show");
  document.querySelector("#password").textContent = passwordGenerated;
});
