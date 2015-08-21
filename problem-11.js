/*
Write a function composeu that takes two unary functions and returns a unary function that calls them both.
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

function composeu(a, b) {
    return function(c) {
        return b(a(c));
    };
}

var double = twice(add);

var square = twice(mul);

composeu(double, square) (3); // 36
