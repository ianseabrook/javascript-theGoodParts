/*
Write demethodize, a function that converts a method to a binary function.
*/

function add(a, b) {
    return a + b;
}

function methodize(binary) {
    return function(b) {
        return binary(this, b);
    };
}

function demethodize(method) {
    return function(a, b) {
        return method.call(a, b);
    };
}

Number.prototype.add = methodize(add);

demethodize(Number.prototype.add) (5, 6); // 11
