"use strict";

let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while(NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    movie: {},
    actors: {},
    genres: [],
    count: NumberOfFilms,
    privat: false
};


function rememberMyFilms(){
    for (let i = 0; i < 2; i++ ) {
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
}

rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно таки мало фильмов дружище:(');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы classic зритель:)');
    } else if (personalMovieDB.count >= 30){ 
        console.log('Вы сударь КИНОМАН!!!');
    } else {
        console.log('error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if( !hidden ) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

/* console.log(personalMovieDB); */

function writeYourGenres() {
    for( let i = 1; i <= 3; i++ ) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером: ${i}`);
    }
}

writeYourGenres();