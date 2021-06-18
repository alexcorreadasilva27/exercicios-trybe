// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer);

//   const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   const customer2 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer2);
  
//   customer2.lastName = 'Faria';
//   console.log(customer2);
  
//   const customer3 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer3);
//   customer3['lastName'] = 'Silva';
//   console.log(customer3);

  

//   const customer4 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer4[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer4.firstName} ${customer4.lastName}`;
//   customer4[newKey] = fullName;
//   console.log(customer4);

// const numbers = () => {
//    const number = {};

//     let newNumber = 'a';
//     const a = 1;
//     number[newNumber] = a;
//     newNumber = 'b';
//     const b = 2;
//     number[newNumber] = b;
//     newNumber =  'c';
//     const c = 3
//     number[newNumber] =c;
//     newNumber = 'd';
//     const d = b +c;
//     number[newNumber] = d;
//     const result = `${number.b} + ${number.c} = ${number.d}`;
//     number[newNumber] = result;


//     return number;
// };
//     console.log(numbers());

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for(index in arrayOfSkills){
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');
//   listSkills(student2);

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };
  
//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
  
//   const listSkillsValuesWithValues = (student) => Object.values(student);
  
//   // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
//   // Com Object.values
//   console.log(listSkillsValuesWithValues(student));

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    // const person = {
    //     name: 'Roberto',
    //   };
      
    //   const lastName = {
    //     lastName: 'Silva',
    //   };
      
    //   const clone = Object.assign(person, lastName);
      
    //   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
    //   console.log(person); // { name: 'Roberto', lastName: 'Silva' }

    // clone.name = 'Maria';

    // console.log('Mudando a propriedade name através do objeto clone')
    // console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
    // console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
    // console.log('--------------');
    
    // person.lastName = 'Ferreira';
    
    // console.log('Mudando a propriedade lastName através do objeto person');
    // console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
    // console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


    const order = {
        name: 'Rafael Andrade',
        phoneNumber: '11-98763-1416',
        Endereço: {
          street: 'Rua das Flores',
          number: '389',
          apartment: '701',
        },
        order: {
          pizza: {
            margherita: {
              amount: 1,
              price: 25,
            },
            pepperoni: {
              amount: 1,
              price: 20,
            }
          },
          drinks: {
            coke: {
              type: 'Coca-Cola Zero',
              price: 10,
              amount: 1,
            }
          },
          delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
          }
        },
        payment: {
          total: 60,
        },
      };
      
      const customerInfo = (order) => {
        const Endereço ='Endereço';
        const PessoaDelivery = order.order.delivery.deliveryPerson;
        const nomeCliente = order['name'];
        const telefoneCliente = order['phoneNumber'];
        const Rua = order[Endereço].street;
        const número = order[Endereço].number;
        const apartamento = order[Endereço].apartment; 


      
      console.log(`Olá ${PessoaDelivery}, entrega para ${nomeCliente}, Telefone: ${telefoneCliente}, R. ${Rua} Nº: ${número}, AP: ${apartamento} `);
    }
    customerInfo(order);  
    
    
      
      
    //   const orderModifier = (order) => {
        // Adicione abaixo as informações necessárias.
      
    //   }
      
    //   orderModifier(order);

    //   console.log(order)

