let num = 42;
let firstName = "Marat";
const isProgrammer = true;

/* Can do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' // bad
let myNum = 34 // good
let num = 10
*/

/* Restricted
 let 42num = '11'
 let my-num = 1
 let const
 */

// firstName = "Max";
//isProgrammer = false; // error because of const

// alert(firstName)
// console.log('Test:', num, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3)

// const fullName = firstName + 'Fa'
// const fullName = firstName + ' ' + 'Fa'

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");

// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2) / num

// console.log(typeof sum);

submitBtn.onclick = function () {
  const sum = Number(input1.value) + Number(input2.value);
  resultElement.textContent = sum;
};
