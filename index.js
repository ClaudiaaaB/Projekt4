const formElement = document.querySelector(".form-form");
const currencyWantedElement = document.querySelector(".js-currencyWanted");
const currencyOwnedElement = document.querySelector(".js-currencyOwned");
const moneyOwnedElement = document.querySelector(".js-moneyOwned");
const symbolElement = document.querySelector("js-symbol");

currencyOwnedElement.addEventListener("input", () => {
  if (currencyOwnedElement.value === "eur") {
    currencyWantedElement.value = "pln";
  } else currencyWantedElement.value = "eur";
});

currencyWantedElement.addEventListener("input", () => {
  if (currencyWantedElement.value === "eur") {
    currencyOwnedElement.value = "pln";
  } else currencyOwnedElement.value = "eur";
});

const moneyOwned = moneyOwnedElement.value;
const jsSymbol = jsSymbolElement.value;

const button = document.getElementById("getButton");
const select = document.createElement("select");

button.addEventListener("click", () => {
  fetch("https://api.frankfurter.app/latest")
    .then((response) => response.json())
    .then((data) => {
      getRates(data.rates);
    });
});
const getRates = (rates) => {
  for (const rate in rates) {
    const opt = document.createElement("option");
    opt.value = rate;
    opt.innerText = rate;
    select.appendChild(opt);
  }
};
