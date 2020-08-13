//Function Declaration
function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(1, 2));

// Function Definition
let mySum = function (x: number, y: number): number {
    return x + y;
};

// use interface to define the function shape...  a little bit weird
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

//optional parameter
// lastName is optional
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// rest parameter
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: number[] = [];
push(a, 1, 2, 3);

// override
// function declare
function reverse(x: number): number;
function reverse(x: string): string;

// function implementation
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}