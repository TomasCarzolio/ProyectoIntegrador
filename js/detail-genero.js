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

const apiKey= `?api_key=ff0d15573865ddc49a8a0b0024148010`

let queryString = location.search; 

let qsToObject = new URLSearchParams(queryString);

let id = qsToObject.get ('id') 
console.log (id);

// Buscar el titulo del genero

const search_results = new URLSearchParams(location.search);

    const codigo = search_results.get('id');

    const key = "55cbbe7af7e1023dd9dfbcc869907517";

    let urlTituloGenero = `https://api.themoviedb.org/3/genre/${codigo}?api_key=${key}&language=es`;

    console.log(urlTituloGenero);

    fetch(urlTituloGenero)
    .then(function(response){
        return response.json();
    })
    .then(function(data){ 
        
       let tituloDelGenero = document.querySelector(`.tituloGenero`);
       tituloDelGenero.innerText = data.name;
       console.log(tituloDelGenero);
        }
    )
    .catch(function(error){
        console.log(error);
    })

// Buscar peliculas de ese genero

let urlGenerosPeliculas= `https://api.themoviedb.org/3/discover/movie?api_key=924a6f16470b17afdd20524ec31c09be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

fetch(urlGenerosPeliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){ 
        console.log(data);
        let listaGenerosPeliculas = document.querySelector(`.detalleGenero`)
        let generos = "";
        for(i=0;i<data.results.length;i++){
            generos += `<div><a href="detail-movie.html?id=${data.results[i].id}"><img <img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="Poster"></a><p>${data.results[i].title}</p><p>${data.results[i].release_date}</p></div>`
            listaGenerosPeliculas.innerHTML = generos; 
        }
    })
    .catch(function(error){
        console.log(error);
    })
    

// Buscar series de ese genero

let urlGenerosSeries= `https://api.themoviedb.org/3/discover/tv?api_key=924a6f16470b17afdd20524ec31c09be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

fetch(urlGenerosSeries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){ 
        console.log(data);
        let listaGenerosSeries = document.querySelector(`.detalleGeneroTv`)
        let generosTv = "";
        for(i=0;i<data.results.length;i++){
            generosTv += `<div><a href="detail-movie.html?id=${data.results[i].id}"><img <img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="Poster"></a><p>${data.results[i].name}</p><p>${data.results[i].first_air_date}</p></div> `
            listaGenerosSeries.innerHTML = generosTv; 
        }
    })
    .catch(function(error){
        console.log(error);
    })
    


    