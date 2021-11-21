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

//Recuperar los ids de TV del storage.
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);

//Capturar el elemendo del DOM donde los quiero mostrar.
let lista = document.querySelector(`.favs`);
let contenidoLista = "";

if(favoritos == null || favoritos.length == 0){
    lista.innerHTML = '<h3>Todavía no has agregado series favoritas</h3>';
}
else{
//Recorrer el array:
for(let i=0; i<favoritos.length; i++){
    //llamar a la api para obtener datos de cada id
    let url = `https://api.themoviedb.org/3/tv/${favoritos[i]}${apiKey}&language=en-US`

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            contenidoLista +=  `<div> <a href="./detail-serie.html?id=${favoritos[i]}"><img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="imagen"> </a>
                                <h3>${data.name}</h3>
                                <p> ${data.first_air_date} </p>
                            </div>` 

            lista.innerHTML = "<h2>Series</h2>" + contenidoLista;
        })
        .catch( function(error){
            console.log(error);
        })
}}

//Recuperar los ids de peliculas del storage.
let recuperoStoragePelis = localStorage.getItem('favoritosPelis');
let favoritosPelis = JSON.parse(recuperoStoragePelis);
console.log(favoritosPelis);

//Capturar el elemendo del DOM donde los quiero mostrar.
let listaPelis = document.querySelector(`.favsPelis`);
let contenidoListaPelis = "";

if(favoritosPelis == null || favoritosPelis.length == 0){
    listaPelis.innerHTML = '<h3>Todavía no has agregado peliculas favoritas</h3>';
}
else{
//Recorrer el array:
for(let i=0; i<favoritosPelis.length; i++){
    //llamar a la api para obtener datos de cada id

    let urlPelis = `https://api.themoviedb.org/3/movie/${favoritosPelis[i]}${apiKey}&language=en-US`
   
    fetch(urlPelis)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            contenidoListaPelis +=  `<div> <a href="./detail-movie.html?id=${favoritosPelis[i]}"><img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="imagen"> </a>
                                <h3>${data.title}</h3>
                                <p> ${data.release_date} </p>
                            </div>` 

            listaPelis.innerHTML = "<h2>Peliculas</h2>" + contenidoListaPelis;
        })
        .catch( function(error){
            console.log(error);
        })
}  
}

if((favoritosPelis == null || favoritosPelis.length == 0) & (favoritos == null || favoritos.length == 0)){
    listaPelis.innerHTML ='<h2>Tu lista de favoritos está vacía</h2>';
    lista.innerHTML = ``;
}

let boton = document.querySelector(`.borrar`);
 boton.addEventListener(`click`, function(){
   sessionStorage.clear();
   localStorage.clear();
   listaPelis.innerHTML = '<h2>Tu lista de favoritos está vacía</h2>';
    lista.innerHTML = ``;
   
 })

