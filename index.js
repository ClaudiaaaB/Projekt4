const formElement = document.querySelector(".form-form");
// const currencyWantedElement = document.querySelector(".js-currencyWanted");
const currencyOwnedElement = document.querySelector(".js-currencyOwned");
const moneyOwnedElement = document.querySelector(".js-moneyOwned");
const symbolElement = document.querySelector("js-symbol");
const exchangedAmountElement = document.querySelector(".js-exchangedAmount");
const toShowResult = document.querySelector(".final-result");

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", () => {
  console.log("tekst");
  fetch("https://api.nbp.pl/api/exchangerates/rates/A/EUR/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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

currencyOwnedElement.addEventListener("input", () => {
  if (currencyOwnedElement.value === "eur") {
    currencyWantedElement.value = "pln";
  } else currencyWantedElement.value = "eur";
});

currencyOwnedElement.addEventListener("input", () => {
  if (currencyOwnedElement.value === "usd") {
    currencyWantedElement.value = "pln";
  } else currencyWantedElement.value = "usd";
});

currencyOwnedElement.addEventListener("input", () => {
  if (currencyOwnedElement.value === "chf") {
    currencyWantedElement.value = "pln";
  } else currencyWantedElement.value = "chf";
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let moneyOwned = moneyOwnedElement.value;

  if (currencyOwnedElement.value === "eur") {
    let exchangedAmount = moneyOwned;
    exchangedAmountElement.innerText = exchangedAmount.toFixed;
    symbolElement.innerText = "EU";
  } else if (currencyOwnedElement.value === "pln") {
    let exchangedAmountElement = moneyOwned;
    exchangedAmountElement.innerText = exchangedAmount.toFixed;
    symbolElement.innerText = "PLN";
  }
});

toShowResult.textContent = result;
