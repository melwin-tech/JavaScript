//  hoisting
// hoisting is the process of var and function decalation which shifts it the top the scope.


// 1.function hoisting
// in normal case we first declare the function and then call the function which not throws an erorr.
// but we can also do that ki first call the function and then declare it buy the help of hoisting.
// Its not applicable on the when we use function as expression.

sayMyName("Melwin") // calling the function before declartion

function sayMyName(fullname){
    console.log("My nmae is : "+fullname) //declaration of the function after calling the function
}



// 2.var keyword hoisting
// in normal case we first declare the variable using var keyword and then use the varible which not throws an erorr.
// but we can also do that ki first use the varible and then declare it buy the help of hoisting.
// Its not applicable on the when we use let or const.


console.log("My favourite color is: "+colour) // using the varible before declaring it
var colour = "Black" // declaring the variable after using it.

//It will not throw an error but it wiil give you the value of the varible as undefined as only the declaration is considered not the value.


