// Validando formularios

let formulario = document.querySelector('form');
let inputField = document.querySelector('.search')
let message = document.querySelector('.message')

//Que el campo no este vacío
formulario.addEventListener(`submit`, function(evento){
    evento.preventDefault();  
    if (inputField.value ==""){
        //Mostrar un mensaje al usuario
        message.innerText = "El campo es obligatorio"

        //Chequear si puso mas de 3 caracteres
    } else if (inputField.value.length <3){
        message.innerText = "Ingresar al menos 3 caracteres"
    } else {
        formulario.submit()
    }
    }   
)

//Cuando el usuario ingrese al campo, limpiar el mensaje de error
inputField.addEventListener('focus', function(evento){
    console.log(evento);
    message.innerText = "";
    this.value = "";
}
)
// Fin de formulario

const apiKey= "?api_key=ff0d15573865ddc49a8a0b0024148010"

//Capturar QS
let queryString = location.search; 
console.log(queryString);

//transformar la QS en objeto literal
let qsToObject = new URLSearchParams(queryString);


//obtener una propiedad del Objeto Literal del paso anterior
let id = qsToObject.get ('id'); //pregunto en el objeto literal el valor del id
console.log (id);

let urlVistoSerie= (`https://api.themoviedb.org/3/tv/${id}${apiKey}`);

fetch(urlVistoSerie)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })