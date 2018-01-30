var prompt = require('prompt');
prompt.start();

prompt.get(['first_number', 'second_number'], function (err, result) {
  var a = result.first_number;
  var b = result.second_number;
  console.log('input received');
  console.log('lowest common multiple of ' + a + ' and '+ b +' is: ' + leastCommonMultiple(a, b));
});

function leastCommonMultiple(a, b) {
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    multiple = lcm(a, b);
    return multiple;
}
