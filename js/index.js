let url= 'https://developers.themoviedb.org/3/movies/get-popular-movies'

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){ //datos que acaba de procesar
        console.log(data);
       

        

    })
    .catch(function(error){
        console.log(error);
    })