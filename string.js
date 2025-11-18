//  strings in js

// strings are the data type in javascript

let a = "Melwin"
console.log(a)
console.log(typeof(a))

// String methods

let c = "Melwin"
console.log(c)
console.log("length: "+c.length) // returns length of a string
console.log("char at 0: "+c.at(0)) // returns character at position
console.log("char at 0: "+c.charAt(0)) //returns the ufi -16 code of the character at position
console.log("code of char at 0: "+c.charCodeAt(0)) // returns character at position
console.log("char at 0: "+c[0]) // returns character at position
console.log("slicing from start: "+c.slice(4))//returns the string character from 0 to given position
console.log("Slicing from back: "+c.slice(-4))//returns the string character from last index to given position
console.log("substring: "+c.substring(1,4))//returns a sub part of the string
console.log("uppercase:"+c.toUpperCase())// coverts all character in uppercase
console.log("lowercase: "+c.toLowerCase())// coverts all character in lowercase
let d = "Dsouza"
console.log("conactenation: "+c.concat(" ",d))//merges two or more string
let e = "   Hello   World  "
console.log(e)
console.log("Trimming: "+e.trim())// remove blank spaces from string
console.log("Trimming from start: "+e.trimStart())//removes blank spaces from only start of the string
console.log("Trimming from end: "+e.trimEnd())//removes blank spaces from only end of the string
let f = "Hello world!"
console.log("repeat: "+f.repeat(3))// creates the copies of the string as many times the count is given
console.log("Replacing world with javascript: "+f.replace("world","Javascript"))// replace a text with another text
let g = "cats dogs cats monkey"
console.log(g)
console.log("Replacing all cats by dogs: "+g.replaceAll("cats","dogs"))// replaces multiple character given at once

// String search methods
let h = "Please visit to our stores nearby avilable stores."
console.log(h)
console.log("Index of the word visit: "+h.indexOf("visit"))// returns the starting index of the first occurence of the string and returns -1 if the string is not found
console.log("last index of the string: "+h.lastIndexOf("visit"))//returns the starting index of the last occurence of the string and returns -1 if the string is not found
console.log("search of stores: "+h.search("stores"))//returns the index if found and if not found returns -1
console.log("Matching the string stores: "+h.match("stores"))//returns array of the given character if match is found at first occurences.
console.log("Matching all string with stores: "+h.matchAll("stores"))//returns array of the given character if match is found at all occurences.
console.log("Include the string stores: "+h.includes("stores"))//return true if the given string is present in the main string else return false
console.log("Startswith visit :"+h.startsWith("visit"))// return true if the main string starts with the given string else return false
console.log("Endswith visit :"+h.endsWith("stores."))// return true if the main string ends with the given string else return false

