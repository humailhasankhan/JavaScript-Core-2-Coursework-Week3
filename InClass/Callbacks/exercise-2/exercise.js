/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
function showMovies(moviesArray) {
  const allMovieDetails = moviesArray.map((movie) => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `${movie.title}, directed by ${movie.director}`;
    const allMovies = document.getElementById("all-movies");
    allMovies.appendChild(newParagraph);
  });
  const totalMovies = document.getElementById("movies-number");
  totalMovies.innerText = moviesArray.length;
}
setTimeout(() => {
  showMovies(movies);
}, 1000);

// create a new movie object for your favorite movie
const theMatrix = {
  title: "The Matrix",
  director: "The Wachowskis",
  type: "action",
  haveWatched: true,
};

// create addMovies function
function addMovie(newMovie) {
  movies.push(newMovie);
  const newParagraph = document.createElement("p");
  newParagraph.innerText = `${newMovie.title}, directed by ${newMovie.director}`;
  const allMovies = document.getElementById("all-movies");
  allMovies.appendChild(newParagraph);
  const totalMovies = document.getElementById("movies-number");
  totalMovies.innerText = movies.length;
}

setTimeout(() => {
  addMovie(theMatrix);
}, 2000);

const form = document.getElementById("form");
const formSubmission = document.getElementById("submitBtn");
const titleField = document.getElementById("title");
const directorField = document.getElementById("director");
const typeField = document.getElementById("genre");
const haveWatchedCheckbox = document.getElementById("haveWatched");

formSubmission.addEventListener("click", (event) => {
  event.preventDefault();

  const newMovieToAdd = {
    title: titleField.value,
    director: directorField.value,
    type: typeField.value,
    haveWatched: haveWatchedCheckbox.checked,
  };
  addMovie(newMovieToAdd);
  form.reset();
});
