declare module 'nearley' {
  export interface Lexer {
    reset(chunk: string, info: any): void;
    next(): any;
    save(): any;
    formatError(token: any, message?: string): string;
    has(tokenType: string): boolean;
  }

  export interface Grammar {
    Lexer?: Lexer | undefined;
    ParserRules: { [key: string]: any };
    ParserStart: string;
  }

  export interface CompiledGrammar extends Grammar {}

  export class Parser {
    constructor(grammar: Grammar);
    feed(input: string): void;
    results: any[];
  }

  export const Grammar: {
    fromCompiled(grammar: CompiledGrammar): Grammar;
  };
}
