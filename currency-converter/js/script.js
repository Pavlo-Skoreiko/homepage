{
    console.log("Cześć!");


    const calculateResult = (amount, currency) => {

        const rateEUR = 4.4278;
        const rateGBR = 4.9384;
        const rateUSD = 3.9058;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBD":
                return amount / rateGBR;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencytElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencytElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}