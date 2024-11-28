@{%
const { lexer, compare, add, subtract, multiply, divide, trimSpace } = require('./lexer');
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

term -> term "*" unit {%
    multiply
%}
  | term "/" unit {%
    divide
%}
  | unit

unit -> WS int WS {%
    trimSpace
%}
  | WS int {%
    trimSpace
%}
  | int WS {%
    trimSpace
%}
  | int
