import nearley, { CompiledGrammar } from 'nearley';
import * as ast from './ast.js';
import * as grammar from './grammar.js';

export const parseExpression = (expr: string, isAst: boolean = false): any => {
  const grammarModule = (isAst ? ast : grammar) as CompiledGrammar;
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammarModule));
  parser.feed(expr);
  return isAst ? JSON.stringify(parser.results[0][0], null, 2) : parser.results[0];
};
