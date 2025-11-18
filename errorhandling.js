//  Error handling

//  errror is of two types 
// 1. compile time error(occurs at the time of compiling the code(writing code in vs code gives you a hint of it))
// 2. run time error(occurs at the time of running the code(after sucessfull compile by the compiler))

// error are handeled by using the follwing way in javascript

// using try catch finally and throw

try{
    // write here the statements which can cause error.
    console.log("Try block starts here");
    console.log(x);// error statement hai
    // lines below the error stements are not executable in the try block if we want we can pass it to catch block
    console.log("Try block ends here.");// this line will not be executed here
}catch(e){
    // write here the what to when error occured
    console.log("Try block ends here.");
    console.log("Catch block starts here.");
    console.log("The error occured is: "+e);
    console.log("Catch block ends here");
}finally{
    // code here will execute everytime whenever there is error or not .
    console.log("Finally block starts here");
    console.log("Finally block ends here");
}
// process is like this 
//  if error occured then try -> catch -> finally
// if error not occured then try -> finally

//  throw keyword is used to throw our own error type

try{
    console.log(y);
}catch(e){
    throw new Error("Bhai first decalare it and then use it");
}