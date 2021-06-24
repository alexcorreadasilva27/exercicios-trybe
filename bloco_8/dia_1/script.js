// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(24, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//     else {
//         console.log(number,'is odd');
//     }
//   });

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  
//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
//   repeat(24, isEven); // Testa quais números serão pares;
//   repeat(24, isOdd); // Testa quais números serão ímpares;

// const doingThings = (callback) => {
//     const result = callback();
//     console.log(result);
// }

// const wakeUp = () =>'Acordando!!';

// const breakfast = () =>  "Bora Tomar café";
 
// const sleep = () => 'Partiu Dormir';
 
// doingThings(sleep);

// const geradorEmpregados = (nomeInteiro) => {
//     const email = nomeInteiro.toLowerCase().split(' ').join('_');
//     return { nomeInteiro, email: `${email}@trybe.com` };
// }

// const newEmployees = (chamando) => {
//     const employees = {
//       id1: chamando('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: chamando('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: chamando('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//       id4: chamando('Alex Correa'),
//     }
//     return employees;
//   };

//   console.log(newEmployees(geradorEmpregados));

// const checandoNumero = (meuNumero, numero) => meuNumero === numero;

// const resultadoLoteria = (meuNumero,chamando) => {
//      let numero = [Math.floor((Math.random()*10)+1)];
     
//     for (let index =0; index <= numero; index += 1){
//     console.log(`O número é: ${numero}`);
// }
    
//     return chamando(meuNumero,numero) ? 'Hoje é seu dia de sorte,você ganhou!!!':'Tente Novamente';

// }
// console.log(resultadoLoteria(0,checandoNumero));
// console.log(resultadoLoteria(1,checandoNumero));
// console.log(resultadoLoteria(2,checandoNumero));
// console.log(resultadoLoteria(3,checandoNumero));
// console.log(resultadoLoteria(4,checandoNumero));
// console.log(resultadoLoteria(5,checandoNumero));
// console.log(resultadoLoteria(6,checandoNumero));
// console.log(resultadoLoteria(7,checandoNumero));
// console.log(resultadoLoteria(8,checandoNumero));
// console.log(resultadoLoteria(9,checandoNumero));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C',];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const STUDENT_ANSWERS2 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

// const Answers = (rightAnswers,studentAnswers,action) => {
//     let count = 0;
//     for (index =0; index < rightAnswers.length; index += 1){
//         const actionReturn = action(rightAnswers[index],studentAnswers[index]);
//         count += actionReturn;
//     }
//     if(count > 7){
//         console.log('Parabéns você passou');
//         } else if (count < 7 && count > 4) {
//             console.log('Você está em Recuperação')
//         }else{
//             console.log('Você Reprovou :(');
//         }
//     return `Resultado final: ${count} corretas`;
    
// }
//     console.log(Answers(RIGHT_ANSWERS,STUDENT_ANSWERS, (rAnswers,uAnswers) =>{
        
//         if (rAnswers === uAnswers) 
//         {
//           return 1;
//         } 
//         if (uAnswers === 'N.A'){
//           return 0;
//         }
//         else 
//         {
//           return -0.5;
//         }      
//     }));

//     console.log(Answers(RIGHT_ANSWERS,STUDENT_ANSWERS2, (rAnswers,uAnswers) =>{
        
//         if (rAnswers === uAnswers) 
//         {
//           return 1;
//         } 
//         if (uAnswers === 'N.A'){
//           return 0;
//         }
//         else 
//         {
//           return -0.5;
//         }      
//     }));

const student = {
    Html: 'Muito Bom',
    Css: 10,
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));