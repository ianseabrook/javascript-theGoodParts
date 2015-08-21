/*
Write a function twice that takes a binary function and returns a unary function that passesits argument to the binary function twice.
*/

function add(a, b) {
    return a + b;
}

function mul(x, y) {
    return x * y;
}

function twice(binary) {
    return function(a) {
        return binary(a, a);
    };
}

var double = twice(add);
double(11); // 22

var square = twice(mul);
square(11); // 121
