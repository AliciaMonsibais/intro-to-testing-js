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

// function sayHello(input){
//     if (input === "Pat"){
//         return "Hello, Pat!";
//     }
//     else if (input === "Alex"){
//         return "Hello, Alex!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

function sayHello(name) {
    return ("Hello, " + name + "!");
}