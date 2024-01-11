"use strict"; //treat all JS code as new version

// alert("Jeewan") //we are using nodejs not browser

// code readibity is important 
console.log(4+4)
console.log("jeewan")

let name = "Jeewan"
let age = 18
let isLoggedIn = false
let cal;

/*
Datatypes in JS are
1. number
2. bigint
3. string
4. boolean
5. null => standalone value
6. undefined
7. symbol => unique
*/

console.log(typeof age)
console.table([typeof name , typeof isLoggedIn, typeof cal ])


//Datatypes Conversions

let score = "33abdh"
let a = null
let b = undefined
let c = 33

console.log(typeof score)
console.log(typeof (score))

//converting string into a number
let num = Number(score)
console.log(typeof num)
console.log(num) //this gives a NaN (Not a number)

let num2 = Number(a)
console.log(typeof num2)
console.log(num2)

let num3 = Number(b)
console.log(typeof num3)
console.log(num3)

let num4 = String(c)
console.log(typeof num4)
console.log(num4)

let isLoggedIn2 = 1

let num5 = Boolean(isLoggedIn2)
console.log(typeof num5)
console.log(num5)

let sf = "" // false or 0;
let num6 = Number(sf)
console.log(typeof num6)
console.log(num6)



//Operations

let val = 3;
let negativeVal = - val;
console.log(negativeVal)

let str1 = "Jeewan"
let str2 = " Aidi"

let str3 = str1 + str2
console.log(str3)

console.log("Hello" + 1)
console.log(1 + "hello")
console.log("Hello" + 1 + 3) // when we add after string they don't perform the addition (Hello13)
console.log(1 + 3 + "Hello") // when we add before the string they perform the addtition (4Hello)




//Comparison of Datatypes

console.log(2==2)
console.log("3" == 0)
console.log("3" > 3)

console.log(null > 0)
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);

//Primitive Datatypes : string , number, boolean, null, undefined, symbol, bigInt
//Non primitive Datatypes : Array, Object , function

//Memory Allocation
//stack (primitive datatypes) yo ma copy milxa ra value change garda hunna
//heap (N0n primitive datatypes) yo ma referenece milxa value change garda change hunxa

let name1 = "Jeewan"
let name2 = name1
name2 = "Aidi"

console.log(name1)
console.log(name2)

let detail = {
    name: "Jeewan",
    age: 20
}

let detail2 = detail

detail2.name ="Aidi"

console.log(detail)
console.log(detail2)