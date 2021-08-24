const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

function criaCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let index = 0; index < 6; index += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}
  const meuReducer = (state = ESTADO_INICIAL, action) => {
      switch(action.type) {
          case 'NEXT_COLOR':
              return {
                  ...state,
                  index: state.index === state.colors.length -1 ? 0 : state.index + 1,
              };
            case 'PREVIOUS_COLOR':
                return {
                    ...state,
                    index: state.index === 0 ? state.colors.length - 1 : state.index -1,
                };
            case 'RANDOM_COLOR':
              return {
                  ...state,
                  colors: [...state.colors,criaCor()],
                  index: state.colors.length,
              }
          default:
              return state;
      }
  }

  const store = Redux.createStore(meuReducer);


  document.getElementById('next').addEventListener('click', () => {
      store.dispatch({ type: 'NEXT_COLOR' });
  });
  document.getElementById('previous').addEventListener('click', () => {
      store.dispatch({ type: 'PREVIOUS_COLOR' });
  });
  document.getElementById('random').addEventListener('click', () => {
      store.dispatch({ type: 'RANDOM_COLOR'});
  });

  store.subscribe(() => {
      const { colors, index } = store.getState();
      document.getElementById('value').innerHTML = colors[index];
      document.getElementById('container').style.backgroundColor = colors[index];
  });




 