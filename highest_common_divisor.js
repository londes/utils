var prompt = require('prompt');
prompt.start();

prompt.get(['first_number', 'second_number'], function (err, result) {
  var a = result.first_number;
  var b = result.second_number;
  console.log('input received');
  console.log('highest common divisor ' + a + ' and '+ b +' is: ' + highestCommonDivisor(a, b));
});

function highestCommonDivisor(a, b) {
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    divisor = gcd(a,b);
    return divisor;
}
