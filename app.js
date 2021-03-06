const API_KEY = 'd48f331a6b75ea11ef5379196afb31c5';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


const url = 'https://api.themoviedb.org/3/search/movie?api_key=d48f331a6b75ea11ef5379196afb31c5';
console.log('This is my Movie app')


const moviesearchable = document.querySelector('#moviesearchable');
const inputElement = document.querySelector('#inputvalue');
const buttonElement = document.querySelector('#search');


function generateUrl(path){
    const url = `https://api.themoviedb.org/3${path}?api_key=d48f331a6b75ea11ef5379196afb31c5`
     return url; 
}


function movieSection(movies){
return movies.map((movie) => {
    return`
     <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>`
})

 
}


function createMovieContainer(movies){
    const movieElement = document.createElement('div')
    movieElement.setAttribute('class', 'movie')

    const movieTemplate = `
   
    <section class="section">
    ${movieSection(movies)}
    </section>
    <div class="content content-display">
        <p class="content-close"></p>
    </div>
    `
    movieElement.innerHTML = movieTemplate
    return movieElement
}




buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;
    const path = '/search/movies'

    const newUrl = generateUrl(path) + '&query=' + value

    fetch(newUrl)
    .then((res) => res.json())
    .then((data) =>{

            //data.results
        moviesearchable.innerHTML= ''
        const movies = data.results
        
        const movieBlock = createMovieContainer(movies)
        moviesearchable.appendChild(movieBlock);
        console.log('Data', data)
                
    })
    .catch((error) => {
        console.log('Error', error)
    })

    inputElement.value = '';
    console.log('value' , value)
}


//event delegation

 






