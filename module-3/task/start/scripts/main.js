// console.log('Hello');

//Single line comment

/*--------
Multi line comment
--------*/

let productName = 'product name string';
let productPrice = '10.00';
let productQuantity = 3;
let productInStock = true;
let productDiscountAmount = 2;

// console.log(productName);
// console.log(price);
// console.log(quantity);
// console.log(inStock);
// console.log(discountAmount);

function multiplyByTwo(number) {
    let sum = number * 2;
    console.log(sum);
}

multiplyByTwo(2);

function showProductName(){
    console.log(productName);
}
// showProductName();

function totalPrice(productPrice=0,productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);
}

totalPrice(productPrice,productQuantity);

//showing the difference between a regular function and an arrow function
function squareNumber(number=0){
    let sum = number * number;
    return sum;
}

var square = (number=0) => number * number;

let squaredNumber = squareNumber(3);
// console.log(squaredNumber);

let squared = square(3);
// console.log(squared);
//showing the difference between a regular function and an arrow function

function productDiscount(){
    let sum;
    if(productQuantity > 1){
        sum = productPrice * productQuantity;
        let discount = productDiscountAmount * productQuantity;
        sum = sum - discount;
    } else {
        sum = productPrice * productQuantity;
    }
    console.log(sum);
}

productDiscount();

function calculateDiscount(){
    let sum = productPrice * productQuantity;
    if(productQuantity > 1){
        sum = sum - productDiscountAmount;
    }
    console.log(sum);
}

calculateDiscount();

//FUNCTION called DrinkOrder that takes 2 parameters {Size} & {drink}
function drinkOrder(size, drink){
    // VALIDATE the variables passed through
    if(size != 'small' && size != 'medium' && size != 'large'){
        console.log('You have ordered a size we don\'t sell');
        return;
    }
    let message = 'You have ordered a ' + size;
    // SWITCH {drink}
    switch(drink){
        case 'cola':
            message += ' Coca-Cola';
            break;
        case 'lemon':
            message += ' Schwepps';
            break;
        case 'orange':
            message += ' Tango';
            break;
        default:
            message = 'You have ordered a drink we don\'t sell';
            break;
    }
    // RETURN message
    console.log(message);
}

// drinkOrder('grande');
// drinkOrder('small','cola');
// drinkOrder('medium','orange');
// drinkOrder('large','lemon');
// drinkOrder('small','coffee');
// drinkOrder('small');

function calculator(num1,num2,operator){
    if(isNaNValidator(num1)){
        return 'Number 1 is not a number'; 
    }
    if(isNaNValidator(num2)){
        return 'Number 2 is not a number';
    }
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            return 'Operator is not recognised';
    }
    return sum;
}

function isNaNValidator(data){
    return isNaN(data);
}

let sum1 = calculator(10,2,'+');
let sum2 = calculator(10,2,'-');
let sum3 = calculator(10,2,'/');
let sum4 = calculator(10,2,'*');
let sum5 = calculator(10,2,'%');
let sum6 = calculator(1,'alex');
let sum7 = calculator('alex');
let sum8 = calculator(1,1,'alex');
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);
// console.log(sum6);
// console.log(sum7);
// console.log(sum8);

let arrRainbow = ['red','yellow','pink','green','purple','orange','blue'];

console.log(arrRainbow);
console.log(arrRainbow.length);


console.log(arrRainbow[3]);
arrRainbow[3] = 'black';
console.log(arrRainbow[3]);

// arrays can be represented on a line or as below, remember to tab out data in an array.

let arrProductData = [
    productName,
    productPrice,
    productQuantity,
    productInStock,
    productDiscountAmount,
]; // array must be closed where it was opened, same with functions. 

console.log(arrProductData);

console.log(arrProductData[0]);

lastArrayKey = arrProductData.length - 1;

console.log(arrProductData[4]);

let objProductData = {
    'productName':productName,
    'price':productPrice,
    'quantity':productQuantity,
    'inStock':productInStock,
    'discountAmount':productDiscountAmount,
    // alexExample3:function(){
    //     console.log('testing');
    // }
};

console.log(objProductData.productName); // objects can be accessed using dot notation
console.log(objProductData['productName']); // or objects can be accessed using bracket notation

objProductData['productName'] = 'light bulbs'; // overwriting object data

console.log(objProductData.productName);

objProductData.alexExample3 = 'this is new data'; // adding data to an object dot notation

objProductData['alexExample2'] = 2; // adding data to an object bracket notation

