const { encode, decode } = require('./encodeDecode.js');

describe('Testa função encode e decode', () => {
  it('a função encode é definida', () =>{
      expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
      expect(typeof encode).toEqual('function');
  });
  it('convert apenas a vogal "a" no número 1', () => {
      expect(encode('ana')).toEqual('1n1');
  });
  it('convert apenas e vogal "a" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('convert apenas i vogal "a" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('convert apenas o vogal "a" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('convert apenas u vogal "a" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () =>{
      expect(encode('trybe').length).toEqual(5);
  });
});

it('a função decode é definida', () => {
    expect(decode).toBeDefined();
});
it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
});
it('convert apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
});
it('convert apenas o número 2 na vogal e', () => {
  expect(decode('2l2')).toEqual('ele');
});
it('convert apenas o número 3 na vogal i', () => {
  expect(decode('x3x3')).toEqual('xixi');
});
it('convert apenas o número 4 na vogal o', () => {
  expect(decode('4v4')).toEqual('ovo');
});
it('convert apenas o número 5 na vogal u', () => {
  expect(decode('n5')).toEqual('nu');
});
it('checa se o retorno da função tem o mesmo número de caracteres', () =>{
    expect(encode('trybe').length).toEqual(5);
});