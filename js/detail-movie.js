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

const apiKey= "ff0d15573865ddc49a8a0b0024148010"

let queryString= location.search;
console.log(queryString);

let qsToObject = new URLSearchParams (queryString);
let id = qsToObject.get ("id");

let urlPeliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

let detallesPeliculas = document.querySelector ("detalleVistoPelicula")

fetch(urlPeliculas)

    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        console.log(datos)
    })

    .catch(function(error){
        console.log(error);
    })
