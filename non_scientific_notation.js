// Utility intended to remove scientific notation from a number and return an actual integer for large numbers

// Please note that this currently appears to work, but sometimes the last value in the output number will change from the input value. Caused an incorrect guess in project euler. Something here is wrong.

exports.toFixed = function(x) {
    if (Math.abs(x) < 1.0) {
        console.log("we\'re in the low side and x is: " + x);
        let e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        console.log("we\'re in the high side and x is: " + x);
        let e = parseInt(x.toString().split('+')[1]);
        console.log("and e is: " + e);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1).join('0'));
        }
    }
    console.log('the new value is: ' + x);
    return x;
}