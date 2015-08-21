/*
Write a function that takes an argument and returns a function which returns that argument.
*/

function identityf(a) {
    return function() {
        return a;
    };
}

idf = identityf(3);
idf(); // 3
