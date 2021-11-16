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