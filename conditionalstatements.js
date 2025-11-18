// conditional statements

// conditional statements are used for execution of a block of statements depending on the condition they meet.

// if statement
let a = 9
if(a>0){
    console.log("a is positive no where a = "+a)
}

// if-else statements
let age = 18
if(age>=18){
    console.log("You are eligible to vote.")
}else{
    console.log("You are not elligible to vote.")
}

// else-if statements
let marks = 85
if(marks>90){
    console.log("Grade A")
}else if(80<marks<=90){
    console.log("Grade B")
}else{
    console.log("Grade C")
}

// switch case
let x = 0
switch(x){
    case 0:
        text="Off"
        break
    case 1:
        text="On"    
        break
    default:
        text="Error"
}
console.log("The condition of the bulb is "+text)


// condtional operator or ternary operator
let ages = 18
ages>=18?(console.log("You are eligible to vote.")):(console.log("You are not elligileble to vote"))