// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  // Your code here
  const operation = arr[0];
  const num1 = arr[1];
  const num2 = arr[2];
  // Ensure both num1 and num2 are number types
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    // Check that the operation passed is valid
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'sub':
        return num1 - num2;
      case 'mult':
        return num1 * num2;
      default:
        return undefined;
    }
  } else {
    return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['sub', 100, 150]), -50);
expect(calculator(['test', 10, 20]), undefined);
expect(calculator([0, 10, 10]), undefined);
expect(calculator(['mult', 'add', 2, 4]), undefined);
expect(calculator(['add', '5', 5]), undefined);
expect(calculator(['add', 'baconlover', 88]), undefined);

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
