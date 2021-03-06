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

const apiKey= `ff0d15573865ddc49a8a0b0024148010`;

//LO MÁS VISTO EN PELICULAS
let urlVistoPeliculas= `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
//console.log (urlVistoPeliculas);

fetch(urlVistoPeliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(page){ 
        console.log(page);

       let lista = document.querySelector('.masVistoPeliculas'); //DOM

       let elementosListaPeliculas = '' //actualizar datos con el endpoint

       let info = page.results; 

       for (let i=0; i<=4; i++){ 
           //console.log(info)
        elementosListaPeliculas += 
                            
                           `<div> 
                                <a href="./detail-movie.html?id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="Cosa"> </a>
                                <h3>${info[i].title}</h3>
                                <p> ${info[i].release_date} </p>
                           </div>`                    
        }

        
        lista.innerHTML += elementosListaPeliculas;
    })

    .catch(function(error){
        console.log(error);
    })


//LO MÁS VISTO EN SERIES
let urlVistoSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
//console.log (urlVistoSeries);

fetch(urlVistoSeries)
    .then(function(response){
        return response.json();       
    })

    .then(function(page){
        console.log(page);

        let lista = document.querySelector('.masVistoSeries');
        let elementosLista = ''
 
        let info = page.results; //para acortar el array
 
        for (let i=0; i<=4; i++){ 
            elementosLista += 
                          
                            `<div> 
                            <a href="./detail-serie.html?id=${info[i].id}">  <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="imagen"> </a>
                                <h3>${info[i].name}</h3>
                                <p> ${info[i].first_air_date} </p>
                            </div>`              
         }
 
        lista.innerHTML += elementosLista;
 
     })
    .catch(function(error){
        console.log(error);
    })


//PELICULAS MÁS VALORADAS 
let urlPeliculasValoradas= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
//console.log (urlPeliculasValoradas);

fetch(urlPeliculasValoradas)
    .then(function(response){
        return response.json();
    })

    .then(function(page){
        console.log(page);

        let lista = document.querySelector ('.masValoradas');
        let elementosLista= ''

        let info = page.results; //para acortar el array

        for( let i=0; i<=4; i++) {
            elementosLista +=
                          
                            `<div> 
                            <a href="./detail-movie.html?id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="Cosa"> </a> 
                                <h3>${info[i].title}</h3>
                                <p> ${info[i].release_date} </p>                  
                            </div>`
        }
        lista.innerHTML += elementosLista;
    })

    .catch(function(error){
        console.log(error);
    })


