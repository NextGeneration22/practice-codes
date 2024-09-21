export function calculator(){
  let x= parseFloat(document.getElementById("firNum").value);
  let o = document.getElementById("opera").value;
  let y=parseFloat(document.getElementById("secNum").value);
  let resultE;
  const operators=['+','-', '*', '/'];
  const print = document.getElementById("result");
  if(!operators.includes(o)){
    resultE='please enter only a math operator'
  }else{

     switch(o){
      case '+':
        resultE = x + y;
       break
      case '-':
        resultE = x - y;
       break
      case '/':
        if(y === 0){
          resultE ='Error, you can\'t devide by 0!'
        }else{
           resultE = x / y;
        }
       break
      case '*':
        resultE = x * y;
       break
     }
  }
  print.innerHTML= resultE;
}
