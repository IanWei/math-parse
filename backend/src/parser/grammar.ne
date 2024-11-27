@{%
const { lexer, compare, add, subtract, multiply, divide } = require('./lexer');
%}

@lexer lexer
@builtin "number.ne"

main -> comparison

comparison -> arithmetic operator arithmetic {%
    compare
 %}

operator -> "=" | "!="

ws -> %WS

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

