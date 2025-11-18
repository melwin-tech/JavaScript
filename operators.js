//  OPerators in js

// operators are used to perform some operation on the operands.
// In js there are three types of operators ie unary,binary,teranry 

// Arithmetic operators (+,-,*,/,%,**)(binary)
let a = 10
let b = 5
console.log("a="+a)
console.log("b="+b)
console.log("a+b="+(a+b))
console.log("a-b="+(a-b))
console.log("a*b="+(a*b))
console.log("a/b="+(a/b))
console.log("a%b="+(a%b))
console.log("a^b="+(a**b))

// Assignment operators (+=,-=,*=,/=,%=,**=)(unary)
let i = 5
console.log("i="+i)
console.log("i+1 = "+(i+=1))
console.log("i-1 = "+(i-=1))
console.log("i*1 = "+(i*=1))
console.log("i/1 = "+(i/=1))
console.log("i%1 = "+(i%=1))
console.log("i^1 = "+(i**=1))

// comaparision operators (>,<,>=,<=,==!=)(binary)(returns boolean values)
let x = 20
let y = 10
console.log("x="+x)
console.log("y="+y)
console.log("x>y = "+(x>y))
console.log("x<y = "+(x<y))
console.log("x>=y = "+(x>=y))
console.log("x<=y = "+(x<=y))
console.log("x==y = "+(x==y))
console.log("x!=y = "+(x!=y))

// logical operators (&&,||)(binary) and (!)(unary)
let m = 0
let n = 1
console.log("m="+m)
console.log("n="+n)
console.log("m && n = "+(m&&n))
console.log("m || n = "+(m||n))
console.log("!m = "+(!m))
console.log("!n = "+(!n))

// bitwise operators (&,|,~,^)(binary)
let l = 5
let e = 1
console.log("l="+l)
console.log("e="+e)
console.log("l & e = "+(l&e))
console.log("l | e = "+(l|e))
console.log("~l = "+(~l))
console.log("~e = "+(~e))
console.log("l ^ e = "+(l^e))

// increament and decreament operators

// 1. preincreament or predecreament
let j = 5
console.log("j= "+j)
console.log("j="+(++j))
console.log("j= "+(--j))

// 2. postincreament or postdecreament
let o = 6
console.log("o= "+(o))
console.log("o="+(o++))
console.log(o)
console.log("o= "+(o--))
console.log(o)