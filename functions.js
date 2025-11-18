//  Functions and recursive function in javascript

// function 
// It is the block of statement executed when it it is call by using parameter or reference

/*
basic syntax of the function:
function function_name(parameter1,parameter2,..){
    statements
}*/

// function to print maximum of two number
function maxim(a,b){
    a>b?d=a:d=b
    return d
}
let x = maxim(3,4)
console.log("The maximum of two no is: "+d)

// function to print minimum, of two number
function minim(a,b){
    a>b?e=b:e=a
    return e
}
let y = minim(3,4)
console.log("The minimum of two no is: "+e)

// function to print sum of first 10 natural no
function sum_of(){
    let sum=0
    for(let i =0 ; i<=10; i++){
        sum+=i
    }
    return sum
}
console.log("The sum of first ten natural no is: "+sum_of())

// function to print factorial of a number
function fact(n){
    let product = 1
    for(let j = n ; j>=1; j--){
        product*=j
    }
    return product
}
console.log("The facorial of the 5 is: "+fact(5))

//function to print fibonacci series 
function fibonacci_series(n){
    const fib = [0,1]
    for(let i = 2; i<n; i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log("The fibonacci series upto 10 is: "+fibonacci_series(10))

// functions as expression
const c = function (a,b){return a*b} //here c is the function name
let z = c(2,3)
console.log(z)

// function hoisting
console.log(myfunction(5))
function myfunction(y){
    return y*y
}

// self invoking functions
(function (){
   console.log("Hello")
})()

// Arrow functions
const r = (a)=>{
    for(let i = 1; i<=a; i++){
        console.log("Hello javascript")
    }
}
r(10)

// Function parameters

// 1. default parameter
function my(x,y){
    if(y==undefined){
        y=2
    }
    return x*y
}
console.log("The product of: "+my(5))

function mys(x,y=2){
    return x*y
}
console.log("The product is: "+mys(5))

// 2. function rest parameter here the no of parametr is indefinite
function sumation(...args){
    let sum=0;
    for(let k of args){
        sum+=k
    }
    return sum
}
let m = sumation(1,2,3,4,5,6,7,8,9,10)
console.log("The sum of first 10 natural numbers: "+m)

// Invoking functions

// 1. function as function
const l = (a,b)=>{
    return a*b
}
console.log("The product of the two no is: "+l(2,6))

// 2. function as methods
const mysd = {
    firstname : "Melwin",
    lastname : "Dsouza",
    fullname : function(){
        return this.firstname+" "+this.lastname
    }
}
console.log(mysd.fullname())

// function calling

// 1. call() method
const mysdf = {
    firstname : "Melwin",
    lastname : "Dsouza",
    fullname : function(){
        return this.firstname+" "+this.lastname
    }
}
const person1 = {
    firstname : "Jhon ",
    lastname : "Doe"
}
const person2 = {
    firstname : "Mary",
    lastname : "Dsouza"
}
console.log(mysdf.fullname.call(person1))
console.log(mysdf.fullname.call(person2))

// 2. call() method with parameter
const persons = {
    firstname : "",
    lastname  : "",
    details : function(city){
        return this.firstname+" "+this.lastname+" "+city
    }
}
const persons1 = {
    firstname: "Melwin",
    lastname : "Dsouza"
}
console.log(persons.details.call(persons1,"Mumbai"))

// bind in function is same as the call but used when we used callback in the backend

// Recurrsive function

// a function which call itself is a recurrsive function

// 1. factorial of number using recusssion
function fact(n){
    if(n==0)
        return 1
    else if (n==1)
        return 1
    else
        return n*fact(n-1)
}
console.log("The factorial of the no 5 is: "+fact(5))

// 2. fibonacci series using recursion
function fibo(n){
    if(n==0)
        return 1
    else if (n==1)
        return 1
    else
        return fibo(n-1)+fibo(n-2)
}
console.log("The fibonacci series of the first 10 no is: ")
for(let p = 1; p<=10; p++){
    console.log(fibo(p))
}
  

// functions as a first class citizen
// It is call because you can do the follwing things with the functions in java script
/*
1. assining to variable
2.pass as an argument
3.return function for another function.
4.use in dsa
5.use it as property for ojects
*/

//1. Assignment to a variable
function prints(word){
    return word
}
const p = prints("Melwin")
console.log(p)

// 2. function inside function (passing function as an argument to another function)
function name(greeting,name){
    console.log("Hello"+" "+name)
    greeting()
}
function greeting(){
    console.log("Greetings of the day.")
}
name(greeting,"Melwin")

// 3. return function for another function
function solveit(number){
    return function(number){
        return number*number
    }
}
let ans = solveit(5)
let finalans = ans(5)
console.log("The square of the bnumbwer 5 is: "+finalans)

//4. dsa
const arr = [                     
    function(a,b){             // array elements are now functions
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    },
    function(a,b){
        return a/b
    },
    function(a,b){
        return a%b
    }
]
let k = arr[0]
let ans1 = k(5,5)
let k1 = arr[1]
let ans2 = k1(5,5)
let k2 = arr[2]
let ans3 = k2(5,5)
let k3 = arr[3]
let ans4 = k3(5,5)
let k4 = arr[4]
let ans5 = k4(5,5)
console.log(ans1)
console.log(ans2)
console.log(ans3)
console.log(ans4)
console.log(ans5)

//5. function as property in objects 
let obj = {
    age:25,
    wt:36,
    ht:172,
    greet1:()=>{
        console.log("Hello dunia")
    }
}
console.log(obj.age)
obj.greet1()

