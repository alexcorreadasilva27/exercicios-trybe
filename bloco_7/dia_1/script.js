// function userInfo() {
//     const userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//    console.log(userEmail);
//   }
//   userInfo();

// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// )

// Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// const printName = function () {
//     const myName = "Lucas";
//     return myName;
//   }
//   console.log(printName());


    // let s = ['Hello World!', "Olá Mindo!"];
    // console.log(s[0]);

    // function testingScope(escopo) {
    //     if (escopo === true) {
    //       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    //       console.log(ifScope);
    //     } else {
    //       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    //       console.log(elseScope);
    //     }
    //   }

    //   testingScope(true);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// forma normal sem array.sort//
    // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    // const ordenarNumber = () => {
       
    //     oddsAndEvens[0] = 2;
    //     oddsAndEvens[1] = 3;
    //     oddsAndEvens[2] = 4;
    //     oddsAndEvens[3] = 7;
    //     oddsAndEvens[4] = 10;
    //     oddsAndEvens[5] = 13;

    //     return oddsAndEvens;

    // }
    
    // const ordenadoArray = ordenarNumber();
    // console.log(`os numeros ${ordenadoArray} se encontram ordenado de forma crescente`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// forma com array.sort //
    // const ordenarArrayBonus = array => {
    //     const ordernandoNúmeros = array.sort((a,b) => a - b);
    //     return ordernandoNúmeros;
    // }

    // const ordenandoArrayBonus = ordenarArrayBonus(oddsAndEvens);
    // console.log(`Os números ${ordenandoArrayBonus} se encontram ordenado de forma crescente`);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //forma de uma linha com array.sort//

    // console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenado de forma crescente`);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// exercicio fatorial 
    // const fatorial  = número => {
    //     let resultado = 1;

    //     for (let index = 2;index <= número; index += 1){
    //         resultado *= index;
    //     }
    //     return resultado
    // }

    // console.log(fatorial(5))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //recursiva

    // const fatorial  = número => número > 1 ? número *  fatorial(número - 1) : 1;
    // console.log(fatorial(5));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
    //forma de achar a maior palavra
    // const maiorPalavra = text => {
    //     let palavraNoArray = text.split(' ');
    //     let maxTamanho = 0;
    //     let resultado = '';

    //     for (const palavra of palavraNoArray){
    //         if(palavra.length > maxTamanho){
    //             maxTamanho = palavra.length;
    //             resultado = palavra;
    //         }
    //     }

    //     return resultado;
    // }

    // console.log(maiorPalavra('Antonio foi no banheiro e não sabemos o que aconteceu, depois ele foi no otorrinolaringologista'));
//////////////////////////////////////////////////////

    // forma de achar a maior palavra em uma linha

    // const maiorPalavra = texto => texto.split(' ').sort((palavraA,palavraB) => palavraB.length - palavraA.length)[0];
    // const menorPalavra = texto => texto.split(' ').sort((palavraA,palavraB) => palavraA.length - palavraB.length)[0];
    
    // console.log("A maior palavra é:");
    
    // console.log(maiorPalavra('Antonio foi no banheiro e não sabemos o que aconteceu, depois ele foi no otorrinolaringologista'));

    // console.log("A menor palavra é:");

    // console.log(menorPalavra('Antonio foi no banheiro e não sabemos o que aconteceu, depois ele foi no otorrinolaringologista'));

