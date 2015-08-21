/*
Write a revocable function that takes a nice function, and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it is revoked.
*/

function revocable(nice) {
    return {
        invoke: function() {
            return nice.apply(this, arguments);
        },
        revoke: function() {
            nice = null;
        }
    };
}

temp = revocable(console.log);
temp.invoke(7); // console.log: 7
temp.revoke();
temp.invoke(8); // throw!
