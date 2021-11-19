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

let urlPeliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

console.log(urlPeliculas);



fetch(urlPeliculas)
    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        console.log(datos);

        let detalleSerie = document.querySelector('main');
        let elementoLista = '';

      /* <section class="detalleVistoPelicula">

    <article class="posicion-pelicula">
        <h2 class="titulo"></h2>
        <img src="" alt="">
        <p class=puntuación> Puntuación:</p>
        <p class="favorito"></p>
    </article>

    <article>
        <p class="descripción"></p>
    </article>
   
    <article>
        <h3 class="generos">Género: <a href=""></a> </h3>
        

    <article class= "info"> 
        <p class="estreno:">Fecha de estreno:</p>
        <p class="duración:">Duración:</p>
    </article>
</section>
</main>

    */
        for (let i=0; i<1; i++){
            elementoLista += 
                            `<img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="imagen">  
                           
                            <section class="info-1">

                                <article class="posicion-pelicula">
                                        <h2 class= "titulo"> ${datos.title} </h2> 
                                </article>

                                <article>
                                    <p class="descripcion"> ${datos.overview} </p>
                                </article>

                                <article>
                                    <h3 class="generos"> Género: ${datos.genres[i].name} </h3>
                                </article>

                                <article class= "info">
                                    <p class= "estreno"> Fecha de estreno: ${datos.release_date} </p>
                                    <p class= "duración"> Duración: ${datos.runtime} </p>
                                  
                                </article>

                                <article>
                                    <div>
                                            <p class= "puntuación"> Puntuación: ${datos.vote_average}</p>
                                        </div>
                                        <div>
                                        <a href="./favorite.html"> <p> Agregar a favorito </p> </a>
                                        </div>
                                        
                                </article>

                            </section>`
        }
        detalleSerie.innerHTML= elementoLista;
    })
   
    
    .catch (function(error){
        console.log(error);
    })


     //VER TEMA GENEROS