/*
Without writing any new functions, show three ways to create the inc function.
*/

function add(a, b) {
    return a + b;
}

function addf(a) {
    return function(b){
        return a + b;
    };
}

function applyf(binary) {
    return function(a){
        return function(b) {
            return binary(a, b);
        };
    };
}

function curry(binary, a) {
    return function(b) {
        return binary(a, b);
    };
}

// 1.
inc = addf(1);

// 2.
//inc = applyf(add) (1);

// 3.
//inc = curry(add, 1);

inc(5); // 6
//inc(inc(5)); //7
