const formElement = document.querySelector(".form-form");
// const currencyWantedElement = document.querySelector(".js-currencyWanted");
const currencyOwnedElement = document.querySelector(".js-currencyOwned");
const moneyOwnedElement = document.querySelector(".js-moneyOwned");
const symbolElement = document.querySelector("js-symbol");
const button = document.getElementById("getButton");
const toShowResult = document.querySelector('.final-result');

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






// currencyWantedElement.addEventListener("input", () => {
//   if (currencyWantedElement.value === "eur") {
//     currencyOwnedElement.value = "pln";
//   } else currencyOwnedElement.value = "eur";
// });
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let moneyOwned = moneyOwnedElement.value;



const button = document.getElementById("getButton");
const select = document.createElement("select");

button.addEventListener("click", () => {
  console.log("tekst");
  fetch("https://api.nbp.pl/api/exchangerates/rates/A/EUR/")
    .then((response) => response.json())
    .then((data) => {
      //
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

toShowResult.textContent = result; 
