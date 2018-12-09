//sum
var a = +prompt("Введите первое число", "");
var b = +prompt("Введите второе число", "");

alert(a + b);
//sum of prices
var price1 = 10;
var price2 = 20;
alert(+(price1 + price2).toFixed(2));
console.log(+price1);
//error infinity
var i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
}
//[min;max)
var min = 5,
    max = 10;
alert(min + Math.random() * (max - min));
//[min;max]
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

alert(randomInteger(5, 10));


///new
/// enter number

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);