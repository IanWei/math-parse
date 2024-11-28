const moo = require("moo");

const lexer = moo.compile({
  WS:      /[ \t]+/,
  number:  /0|[1-9][0-9]*/,
  operator: ["+", "-", "*", "/", "=", "!="]
});

const extractValue = (value) => {
  while (Array.isArray(value)) value = value[0];
  return value;
};

const compare = ([left, operator, right]) => {
  left = extractValue(left);
  right = extractValue(right);
  
  const op = operator[0]?.value;
  return op === "=" ? left === right : op === "!=" ? left !== right : null;
};

const operate = (operation) => ([left, _, right]) => {
  left = extractValue(left);
  right = extractValue(right);
  
  if (operation === "divide" && right === 0) {
    throw new Error('Division by zero is not allowed');
  }
  
  switch (operation) {
    case "add": return left + right;
    case "subtract": return left - right;
    case "multiply": return left * right;
    case "divide": return left / right;
  }
};

const add = operate("add");
const subtract = operate("subtract");
const multiply = operate("multiply");
const divide = operate("divide");

const trimSpace = ([left, mid, right]) =>
  [left, mid, right].map(extractValue).find(value => typeof value === 'number');

module.exports = {
  lexer,
  compare,
  add,
  subtract,
  multiply,
  divide,
  trimSpace
};
