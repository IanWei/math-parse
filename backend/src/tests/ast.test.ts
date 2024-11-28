import { parseExpression } from '../util/parserHelper.ts';

describe('AST Parser', () => {
  const testCases = [
    {
      expr: '1 + 2 = 3',
      expected: { type: "comparor", operator: "=", left: { type: "arithmetic", operator: "+", left: { type: "number", value: 1 }, right: { type: "number", value: 2 } }, right: { type: "number", value: 3 } }
    },
    {
      expr: '6 = 10 / 2 + 1',
      expected: { type: "comparor", operator: "=", left: { type: "number", value: 6 }, right: { type: "arithmetic", operator: "+", left: { type: "term", operator: "*", left: { type: "number", value: 10 }, right: { type: "number", value: 2 } }, right: { type: "number", value: 1 } } }
    },
    {
      expr: '12 + 3 != 4 / 2 + 5',
      expected: { type: "comparor", operator: "!=", left: { type: "arithmetic", operator: "+", left: { type: "number", value: 12 }, right: { type: "number", value: 3 } }, right: { type: "arithmetic", operator: "+", left: { type: "term", operator: "*", left: { type: "number", value: 4 }, right: { type: "number", value: 2 } }, right: { type: "number", value: 5 } } }
    },
    {
      expr: '2 + 3 * 2 = 10',
      expected: { type: "comparor", operator: "=", left: { type: "arithmetic", operator: "+", left: { type: "number", value: 2 }, right: { type: "term", operator: "*", left: { type: "number", value: 3 }, right: { type: "number", value: 2 } } }, right: { type: "number", value: 10 } }
    },
    {
      expr: '2 * 3 + 4 != 10',
      expected: { type: "comparor", operator: "!=", left: { type: "arithmetic", operator: "+", left: { type: "term", operator: "*", left: { type: "number", value: 2 }, right: { type: "number", value: 3 } }, right: { type: "number", value: 4 } }, right: { type: "number", value: 10 } }
    }
  ];

  testCases.forEach(({ expr, expected }) => {
    it(`should correctly parse "${expr}"`, () => {
      expect(JSON.stringify(parseExpression(expr, true), null, 2)).toBe(JSON.stringify(expected, null, 2));
    });
  });
});
