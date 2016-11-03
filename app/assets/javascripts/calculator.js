var a,b,result;
function setValues (){
  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("b").value);
}

function add(){
  setValues();
  result = a+b;
  alert("The answer is "+result);
}

function subtract(){
  setValues();
  result = a-b;
  alert("The answer is "+result);
}

function multiply(){
  setValues();
  result = a*b;
  alert("The answer is "+result);
}

function divide(){
  setValues();
  result = a/b;
  alert("The answer is "+result);
}

function displynum(n1) {
  calcform.txt1.value=calcform.txt1.value+n1;
}

function ClearFields() {

     document.getElementById("txt1").value = "";
}
