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

//Recuperar los ids del storage.
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);

//Capturar el elemendo del DOM donde los quiero mostrar.
let lista = document.querySelector(`.favs`);
let contenidoLista = "";

if(favoritos == null || favoritos.length == 0){
    lista.innerHTML = '<h2>No hay series ni peliculas en favoritos</h2>';
}

//Recorrer el array y:
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

            lista.innerHTML = contenidoLista;
        })
        .catch( function(error){
            console.log(error);
        })
}  