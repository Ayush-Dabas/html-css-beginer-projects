function increaseNum() {
  let elementNum = document.getElementById("number");
  let currNum = elementNum.innerHTML;
  //   console.log(currNum);
  currNum++;
  elementNum.innerHTML = currNum;
}

function resetNum() {
  let elementNum = document.getElementById("number");
  let currNum = 0;
  elementNum.innerHTML = currNum;
}

function decreaseNum() {
  let elementNum = document.getElementById("number");
  let currNum = elementNum.innerHTML;
  currNum--;
  elementNum.innerHTML = currNum;
}
