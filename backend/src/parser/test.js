const nearley = require('nearley');
const grammar = require('./grammar.js'); // Path to compiled grammar

const input = [
    "1 + 2 = 3",
    "6 = 10 / 2 + 1",
    "12 + 3 != 4 / 2 + 5",
    "2 + 3 * 2 = 10",
    "2 * 3 + 4 != 10",
];

input.forEach(expr => {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(expr.replaceAll(" ", ""));
    console.log(`${expr} => ${parser.results[0]}`);
});
