const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencySelect = document.getElementById('currency');

let ticketPrice = +movieSelect.value;
let rate = 1;

populateUI();

//Guarda el índice y precio de la película seleccionada
function setCurrencyData(currencyIndex) {
    localStorage.setItem('selectedCurrencyIndex', currencyIndex);
}

//Guarda el índice y precio de la película seleccionada
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
    ticketPrice = (moviePrice * rate);
}

//Actualiza total y count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    // copiar sitios seleccionados en array
    // Map 
    // devolver array de índices
    const seatsIndex = [...selectedSeats].map(seat => 
         [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = (selectedSeatsCount * ticketPrice).toFixed(2) + ' ' + currencySelect.value;
    
}

// Obtener los datos del almacenamiento local y mostralos por pantalla
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    const selectedCurrencyIndex = localStorage.getItem('selectedCurrencyIndex');
    if (selectedCurrencyIndex !== null) {
        currencySelect.selectedIndex = selectedCurrencyIndex;
    }
}

// Busca cambios con Fetch y actualiza el DOM
function calculate() {
    

    fetch(`https://v6.exchangerate-api.com/v6/251b1886bfa5bb396e0d5740/latest/USD`)
        .then(res => res.json())
        .then(data => {
           
            rate = data.conversion_rates[currencySelect.value];    
 
            Array.from(document.querySelector("#movie").options).forEach(function(option_element) {
                let option_text = option_element.text;
                let option_value = option_element.value;
                let is_option_selected = option_element.selected;

                option_element.innerText = option_text.slice(0, option_text.indexOf('(')) + '(' + (option_value * rate).toFixed(2) + ' ' + currencySelect.value + ')';  
                
                if (is_option_selected) {
                    ticketPrice = (option_value * rate);  
                }

            });

           
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
        .finally(fin => {
            updateSelectedCount();
        });
}



//Selección de monedas
currencySelect.addEventListener('change', e=> {
    setCurrencyData(e.target.selectedIndex);

    calculate();
})


//Selección de películas
movieSelect.addEventListener('change', e=> {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, ticketPrice);

    updateSelectedCount();
})

container.addEventListener('click', e => {
    //e.target obtiene el objeto donde se pulsa
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

//Establecer valores iniciales
updateSelectedCount();