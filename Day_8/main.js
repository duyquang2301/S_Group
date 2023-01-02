const findEvenNumber = (arr) => {
  arr.sort((x, y) => y - x);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) return arr[i];
  }
  return -1;
};

const btnArray = document.querySelector("#btn");
const result = document.querySelector("#result");
btnArray.addEventListener("click", () => {
  let array = document.querySelector("#input").value.split(" ");
  result.innerHTML = "The result: " + findEvenNumber(array);
});

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  const result = [1, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }
  return result[result.length - 1];
};

const btnFibo = document.querySelector("#btnFibo");
const resultFibo = document.querySelector("#resultFibo");
btnFibo.addEventListener("click", () => {
  let number = document.querySelector("#inputFibo").value;
  resultFibo.innerHTML = "The result: " + fibonacci(number);
});
