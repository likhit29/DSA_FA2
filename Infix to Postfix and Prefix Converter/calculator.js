class Calculator {
    constructor() {
        this.stack = new Stack();
    }

    isOperator(c) {
        return (c === '+' || c === '-' || c === '*' || c === '/');
    }

    isValidInfix(infix) {
        let operandCount = 0, operatorCount = 0, parenthesesBalance = 0;
        let lastWasOperand = false;

        for (let i = 0; i < infix.length; i++) {
            let c = infix[i];
            if (/\s/.test(c)) continue;

            if (/\d/.test(c)) {
                operandCount++;
                lastWasOperand = true;
                while (i + 1 < infix.length && /\d/.test(infix[i + 1])) i++;
            } else if (this.isOperator(c)) {
                operatorCount++;
                if (!lastWasOperand) return false;
                lastWasOperand = false;
            } else if (c === '(') {
                parenthesesBalance++;
                lastWasOperand = false;
            } else if (c === ')') {
                parenthesesBalance--;
                if (parenthesesBalance < 0) return false;
                lastWasOperand = true;
            } else {
                return false;
            }
        }
        return parenthesesBalance === 0 && operandCount === operatorCount + 1;
    }

    precedence(op) {
        return (op === '+' || op === '-') ? 1 : (op === '*' || op === '/') ? 2 : 0;
    }

    infixToPostfix(infix) {
        let result = '';
        const stack = new Stack();
        for (let c of infix) {
            if (/\s/.test(c)) continue;

            if (/\w/.test(c)) {
                result += c;
            } else if (c === '(') {
                stack.push(c);
            } else if (c === ')') {
                while (!stack.isEmpty() && stack.peek() !== '(') result += stack.pop();
                stack.pop(); // Remove '('
            } else if (this.isOperator(c)) {
                while (!stack.isEmpty() && this.precedence(stack.peek()) >= this.precedence(c)) result += stack.pop();
                stack.push(c);
            }
        }
        while (!stack.isEmpty()) result += stack.pop();
        return result;
    }

    infixToPrefix(infix) {
        infix = this.reverseString(infix);
        infix = infix.replace(/\(/g, '_').replace(/\)/g, '(').replace(/_/g, ')');
        const postfix = this.infixToPostfix(infix);
        return this.reverseString(postfix);
    }

    postfixToInfix(postfix) {
        const stack = new Stack();
        for (let c of postfix) {
            if (/\w/.test(c)) {
                stack.push(c);
            } else {
                const op2 = stack.pop();
                const op1 = stack.pop();
                stack.push(`(${op1}${c}${op2})`);
            }
        }
        return stack.pop();
    }

    postfixToPrefix(postfix) {
        const stack = new Stack();
        for (let c of postfix) {
            if (/\w/.test(c)) {
                stack.push(c);
            } else {
                const op2 = stack.pop();
                const op1 = stack.pop();
                stack.push(c + op1 + op2);
            }
        }
        return stack.pop();
    }

    prefixToInfix(prefix) {
        const stack = new Stack();
        for (let i = prefix.length - 1; i >= 0; i--) {
            const c = prefix[i];
            if (/\w/.test(c)) {
                stack.push(c);
            } else {
                const op1 = stack.pop();
                const op2 = stack.pop();
                stack.push(`(${op1}${c}${op2})`);
            }
        }
        return stack.pop();
    }

    prefixToPostfix(prefix) {
        const stack = new Stack();
        for (let i = prefix.length - 1; i >= 0; i--) {
            const c = prefix[i];
            if (/\w/.test(c)) {
                stack.push(c);
            } else {
                const op1 = stack.pop();
                const op2 = stack.pop();
                stack.push(op1 + op2 + c);
            }
        }
        return stack.pop();
    }

    evaluatePostfix(postfix) {
        const stack = new Stack();
        for (let c of postfix) {
            if (/\d/.test(c)) {
                stack.push(Number(c));
            } else {
                const op2 = stack.pop();
                const op1 = stack.pop();
                stack.push(this.applyOperator(c, op1, op2));
            }
        }
        return stack.pop();
    }

    evaluatePrefix(prefix) {
        const stack = new Stack();
        for (let i = prefix.length - 1; i >= 0; i--) {
            const c = prefix[i];
            if (/\d/.test(c)) {
                stack.push(Number(c));
            } else {
                const op1 = stack.pop();
                const op2 = stack.pop();
                stack.push(this.applyOperator(c, op1, op2));
            }
        }
        return stack.pop();
    }

    evaluateInfix(infix) {
        return this.evaluatePostfix(this.infixToPostfix(infix));
    }

    applyOperator(operator, op1, op2) {
        switch (operator) {
            case '+': return op1 + op2;
            case '-': return op1 - op2;
            case '*': return op1 * op2;
            case '/': return Math.floor(op1 / op2);
            default: return 0;
        }
    }

    reverseString(str) {
        return str.split('').reverse().join('');
    }
}
