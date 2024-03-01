function evenArray(n) {
  let arr = [];

  for (let i = 2; i <= n; i = i + 2) {
    arr.push(i);
  }
  return arr
}
console.log(evenArray(100));


