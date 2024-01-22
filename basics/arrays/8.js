var arr = [3, 5, 7, 6, 4, 9, 22, 51, 42];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(`Even : ${arr[i]}`);
  } else {
    console.log(`Odd : ${arr[i]}`);
  }
}
