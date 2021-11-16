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

const apiKey= `ff0d15573865ddc49a8a0b0024148010`

//Capturar QS
let queryString = location.search; 
//console.log(queryString);

//transformar la QS en objeto literal
let qsToObject = new URLSearchParams(queryString);


//obtener una propiedad del Objeto Literal del paso anterior
let id = qsToObject.get ('id') //pregunto en el objeto literal el valor del id
console.log (id);

let urlVistoSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
console.log(urlVistoSerie);



fetch(urlVistoSerie)
    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        console.log(datos);

        let detalleSerie = document.querySelector('main');
        let elementoLista = '';
      

        for (let i=0; i< datos.genres.length; i++){
            elementoLista += 
                            `<img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="Cosa">  
                            <section class="info-1">

                                <article class="posicion-series">
                                        <h2> ${datos.name} </h2> 
                                </article>

                                <article>
                                    <p id="descripcion"> ${datos.overview} </p>
                                </article>

                                <article>
                                    <h3 id="generos"> Género:  </h3>
                                </article>

                                <article id= "info">
                                    <p> Fecha de estreno: ${datos.first_air_date} </p>
                                    <p> Temporadas: ${datos.number_of_seasons} </p>
                                    <p> Capítulos: ${datos.number_of_episodes}
                                </article>

                                <article>
                                    <div>
                                            <p> Puntuación: ${datos.vote_average}</p>
                                        </div>
                                        <div>
                                            <p class= "agregarFavorito"> Agregar a favorito </p>
                                        </div>
                                </article>

                            </section>`
        }
        detalleSerie.innerHTML= elementoLista;
    })
    //VER TEMA GENEROS
    
    .catch (function(error){
        console.log(error);
    })