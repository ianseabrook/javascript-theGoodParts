/*
Write a function that adds from two invocations.
*/

function addf(a) {
    return function(b){
        return a + b;
    };
}

addf(3) (4); // 7
