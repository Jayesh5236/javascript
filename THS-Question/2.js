// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd Numbers

function generateEvenOddNumber(N) {
  let odd = [];
  let even = [];

  // Generate even and odd numbers less than N
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  return { even, odd };
}

function generateNEvenOddNumbers(N) {
  let even = [];
  let odd = [];
  let i = 1; // Starting with 1 for odd numbers

  while (even.length < N) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
    i++;
  }
  return { even, odd };
}
let N = 10;
let lessThanN = generateEvenOddNumber(N);

let NNumbers = generateNEvenOddNumbers(N);
console.log("First", N, "even numbers:", NNumbers.even);
console.log("First", N, "odd numbers:", NNumbers.odd);

console.log(generateEvenOddNumber(N));
