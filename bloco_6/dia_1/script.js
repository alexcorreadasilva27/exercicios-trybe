function CriandoOpcoeDeEstado(){
    let estados = document.getElementById('estados');
    let   opcoesEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < opcoesEstado.length; index += 1){
        let criandoOpcoes = document.createElement('option');
        estados.appendChild(criandoOpcoes).innerText = opcoesEstado[index];
        estados.appendChild(criandoOpcoes).value = opcoesEstado[index];
    }
}

// let inputs = {
//     Nome: {
//       maxLength: 40,
//       required: true,
//     },
//     Email: {
//       maxLength: 50,
//       required: true
//     },
//     CPF: {
//       maxLength: 11,
//       required: true
//     },
//     Endereço: {
//       maxLength: 200,
//       required: true
//     },
//     Cidade: {
//       maxLength: 28,
//       required: true,
//     },
//     Estado: {
//       type: 'select',
//       required: true,
//     },
//     tipoDeImovel: {
//       type: 'radio',
//       required: true,
//     },
//     Resumo: {
//       maxLength: 1000,
//       required: true,
//     },
//     Cargo: {
//       maxLength: 40,
//       required: true,
//     },
//     descricaoCargo: {
//       maxLength: 500,
//       required: true,
//     },
//     dataInicio: {
//       type: 'date',
//       required: true,
//     }
//   }

//   function defaultValidation(input, name){
//     let trimmed = input.value.trim();
//     let validation = inputs[name];
  
//     if(validation.required && trimmed.length === 0){
//       return false;
//     }
  
//     if(validation.maxLength && trimmed.length > validation.maxLength){
//       return false;
//     }
    
  
//     return true;
//   }

//   function dateValidation(input, name){
//     if(input.value.length === 0){
//       return {
//         message: 'A data não foi preenchida!'
//       }
//     }
  
//     let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
//     if(!regex.test(input.value)){
//       return {
//         message: 'Data: Formato inválido'
//       };
//     }
  

//   let splitted = input.value.split('/');
//   let day = splitted[0];
//   let month = splitted[1];
//   let year = splitted[2];

//   if(day < 0 || day > 30){
//     return {
//       message: 'Dia inválido'
//     };
//   }

//   if(month < 0 || month > 12){
//     return {
//       message: 'Mês inválido'
//     }
//   }

//   if(year < 0) {
//     return {
//       message: 'Ano inválido'
//     };
//   }

//   return true;
// }

CriandoOpcoeDeEstado();


