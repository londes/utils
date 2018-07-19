// builds array of descending numbers from num to 1, then processes using reduce to get product, simulating k!
function getFactorialProduct (num) {
  let numsDescending = []
  for (i=num; i--; i>0) {
    numsDescending.push(i+1);
  }
  factorialProduct = numsDescending.reduce(function(product, value) {
    return product * value;
  })
  return factorialProduct;
}
