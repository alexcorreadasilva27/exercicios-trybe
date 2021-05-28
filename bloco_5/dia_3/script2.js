function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let mayDaysList = [25,26,27,28,29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criandoOMes(){
      let pegandoListaDosDias = document.querySelector('#days');
      for(index = 0; index < mayDaysList.length; index += 1){
          let day = mayDaysList[index]
          let dayItem = document.createElement('li');
          if(day === 1){
              dayItem.className = 'holiday';
              dayItem.innerHTML = day;
              pegandoListaDosDias.appendChild(dayItem);
          }else if(day === 7 || day === 14 || day === 21 || day === 28){
              dayItem.className = 'friday';
              dayItem.innerHTML = day;
              pegandoListaDosDias.appendChild(dayItem);  
          }else{
              dayItem.innerHTML = day;
              dayItem.className = 'day';
              pegandoListaDosDias.appendChild(dayItem);
          }
      };
  };
    function criandoBotaoDosFeriados(buttoName){
        let buttonContainer = document.querySelector('.buttons-container');
        let newButton = document.createElement('button');
        let buttonNewID = 'btn-holiday';

        newButton.innerHTML = buttoName;
        newButton.id = buttonNewID;
        buttonContainer.appendChild(newButton);
    };
    


function AnimacaoDosFeriados(){
    let pegandoOBotaoDosFeriados = document.querySelector('#btn-holiday');
    let pegandoFeriados = document.querySelectorAll('.holiday')
    let corDeFundo = 'rgb(238,238,238)';
    let setNewColor = 'blue';

    pegandoOBotaoDosFeriados.addEventListener('click', function() {
        for(let index = 0; index < pegandoFeriados.length; index+= 1){
            if(pegandoFeriados[index].style.backgroundColor === setNewColor){
                pegandoFeriados[index].style.backgroundColor = corDeFundo;
            }else{ 
                pegandoFeriados[index].style.backgroundColor = setNewColor;
            }
        }
    })
};

// function displayHolidays() {
//     let getHolidayButton = document.querySelector('#btn-holiday');
//     let getHolidays = document.querySelectorAll('.holiday')
//     let backgroundColor = 'rgb(238,238,238)';
//     let setNewColor = 'white';
  
//     getHolidayButton.addEventListener('click', function() {
//       for (let index = 0; index < getHolidays.length; index += 1) {
//         if (getHolidays[index].style.backgroundColor === setNewColor) {
//           getHolidays[index].style.backgroundColor = backgroundColor;
//         } else {
//           getHolidays[index].style.backgroundColor = setNewColor;
//         }
//       }
//     })
//   };
  
 

criandoOMes();
criandoBotaoDosFeriados('Feriados'); 
AnimacaoDosFeriados();
  
   
  