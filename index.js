
const message = document.querySelector('#message')


const addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector('input')
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const movieList = document.querySelector('ul').appendChild(movie)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    inputField.value = ""
}

const event = document.querySelector('form');
event.addEventListener('submit', addMovie);

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    const deletedMovie = event.target.parentNode.firstChild.textContent
    message.textContent = `${deletedMovie} Deleted!`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent =  `${event.target.textContent} Watched! `
    }else {
        message.textContent = `${event.target.textContent} removed.`
    }
    revealMessage()
}

const revealMessage = () => {
    setTimeout((()=> {
       message.classList.add('hide')
    }),1000)
}


















