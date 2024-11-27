const moo = require("moo");

const lexer = moo.compile({
  number:  /0|[1-9][0-9]*/,
  operator: ["+", "-", "*", "/", "=", "!="]
});

const extractValue = (value) => {
  while (Array.isArray(value)) value = value[0];
  return value;
};

const compare = ([left, operator, right]) => ({
  type: 'comparor',
  operator: extractValue(operator[0]?.value) === '=' ? '=' : '!=',
  left: extractValue(left),
  right: extractValue(right),
});

const operate = (operation) => ([left, _, right]) => {
  const leftValue = extractValue(left);
  const rightValue = extractValue(right);
  const operatorMap = {
    add: { type: 'arithmetic', operator: '+' },
    subtract: { type: 'arithmetic', operator: '-' },
    multiply: { type: 'term', operator: '*' },
    divide: { type: 'term', operator: '*' },
  };
  
  return { ...operatorMap[operation], left: leftValue, right: rightValue };
};

const astNode = ([value]) => ({
  type: 'number',
  value
})

const add = operate("add");
const subtract = operate("subtract");
const multiply = operate("multiply");
const divide = operate("divide");

module.exports = {
  lexer,
  compare,
  add,
  subtract,
  multiply,
  divide,
  astNode
};
