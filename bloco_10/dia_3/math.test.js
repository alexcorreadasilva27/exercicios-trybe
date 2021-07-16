const math = require('./math');
jest.mock("./math");

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

// const math = require('./math');

// test("#somar", () => {
//   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//   const mockSomar = jest.spyOn(math, "somar");

//   mockSomar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   expect(mockSomar(1, 2)).resolves.toBe(3);
// });

// const math = require('./math');

// test("#somar", () => {
//   // testando a implementação original, o mock e o mock resetado

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3);

//   // criando o mock e substituindo a implementação para uma subtração
//   math.somar = jest.fn().mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar(5, 1)).toBe(4);
//   expect(math.somar).toHaveBeenCalledTimes(2);
//   expect(math.somar).toHaveBeenLastCalledWith(5, 1);

//   // resetando o mock
//   math.somar.mockReset();
//   expect(math.somar(1, 2)).toBe(undefined);
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenLastCalledWith(1, 2);
// });

// const math = require('./math');

// test("#somar", () => {
//   // testando a implementação original, o mock e a restauração da função original

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3);

//   // criando o mock e substituindo a implementação para uma subtração
//   const mockSomar = jest
//     .spyOn(math, "somar")
//     .mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar(5, 1)).toBe(4);
//   expect(mockSomar).toHaveBeenCalledTimes(2);
//   expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

//   // restaurando a implementação original
//   math.somar.mockRestore();
//   expect(math.somar(1, 2)).resolves.toBe(3);
// });

describe('Exercicios Conteudo', () => {
    it('Faça o mock da funcão subtrair e teste sua chamada.', () =>{
        math.subtrair = jest.fn()

        math.subtrair();
        expect(math.subtrair).toHaveBeenCalled();
    });

    it('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () =>{
        math.multiplicar = jest.fn().mockReturnValue(10);

        math.multiplicar();
        expect(math.multiplicar).toHaveBeenCalled();
        expect(math.multiplicar()).toBe(10);
    });

    it('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
        const mockSomar = jest.spyOn(math, 'somar');
        mockSomar.mockResolvedValue(5);

        mockSomar(2,3);
        expect(mockSomar).toHaveBeenCalled();
        expect(mockSomar).toHaveBeenCalledTimes(1);
        expect(mockSomar).toHaveBeenCalledWith(2,3);
        expect(mockSomar(2,3)).resolves.toBe(5);
    });

    it('Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
        const mockDividir = jest.spyOn(math, "dividir");
        mockDividir.mockReturnValue(15);
        mockDividir.mockReturnValueOnce(2);
        mockDividir.mockReturnValueOnce(5);
      
        expect(mockDividir(4, 2)).toBe(2);
        expect(mockDividir).toHaveBeenCalled();
        expect(mockDividir).toHaveBeenCalledTimes(1);
        expect(mockDividir).toHaveBeenCalledWith(4, 2);
      
        expect(mockDividir(10, 2)).toBe(5);
        expect(mockDividir).toHaveBeenCalled();
        expect(mockDividir).toHaveBeenCalledTimes(2);
        expect(mockDividir).toHaveBeenCalledWith(10, 2);
      
        expect(mockDividir(30, 2)).toBe(15);
        expect(mockDividir).toHaveBeenCalled();
        expect(mockDividir).toHaveBeenCalledTimes(3);
        expect(mockDividir).toHaveBeenCalledWith(30, 2);
    });

    it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
        const mockSubtrair = jest.spyOn(math, "subtrair");
        mockSubtrair.mockImplementation((a, b) => a * b);
        mockSubtrair.mockReturnValue(20);
      
        expect(mockSubtrair(10, 2)).toBe(20);
        expect(mockSubtrair).toHaveBeenCalled();
        expect(mockSubtrair).toHaveBeenCalledTimes(2);
        expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
      
        mockSubtrair.mockRestore();
        mockSubtrair.mockReturnValue(8);
      
        expect(mockSubtrair(10, 2)).toBe(8);
        expect(mockSubtrair).toHaveBeenCalled();
        expect(mockSubtrair).toHaveBeenCalledTimes(1);
        expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
    })
});