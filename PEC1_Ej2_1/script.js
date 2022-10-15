const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success box
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'El correo electrónico no es válido')
  }
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} no puede estar vacío`);
        } else {
            showSuccess(input);
        }
    });
}

//Check input length
function checkLength(input, min, max){
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${getFieldName(input)} debe estar entre ${min} y ${max} caracteres.`);
    } else {
        showSuccess(input);
    }
}

//Check passwords are equal
function checkPasswordMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, "Las contraseñas no son inguales");
    }
}

//Check age
function checkAge(input, min, max) {
    //si no es un número muestro error.
    if (isNaN(input.value)) {
        showError(input, "La edad debe ser un número");
    } else if (input.value < min || input.value > max) {
        showError(input, `La edad debe estar entre ${min} y ${max}.`);
    }
}

//Check URL
// 
function checkUrl(input) {
    console.log(input.value);
    if (!Boolean(new URI(input.value).scheme())) {
        showError(input, "El esquema introducido no es válido")
    } else if (!Boolean(new URI(input.value).domain())) {
        showError(input, "El dominio introducido no es válido")
    } else if (!Boolean(new URI(input.value).directory())) {
        showError(input, "El directorio introducido no es válido")
    } else if (!Boolean(new URI(input.value).filename())) {
        showError(input, "El archivo introducido no es válido")
    }
}

// gets the field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2, edad, url]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkAge(edad, 0, 999);
    checkEmail(email);
    checkUrl(url);

    checkPasswordMatch(password, password2);

});