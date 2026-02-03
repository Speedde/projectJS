"use strict"
const numberOfFilms = +prompt('Скільки фільмів ви подивилися?', "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++) {
    let filmName = prompt("Один з останніх переглянутих фільмів", ''),
    filmsScore = +prompt("Наскільки оцінюєте його?", "");
    personalMovieDB.movies[`${filmName}`] = filmsScore;
}

console.log(personalMovieDB);

