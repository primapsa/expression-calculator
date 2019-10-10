function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    // let separated = [];
    // let separated2 = [];
    // let symbol = '';
    // let operation;
    // let temp = [];
    // let current = '';
    
    // let operands = ['/', '*', '-', '+'];
    
    //     expr = expr.split('');
    //     for(let i=0; i < expr.length; i++){      
    //       if(separated[i] != '' || separated[i] != ' ' ){
    //         if(operands.indexOf(expr[i])!=-1){
    //           separated.push(parseFloat(symbol));
    //           separated.push(expr[i]); 
    //           symbol= '';
    //         }
    //         else{
    //           symbol+=expr[i];
    //         }
    //     } 
    //     }
    // if(symbol!='')separated.push(parseFloat(symbol));  
    
    
    
    // for (let i = 0; i < operands.length; i++){
    
    //   for(let j = 0; j <= separated.length; j++){     
          
    //     if(operands[i] == separated[j]){
    //       current = operands[i];        
    //     } 
    //     else if(current!=''){
    //       switch(current){
    //         case '/':
    //           temp[temp.length-1] = temp[temp.length-1] / separated[j];
    //           if(separated[j] == 0) throw("TypeError: Division by zero.");
    //           break;
    //           case '*':
    //           temp[temp.length-1] = temp[temp.length-1] * separated[j];
    //           break;
    //            case '+':
    //           temp[temp.length-1] = temp[temp.length-1] + separated[j];
    //           break;
    //            case '-':
    //           temp[temp.length-1] = temp[temp.length-1] - separated[j];
    //           break;
    //       }
    //       current ='';
    //     }
    //       else{
    //         if(separated[j])
    //         temp.push(separated[j]); 
    //       }
             
       
           
    //     } 
    //      separated = temp;
    //     temp = [];
     
    //   } 
    // return separated[0];



    function splitExpression (expr){
      let separated = [];
      let symbol = '';
       let operands = ['/', '*', '-', '+', '(', ')'];
      
       expr = expr.split('');
            for(let i=0; i < expr.length; i++){         
              
              if(separated[i] !== '' || separated[i] !== ' ' ){
               // console.log('current: '+ expr[i] + 'prev: '+ expr[i-1]+'position: '+separated[separated.length-2]);
                
               if((operands.indexOf(expr[i])===-1) || i==0 ||
               ((expr[i]==='-') && (operands.indexOf(expr[i-1])!=-1) )){
                symbol+=expr[i];
               
               }
            
               else{
                if(parseFloat(symbol) ){
                 separated.push(parseFloat(symbol));
               
                  } 
              
              separated.push(expr[i]); 
              symbol= '';
               }
               // console.log(+separated);

              
            }
          }
        if(symbol!='')separated.push(parseFloat(symbol)); 
     // console.log('separated '+separated);
      return separated; 
  }  
  


function calc(expression){
 let temp = [];
  let current = ''; 
  let operands = ['/', '*', '-', '+', '(', ')'];
  
for (let i = 0; i < operands.length; i++){    
      for(let j = 0; j <= expression.length; j++){            
        if(operands[i] == expression[j]){
          current = operands[i];        
        } 
        else if(current!=''){
          switch(current){
            case '/':
              temp[temp.length-1] = temp[temp.length-1] / expression[j];
              if(expression[j] == 0) throw("TypeError: Division by zero.");
              break;
              case '*':
              temp[temp.length-1] = temp[temp.length-1] * expression[j];
              break;
               case '+':
              temp[temp.length-1] = temp[temp.length-1] + expression[j];
              break;
               case '-':
              temp[temp.length-1] = temp[temp.length-1] - expression[j];
              break;
          }
          current ='';
        }
          else{
            if(expression[j])
            temp.push(expression[j]); 
          }              
        } 
         expression = temp;
         temp = [];     
      }
  return expression[0];
}

function splitBrackets (separated){
  let bracket =[], 
      bracket2 =[],
      woBracket = '';
  for(let j = 0; j < separated.length; j++ ){ 
  if( separated[j] == '(' || separated[j] == ')'){
     bracket.push(woBracket);
     bracket.push(separated[j]);
     woBracket = '';
  }   
  
  else {
     woBracket  += separated[j];
  }  
}
if(woBracket!='') bracket.push(woBracket);
//console.log(bracket);
for(let k =0; k<bracket.length; k++){
      if(bracket[k]!=''){
        bracket2.push(bracket[k]);
      }
}
//console.log(bracket2);
  return bracket2;
}

function bracketSum(bracket2) {
 let currentBracket = '';
let tempBracket =[];
  let subResult =[];
  let subString = '';
  let dd = 0;
  let leftBr = 0, rightBr =0;
  let subExptr = []; let cnt = 0;
  //console.log(bracket2);
for(let cc = 0; cc < 1; cc++){
for(let l=0; l < bracket2.length; l++){
  
  if(bracket2[l] == '('){
    leftBr++;
  }
  if(bracket2[l] == ')'){
    rightBr++;
    if(leftBr > 0 && rightBr==1 ){
      
      for(let v = tempBracket.length-1; v >= 0; v--){
        //console.log('br: '+bracket2[v]);
        if(tempBracket[v] == '('){
          subExptr.reverse()
          let strrr = subExptr.join('');
         // console.log('send: '+strrr);
          
          subResult = calc(splitExpression(strrr));
        //  console.log('subresult: '+subResult);
          tempBracket.splice(tempBracket.length-cnt-1, cnt+1);
          //console.log(tempBracket);
          tempBracket.push(subResult);
         // console.log(tempBracket);
          cnt = 0; --leftBr; --rightBr; subExptr=[];
          break;
         
        }
        subExptr.push(tempBracket[v]);
        cnt++;
      }
      continue
    }
  } 
  //console.log('push');
  
  tempBracket.push(bracket2[l]); 
  //console.log(tempBracket);
    
    

  
} 
  
  bracket2 = tempBracket;
 
   tempBracket = [];
   if(leftBr > 0 || rightBr > 0){
    throw("ExpressionError: Brackets must be paired");
   }
} //console.log(bracket2);
  let brrkds = bracket2.join('');
   let res=calc(splitExpression(brrkds));
   return res;

}

//console.log(expr)
let arrcs = splitExpression(expr);
//console.log(arrcs);
let summ = splitBrackets(arrcs);
//console.log(summ);
let blbb = bracketSum(summ);
//console.log(blbb);
return blbb;
//console.log(blbb);




 }

module.exports = {
    expressionCalculator
}


