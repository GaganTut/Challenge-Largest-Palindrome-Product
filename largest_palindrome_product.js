/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  var firstFac = "";
  var secFac = "";
  palNum = 0;

  for (var i = 0; i < digits; i++) {
    firstFac += 9;
    secFac += 9;
  }

  factor_0 = parseInt(firstFac);
  factor_1 = parseInt(secFac);

  for (var j = 0; j <= factor_0; j++) {
    for (var k = 0; k <= factor_1; k++) {
      palNum = j * k;
      var palNumArrRev = parseInt(palNum.toString().split("").reverse().join(""));
      if (palNum === palNumArrRev) {
        if (palNum > palindromeNumber) {
          palindromeNumber = palNum;
        }
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

console.log(module.exports(2));

