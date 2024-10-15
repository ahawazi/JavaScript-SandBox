// alert('heeeeeey');

// console:
// console.log('hahaha');

// console.error('hahaha');

// console.warn('hahaha');

// console.group('name of grop');
// console.log('hahaha');
// console.error('hahaha');
// console.warn('hahaha');
// console.groupEnd();

// Variables:
// let or other & name = '';

// let firstName = 'ali';
// let lastName = 'sheri';
// let age = 25;
// console.log(firstName, lastName, age);

// var age = 5;
// age = 6;
// console.log(age);

// let sal = 5;
// sal = 6;
// console.log(sal);

// we can't change the const variable
// const mah = 5;
// mah = 6;
// console.log(mah);

// const roz;
// roz = 6;
// console.log(roz);

//data type
// const age = "12";
// console.log(typeof age);

// // Strings
// let x;

// const firstName = 'alex';
// const lastName = 'powel';

// x = 'my name is' + firstName + ' ' + lastName;
// // or
// x = `my name is ${firstName} ${lastName}`;

// console.log(x);

// let b;

// const s = "asanbash";

// b = s.length;
// b = s.charAt(2);
// b = s.toLowerCase();
// b = s.toUpperCase();
// b = s.substring(0, 5);
// b = s.trim();
// b = s.replace('sh', 'io');
// b = s.includes('sh');
// b = s.split();
// console.log(b);

//array
// const arr =[1, 2, 3,];
// arr.push(10);
// arr.pop(10);
// arr.includes(2);
// arr.unshift(10);
// arr.shift(10);
// arr.reverse();
// arr.indexOf(3);
// arr.slice(1, 3);
// arr.splice(1, 3);
// console.log(arr);

// listing & array in to in

//object
// const persen = {
//     name: 'alex',
//     age: 25,
//     address: {
//         city: 'test',
//     },
//     nambers: [1, 2, 3, 4]
// };
// x = persen.age;
// x = persen.address.city;
// x = persen;
// x = persen.nambers[1];
// persen.name = 'powel';
// delete persen.age;
// console.log(persen);
// console.log(x);

//access to arry by object
// const user1 = {
//     name: 'ali',
//     age: 25,
//     addres: {
//         city: {
//             id: 1,
//             name: 'test',
//         }
//     }
// }

// let x;
// x = Object.keys(user1);
// x = Object.keys(user1.addres);
// x = Object.values(user1);
// x = Object.entries(user1);
// x = Object.hasOwnerProperty('name');
// console.log(x);

//naming
// const firstName = 'ali';
// const lastName = 'sheri';
// const age = 25;

// const user = {
//when the key and valou is saim we can write the once.
//firstName: firstName,
//or :
//     firstName,
//     lastName,
//     age,
// }
// console.log(user);

// const todo = {
//     id: 1,
//     title: 'todo1',
//     user: {
//         name: 'omid',
//     }
// }

// const id = todo.id;
//or
// const {id} = todo;

// chenge the name id to todoId
// const {id: todoId, title, user:{name} } = todo;

// console.log(id, title, user.name);
// console.log(id, title, user.name);
// console.log(todoId, title, user.name);

//for array
// const numbers = [10, 22, 33, 44];
// const [first, second, ...rest] = numbers;
// console.log(first, second, rest);

// JSON
const post = [
  {
    id: 1,
    title: "title",
    body: "body",
  },
  {
    id: 2,
    title: "title",
    body: "body",
  },
  {
    id: 3,
    title: "title",
    body: "body",
  },
];
// console.log(post);

//convert object to JSON
const str = JSON.stringify(post);

console.log(str);

//convert JSON to object
const obj = JSON.parse(str)

console.log(obj);


//function
function add(x, y, z = 10) {
  return x + y + z; 
}
const resoult = add(5, 9, 9);
console.log(resoult)


//function declaration
//we can do this : 
//console.log(add(5, 2));
function add(x, y) {
  return x + y;
}
console.log(add(5, 2));


//function exprssion
//we can't do this :
//console.log(add2(3, 3));
const add2 = function(x, y) {
  return x = y;
}
console.log(add2(3, 3));