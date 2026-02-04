/*jshint esversion: 6 */
(function() {
    'use strict';
}());

const numberOfFilms = +prompt('Скільки фільмів ви подивилися?', "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++) {
    let filmName = prompt("Один з останніх переглянутих фільмів", '');
    let filmsScore = +prompt("Наскільки оцінюєте його?", "");
    while(!filmName || !filmsScore || isNaN(filmsScore) || filmName.length > 50 || filmsScore > 11) {
        filmName = prompt("Один з останніх переглянутих фільмів", '');
        filmsScore = +prompt("Наскільки оцінюєте його?", "");
    }
    
    personalMovieDB.movies[`${filmName}`] = filmsScore;
}
if (personalMovieDB.count) {
    if (personalMovieDB.count < 10) {
        alert('Побачено так мало фільмів');
    } else if (personalMovieDB.count <= 30) {
        alert('Ви класичний глядач');
    } else if (personalMovieDB.count > 30) {
        alert('Ви кіноман'); 
    } 
} else {
    alert("Виникла помилка");
}


console.log(personalMovieDB);

 
// let result = '';
// let length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

// function fillArr(numStart, numEnd) {
//     const arr = [];
//     for (let i = 0; i <= numEnd - numStart; i++) {
//         arr[i] = i + numStart;
//     }
//     return arr;
// }
// let anotherArr = fillArr(2, 7);
// console.log(anotherArr);
// const arr = [];
// function byItselfe (c, a, b) {
//     c.push(a);
//     if(a == b) {
//         return;
//     }
//     a++;
//     return byItselfe(c, a, b);
// }
// byItselfe(arr, 5, 10);
// console.log(arr);
// let arr = [1, 4, 6, 7, 5, 7, 15, 32, 21];
// let count = 1;
// let data1 = [];
// function reversArr(v, c, a) {
//     a.push(v[v.length - c]);
    
    
//     if (c == v.length) {
//         return a;
//         // console.log(a);
//     } else {
//         // c++;
//         return reversArr(v, ++c, a);
//     } 
    
// }
// reversArr(arr, count, data1);
// data1 = reversArr(arr, count, data1);
// let arr = [1, 4, 6, 7, 5, 7, 15, 32, 21];
// function rev(arr) {
//     let data =[];
//     return data = arr.reverse();

// }
// let date = rev(arr);
// console.log(arr);
// const lines = 9;
// let result = "";
// for (let i = 0; i < lines; i++) {
//     for(let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for( let k = 0; k <= i * 2; k++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);