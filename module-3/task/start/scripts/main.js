console.log('hello');

// Single line comment

/*---

Multi-line comment

---*/ 

let productName = 'Macbook';
let productPrice = '10.00'; // unless set as a constant, this can be overwritten
let productQuantity = 3;
let inStock = true;
let discountAmount= 2;

console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(inStock);
console.log(discountAmount);

function showProductName(){
    console.log(productName);
}
showProductName();

function totalPrice(productPrice,productQuantity){
    console.log(productPrice * productQuantity)
}

totalPrice(productPrice,productQuantity);

function squareNumber(number=0){
    let sum = number * number;
    return sum;
}
    var square = number => number * number;

    let squaredNumber = squareNumber(3);
    console.log(squaredNumber);

    let squared = square(3);
    console.log(squared);

function calculateDiscount(){
    let sum = productPrice * productQuantity;
    if(productQuantity > 1){
        sum = sum - discountAmount;
    }
    console.log(sum);
}
calculateDiscount();         

// Task 8 18 November 2021 --- Switch statements

// Create a function called DrinkOrder that takes 2 parameters
// {Size} and {drink}
    // VALIDATE the variables passed through
    // SWITCH {drink}
        // depending on the drink required
        // change the message to be output
    // IF ELSE {size}
        // depending on the drink required, change the
        // message to the output

    // RETURN message



    function drinkOrder(size, drink) {
        if(size != 'small' && size != 'medium' && size != 'large'){
            console.log('You have ordered a size we don\'t sell');
            return; // can only execute if these conditions aren't true ** return instructs the function to close immediately
        }
        let message = 'You have ordered a ' + size;
        
        switch(drink) {
            case 'cola':
                message += ' Coca-Cola'; // += appending to the end of a string
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
        console.log(message);
    }
drinkOrder('grande');
drinkOrder('small','cola');
drinkOrder('medium','orange');
drinkOrder('large','lemon');
drinkOrder('small','coffee');

// Task 9 - Create a calculator

// FUNCTION calculator {num1} {num 2} {operator}
function calculator(num1, num2, operator) {
    // VALIDATE all data
    if(isNaNValidator(num1)) {
        console.log('Number 1 is not a number')
        return;
    }
    if(isNaNValidator(num2)) {
        console.log('Number 2 is not a number');
        return;
    }
    // SWITCH {operator}
    let sum; 
    switch(operator) {
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
            console.log('Operator is not recognised');
            return;
        }
        // based on the operator passed do maths
    // RETURN sum
    return sum;
}

function isNaNValidator(number) {
    return isNaN(number);
}

calculator(1);
calculator('adam');
calculator(1, 1, 'alex');
console.log(calculator(2,10,'+'));
console.log(calculator(2,10,'-'));
console.log(calculator(2,10,'/'));
console.log(calculator(2,10,'*'));
console.log(calculator(2,10,'%'));