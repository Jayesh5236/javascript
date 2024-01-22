// Write a program to decide given N is Prime or not.

function isPrime(N) {
  if (N <= 1) {
    console.log(`${N} is not a prime number`);
    return;
  }

  let isPrimeNumber = true;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }
  if (isPrimeNumber) {
    console.log(`${N} is a prime number`);
  } else {
    console.log(`${N} is not a prime number`);
  }
}

isPrime(5);
