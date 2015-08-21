/*
Write a factory function that returns two functions that implement an up/down counter.
*/

function counterf(value) {
    return {
        inc: function() {
            value += 1;
            return value;
        },
        dec: function() {
            value -= 1;
            return value;
        }
    };
}

counter = counterf(10);
counter.inc(); // 11
counter.dec(); // 10
