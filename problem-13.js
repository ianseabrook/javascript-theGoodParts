/*
Write a function that allows another function to only be called once.
*/

function add(a, b) {
    return a + b;
}

/*
function once(binary) {
    return function(a, b) {
        f = binary;
        binary = null;
        return f(a, b);

    };
}
*/

function once(binary) {
    return function() {
        f = binary;
        binary = null;
        return f.apply(this, arguments);

    };
}

add_once = once(add);
add_once(3, 4); // 7
add_once(3, 4); // throw!
