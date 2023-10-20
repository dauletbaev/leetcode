// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  if (x < 0) return false

  const original = x
  let reverse = 0

  while (x > 0) {
    const digit = x % 10
    reverse = reverse * 10 + digit

    x = Math.floor(x / 10)
  }

  return reverse === original
};

console.log("9. Palindrome Number\n");

console.log("isPalindrome(121)", isPalindrome(121));
console.log("isPalindrome(-121)", isPalindrome(-121));
console.log("isPalindrome(10)", isPalindrome(10));

