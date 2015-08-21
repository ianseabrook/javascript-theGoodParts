/*
Write a function that takes a binary function and makes it callable with two invocations.
*/

function add(a, b) {
    return a + b;
}

function mul(x, y) {
    return x * y;
}

function applyf(binary) {
    return function(a){
        return function(b) {
            return binary(a, b);
        };
    };
}

addf = applyf(add);
addf(3) (4); // 7
applyf(mul) (5) (6); // 30
