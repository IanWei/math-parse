const { lexer, extractValue } = require('../common');

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

const astNode = ([left, mid, right]) => {
  const value = [left, mid, right].map(extractValue).find(value => typeof value === 'number');
  return {
    type: 'number',
    value
  }
}

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
