/*
Write a function composeb that takes two binary functions and returns a function that calls them both.
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

function composeb(f, g) {
    return function(a, b, c) {
        return g(f(a, b), c);
    };
}

composeb(add, mul) (2, 3, 5); // 25
