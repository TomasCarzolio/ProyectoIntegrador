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

let detalleSerie = document.querySelector('.series');
let elementoLista = '';
let generos = '';
let info= 'datos.genres'

fetch(urlVistoSerie)
    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        console.log(datos);

         
        for (let i=0; i<datos.genres.length; i++){
             generos += `<a href= ".generos.html?id?=${datos.genres[i].id}&nombregenero=${datos.genres[i].name}">  <h3 class="generos"> ${datos.genres[i].name} </h3> </a>`
         } 
      
        for (let i=0; i<1; i++){
       
            elementoLista += 
                            `<img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="imagen">  
                            <section class="info-1">

                                <article class="posicion-series">
                                        <h2> ${datos.name} </h2> 
                                </article>

                                <article class= "info-generos">
                                  <h3> Género/s: </h3>
                                  <p class= "generos"> ${generos} </p>
                                </article>

                                <article>
                                    <p id="descripcion"> ${datos.overview} </p>
                                </article>

                                <article id= "info">
                                    <p> Fecha de estreno: ${datos.first_air_date} </p>
                                    <p> Temporadas: ${datos.number_of_seasons} </p>
                                    <p> Capítulos: ${datos.number_of_episodes} </p>
                                </article>

                                <article>
                                    <div>
                                            <p> Puntuación: ${datos.vote_average}</p>
                                        </div>
                                        <div>
                                        <a class="fav" href="">Agregar a favoritos</a>
                                        </div>
                                        
                                </article>

                            </section>`
        }
        detalleSerie.innerHTML= elementoLista;

        //Array para guardar ids de gifs favoritos
        let favoritos = [];

        //Si hay datos anteriores entonces debemos actualizar el array.
        let recuperoStorage = localStorage.getItem('favoritos'); //Esto retorna un json.

        if (recuperoStorage != null){
            favoritos = JSON.parse(recuperoStorage);
        }   

        //Cuando el usuario haga click en el link
        let linkFav = document.querySelector('.fav');

        //Si el id está en el array de favoritos
        if(favoritos.includes(id)){
            linkFav.innerText = 'Quitar de favoritos'       
        }

        linkFav.addEventListener('click', function(event){
            event.preventDefault();

            //Pregunto si el id está en el array
            if(favoritos.includes(id)){
                //Quiero sacar el id del array. Necesito saber la posición.
                let idASacar = favoritos.indexOf(id);
                //Sacar el id del array
                favoritos.splice(idASacar, 1);
                linkFav.innerText = "Agregar a Favoritos";

            } else {
                //pushear un id al array.
                favoritos.push(id);
                linkFav.innerText = 'Quitar de favoritos'
            }
            
            //Guardar el array en localStorage
            let favoritosAString = JSON.stringify(favoritos);
            localStorage.setItem('favoritos', favoritosAString);

            //Chequear que tenemos datos en el Local Storage
            console.log(localStorage);
    })
})
    
    .catch (function(error){
        console.log(error);
    })


    