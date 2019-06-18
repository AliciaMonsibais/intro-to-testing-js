// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function add (num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return false;
    } else {
        return num1 + num2;
    }
}

function sayHello(input){
    if (input === "World"){
        return "Hello, World!";
    }
    else if (input === "Pat"){
        return "Hello, Pat!";
    }
    else if (input === "Alex"){
        return "Hello, Alex!";
    } else {
        return "Hello, Jane!";
    }
}

function isFive(input){
    if (isNumeric(input === 5)){
        return true;
    }
}

function isEven(even) {
    if (typeof even === "boolean") {
        even = NaN;
    } return Number(even) % 2 === 0;
}
// function sayHello(name) {
//     return ("Hello, " + name + "!");
// }