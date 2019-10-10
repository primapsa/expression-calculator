function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {  

const operands = ['/', '*', '-', '+', '(', ')'];

    function splitExpression (expr){
      let separated = [],
          symbol = '';    
      
          expr = expr.split('');
            for(let i=0; i < expr.length; i++){                 
              if(separated[i] !== '' || separated[i] !== ' ' ){               
                if((operands.indexOf(expr[i])===-1) || (i==0 && expr[i]!='(') ||
                ((expr[i]==='-') && (operands.indexOf(expr[i-1])!=-1) )){
                  symbol+=expr[i];               
                }            
                else{
                if(parseFloat(symbol) || parseFloat(symbol)==0){
                 separated.push(parseFloat(symbol));               
                }               
                separated.push(expr[i]); 
                symbol= '';
               }           
            }
          }
        if(symbol!='')separated.push(parseFloat(symbol));      
     
       return separated; 
  }    


function calc(expression){
 let temp = [],
     current = '' ;  
  
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
            if(expression[j] || expression[j]==0 )
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
      bracketFinal =[],
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

            for(let k =0; k<bracket.length; k++){
                  if(bracket[k]!=''){
                    bracketFinal.push(bracket[k]);
            }
          }

  return bracketFinal;
}

function bracketSum(bracketFinal) {
 let currentBracket = '',
       tempBracket =[],
       subResult =[],
       subString = '',
       dd = 0,
       leftBr = 0, rightBr =0,
       subExptr = [], 
       cnt = 0;
  
for(let cc = 0; cc < 1; cc++){
    for(let l=0; l < bracketFinal.length; l++){
      
      if(bracketFinal[l] == '('){
        leftBr++;
      }
      if(bracketFinal[l] == ')'){
        rightBr++;
        if(leftBr > 0 && rightBr==1 ){          
          for(let v = tempBracket.length-1; v >= 0; v--){           
            if(tempBracket[v] == '('){
              subExptr.reverse()
              subString = subExptr.join('');             
              subResult = calc(splitExpression(subString));            
              tempBracket.splice(tempBracket.length-cnt-1, cnt+1);              
              tempBracket.push(subResult);           
              cnt = 0; --leftBr; --rightBr; subExptr=[], subString = '';
              break;            
            }
            subExptr.push(tempBracket[v]);
            cnt++;
          }
          continue
        }
      }       
      tempBracket.push(bracketFinal[l]);      
    }   
  bracketFinal = tempBracket;
  tempBracket = [];
  if(leftBr > 0 || rightBr > 0){
    throw("ExpressionError: Brackets must be paired");
   }
} 
 
   return calc(splitExpression(bracketFinal.join('')));

}

return(bracketSum(splitBrackets(splitExpression(expr))));
 }

module.exports = {
    expressionCalculator
}


