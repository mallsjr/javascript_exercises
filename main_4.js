/* 
Write a JavaScript program to find the area of a triangle 
where lengths of the three of its sides are 5, 6, 7
*/

let a = 5;
let b = 6;
let c = 7;

let s = (a+b+c)/2

let area = Math.sqrt((s)*(s-a)*(s-b)*(s-c));

console.log("The area of the triangle is: " + area);