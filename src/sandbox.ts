// union types

let uid: string | number;

uid = "adnan";
uid = 25;

let names: (string | number)[] = ["s", "b", "c", "d"];

names.push(5);
console.log(names);

// Objects

let obj1: Object;
obj1 = {name: 'shaik', age: 35}

let obj2: {
    name: string,
    age: number,
    beltColor: string
}

obj2 = {
    name: 'shaik',
    age: 20,
    beltColor: 'blue'
}
console.log(obj2);