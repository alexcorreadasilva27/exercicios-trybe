
const service = require('./service');
jest.mock('./service');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
//   service.randomRgbColor = jest.fn();

//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando se a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
//   expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
// });

// const service = require('./service');

// test("#randomRgbColor", () => {
//   // testando quantas vezes a função foi chamada e qual seu retorno
//   service.randomRgbColor = jest
//     .fn()
//     .mockReturnValue('default value')
//     .mockReturnValueOnce('first call')
//     .mockReturnValueOnce('second call');

//   expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

//   expect(service.randomRgbColor()).toBe("first call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

//   expect(service.randomRgbColor()).toBe("second call");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

//   expect(service.randomRgbColor()).toBe("default value");
//   expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
// });


describe('Bloco 10 dia 3', () =>{
  describe('1. Testando Implementações', () =>{
  it('1.Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () =>{
    service.randoNumber = jest.fn().mockReturnValue(10);

    expect(service.randoNumber()).toBe(10);
    expect(service.randoNumber).toHaveBeenCalled();
    expect(service.randoNumber).toHaveBeenCalledTimes(1);
  });
});
  describe('2. Testando Implementações', () =>{
  it('2.Testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    service.randoNumber = jest.fn().mockImplementationOnce((a,b) => a / b);

    expect(service.randoNumber(10,2)).toBe(5);
    expect(service.randoNumber).toHaveBeenCalled();
    expect(service.randoNumber).toHaveBeenCalledTimes(1);
    expect(service.randoNumber).toHaveBeenCalledWith(10,2);
  });
});
  describe('3.Testando implementações', () => {
    it('3.1- Mockando função para receber 3 parâmetros e retornar sua multiplicação',() =>{
      service.randoNumber = jest.fn().mockImplementationOnce((a,b,c) => a *b * c);

    expect(service.randoNumber(2, 3, 4)).toBe(24);
    expect(service.randoNumber).toHaveBeenCalled();
    expect(service.randoNumber).toHaveBeenCalledTimes(1);
    expect(service.randoNumber).toHaveBeenCalledWith(2, 3, 4);
    });

    it('3.2- Mockando função que recebe um parâmetro e retorna seu dobro',() => {
      service.randoNumber.mockReset();
      expect(service.randoNumber).toHaveBeenCalledTimes(0);

      service.randoNumber.mockImplementation(a => a * 2);

    expect(service.randoNumber(5)).toBe(10);
    expect(service.randoNumber).toHaveBeenCalled();
    expect(service.randoNumber).toHaveBeenCalledTimes(1);
    expect(service.randoNumber).toHaveBeenCalledWith(5);
    });
  });

  describe('4.Testando Implementações', () => {
    
    it('4.1- Mockando função para receber um parâmetro e retornar em caixa baixa', () => {
      service.firstFunction.mockImplementation(a => a.toLowerCase());

      expect(service.firstFunction('UPPERCASE')).toBe('uppercase');
      expect(service.firstFunction).toHaveBeenCalled();
      expect(service.firstFunction).toHaveBeenCalledTimes(1);
      expect(service.firstFunction).toHaveBeenCalledWith('UPPERCASE');
    });

    it('4.2- Mockando função que recebe um parâmetro e retorna a última letra', () => {
      service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

      expect(service.secondFunction('letter')).toBe('r');
      expect(service.secondFunction).toHaveBeenCalled();
      expect(service.secondFunction).toHaveBeenCalledTimes(1);
      expect(service.secondFunction).toHaveBeenCalledWith('letter');
    });
    it('4.3- Mockando função que recebe 3 parâmetros e os concatena', () => {
      service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

      expect(service.thirdFunction('tr', 'y', 'be')).toBe('trybe');
      expect(service.thirdFunction).toHaveBeenCalled();
      expect(service.thirdFunction).toHaveBeenCalledTimes(1);
      expect(service.thirdFunction).toHaveBeenCalledWith('tr', 'y', 'be');
    });
  });

  describe('5.Testando implementações', () =>{
    it('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
      const first = jest
      .spyOn(service, 'firstFunction')
      .mockImplementation(a => a.toLowerCase());

      expect(first('UPPERCASE')).toBe('uppercase');
      expect(first).toHaveBeenCalled();
      expect(first).toHaveBeenCalledTimes(2);
      expect(first).toHaveBeenCalledWith('UPPERCASE');

      service.firstFunction.mockRestore();

      expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
    });
  });
});