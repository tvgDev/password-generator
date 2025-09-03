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

  return size;
}

function randomCharType(ChartTypes) {
  const randomIndex = Math.floor(Math.random() * ChartTypes.length);

  return ChartTypes[randomIndex][
    Math.floor(Math.random() * ChartTypes[randomIndex].length)
  ];
}

document.querySelector("#generate").addEventListener("click", function () {
  console.log(randomCharType(getChartTypes()));
});
