// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));
// First, decrement(3) will be called and return 2
// Second, square(2) will be called and return 4
// Third, decrement(4) will be called and return 3
// Last, square(3) will be called and return 9

// 1-2
decrement(decrement(square(square(3))));
// First, square(3) will be called and return 9
// Second, square(9) will be called and return 81
// Third, decrement(81) will be called and return 80
// Last, decrement(80) will be called and return 79

// 1-3
duplicateString(reverseString('hello'));
// First, reverseString('hello') will be called and return 'olleh'
// Second, duplicateString('olleh') will be called and return 'olleholleh'

// 1-4
reverseString(duplicateString(duplicateString('foo')));
// First, duplicateString('foo') will be called and return 'foofoo'
// Second, duplicateString('foofoo') will be called and return 'foofoofoofoo'
// Last, reverseString('foofoofoofoo') will be called and return 'oofoofoofoof'