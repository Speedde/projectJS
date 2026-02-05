/*jshint esversion: 6 */
(function() {
    'use strict';
}());

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Скільки фільмів ви подивилися?', "");
    while(!numberOfFilms) {
        start();
    }
}
// start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
function askMeAboutFilm() {
    for(let i = 0; i < 2; i++) {
        let filmName = prompt("Один з останніх переглянутих фільмів", '');
        let filmsScore = +prompt("Наскільки оцінюєте його?", "");
        while(!filmName || !filmsScore || isNaN(filmsScore) || filmName.length > 50 || filmsScore > 11) {
            filmName = prompt("Один з останніх переглянутих фільмів", '');
            filmsScore = +prompt("Наскільки оцінюєте його?", "");
        }
        
        personalMovieDB.movies[`${filmName}`] = filmsScore;
    }
}
// askMeAboutFilm();
function rememberFilm() {
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
}
// rememberFilm();
function showDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
// showDB(personalMovieDB.private);
function rememberMyGenre () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt('Якому жанру вивіддаєте перевагу під номером ' + i);
    }
}
// rememberMyGenre();




 
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

// function getMathResult(a, b) {
//     let str = "";
//     let div = "---";
//     if(typeof(a) === 'number' && typeof(b) === 'number' && b > 0 && !isNaN(b)) {
//         for (let i = 1; i <= b; i++) {
//             str += a * i;
//             if(i == b) continue;
//             str += div;
//         }
//         return str;
//     } else {
//         return a;
//     }
// }
// console.log(getMathResult(20, -5));

// function calculateVolumeAndArea(a) {
//     let str = '';
//     if(typeof(a) === 'number' && Number.isInteger(a) && a > 0) {
//         str += 'Объем куба: ' + Math.pow(a, 3) + `, площадь всей поверхности: ${Math.pow(a, 2) * 6} `;
//         return str;
//     } else {
//         str += 'При вычислении произошла ошибка';
//         return str;
//     }
// }
// let b = +prompt('length of one side', '');
// console.log(calculateVolumeAndArea(b));

// function getCoupeNumber(a) {
//     let str = '';
    
//     if(isNaN(a) || !Number.isInteger(a) || a < 0) {
//         str += 'Ошибка. Проверьте правильность введенного номера места';
//     } else if(a > 36 || a == 0) {
//         str += "Таких мест в вагоне не существует";
//     } else {
//         for (let i = 1; i <= 9; i++) {
//             if((a / 4) <= i) {
//                 str += i;
//                 break;
//             }
//         }
//     }
//     return str;
    
// }
// console.log(getCoupeNumber(17));
// function getTimeFromMinutes (a) {
//     if(isNaN(a) || !Number.isInteger(a) || a < 0 || a > 600) {
//         return "Ошибка, проверьте данные";
//     }
//     const h = Math.floor(a / 60);
//     let str = h;
//     switch(h) {
//         case 0: {str += " годин"; break;}
//         case 1: {str += " годинa"; break;}
//         case 2: {str += " години"; break;}
//         case 3: {str += " години"; break;}
//         case 4: {str += " години"; break;}
//         case 5: {str += " годин"; break;}
//         case 6: {str += " годин"; break;}
//         case 7: {str += " годин"; break;}
//         case 8: {str += " годин"; break;}
//         case 9: {str += " годин"; break;}
//         case 10: {str += " годинa"; break;}
        
//     }
//     return str;
// }
// console.log(getTimeFromMinutes(150));
// function findMaxNumber(a, b, c, d) {
//     if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || !a || !b || !c || !d) {
//         return 0;
//     }
//     if(a > b) {
//         if(a > c) {
//             if(a > d) {
//                 return a;
//             } else return d;
//         } else if(c > d) {return c;
//         } else return d;
//     } else if(b > c) {
//         if(b > d) {
//             return b;
//         } else return d;
//     } else if(c > d) {
//         return c;
//     } else return d;
// }
// console.log(findMaxNumber(103, 200, 4.5, 4));
function fib(a) {
    let str ='';
    if (typeof(a) !== 'number' || !Number.isInteger(a) || a < 0) {
        return str;
    }
    let n1 = 0, n2 = 1;
    for (let i = 0; i < a; i++) {  
        if((i + 1) === a) {
            str += n1;
        } else {
            str += n1 + " ";
        }                        
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        
    }
    return str;
}
console.log(fib(7));
