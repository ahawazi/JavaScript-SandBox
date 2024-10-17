// alert('hooooooooooooooooooo');

//change the text in the html page:
// document.getElementById('content').innerHTML="welcome";

//show the text in the end of html page:
// document.write("heloo there");

//variables
//var , let: we can change , const: this is not chenged

//datatype
//primitive datatype
//string, number(can be float), boolean, null(object), undifined

//math
// ++ one increaze
// -- one decreaze

//array
// let number = new Array(1, 2, 3, 'c#', true);
// let number2 = [4, 5, 6, 'c#', true];
// console.log(number, number2);

//seee the item in array
// console.log(number[1]);

//for shange the item
// Number[1]= 'css';

//push the end of the array
// Number.push('tailwind');

//push the first of the array:
// Number.unshift('c++');

//delete the from array
// Number.pop();

//object
// const student = {
//     name: 'ali',
//     lastname: 'shiri',
//     courses: [
//         'flan',
//         'folan',
//         23,
//         true
//     ],
//     adress: {
//         country: 'onja',
//         city: 'inja',
//     }
// }
// console.log(student);

// //add to object:
// student.email = "example@ex.com"
// console.log(student);

//function
// function log() {
//     console.log("hahah");
// }
// log();

// const log2 = () => {
//     console.log("bye")
// }
// log2();

// //parametr
// function math(x, y) {
//     return x*y
// }
// //argoument
// let resoult = math(100, 4);
// console.log(resoult);

//arrow function
//fat arrow


//array object
// const courses = [
//   {
//     id: 1,
//     name: "html",
//     time: 10,
//     iscompleted: true,
//   },
//   {
//     id: 2,
//     name: "css",
//     time: 15,
//     iscompleted: false,
//   },
// ];
// console.log(courses[1].name);
// const resoult = JSON.stringify(courses);
// console.log(resoult);


//loop
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let j= 0;
// while (j<10) {
//     console.log(`${j}`)
//     j+=1
// }

//hight order array methods
//foreach, map, filter

// const courses = [
//   {
//     id: 1,
//     name: "html",
//     time: 10,
//     iscompleted: true,
//   },
//   {
//     id: 2,
//     name: "css",
//     time: 15,
//     iscompleted: false,
//   },
// ];

// courses.forEach(function(c) {
//     console.log(c)
// })

// courses.map(function(cc) {
//     return cc.name
// })

// const newCourses = courses.map(function(cc) {
//     return { name: cc.name, Id: cc.id }
// })
// console.log(newCourses);

// //we can filter the parametr and use the map in the our filters data
// const newCourses2 = courses.filter(function(cc) {
//     return cc.iscompleted === true
// }).map(function(c) {
//     return c.name
// })
// console.log(newCourses2);


// conditions
//if, else, else if

//ternary operator
// const x=10;
// const color = x>10 ? 'red' : 'blue';
// console.log(color);

//switch
// const color = 'blue'
// switch (color) {
//     case 'red':
//         console.log("it is red");
//         break;
//     case 'blue':
//         console.log("be blue");
//         break;

//     default:
//         console.log('not be there');
// }


//oop
class Person {
    constructor(firsname, lastname, age) {
        this.firsname = firsname;
        this.lastname = lastname;
        this.age = age;
    }

    getFullName(){
        return `${this.firsname} ${this.lastname}`
    }
}
const student1 = new Person('reza', 'jak', 25);
console.log(student1);
console.log(student1.getFullName());