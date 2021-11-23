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

//Recuperar búsqueda de la URL
let queryString = location.search; 

//transformar la QS en objeto literal
let qsToObject = new URLSearchParams(queryString);

//obtener una propiedad del Objeto Literal del paso anterior
let search = qsToObject.get ('search') //pregunto en el objeto literal el valor de la busqueda
console.log (search);

 
//Poner la búsqueda en el HTML para que sea visible
let tituloBusqueda = document.querySelector(`.results`);
tituloBusqueda.innerHTML = "<h1>Estás buscando: " + search;

// Buscando en las peliculas
const apiKey= `?api_key=ff0d15573865ddc49a8a0b0024148010&language=en-US`

let urlSearch = `https://api.themoviedb.org/3/search/multi${apiKey}&query=${search}&`

let resultadosPelis = document.querySelector(`.resultadosPelis`)
let resultadosTv= document.querySelector(`.resultadosTv`)

let resultsP = "";
let resultsTv = "";

console.log(urlSearch);

fetch(urlSearch)

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data);
for (let i=0; i<data.results.length; i++){
    if (data.results[i].media_type == "movie"){
        resultsP += ` <div><a href="./detail-movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="imagen"></a>
        <h3>${data.results[i].title}</h3>
        <p> ${data.results[i].release_date} </p>
    </div>`
    } else if (data.results[i].media_type == "tv"){
        resultsTv += `<div><a href="./detail-serie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="imagen"></a>
        <h3>${data.results[i].name}</h3>
        <p> ${data.results[i].first_air_date} </p>
    </div>` 


    }
} 

resultadosPelis.innerHTML = "<h2>Peliculas que coinciden con tu búsqueda: </h2>" + resultsP;
resultadosTv.innerHTML = "<h2>Series que coinciden con tu búsqueda: </h2>" + resultsTv;
})

.catch (function(error){
console.log(error);
})

