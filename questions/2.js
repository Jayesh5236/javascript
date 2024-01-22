// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
// Numbers

//  Generate Even and Odd Number less than N

function generateEvenOddLessThanN(n) {
  let evenNumber = [];
  let oddNumber = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    } else {
      oddNumber.push(i);
    }
  }
  return { evenNumber, oddNumber };
}

const n = 10;

// console.log(
//   `Even And Odd Number Less Than ${n} : `,
//   generateEvenOddLessThanN(n)
// );



// Generate 'N' Even and Odd Numbers
function generateNEvenOddNumbers(N) {
  let evenNumbers = [];
  let oddNumbers = [];

  let count = 0;
  let num = 0;

  while (count < N) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
      count++;
    } else {
      oddNumbers.push(num);
    }
    num++;
  }

  return { evenNumbers, oddNumbers };
}
console.log("First", n, "Even and Odd numbers:", generateNEvenOddNumbers(n));
