function evaluateExpression() {
    const calc = new Calculator();
    const expression = document.getElementById('expression').value;
    if (calc.isValidInfix(expression)) {
        const postfix = calc.infixToPostfix(expression);
        const evalPostfix = calc.evaluatePostfix(postfix);
          document.getElementById('output').innerHTML = ` 
          <p><strong>Infix to Postfix:</strong> ${postfix}</p>
            <p><strong>Postfix Evaluation:</strong> ${evalPostfix}</p>`
    }
    else {
        document.getElementById('output').innerHTML = "<p style='color:red;'>Invalid  Expression!</p>";
    }
}
    function evaluateExpression2(){
        const calc = new Calculator();
        const expression = document.getElementById('expression').value;
        if (calc.isValidInfix(expression)) {
            const prefix = calc.infixToPrefix(expression);
            const evalPrefix = calc.evaluatePrefix(prefix);
             document.getElementById('output').innerHTML = `
              <p><strong>Infix to Prefix:</strong> ${prefix}</p>
               <p><strong>Prefix Evaluation:</strong> ${evalPrefix}</p>`
    }
    else {
        document.getElementById('output').innerHTML = "<p style='color:red;'>Invalid  Expression!</p>";
    }
}
function evaluateExpression3(){
    const calc = new Calculator();
    const expression = document.getElementById('expression').value;
    if (calc.isValidInfix(expression)) {
        const postfix = calc.infixToPostfix(expression);
        const evalPostfix = calc.evaluatePostfix(postfix);
        document.getElementById('output').innerHTML = `
       <p><strong>Postfix Evaluation:</strong> ${evalPostfix}</p>`

}
else{
    document.getElementById('output').innerHTML = "<p style='color:red;'>Invalid  Expression!</p>";
}
}
function evaluateExpression4(){
    const calc = new Calculator();
    const expression = document.getElementById('expression').value;
    if (calc.isValidInfix(expression)) {
        const postfix = calc.infixToPostfix(expression);
        const evalPostfix = calc.evaluatePostfix(postfix);
        const infixFromPostfix = calc.postfixToInfix(postfix);
        document.getElementById('output').innerHTML = `
       <p><strong>Postfix Evaluation:</strong> ${evalPostfix}</p>     
       <br><p><strong>Postfix to Infix:</strong> ${infixFromPostfix}</p>`

}
else{
    document.getElementById('output').innerHTML = "<p style='color:red;'>Invalid  Expression!</p>";
}
}
function evaluateExpression5() {
    const calc = new Calculator();
    const expression = document.getElementById('expression').value;
    
    if (calc.isValidInfix(expression)) {
        const prefix = calc.infixToPrefix(expression);
        const evalPrefix = calc.evaluatePrefix(prefix);  // Evaluation of the prefix expression
        const infixFromPrefix = calc.prefixToInfix(prefix);  // Converting prefix back to infix

        document.getElementById('output').innerHTML = `
            <p><strong>Prefix Evaluation:</strong> ${evalPrefix}  </p>     
            <br><p><strong>Prefix to Infix:</strong> ${infixFromPrefix}  </p>`;
    } else {
        document.getElementById('output').innerHTML = "<p style='color:red;'>Invalid Expression!</p>";
    }
}


        
        
        
    //     const evalInfix = calc.evaluateInfix(expression);
    //     
    //     const prefixFromPostfix = calc.postfixToPrefix(postfix);
    //     const postfixFromPrefix = calc.prefixToPostfix(prefix);
    //     const infixFromPrefix = calc.prefixToInfix(prefix);

    //     document.getElementById('output').innerHTML = `
           
           
          
           
    //         <p><strong>Infix Evaluation:</strong> ${evalInfix}</p>
    //         <p><strong>Postfix to Infix:</strong> ${infixFromPostfix}</
    //         <p><strong>Postfix to Prefix:</strong> ${prefixFromPostfix}</p>
    //         <p><strong>Prefix to Postfix:</strong> ${postfixFromPrefix}</p>
    //        p> <p><strong>Prefix to Infix:</strong> ${infixFromPrefix}</p>
    // ;
     