console.log(objProductData);
//objProductData['alexExample3']();

// objProductData.alexExample3;
// objProductData['alexExample3'](); // I have no idea why this code doesn't work??? *********************


for (i = 0; i <= 10; i++) {
    console.log('The counter number is ' + i)
}
let variable1 = 10
for (let counter = 0; counter < 10; counter++) { // counting down from 10 to 1
    let sum = variable1 - counter;
    console.log(sum);
}

for (let counter = 0; counter < arrRainbow.length; counter++) { // need to use array length when iterating through an array
    let sum = arrRainbow.length - (counter + 1);
    console.log(arrRainbow[sum]);
}

let myFavouriteSnacks = [ // declaring an array
    'snickers',
    'kitkat',
    'twix',
]
    
for (let i = 0; i < myFavouriteSnacks.length; i++) { // iterating through an array
    console.log(myFavouriteSnacks[i]);
}

// *** FIZZ BUZZ ***

for (let counter = 0; counter < 100; counter++) {
    if(counter % 3 == 0 && counter % 5 == 0) {
        console.log('Fizz');
    } else if(counter % 5 == 0) {
        console.log('Buzz');
    } else if (counter % 3 == 0 ) {
        console.log('Fizz Buzz');
    } else {
        console.log(counter);
    }
}

function outputTimesTables(number){
    for(
        counter=1;      //set counter as a variable
        counter<=12;    //continue to run loop whilst this is true
        counter++       //add 1 to counter after each iteration
    ){
        let sum = counter * number;
        let strMessage = counter + ' * ' + number + ' = ' + sum;
        console.log(strMessage);
    }
}

for(multiplyer=1;multiplyer<=12;multiplyer++){
    outputTimesTables(multiplyer);
}

// November 25th Class - Thursday

console.log(shoppingCart);



function totalPriceOfShopping(shoppingCart) {
    // LOOP through each item of the array
    let totalPrice = 0;
    for(arrayKey = 0; arrayKey < shoppingCart.length; arrayKey++) {
        let currentItem = shoppingCart[arrayKey];
        // GET the price of the current item and times it by the quantity
        let currentItemPrice = currentItem.quantity * currentItem.price;
        // ADD the sum to the totalPrice
        totalPrice += parseFloat(currentItemPrice);

    }
    // RETURN total price
    return totalPrice.toFixed(2);
}

totalPriceOfShopping(shoppingCart);
console.log(totalPriceOfShopping(shoppingCart));

function totalPriceOfShopping(shoppingCart,objCoupon=null) {
    // LOOP through each item of the array
    let totalPrice = 0;
    for(arrayKey = 0; arrayKey < shoppingCart.length; arrayKey++) {
        let currentItem = shoppingCart[arrayKey];
        // console.log(currentItem);
        // Get the price of the current item and times it by the quantity
        let currentItemPrice = currentItem.quantity * currentItem.pric;
        // if there is a coupon apply a discount to the current item
        let discount = 0;
        // if objCoupon has been passed as an argument and the type is not one that affects the total price
    if(objCoupon && objCoupon.type != 'basketTotal' && objCoupon.type != 'basketPercent') {
        // if the current item type can be found in the array for types of items to be discounted
        if(objCoupon.types.includes(currentItem.type)) {
            // switch statement for type of coupon
            switch(objCoupon.type) {
                case 'flatFee':
                    // work out the total discount based on amount times quantity
                    discount = objCoupon.amount * currentItem.quantity 
                    // remove the discounted amount ifrom the current item price
                    currentItemPrice = currentItemPrice - discount;
                    break;
                case 'percentage':
                    // work out the total percentage to be removed
                    discount = (currentItemPrice / 100) * objCoupon.amount;
                    // remove the discounted amount from the current item price
                    currentItemPrice = currentItemPrice - discount;
                    break;
            }
        }
    }
    }
}

let objCoupon1 = {
    types:['toiletries', 'condiment'],
    type:'flatFee',
    amount: 0.5,
 };

let objCoupon2 = {
    types:['canned', 'snacks'],
    type:'percentage',
    amount:30,
};

let objCoupon3 = {
    types:[''],
    type:'basketTotal',
    amount:25,
};

let objCoupon4 = {
    types:[''],
    type:'basketPercent',
    amount:40,
};

let shoppingCartPrice = totalPriceOfShopping(shoppingCart);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon1);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon2);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon3);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon4);
console.log(shoppingCartPrice);