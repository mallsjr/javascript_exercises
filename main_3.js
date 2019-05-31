/*
Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
//Testing
/*let today = new Date();
console.log('today is: ' + today);
console.log("Month: " + today.getMonth());
console.log("Date: " + today.getDate());
console.log("Year: " + today.getFullYear());
*/

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
}

today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);