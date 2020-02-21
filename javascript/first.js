//Visual studio code -- is text editor for any opensource programming ( Angular, Node, React, Python )
//GitHub account
//NodeJS -- when we do development of a REACT appln, we need to develop over Node server. 
//		  npm - node package manager
		  
//javascript file -- JS u cannot execute directly like html file.. you need to run over the server ( node) Or you can copy and run on console.
//As JS have multiple versions. We call ECMA Script ..
//ECMA Script  5 -- is the older version of JS
//ECMA Script  6 -- is the newer version
//Base library for scripting

//==> REACT is base over the ECMA Script 6.

//JS Variables
1. var -- es5
2. let
3. const

//1. var:
compiler run 2 times..We can redeclare variable and we can reassign variable.

2. let: //es6
with the let, we cannot redeclare but can reassign.
let a=10

3. const
const d = 11
d =12
==> we cannot redeclare but nor reassign

In REACT coding - we use let and const only..

JS propose 3 datatypes:
-------------------------
String
Number
boolean

String ==>  Anything in double quotes or single quotes is your string.
Ex: "2345667", 'dffgghh', "sfffdgdg", 'true'

Number ==> Anything in numeric value is Number.
Ex:- 10, 23423435534, 735.3345345, 345345346636364

boolean ==> true and false ==> true = 1; false = 0

-------------------------
var x = "john"
typeof(x) -- rerurns "string"

var x = 10.99
typeof(x) -- returns "number"

var x = 10
typeof(x) -- returns "number"

var x = true
typeof(x) -- returns "boolean"

typeof()  -- is operator tells what type of data is.

//Operations
var a = 10
var b = 2
a+b
a-b
a*b
a/b
a%b -- modulus -- o/p of modulus is reminder
10%3 reminder is 1

b%a --> 2 ( if you take smaller by bigger always output is smaller).. there is no concept of carry..
whenver you divide smaller by bigger, always output will be smaller.
bigger by smaller - you get actual value

----------------------------------
var a = "Hi"
var b = "Javascript"
If you use string with + operator -- It will do concatenation
If you use + with number -- It will add.
-----------
String with number:
var c = 10
a+c --> "Hi 10"
c+a --> "10Hi"

===> String + String --> is String
===> String + Number  --> is string
===> Number + String --> will give you String
===> Number + Number --> is Number

O/p of these values:
---------------------
10+10+"10" --> "2010"
"10"+10+10 --> "101010"
10+"10"+10 --> "101010"

10+10+"10"-1 --> 2009 ( reason for this is --> 2010 -1 = 2009 ()
string - Number --> is Nan
"a"-1 --> is NaN

If in between the quotes/string there is a numeric value, if you subtract something ( any mathematical operations) from there it will be Number.
"10"-1 --> o/p is 9
"10"*2 --> 20
"a"*2 --> is NaN
"10a"-1 --> is NaN

-------------------------------------
//ES5 way
var a = 10
var b = "My age is "+a
o/p --> "My age is 10"

OR 

//ES6 way  -- using string literal - use dactic operator
var a = 10
var b = `My age is ${a}`
o/p -->  "My age is 10"

//Function
//ES5 way
function add(a,b){
	return a+b
}
add(1,2)

OR 

//ES6 way:
const add = (a,b) => {return a+b}
add(1,2)

How to write in a class way: ( class based component)
-----------------------------
In a class we write a constructor to declare anything.
In a Javascript, either you write a thing in the form of Functions or in the form of class ..both are same..
class gives you constructor, super keyword..
// constructor is the first keyword that execute inside the class.

class Add {
	constructor(a, b){ 
	   this.sum = a+b
	} 

}
var sum = new Add(1,2) -- How to call 

JSON:-
--------
is a JavaScript Object Notation
Its a key-value pair of data.
It quite easy to read. JSON format.
{
	name:"a",
	class:"b"
}
we can have more than jSON object also..we can put in array to have multiple JSON objects.
{
	{
		name:"a",
		class:"b"
	},
	{
		name:"a",
		class:"b"
	}
}

//Packagon.json ( In JS framework)
It is most very important file
Every appln has its own Packagon.json file.
This will give me starting point of appln, Description, package management, version control ..etc

How to create a Packagon.json ?
-------------------------------------
//step to create Packagon.json:
** NodeJs must be installed
> navigate to the folder using cmd
> npm init
> Answer all questions
> type "Yes"


//Local package
//Global package
//React
//Map
//Filter
//classes