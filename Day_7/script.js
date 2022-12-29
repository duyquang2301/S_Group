
// function addNumber(n){
//     if (n == 0) return 0;
//     if(n == 1) return 1;
//     return n*(n+1)/2;
// }
// console.log(addNumber(10));

// function checkNumber(n){
//     let array = [];
//     for (i = 1; i <= n; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             array[i] = "FizzBuzz";
//         } else if(i % 3 == 0) {
//             array[i] = "Fizz";
//         } else if(i % 5 == 0){
//             array[i] = "Buzz";
//         }
//         else {
//             array[i] = i;
//         }
//     }
//     return array;
// }
// console.log(checkNumber(20));
// setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000);
//call back arrow function 
// setTimeout(() => {
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');


//map trong js 
// var domain = [
//     "freetuts.net", 
//     "techtuts.net", 
//     "simpletutorials.org"
// ];

// domain.map((item) => {
//     console.log(item);
// })

// var numbers = [5, 10, 20, 22, 60];
// var new_number = numbers.map((item) => {
//     return item * 2;
// });

// console.log(new_number);

// fillter return false / true;

// var numbers = [100, 200, 300, 400, 500];

// var selected_number = numbers.filter((item) => {
//     if(item == 300) return false ;
//     return true;
// });

// console.log(selected_number);
// var numbers = [5, 10, 20, 22, 60, 75, 90];

// var odd_number = numbers.filter((item) => {
//     if(item % 2 == 0) return true;
//     return false;
// });
// console.log(odd_number);

// // Danh sách mảng
// const ages = [32, 33, 16, 40];
 
// // Kiểm tra
// console.log(ages.every(checkAge))    // Returns false
 
// // Hàm kiểm tra giá trị truyền vào có lớn hơn 20 không
// function checkAge(age) {
//   return age > 20;
// }
//Reduce 
// const numbers = [10, 15, 20];

// // Biến dùng để đếm số lần lặp
// let i = 1;
 
// numbers.reduce(function(total, currentValue, currentIndex, arr) {
 
//     console.log("# Lần lặp thứ " + i);
//     console.log("# Giá trị: " + currentValue);
//     console.log("# Chỉ mục: " + currentIndex);
//     console.log("# Mảng: " + arr);
//     console.log("------------------------");
 
//     i++;
// }, 5);

//Promise 
// var promise = new Promise(
//     //excutor
//     function(resolve, reject) {
//         resolve([
//             id  = '1',
//             name = "javascript"
//         ])
//     }
// );

// promise
//     .then(function(course){
//         console.log(course);
//     })
//     .catch(function(){
//         console.log("fall");
//     })
//     .finally(function(){
//         console.log("done");
//     });

//Find The Largest Even Number 
// function largestNumber(arr){
//     arr.sort((x,y) => y - x);
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0)
//         return arr[i];
//     }
// }
// console.log(largestNumber([3, 7, 2, 10, 15, 22]));

//Fibonanci Number

// function Fibonanci(n){
//     var num1=0;
//     var num2=1;
//     var sum;
//     var i=0;
//     for (i = 0; i < n; i++) 
//     {
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//     }
//     return num2;
// }
// console.log(Fibonanci(12));