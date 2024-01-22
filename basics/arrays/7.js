var arr = [-1, 1, -5, -6, 2, 4, 7, -19, 9];

// let positiveNumber = arr.map((ele, i) => {
//   if (ele > 0) return ele;
//   else return;
// });

let positiveNumber = arr.filter((ele, i) => {
  if (ele > 0) return true;
  return false;
});

var words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "fascinating",
  "present",
];

// words = words.filter((ele) => ele.length > 6);

// console.log(words);

// let foundWord = words.filter((ele) => ele === "present");

// console.log(foundWord);

console.log(words.splice(0, 3));
console.log(words);

// console.log(positiveNumber);
