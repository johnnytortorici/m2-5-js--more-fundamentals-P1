// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  // Define variables
  const str = arr[0];
  const repeat = arr[1];
  // Check that parameters are valid
  if (typeof str !== 'string' || typeof repeat !== 'number') {
    return undefined; // App ends here
  }
  // Check if repeat if less than 1
  if (repeat < 1) return ''; // App ends here

  let newStr = '';
  for (let i = 0; i < repeat; i++) {
    newStr += str;
  }
  return newStr;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(['abc', 4]), 'abcabcabcabc');
expect(repeat(['bacon', 0]), '');
expect(repeat(['eggs', -10]), '');
expect(repeat([12345, 2]), undefined);
expect(repeat(['12345', 2]), '1234512345');
expect(repeat([3, 'reverse']), undefined);
expect(repeat(['apple', '2']), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
