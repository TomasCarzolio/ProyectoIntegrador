
let apiKey= `?api_key=ff0d15573865ddc49a8a0b0024148010`


//LO MÁS VISTO EN PELICULAS
let urlVistoPeliculas= `https://api.themoviedb.org/3/movie/popular${apiKey}`

fetch(urlVistoPeliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(page){ //datos que acaba de procesar
        console.log(page);
       let lista = document.querySelector('.masVistoPeliculas');
       let elementosLista = ''

       let info = page.results; //para acortar el array

       for (let i=0; i<=4; i++){ //ver tema imagen
           elementosLista += 
                           `<div> 
                                <img scr= ${info[i].poster_path} 
                                <h3>${info[i].title}</h3>
                                <p> ${info[i].release_date} </p>
                           </div>`    
        }

       lista.innerHTML= elementosLista;

    })
    .catch(function(error){
        console.log(error);
    })

//LO MÁS VISTO EN SERIES
let urlVistoSeries= `https://api.themoviedb.org/3/tv/popular${apiKey}`
console.log (urlVistoSeries);

fetch(urlVistoSeries)
    .then(function(response){
        return response.json();       
    })

    .then(function(page){
        console.log(page);

        let lista = document.querySelector('.masVistoSeries');
        let elementosLista = ''
 
        let info = page.results; //para acortar el array
 
        for (let i=0; i<=4; i++){ //ver tema imagen
            elementosLista += 
                            `<div> 
                                <img scr= ${info[i].poster_path} 
                                <h3>${info[i].name}</h3>
                                <p> ${info[i].first_air_date} </p>
                            </div>`    
         }
 
        lista.innerHTML= elementosLista;
 
     })
    .catch(function(error){
        console.log(error);
    })


//PELICULAS MÁS VALORADAS 
let urlPeliculasValoradas= `https://api.themoviedb.org/3/movie/top_rated${apiKey}`

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
                                <img scr= ${info[i].poster_path} 
                                <h3>${info[i].title}</h3>
                                <p> ${info[i].release_date} </p>
                                
                            </div>`
        }
        lista.innerHTML= elementosLista;
    })

    .catch(function(error){
        console.log(error);
    })