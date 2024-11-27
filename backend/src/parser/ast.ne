@{%
const { lexer, compare, add, subtract, multiply, divide, astNode } = require('./astLexer');
%}

@lexer lexer
@builtin "number.ne"

main -> comparison
operator -> "=" | "!="

comparison -> arithmetic operator arithmetic {%
    compare
 %}

arithmetic -> arithmetic "+" term {%
    add
%}
  | arithmetic "-" term {%
    subtract
%}
  | term

term -> term "*" factor {%
    multiply
%}
  | term "/" factor {%
    divide
%}
  | factor

factor -> int {%
    astNode
%}

