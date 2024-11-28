import { parseExpression } from '../util/parserHelper.ts';

describe('Expression Parser', () => {
  const testCases = [
    { expr: '1 + 2 = 3', expected: true },
    { expr: '6 = 10 / 2 + 1', expected: true },
    { expr: '12 + 3 != 4 / 2 + 5', expected: true },
    { expr: '2 + 3 * 2 = 10', expected: false },
    { expr: '2 * 3 + 4 != 10', expected: false },
    { expr: '10 * 3 -3 != 27', expected: false },
    { expr: '4 -22 + 10 / 5 = -16', expected: true },
    { expr: '1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 != 55', expected: false },
  ];

  testCases.forEach(({ expr, expected }) => {
    it(`should correctly parse "${expr}"`, () => {
      const result = parseExpression(expr);
      expect(result[0]).toBe(expected);
    });
  });
});
