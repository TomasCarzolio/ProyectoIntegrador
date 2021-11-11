let apiKey= "?api_key=ff0d15573865ddc49a8a0b0024148010"

//Capturar QS
let queryString = location.search; 
console.log(queryString);

//transformar la QS en objeto literal
let qsToObject = new URLSearchParams(queryString);


//obtener una propiedad del Objeto Literal del paso anterior
let id = qsToObject.get ('id'); //pregunto en el objeto literal el valor del id
console.log (id);

//conseguir datos de un personaje
let urlVistoPeliculas= (`https://api.themoviedb.org/3/movie/${id}${apiKey}`) 
let detallesMasVistoPeliculas = document.querySelector('.detalleVistoPelicula')  
console.log (urlVistoPeliculas)

fetch(urlVistoPeliculas)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        //capturar el DOM
        let titulo = document.querySelector('titulo');
        let imagen = document.querySelector ('img');
        let puntuacion = document.querySelector ('.puntuación');
        let favorito = document.querySelector ('.favorito');
        let descripcion = document.querySelector ('.descripción');
        let generos = document.querySelector ('.generos');
        let estreno = document.querySelector ('.estreno');
        let duracion= document. querySelector ('.duración');

        //ME QUEDE ACAAAAA
        //actualizar y mandar al DOM
        titulo.innerText = data.title;
        imagen.scr= data.poster_path;
       // puntuacion.
        descripcion.innerText = data.overview;

    })
    .catch(function(error){
        console.log(error);

    })
