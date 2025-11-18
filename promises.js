// promises in javascript

// The promise is the object reperesents the event completion or failure of an asynchronous operation and its returning value.
// the promise has two states 1. resolve 2.reject 
// 1.resolve means the promise made is fulfiled (ie the async code passed) and you can operates any piece of the function on it using then()
// 2.return means the promise made is reject (ie the async code passed) and you can catch the error by using the catch(){}

// syntax 
// new promise_name((resolve,reject)=>{})

function sayMyName(){
    console.log("Melwin")
}
let firstpromise = new Promise((resolve,reject)=>{
    setTimeout(sayMyName,10000);
    resolve(100)
})
console.log(firstpromise)

// Then and catch and finally
 
let promise1 = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve("Promise fulfiled")
    }else{
        reject("Promise rejected")
    }
})
console.log(promise1)
promise1.then((message)=>{
    console.log("The message is: "+message)// then works with resolve
}).catch((error)=>{
    console.log("The error is: "+error)// catch works with reject
}).finally(()=>{
    console.log("Mai toh paka chaulnga")// works irrespective of the resolve nad reject
})

// you can put multipe then and finally blocks 

let promise2 = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve("Promise fulfiled")
    }else{
        reject("Promise rejected")
    }
})
promise2.then((message)=>{
    console.log("The first message is: "+message)
    return "Promise fulfilled second message"
}).then((message)=>{
    console.log("The second message is: "+message)
    return "Promise fulfilled third message"
}).then((message)=>{
        console.log("The third message is: "+message)
})
//  you can do similarly with catch and finally block

// Handling Multiple promises in one time
let promise5 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
})
let promise6 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second")
})
let promise7 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third")
})
Promise.all([promise5,promise6,promise7]).then((values)=>{
    console.log(values)
})
Promise.all([promise6,promise5,promise7]).then((values)=>{
    console.log(values)
})

