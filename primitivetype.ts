// Primitive data types introduction

// boolean
let isBoolean: boolean = true
// Boolean type
let isBooleanObject: Boolean = new Boolean(true)
// differences
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
let createdByBoolean: Boolean = Boolean(1);


// number type
let myAge: number = 10;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// string type
let myName: string = "Rafa xu";
let myStence: string = `this is ${myName} and I am ${myAge} years old`;

// void type: declare there is no return value of the function
function alertName(): void {
    console.log('My name is Tom');
}

alertName()

// null and undefined
let u: undefined = undefined;
let n: null = null;
// u and n can be assigned to other variables but void can't

console.log(myStence);