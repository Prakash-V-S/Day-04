// DAY 04 
// DATE 23/11/23

//Question 01-------------------------------

// a) Print odd numbers in an array

//Anonymous Function :    
var arr=[1,2,3,4,5,55,6,7,8,9,10];
var a=function(odd){
    for(var i=0;i<odd.length;i++) {
        if(odd[i]%2!=0)
        {
            console.log(arr[i]);
        }
        }
} 
a(arr);
// -----------------------------------------------------------------------------
//IIFE Function :
var arr = [1, 2, 3, 4, 5, 55, 6, 7, 8, 9, 10];
(function (odd) {
    for (var i = 0; i < odd.length; i++) {
        if (odd[i] % 2 !== 0) {
            console.log(odd[i]);
        }
    }*
})(arr);
//---------------------------------------------------------------------------------


// c ) Sum of all numbers in an array

//Anonymous Function : 
var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
var a = function(add) {
  for (var i = 0; i < add.length; i++) {
    sum = sum + arr[i];
    }
    console.log(sum);
}
a(arr);
//-----------------------------------------------------------------------------------
// IIFE Function :
var arr = [1, 2, 3, 4, 5, 6, 7];

var sum = (function (add) {
    var result = 0;

    for (var i = 0; i < add.length; i++) {
        result = result + add[i];
    }

    return result;
})(arr);
console.log(sum);
//----------------------------------------------------------------------------------------

// d ) Return all the prime numbers in an array

//Anonymous Function : 
let n = [7, 2, 6, 71, 17, 19, 62, 53, 74];
let sum = 0;
let arr = function (num) {
    for (let i = 0; i <= num.length; i++) {
        sum = 0;
        for (let j = 1; j <= num[i]; j++) {
            if (num[i] % j == 0) {
                sum = sum + 1;
            }
        }
        if (sum == 2) {
            console.log(num[i]);
        }
    }
}
arr(n);
//------------------------------------------------------------------
let n = [7, 2, 6, 71, 17, 19, 62, 53, 74];

(function (num) {
    for (let i = 0; i < num.length; i++) {
        let sum = 0;
        for (let j = 1; j <= num[i]; j++) {
            if (num[i] % j === 0) {
                sum = sum + 1;
            }
        }
        if (sum === 2) {
            console.log(num[i]);
        }
    }
})(n);
//---------------------------------------------------------



// e ) Return all the palindromes in an array

// Anonymous Function : 
let arr = ["nandhini", "level", "devi", "deed"];
let a = function (pal) {
    let result = [];
    let val;
    for (let i = 0; i < pal.length; i++) {
        val = pal[i].split("").reverse().join("");
        if (val === pal[i]) {
            result.push(pal[i]);
        }
    }
    return result;
}
let pal = a(arr);
console.log(palindromes);

//--------------------------------------------------------
// IIFE Function :
let arr = ["nandhini", "level", "devi", "deed"];
let palindromes = (function (pal) {
    let result = [];
    let val;
    for (let i = 0; i < pal.length; i++) {
        val = pal[i].split("").reverse().join("");
        if (val === pal[i]) {
            result.push(pal[i]);
        }
    }
    return result;
})(arr);
console.log(palindromes);


// g ) Remove duplicates from an array -------------------

//Anonymous Function : 
function removeDuplicates(arr) {
    let n = []; 
    for (let i = 0; i < arr.length; i++) {
        if (!n.includes(arr[i])) {
            n.push(arr[i]);
        }
    }
    return n;
}
const array = [1, 2, 3, 4, 2, 5, 1, 6];
const n= removeDuplicates(array);
console.log(n);
//--------------------------------------------------------------------
// IIFE Function :
const array = [1, 2, 3, 4, 2, 5, 1, 6];
const uniqueArray = (function (arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        if (!n.includes(arr[i])) {
            n.push(arr[i]);
        }
    }
    return n;
})(array);
console.log(uniqueArray);

