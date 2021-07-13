
const sum = require('./sum');

describe('sum', () => {
  it('4 plus 5 equal 9', () => {
    expect(sum(4,5)).toBe(9);
});
  it('throws an error when a string is passed', () => {
    expect(() =>{
      sum(4, '5');
    }).toThrow();
  });
  it('0 plus 0 equals 0', () =>{
    expect(sum(0,0)).toBe(0);
  });
  it('error message is "parameters must be numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});