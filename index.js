// write a variable without initial value

var x;

// write a variable with initial value

var y = 'AHMED';

// write 3 variables in same line without initial value

var x , y , z ;

// write 3 variables in same line with initial value

var x = 'AHMED' , y = 'EMRAN' , z = 'ABU-RUMMAN' ;

// write 3 variables with Boolean value

var x = true , y = false , z = true ;

// write a constant

const a = 'AHMED' ;

// write an empty array without initializing its size

var array1 = [];

// write an array of number from 1 to 10

var array2 = [1,2,3,4,5,6,7,8,9,10];

// write an array of strings has letters from A to J

var array3 = ['A','B','C','D','E','F','G','H','I','J'];

// Write an Object has at least 3 attributes (keys) and give each one a numeric value

let Ahmed = {
  Ahmed1:1,
  Ahmed2:2,
  Ahmed3:3
}

// write an object has at least 3 attributes (keys) and give each one a string value

let Ahmeed = {
  Ahmed1:'EMRAN',
  Ahmed2:'ALI',
  Ahmed3:'ABU-RUMMAN'
}

// console.log(Ahmeed);

// write an object has at least 3 attributes (keys) and give each one a Boolean value
let Obj = {

  Sadi:true,
  Dania:true,
  lana:false

}

console.log(Obj)

// write an object has at least 3 attributes (keys) and give each one an array value

let Objs = {
  NANI:['NANI-YES','NANI-NO'],
  GG:  ['GG-YES','GG-NO']
}
console.log(Objs);

// write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
let Objss = {


    JS : {Library:'React'     , Version:'5'},
    PHP: {Framework:'Larabel' , Version:'5.8'}
  }

// Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object

let Objsss = {
   NAME   : "AHMED",
   AGE    :  25,
   MOODY  : true,
   HOBBIES: ['SWIMING','SAJAYAAAAAAAAT','GYM !!'],
   INTERSET:{ BESTMOVIE:'GODFATHER' , BESTSERIER:'GOT' }
}

// Write an array of objects

let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
 
]

// write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object



// Write a function to sum two numbers passed in parameters

const num1 = 5;
const num2 = 3;

const sum = num1 + num2;


// write a function to multiply two numbers

const sum1 = num1 * num2;

//write a function to sum two numbers entered by user
/* var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var sum = (a+b);
  
       console.log('\n');
       console.log('The sum of ',a, ' and ',b, ' is ' , sum,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});
 */
//write a function to multiply two numbers entered by user
/* var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('\n');
console.log('Multiply of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var multiply = (a*b);
  
       console.log('\n');
       console.log('The multiply of ',a, ' and ',b, ' is ' , multiply,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
}); */
//Write a function to return a value
function myData() { 
  return 123; 
} 
/* console.log(myData()); */ // 123 
//Write a function to print a value
function hello(name) {
  console.log("hello " + name);
}
hello("All !! ");