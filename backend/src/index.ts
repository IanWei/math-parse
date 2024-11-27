import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Grammar, Parser } from 'nearley';
import grammar from './parser/grammar.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/evaluate', (req, res) => {
  try {
    const parser = new Parser(Grammar.fromCompiled(grammar));
    parser.feed(req.body.expression.replaceAll(" ", ""));
    const result = parser.results[0];
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: `The error occurs at the position ${error.offset}` });
  }
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});
