//  callback in java script

// A callback is a function passed as an argument to a another function.

// why callback are used ?
//  the main reason to use the callback metthod is to have a better control over the function because in the js the function are not executed in the way they are describe or call
// ex
// 1. method
// function myDisplayer(x){
//     console.log("The result is: "+x)
// }
// function myClaculator(a,b){
//     return a+b
// }
// let result = myClaculator(5,5)
// myDisplayer(result)
// 2. method
// function myDisplayers(x){
//     console.log("The result is: "+x)
// }
// function myClaculators(a,b){
//     let result = a+b
//     myDisplayers(result)
// }
// myClaculators(5,5)

//  in method 1 we have called function two times and we can have the control over both the function whether we want to invoke it or not but the problem is that we need to call the function two times which reduces the performances of the code.

// in method 2 we have call only one function but we have lost the control over the second function as its is nested it will definitely be executed.

// in both method we have a problem related to the control of the function.

// callback


