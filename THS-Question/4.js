// Write a program to subtract two integers without using Minus (-) operator

function subtractWithoutMinus(a, b) {
  // Add a to the negation of b
  return a + (~b + 1);
}

// Example usage
const result = subtractWithoutMinus(10, 5);
console.log("Result:", result); // Output should be 5
