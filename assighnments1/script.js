//if-else:

//Q1)check  if a number is odd or even and print on console?

// let number = +prompt("Enter The number:");
// if(number % 2 == 0){
//     console.log("The number is Even");
// }else{
//     console.log("The numner is odd");
// }


//Q2. Find the largest of two number(nested if)

// function largest(a,b){
// if(a>b){
//   console.log("a is larger")
    
// }else{
//   console.log("b is larger")
  
// }
// }
// largest(600,200);


//Q3. Perform arithmetic operations on two numbers
// let no1 = 34;
// let no2 = 45;
// console.log(no1+no2);
// console.log(no1-no2);
// console.log(no1*no2);
// console.log(no1/no2);


//for loop:-

//Q1) Write a JS code to print numbers from 1 to 10

// function printNumber(){
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// }
// printNumber();

//Q2) Write a JS code to find the power of a number using for loop
// function power(m,n){
// let number=m;
// for(let i=1;i<n;i++){
//     number*=m;
// }
// return number;
// }
// console.log(power(4,8));

//Q3)Write a JS code to print Even numbers

// for(i=10; i<=20; i++){
//      if(i % 2 == 0){
//       console.log(i);
//     }`
// }


//Q4) Create a simple calculator using switch statement.
// 1. accept two numbers from user
// 2. display the menu to user and accept the input as a sign (operator)
// menu ->
// + => addition, 
// - => substraction
// * => multiplication
// / => division
// % => mod
// ** => power
// 3. display/write the output on the screen. (e.g. Addition = 45)
//------>

// const no1 = +prompt("enter the first number");
// const operator = prompt("Enter the operator");
// const no2 = +prompt("Enter the second number");


// switch(operator){
//     case "+":
//         console.log("Addition:"+(no1+no2))
//         break;

//         case "-":
//         console.log("substraction:"+(no1-no2))
//         break;

//         case "*":
//         console.log("multiplication:"+(no1*no2))
//         break;

//         case "/":
//         console.log("division:"+(no1/no2))
//         break;

//         case "%":
//         console.log("mod:"+(no1%no2))
//         break;

//         case "**":
//         console.log("power:"+(no1**no2))
//         break;

//         default:
//             console.log("not valid expression")
// }

