

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы посомтрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы посомтрели?", "");
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i=0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }
    }
}

rememberMyFilms();

function detectionPersonalLevel() {
        if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов")
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 50) {
        alert("Вы классический зритель")
    } else if (personalMovieDB.count > 50) {
        alert("Вы киноман")
    } else {
        alert("Произошла ошибка")
    }
}

detectionPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
       console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();