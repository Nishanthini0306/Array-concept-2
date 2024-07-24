//array rotation
function rotatearray(arr, rotateBy) {
    const n = arr.length;
    rotateBy %= n;
 
    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
 
const originalArray = [1, 2, 3, 4, 5];
const rotatedarray = rotatearray(originalArray, 2);
console.log(rotatedarray);

//index removal
let indexForRemoval = 3;
let numArray = [2,4,24,18,25];
numArray.splice(indexForRemoval,1);
console.log("Array Elements After Removing Element At Index: " + indexForRemoval + " is " + numArray);


//inserting element
function insertElement() {
    let arr = [2, 4, 8, 10, 12];
    let index = 2;
    let element = 9;
arr.splice(index, 0, element);
    console.log(arr);
}
insertElement();


//Array spreading
const arr1=[2,3,4,8];
const arr2=[1,3,9,0];
const combine=[...arr1,...arr2];
console.log(combine);

//longest string
let arr = [
    "I am a fullstack developer",
    "I am learning html",
    "I am learning css"
];
function longestString() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(longestString());