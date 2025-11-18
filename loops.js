// loops 

//  loops are used for the execution the statements based on the condition and n number of times.

//  for loop
for(let i = 1; i<=10 ;i++){
    console.log(i+". Hello world")
}

// for in loop
const num = [45,3,46,7,4]
for (let x in num){
   if(x == 3){
        console.log("The number is found ")
   }
}

// for of loop
let language = "Javascript"
for(let y of language){
    if( y == "v"){
        console.log("The character is found in the language")
    }
}

// while loop
let k = 1
while(k<=10){
    console.log(k+". Hello world javascript")
    k++
}

//  do while
let j = 0
do{
    console.log("Hello")
}while(j>0) //here condition fails but because of the do while atleast one all the statement of the do block will be executed.

// break statement
for(let c=0; c<=10; c++){
    console.log(c+". Hello")
    if(c==3){
        break
    }
}

// continue
for(let g=0; g<=10; g++){
    if(g==3){
        continue
    }
    console.log(g+". Hello") // 3 no aprt is skip over here
}