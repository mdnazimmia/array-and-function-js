// var numbers = [2, 3, 10, 9];
// var string = ['apple', 'ananas', 'mango', 'guaba', 'jackgruits', 'cherry'];
// console.log(string.length);
// console.log(string[3]);

// var numbers = [10, 20, 13, 30, 55, 78, 90, 43, 91, 100];
// // console.log(numbers[5]);
// var element = numbers[7];
// console.log(element);
// numbers[7] = 77;
// console.log(numbers);

// var positionIndex = numbers.indexOf(91);
// console.log(positionIndex);


var countryName = ['Bangla', 'China', 'India', 'PK', 'Araba', 'Nepal', 'Bhutan', 'Japan', 'Mayanmar', 'Slovakia', 'Sirya'];
// console.log(countryName);
// console.log(countryName.length);

// //get element value by index
// var element = countryName[7];
// console.log(element);

// // set element value by index
// countryName = 'Germany'
// console.log(countryName);

// find index of element
var positionIndex = countryName.indexOf('Sirya');
// console.log(positionIndex);

// var playerNumber = [11, 0, 32, 99, 7, 3, 8, 98, 73, 9, 10, 62, 33, 91, 00, 1];
// // console.log(playerNumber);

// // console.log(playerNumber.length);

// var element = playerNumber[5];
// // console.log(element);

// playerNumber[11] = 33;
// // console.log(playerNumber);

// var positionOfIndex = playerNumber.indexOf(1);
// console.log(positionOfIndex);


// var friends = ['Jamal', 'Kamal', 'Tamal', 'Ailam', 'Gelam'];
// friends.push('Damal');
// console.log(friends);
// friends.pop();
// console.log(friends);

// to add something as a first element
// friends.unshift('Helal');
// console.log(friends);

// to replace in a fixed position
// friends.splice(1, 1, 'Becareful');
// console.log(friends);

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 == 6);
// console.log(5 == 5);
// console.log(5 != 6);
// console.log(15 != 15);

// console.log(5 <= 6);
// console.log(6 <= 6);
// console.log(16 <= 6);

// console.log(5 >= 6);
// console.log(6 >= 6);
// console.log(16 >= 16);

// var iphonePrice = 1100000;
// var myBudget = 20000;

// if (iphonePrice <= myBudget) {
//     console.log('I will bought the phone');
// }

// var chickenPrice = 500;
// var myMoney = 100;

// if (chickenPrice <= myMoney) {
//     console.lot('I will order a chickent');
// }
// else {
//     console.log('I will order lantine Supe and smash potato');
// }

// var isGraduated = true;
// var salary = 75000;
// var car = 1;
// if (isGraduated == true && salary > 50000 && car >= 1) {
//     console.log('you have a chance to get the Opertunaty')
// }
// else {
//     console.log('You have no chance to get the High level opertunaty')
// }

// var millioniar = true;
// var industrieMi = 100000;
// var porshe911 = 3;

// if (millioniar == true && industrieMi > 10000 && porshe911 >= 2) {
//     console.log('You are going to be next world Renking 1')
// }
// else {
//     console.log('May be you have to try for next time')
// }

var isGraduated = true;
var salary = 75000;
var car = 1;

if (isGraduated === true || salary > 50000 || car >= 1) {
    console.log('You have an appointment the after tomorrow')
}
else {
    console.log('Please submit your document, we will inform you')
}

var isGraduated = true;
var salary = 75000;
var car = 1;

if (isGraduated === true || salary > 50000 || car >= 1) {
    console.log('You have an appointment the after tomorrow')
}
else {
    console.log('Please submit your document, we will inform you')
}



var money = 40;
var beefPrice = 80;
var laamPrice = 60;
var chickenPrice = 30;
if (beefPrice < money) {
    console.log('I will order beef');
}
else if (laamPrice < money) {
    console.log('or i will order laam');
}
else if (chickenPrice < money) {
    console.log('or i will order chicken');
}
else {
    console.log('another way i will order smatsch potato and lentinesuppe');
}