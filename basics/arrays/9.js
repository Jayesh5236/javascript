function evenArray(n) {
  var arr = [];

  var counter = 0;

  for (let i = 0; i < n; i++) {
    counter++;
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  console.log(counter);
  return arr;
}
// console.log(evenArray(100));

function evenArray2(n) {
  var arr = [];
  var counter = 0;
  for (var i = 2; i <= n; i = i + 2) {
    arr.push(i);
    counter++;
  }
  console.log(counter);
  return arr;
}

console.log(evenArray2(100));