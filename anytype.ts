// you can't assign a different type to a variable unless it is an any type
// wrong
// let aString: string = "this is a string"
// aString = 1;

let anyType: any = "this is a string"
anyType = 1;

// allow to call a function or access property without definition
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// declare without type will be set as any
let something; // something type is any
// same as
// let something: any
something = 'seven';
something = 7;

something.setName('Tom');

// when the variable is assigned a value during the declaration, it will be type inferenced by the system
// this is wrong
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
