



var calcBtnPlus = document.getElementById('btn_plus');
var calcBtnMinus = document.getElementById('btn_minus');
var calcBtnMultiply = document.getElementById('btn_multiply');
var calcBtnDevide = document.getElementById('btn_devide');

calcBtnPlus.addEventListener('click', onClickBtnPlus);
calcBtnMinus.addEventListener('click', onClickBtnMinus);
calcBtnMultiply.addEventListener('click', onClickBtnMultiply);
calcBtnDevide.addEventListener('click', onClickBtnDevide);

function onClickBtnPlus() {
  var calcNumber1 = document.getElementById('input1');
  var calcNumber2 = document.getElementById('input2');
  var calcResult = document.getElementById('result');
  var res = Number(calcNumber1.value) + Number(calcNumber2.value);
  
  calcResult.value = res;
  console.log(res);
}
function onClickBtnMinus() {
  var calcNumber1 = document.getElementById('input1');
  var calcNumber2 = document.getElementById('input2');
  var calcResult = document.getElementById('result');
  var res = Number(calcNumber1.value) - Number(calcNumber2.value);

  calcResult.value = res;
  console.log(res);
}
function onClickBtnMultiply() {
  var calcNumber1 = document.getElementById('input1');
  var calcNumber2 = document.getElementById('input2');
  var calcResult = document.getElementById('result');
  var res = Number(calcNumber1.value) * Number(calcNumber2.value);

  calcResult.value = res;
  console.log(res);
}
function onClickBtnDevide() {
  var calcNumber1 = document.getElementById('input1');
  var calcNumber2 = document.getElementById('input2');
  var calcResult = document.getElementById('result');
  var res = Number(calcNumber1.value) / Number(calcNumber2.value);

  calcResult.value = res;
  console.log(res);
}
