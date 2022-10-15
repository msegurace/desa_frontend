const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Busca cambios con Fetch y actualiza el DOM
function calculate() {

    //No permitir números negativos
    if (amountEl_one.value < 0) {
        amountEl_one.value = 0;
    }

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    const errordiv = document.getElementById('error');
    
    displayLoading();

    fetch(`https://v6.exchangerate-api.com/v6/251b1886bfa5bb396e0d5740/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_two];            
            rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2); 
            errordiv.innerText='';
            hideLoading();
        })
        .catch(err => {
            errordiv.innerText = `Error: ${err}`;
        })
        .finally(fin => {
            hideLoading();
        });
}

// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
async function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}


//Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();