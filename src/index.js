function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let separated = [];
    let separated2 = [];
    let symbol = '';
    let operation;
    let temp = [];
    let current = '';
    
    let operands = ['/', '*', '-', '+'];
    
        expr = expr.split('');
        for(let i=0; i < expr.length; i++){      
          if(separated[i] != '' || separated[i] != ' ' ){
            if(operands.indexOf(expr[i])!=-1){
              separated.push(parseFloat(symbol));
              separated.push(expr[i]); 
              symbol= '';
            }
            else{
              symbol+=expr[i];
            }
        } 
        }
    if(symbol!='')separated.push(parseFloat(symbol));  
    
    
    
    for (let i = 0; i < operands.length; i++){
    
      for(let j = 0; j <= separated.length; j++){     
          
        if(operands[i] == separated[j]){
          current = operands[i];        
        } 
        else if(current!=''){
          switch(current){
            case '/':
              temp[temp.length-1] = temp[temp.length-1] / separated[j];
              if(separated[j] == 0) throw("TypeError: Division by zero.");
              break;
              case '*':
              temp[temp.length-1] = temp[temp.length-1] * separated[j];
              break;
               case '+':
              temp[temp.length-1] = temp[temp.length-1] + separated[j];
              break;
               case '-':
              temp[temp.length-1] = temp[temp.length-1] - separated[j];
              break;
          }
          current ='';
        }
          else{
            if(separated[j])
            temp.push(separated[j]); 
          }
             
       
           
        } 
         separated = temp;
        temp = [];
     
      } 
    return separated[0];
}



module.exports = {
    expressionCalculator
}