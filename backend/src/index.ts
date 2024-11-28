import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { parseExpression } from './util/parserHelper.ts';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post('/evaluate', (req, res) => {
  try {
    const result = parseExpression(req.body.expression);
    const astResult = parseExpression(req.body.expression, true);
    res.json({ result, astResult });
  } catch (error) {
    res.status(400).json({ error: `The error occurs at the position ${error.offset}` });
  }
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});
