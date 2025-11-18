// variable scoping

// In javascript there are three types of variable scope global,function,blocked 

// 1. global  scope
// in global scope the variable are declared globally and can be accessed from any where. it applies for all let var const keyword.

const a = 10 // declaring globally

console.log(a)              

function global(a){
    console.log(a)
}
global(a)

if(true){
    console.log(a)
}

// 2.functional scope
// a variable decalred inside the function is not acessible outside the function.it apply for all let var and const keyword

function asd(){
    console.log("Hello")
    const b  = 20
    console.log(b)
}
asd()// executable
console.log(b)//error

// 3. blocked scope { spece ko bolthe hai block scope}
// a variable decalred inside the function is not acessible outside the function.it apply for only let and const keyword. by using var you can access the variable outside the block also

if(true){
    let c = 34
    console.log(c)
}
console.log(c)









