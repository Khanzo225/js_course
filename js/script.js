"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний просмотренный фильм?', ''),
      b = prompt('Оцените его по 10 бальной шкале', ''),
      c = prompt('Последний просмотренный фильм?', ''),
      d = prompt('Оцените его по 10 бальной шкале', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);