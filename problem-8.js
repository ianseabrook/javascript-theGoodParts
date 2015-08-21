/*
Write methodize, a function that converts a binary function to a method.
*/

function add(a, b) {
    return a + b;
}

function methodize(binary) {
    return function(b) {
        return binary(this, b);
    };
}

// function methodize(binary) {
//     return function(...b) {
//         return binary(this, ...b);
//     };
// }

Number.prototype.add = methodize(add);

(3).add(4); // 7
