"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        personalMovieDB.count = +prompt('Кол-о ваших просмотренных фильмов', '');
        while(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Кол-о ваших просмотренных фильмов', '');
        }
    },

    rememberMyFilms: function(){
        for( let i=0; i < 2; i++){
            const a = prompt('Один из послдених прсомотренных фильмов', ''),
                  b = prompt('На сколько вы его оцениваете?', '');

            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done!');
            }else{
                console.log('Error!');
                i--;
            }
        }
    },

    detectedPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Прсмотрено мало фильмов');
        }else if(personalMovieDB.count > 10  && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        }else if(personalMovieDB.count >= 30){
            console.log('Да вы просто КИНОМАН!');
        }
    },

    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером: ${i}`);
            if( genre == null && genre == '' ){
                console.log('ERORR! Введите правильно!');
                i--;
            }else{
                personalMovieDB.genres[i-1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i+1} - это ${item}`);
        });
    }


};