import nearley from 'nearley';
import * as grammar from './grammar.js'; // Path to compiled grammar

export function parseExpression(expr: string): any {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(expr.replaceAll(' ', ''));
  return parser.results[0];
}
