// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  // Your code here
  return str[index];
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('', 0), undefined);
expect(getLetterAtIndex(' ', 0), ' ');
expect(getLetterAtIndex('abc', 3), undefined);
expect(getLetterAtIndex('test 123', 4), ' ');
expect(getLetterAtIndex(123, 2), undefined);
expect(getLetterAtIndex('123', 2), '3');

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
