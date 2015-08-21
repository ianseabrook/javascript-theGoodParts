/*
Write a function that takes a binary function and makes it callable with two invocations.
*/

function add(a, b) {
    return a + b;
}

function mul(x, y) {
    return x * y;
}

/* #Alt Solution

function applyf(binary) {
    return function(a){
        return function(b) {
            return binary(a, b);
        };
    };
}

function curry(binary, a) {
    return applyf(binary) (a);
}

*/

function curry(binary, a) {
    return function(b) {
        return binary(a, b);
    };
}

add3 = curry(add, 3);
add3(4); // 7
curry(mul, 5) (6); // 30
