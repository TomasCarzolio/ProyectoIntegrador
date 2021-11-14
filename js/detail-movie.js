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

let urlPeliculas = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)

let detallesPeliculas = document.querySelector ("detalleVistoPelicula")

fetch(urlPeliculas)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log (data)
        
        let listaGeneros = "<p> Géneros:</p>"; 
        for (let i=0; i < datos.genres.length; i++){
        listaGeneros += `<p> <a href="./detail-genres.html?id=${datos.genres[i].id}&nombreGenero=${datos.genres[i].name}"> ${datos.genres[i].name} </a></p>`
        }
            detallesPeliculas.innerHTML +=

            `<article class="posicion-pelicula">
            <h2 class="titulo"> ${datos.title}</h2>
            <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}" alt="imagen">
            <p class=puntuación> Puntuación:${datos.vote_average}</p>
            <p class="favorito"> </p>
        </article>

        <article>
            <p class="descripción"> </p>
        </article>
       
        <article>
            <h3 class="generos">Género: <a href=""></a> </h3>
            

        <article class= "info"> 
            <p class="estreno:">Fecha de estreno: ${datos.release_date}</p>
            <p class="duración:">Duración:${datos.runtime}</p>
        </article> `


            ` 
            <div class="navdetalles">
                <h3 class="titulodetallepelicula">${datos.title}</h3>
                <div> <img src="https://image.tmdb.org/t/p/w342/${datos.poster_path}" alt="${datos.title}" class="portada"> </div>
            </div>
            <div class="navdetalles">
                <p>Calificación: ${datos.vote_average}</p>
                <p>Fecha de Estreno: ${datos.release_date}</p> 
                <p>Duración: ${datos.runtime}</p>
                <p> ${datos.overview}</p>
                ${listaGeneros}
            </div>
            `
    })
    .catch(function(error){
        console.log(error);
    })


