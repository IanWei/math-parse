const lexerConfig = {
  WS:      /[ \t]+/,
  number:  /0|[1-9][0-9]*/,
  operator: ["+", "-", "*", "/", "=", "!="]
}

const extractValue = (value) => {
  while (Array.isArray(value)) value = value[0];
  return value;
};

module.exports = {
  lexerConfig,
  extractValue
}
