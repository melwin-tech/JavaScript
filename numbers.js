// numbers 

// Numbers is the data type in js 

// declaration of the number with and without the decimal point
let a = 3
let b = 3.14159
console.log(typeof(a))
console.log(typeof(b))

// methods in numbers 

//  CONVERSION OF A NUMBER INTO THE STRING

// 1. tostring (returns string)
let x = 123
console.log(x)
console.log(typeof(x))
let y = x.toString()
console.log(y)
console.log(typeof(y))

// 2. toexponetial (returns string)
let c = 9.656
console.log(c)
console.log(typeof(c))
let d = c.toExponential(2)
console.log(d)
console.log(typeof(d))
let e = c.toExponential(4)
console.log(e)
console.log(typeof(e))
let f = c.toExponential(6)
console.log(f)

// 3. tofixed (returns string)
let g = 3.14159
console.log(g)
console.log(typeof(g))
let h = g.toFixed(2)
console.log(h)
console.log(typeof(h))
let i = g.toFixed(4)
console.log(i)
console.log(typeof(i))
let j = g.toFixed(6)
console.log(j)
console.log(typeof(j))

// 4. toprecision (returns string)
let k = 9.656
console.log(k)
console.log(typeof(k))
let l = k.toPrecision(2)
console.log(l)
console.log(typeof(l))
let m = k.toPrecision(3)
console.log(m)
console.log(typeof(m))
let n = k.toPrecision(4)
console.log(n)
console.log(typeof(n))

// 5. valueof (returns numbers)
let o = 4.567
console.log(o)
console.log(typeof(o))
let p = o.valueOf()
console.log(p)
console.log(typeof(p))

// CONVERSION OF A STRING TO NUMBER

// 1. Number (returns number)
let q = "10"
console.log(q)
console.log(typeof(q))
let r = Number(q)
console.log(r)
console.log(typeof(r))
let s = "Melwin" // it cannot be converted so the nan
console.log(s)
console.log(typeof(s))
let t = Number(s)
console.log(t)
console.log(typeof(t))

// 2. parseint 
let u = "-10"
console.log(u)
console.log(typeof(u))
let v = parseInt(u)
console.log(v)
console.log(typeof(v))
let w = "10 20 30"
console.log(w)
console.log(typeof(w))
let X = parseInt(w)
console.log(X)
console.log(typeof(X))

// similar way can be done with parsefloat

//  Properties of a number in javascript

// 1. epsillon (returns the differernce between a no greater than 1 and 1)
let A = Number.EPSILON
console.log(A)

// 2. Max_value
let B = Number.MAX_VALUE
console.log(B)

// 3. Min_value
let C = Number.MIN_VALUE
console.log(C)

// 4. Max_safe_interger
let D = Number.MAX_SAFE_INTEGER
console.log(D)

// 5. Min_safe_integer
let E = Number.MIN_SAFE_INTEGER
console.log(E)

// 6. Positive_infinity
let F = Number.POSITIVE_INFINITY
console.log(F)

// 7.Negative_infinty
let G = Number.NEGATIVE_INFINITY
console.log(G)

// 8. Nan
let H = Number.NaN
console.log(H)