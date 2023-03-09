const currencyOwnedElement = document.querySelector(".js-currencyOwned");
const moneyOwnedElement = document.querySelector(".js-moneyOwned");
const exchangedAmountElement = document.querySelector(".js-exchangedAmount");

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", () => {
  if (moneyOwnedElement.value < 0 || moneyOwnedElement.value === "") {
    alert("wartośc powinna być większa od 0");
    return;
  }

  fetch(
    "https://api.nbp.pl/api/exchangerates/rates/A/" +
      currencyOwnedElement.value +
      "/"
  )
    .then((response) => response.json())
    .then((data) => {
      calculateRates(data);
    });
});

const calculateRates = (data) => {
  exchangedAmountElement.innerText = (
    data.rates[0].mid * moneyOwnedElement.value
  ).toFixed(2);
};
