// https://leetcode.com/problems/fizz-buzz/description/

function fizzBuzz(n: number): string[] {
  const answers: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answers.push("Fizz")
    } else if (i % 5 === 0) {
      answers.push("Buzz")
    } else {
      answers.push(i.toString())
    }
  }

  return answers;
};

console.log("412. Fizz Buzz\n");
console.log("fizzBuzz(3)", fizzBuzz(3)); // ["1","2","Fizz"]
console.log("fizzBuzz(5)", fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log("fizzBuzz(15)", fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
