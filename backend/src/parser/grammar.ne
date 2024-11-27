@{%
const { lexer, compare, add, subtract, multiply, divide } = require('./lexer');
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

term -> term "*" int {%
    multiply
%}
  | term "/" int {%
    divide
%}
  | int

