console.log("Hello World !!! this is an example of javascript using other file");

// variables conventions and types:
var firstName = 'Bernard Shaw';

var age = 45;
var isDead = true;
var msg = "hi from the other dimension";


console.log(firstName);
console.log(age);
console.log(isDead);
console.log(msg);

var exp;

console.log(exp);

exp = 22;
console.log(exp);

/* 

mutiple line comments
*/


// variable examples
/*

variable are declared above and we are going to to manipulate them below.
*/
// variable mutation and type coercion

// type coercion 
console.log(firstName + ' ' + age);
/*
the line above is example of type type coercion.
Type coercion is the process of converting value from one type to another 
(such as string to number, object to boolean, and so on). 
Any type, be it primitive or an object, is a valid subject for type coercion. 
To recall, primitives are: number, string, boolean,null, undefined + Symbol (added in ES6).

As an example of type coercion in practice, look at the JavaScript Comparison Table, 
which shows how the loose equality == operator behaves for different a and b types.
 This matrix looks scary due to implicit type coercion that == operator does, and 
 it’s hardly possible to remember all those combinations. And you don’t have to do 
 that — just learn the underlying type coercion principles.

This article goes in-depth on how type coercion works in JavaScript, and will arm 
you with the essential knowledge, so you can feel confident explaining what following 
expressions calculate to. By the end of the article I’ll show answers and explain them.

true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0


Consider this list as a learning exercise to test your knowledge on how type coercion works. 
If you’re bored, you can find more examples on wtfjs.com.
*/

/* 
typesof coercion:

implicit:
Since JavaScript is a weakly-typed language, values can also be converted between different 
types automatically, and it is called implicit type coercion. It usually happens when you apply 
operators to values of different types, like
1 == null, 2/’5', null + new Date(), or it can be triggered by the surrounding context, 
like with if (value) {…}, where value is coerced to boolean.

One operator that does not trigger implicit type coercion is ===, which is called 
the strict equality operator. The loose equality operator == on the other hand does 
both comparison and type coercion if needed.

Implicit type coercion is a double edge sword: it’s a great source of frustration and 
defects, but also a useful mechanism that allows us to write less code without losing 
the readability.





explicit:
When a developer expresses the intention to convert between types by writing the appropriate code, 
like Number(value), it’s called explicit type coercion (or type casting).
*/

// for example and detail analysises please follow the link below
/*
https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
*/


console.log('my name is ' + firstName + 'and my age: ' + age);
console.log('is' + firstName + ' dead? ' + isDead);


//variabe mutation


age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job);

/*

When you mutate a variable you are modifying the original value.
 An example of this would be to re-assign the age variable:
age = 'twenty eight';
As the variable was previously assigned you do not have to use the var keyword. 
This time we are are assigning a string value to it, but JavaScript automatically 
detects the data type and changes it ‘on the fly’.
 */
alert('my name is ' + firstName + 'and my age: ' + age);
var ans = prompt("Are you serious about this course?");