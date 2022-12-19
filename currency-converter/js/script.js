console.log("Cześć!");

let amountElement = document.querySelector(".js-amount");
let currencytElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.4278;
let rateGBR = 4.9384;
let rateUSD = 3.9058;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    

    let amount = +amountElement.value;
    let currency = currencytElement.value; 

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBD":
            result = amount / rateGBR;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});

