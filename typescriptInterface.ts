// interface define the shape
// class will implement the interface
// a standard interface
interface Person {
    name: string;
    age: number;
}

// the variable should have exact the same shape as the interface
let tom: Person = {
    name: 'Tom',
    age: 10,
    // extra property isn't allowed
    // extra: 10
};

// a variable missing a property is not allowed
// let tom: Person = {
//     name: 'Tom', //missing age
// };

//optional properties
interface PersonWithOptionalAge {
    name: string;
    age?: number;
}

let jerry: PersonWithOptionalAge = {
    name: "Jerry",
}

let adam: PersonWithOptionalAge = {
    name: "Adam",
    age: 10
}

interface PersonWithAnyPropertyName {
    name: string;
    age?: number; // note, this age must be subset of proName type
    [propName: string]: any;
}

let dan: PersonWithAnyPropertyName = {
    name: 'dan',
    age: 10,
    address: "Sydney" // address is the propName, it must be a string. "Sydney" is any
}

// readonly property can be assigned when the variable is initialised
interface PersonWithID {
    readonly id: number;
    name: string;
    age?: number; // note, this age must be subset of proName type
    [propName: string]: any
}

let sarah : PersonWithID = {
    id: 12345,
    name: "sarah",
    age: 10,
}

sarah.age = 15 // it is allowed
// not allowed to change the id
// sarah.id = 100