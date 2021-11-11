//Capturar QS
let queryString = location.search; 
console.log(queryString);

//transformar la QS en objeto literal
let qsToObject = new URLSearchParams(queryString);


//obtener una propiedad del Objeto Literal del paso anterior
let id = qsToObject.get ('id'); //pregunto en el objeto literal el valor del id
console.log (id);

//conseguir datos de un personaje
let url= 
fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);

    })