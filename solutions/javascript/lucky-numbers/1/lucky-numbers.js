// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let k=0
  let m=0
  k=Number(array1.join(''));
  m=Number(array2.join(''));
  return k + m
  
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let m=''
let n=''
  let r=0
  m=String(value)
  const splits = m.split(/(\d)/);
  n= Number(splits.reverse().join(''));
  
  if (value==n){r=true}
  else {r=false}

return r;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 if (Boolean(input)==false){return 'Required field'}
 else if (Boolean(Number(input))==false){return 'Must be a number besides 0'}
  else {return ''}
}
