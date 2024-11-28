@{%
const { lexer, compare, add, subtract, multiply, divide, astNode } = require('./astLexer');
%}

@lexer lexer
@builtin "number.ne"

main -> comparison
operator -> "=" | "!="
WS -> %WS

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

factor -> WS int WS {%
    astNode
%}
  | WS int {%
    astNode
%}
  | int WS {%
    astNode
%}
  | int {%
    astNode
%}

