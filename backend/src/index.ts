import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Grammar, Parser } from 'nearley';
import grammar from './parser/grammar.js';
import ast from './parser/ast.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/evaluate', (req, res) => {
  try {
    const parser = new Parser(Grammar.fromCompiled(grammar));
    const astParser = new Parser(Grammar.fromCompiled(ast));
    parser.feed(req.body.expression.replaceAll(" ", ""));
    astParser.feed(req.body.expression.replaceAll(" ", ""));
    const result = parser.results[0];
    const astResult = astParser.results[0][0];
    res.json({ result, astResult });
  } catch (error) {
    res.status(400).json({ error: `The error occurs at the position ${error.offset}` });
  }
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});
