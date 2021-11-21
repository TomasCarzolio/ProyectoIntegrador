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

// Fetch de generos de peliculas
const apiKey= `?api_key=ff0d15573865ddc49a8a0b0024148010`

let urlGeneros= `https://api.themoviedb.org/3/genre/movie/list${apiKey}`

let generos = "";

let listaGeneros = document.querySelector(`.generosPeliculas`);

fetch(urlGeneros)
    .then(function(response){
        return response.json();
    })
    .then(function(genres){ 
        console.log(genres);
        
        for (let i = 0; i<genres.genres.length;i++){
            generos += `<a href="detail-genero.html?id=${genres.genres[i].id}"><li><p> ${genres.genres[i].name}</p></li></a>` 
        }
          
           console.log(generos);
           listaGeneros.innerHTML = generos;
          })
    .catch(function(error){
        console.log(error);
    })



    // Fetch de generos de series

let urlGenerosTv= `https://api.themoviedb.org/3/genre/tv/list${apiKey}`

let generosTv = "";

let listaGenerosTv = document.querySelector(`.generosSeries`);

fetch(urlGenerosTv)
    .then(function(response){
        return response.json();
    })
    .then(function(genres){ 
        console.log(genres);
        
        for (let i = 0; i<genres.genres.length;i++){
            generosTv += ` <a href="detail-genero.html?id=${genres.genres[i].id}"><li><p>${genres.genres[i].name}</p></li></a>` 
        }
          
           console.log(generosTv);
           listaGenerosTv.innerHTML = generosTv;
          })
    .catch(function(error){
        console.log(error);
    })
