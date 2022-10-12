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

// gets the field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);

    checkPasswordMatch(password, password2);

});