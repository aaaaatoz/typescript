// a variable with a union type means it can be either a or b

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
// not allowed
// console.log(myFavoriteNumber.length); // 编译时报错


// access the common properties
function getString(something: string | number): string {
    return something.toString();
    // but not this
    // return something.length
}