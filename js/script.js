"use strict";

const NumberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

const personalMovieDB = {
    movie: {},
    actors: {},
    genres: [],
    count: NumberOfFilms,
    privat: false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреннных фильмов?', ''),
          b = prompt('На сколько вы его оцениваете?', '');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movie[a] = b;

        console.log('done');
    } else {
        console.log('error');
        i--;
    } 
}

if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно таки мало фильмов дружище:(');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы classic зритель:)');
} else if (personalMovieDB.count >= 30){ 
    console.log('Вы сударь КИНОМАН!!!');
} else {
    console.log('error!');
}

console.log(personalMovieDB);