// https://leetcode.com/problems/evaluate-reverse-polish-notation/

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  tokens.forEach((token) => {
    if (["+", "-", "*", "/"].includes(token)) {
      const right = stack.pop();
      const left = stack.pop();

      if (token === "+") {
        stack.push(left + right);
      } else if (token === "-") {
        stack.push(left - right);
      } else if (token === "*") {
        stack.push(left * right);
      } else if (token === "/") {
        stack.push(Math.trunc(left / right));
      }
    } else {
      stack.push(Number(token));
    }
  });

  return stack.pop();
}
