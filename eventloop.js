// Event loop

// 1. Remember that the putting event in the for or while loop is not the event loop.

// before learning the about the event loop lets learn few concept about the synchronous code and asynchronous code

// 1. synchronous code
// synchronous code is the block of the code in which the execution of the code happens instantly ie without any delay when the interpreter comes to that line of code.
// ex:
console.log("Hello")
console.log("My name is love babbar")
// this two line is type of the sync code  because as the execution of "My name is love babbar" will occur immediately after the execution of the "Hello".

// 2.asynchronous code
// asynchronous code is the block of the code in which the execution of the code happens instantly ie with any delay when the interpreter comes to that line of code.
// ex:
function sayMyName(){
    console.log("My name is Love babbar")
}
setTimeout(sayMyName,5000)
// if dont use the setTimeout function the code will run as sync code and the program will take the time of 0.204 sec but as soon as the setTimeout function is used the first two line is of the sync code and the function is under the async code and the program will take the time of    5.224 sec

// one most important this is that the duration is not fixed ie the function might executed at exact 5 sec after or 6 sec or 10 sec or any sec we dont know about any time when will the executed. but its is sure that before duration it will not be executed. 

// as async code is needed but there is one big problem associated with it .
// ie the blocking the the lines of code below it . the below lines needs to waits for the completion of the the above code. 
// to overcome this problem we have the event loop.

//  Now let us understand what is event loop now.
// The most important content of the even loop is call stack, browser, callback queue
//  how it works

// 1. console.log("Hello")
// 2. function sayMyName(){
// console.log("My name is Love babbar")
// }
// setTimeout(sayMyName,5000)
// 3. console.log("My name is love babbar")

//  her above what we have is the mixture of sync and async code how to avoid the problem of the blocking lets see

// first the line no 1. will go into the call stack as it is sync it will execute immediately and pop out now the line no 2 will go into the call stack as it is async it will be send to the broswer of the duration mention in settimeout function and it will remain the browser untill all the durationis commpleted sinnce the call stack is emty the line 3 enter and starts its execution as it is sync code as soon as the duration of the line 2 is completed it is then send to the call back queue it waits in the queue for emptying the call stack as soon as the call stack is empty it will then pass line no 2 to call stack it will now directly execute the since the duration is completed.so all three line of code is successfully without any blocking.

// the reason for not knowing the exact time after which the async code will be executed is because we dont know how much time the code will remain the call back queue.



