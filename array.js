//  Array in javascript

// array are the special data type which can hold more than one items in it

// decalring and initializing an array
// 1. 
const fruits = []
fruits[0]="mango"
fruits[1]="apple"
fruits[2]="grapes"
console.log(fruits)
// 2.
const num = [1,2,3,4,5]
console.log(num)
console.log("data type of fruits and num is: "+typeof(fruits))

const arr = [1,"Melwin"]
console.log(arr)

// Array methods

const a =  [23,45,67,11,2,13]
console.log(a)
console.log("The length of the array is: "+a.length)// returns the no of the elemnts in the array
console.log("Array in th string formaat: "+a.toString())// converts the array into string
console.log("Element at index 2: "+a.at(2))// returns  the element at the given index
console.log("Array joins: "+a.join())//
console.log("pop at array: "+a.pop())// removes the last elements from the array
console.log(a)
console.log("push at array: "+a.push(13))//adds the element to the last of the array
console.log(a)
console.log("Shift in array: "+a.shift())//removes the first elements from the array and lower the index of the rest of the elements
console.log(a)
console.log("Unshift in array: "+a.unshift(23))//adds the elements at the begining of the array and higher the index of the rest of the elements
console.log(a)
console.log("Delete in array: "+delete[0])//returns the elements deleted at ethe specific index
console.log(a)
let b = [1,2,3,4,5]
let c = [6,7,8,9,10]
console.log(b)
console.log(c)
console.log("Conactenation of b and c: "+b.concat(c))// merges two or more array
const d = [
    [1,2],[3,4],[5,6]
]
console.log(d)
console.log("Flatenning the array: "+d.flat())//returns a new array with the one-d 
const e = ["Mango","Apple","Watermelon","Banana"]
console.log(e)
console.log("Splicing the array: "+e.splice(1,0,"Grapes","Kiwi"))//here no elemets are deleted but at index 1 two elements are added
console.log(e)
console.log("Splicing the array: "+e.splice(1,2,"orange","berries"))//here 2 elemets are deleted but at index 1 two elements are added
console.log(e)

// Search Methods
let x = [67,78,55,45,78,99,34,55,100]
console.log(x)
console.log(" first Index of 55: "+x.indexOf(55))
console.log(" last Index of 55: "+x.lastIndexOf(55))
console.log(" includes of 55: "+x.includes(55))

// Sort Methods
let y = [67,78,55,45,78,99,34,55,100]
console.log(y)
console.log("Asscending order: "+y.sort(function(a,b){return a-b}))// first apply sort with comparsion function in it and changes the orignal array , so always use the tosorted() method for sorting
console.log("Descendfing order: "+y.sort(function(a,b){return b-a}))//first apply sort with comparsion function in it and changes the orginal array ,so always use the tosorted() method for sorting
console.log(y)
console.log("Reverse of array: "+y.reverse())// reverser the elements of the array and changes the orginal array so its recomended to use the toreversed() method in it
console.log(y)
console.log("Minimum element of the array: "+Math.min.apply(null,y)) 
console.log("Maximum element of the array: "+Math.max.apply(null,y)) 

// map and filter methods

// map (it is the method by which we can put a function on array ehich returs a new array we want)
let arry = [100,200,300]
console.log(arry)
const earay = arry.map(function square(number){
    return number*number
})
console.log(earay)

// filter
let r = [1,2,3,"Melwin",true]
console.log(r)
// now i want only the number to be printed
const nr = r.filter((values)=>{
    if(typeof(values)=='number')
        return true
    else
        return false
})
console.log(nr)