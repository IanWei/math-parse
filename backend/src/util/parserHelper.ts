import nearley, { CompiledGrammar } from 'nearley';
import * as ast from '../parser/ast/ast.js';
import * as grammar from '../parser/comparer/comparer.js';

export const parseExpression = (expr: string, isAst: boolean = false): any => {
  const grammarModule = (isAst ? ast : grammar) as CompiledGrammar;
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammarModule));
  parser.feed(expr);
  return isAst ? parser.results[0][0] : parser.results[0];
};
