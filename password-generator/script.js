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
    message("Tamanho inválido, digite um número entre 4 e 128", "warning");
    return null;
  }

  return size;
}

function randomCharType(ChartTypes) {
  const randomIndex = Math.floor(Math.random() * ChartTypes.length);

  return ChartTypes[randomIndex][
    Math.floor(Math.random() * ChartTypes[randomIndex].length)
  ];
}

function generatePassword(size, charTypes) {
  let passwordGenerated = "";
  const selectedChars = charTypes.join("");

  charTypes.forEach((type) => {
    passwordGenerated += type[Math.floor(Math.random() * type.length)];
  });

  while (passwordGenerated.length < size) {
    passwordGenerated +=
      selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }

  passwordGenerated = passwordGenerated
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return passwordGenerated;
}

function message(text, status = "success") {
  Toastify({
    text: text,
    duration: 3000,
    style: {
      background: status === "success" ? "#84cc16" : "#dc2626",
      boxShadow: "none",
    },
  }).showToast();
}

document.querySelector("#generate").addEventListener("click", function () {
  const size = getPasswordSize();
  const ChartTypes = getChartTypes();

  if (!size) {
    return;
  }

  if (!ChartTypes.length) {
    message("Selecione pelo menos um tipo de caractere", "danger");
    return;
  }

  const passwordGenerated = generatePassword(size, ChartTypes);

  document.querySelector("#password_container").classList.add("show");
  document.querySelector("#password").textContent = passwordGenerated;
});

document.querySelector("#copy").addEventListener("click", function () {
  navigator.clipboard.writeText(
    document.querySelector("#password").textContent
  );

  message("Senha copiada com sucesso!", "success");
});
