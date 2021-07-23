// import React from 'react';
// import './App.css';

// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */
// function handleClick1() {
//   console.log('Clicou no botão!')
// }

// function handleClick2() {
//   console.log('Parabéns Você ganhou $1000000,00')
// }

// function handleClick3() {
//   console.log('Parabéns acaba de ganhar uma Viajem para o Monte Everesr')
// }

// class App extends React.Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render() {
//     return (
//     <div>
//       <button onClick={handleClick1}>Meu botão</button>
//       <button onClick={handleClick2}>Clique e Veja Seu Prêmio</button>
//       <button onClick={handleClick3}>Clique e Ganhe uma Viajem</button>
//     </div>
//   )
//   }
// }

// export default App;

////////////////////////////////Acessando uma função nossa dentro da classe//////////////////////////////////////////////////
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick() {
//     console.log('Clicou!')
//   }

//   render() {
//     /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
//     através da sintaxe `this.minhaFuncao` para usá-la num evento */
//     return <button type="button" onClick={this.handleClick}>Meu botão</button>;
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////Constructor////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
//     super()

//     // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
//   }

//   render() {
//     return <span>Meu componente!</span>
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////this////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   render() {
//     console.log(this)
//     return <span>Hello, world!</span>
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   handleClick() {
//     // Essa chamada ao `this` retorna `undefined`? !
//     console.log(this)
//     console.log('Clicou')
//   }

//   render() {
//     // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
//     console.log(this)
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super()
//     // A função abaixo vincula "manualmente" o `this` à nossa função
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
//     Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
//     e tudo o mais daqui de dentro */
//     console.log(this)
//     console.log('Clicou!')
//   }

//   render() {
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';

// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */

// class App extends React.Component {
//   constructor() {
//     super();
//     this.handleClick1 = this.handleClick1.bind(this);
//     this.handleClick2 = this.handleClick2.bind(this);
//     this.handleClick3 = this.handleClick3.bind(this);
//   }




//   handleClick1() {
//     console.log('"this" Clicou no botão!', this);
//   }
  
//   handleClick2() {
//     console.log('"this" Parabéns Você ganhou $1000000,00', this)
//   }
  
//   handleClick3() {
//     console.log('"this" Parabéns acaba de ganhar uma Viajem para o Monte Everest', this)
//   }
  
//   render() {
//     return (
//     <div>
//       <button onClick={ this.handleClick1 }>Meu botão</button>
//       <button onClick={ this.handleClick2 }>Clique e Veja Seu Prêmio</button>
//       <button onClick={ this.handleClick3 }>Clique e Ganhe uma Viajem</button>
//     </div>
//   )
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super()
//     /* Para definir um estado inicial ao componente, a ser definido
//     no momento em que o componente for colocado na tela, faça uma atribuição
//     de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
//     this.state = {
//       numeroDeCliques: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
//     ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
//     React*/
//     this.setState({
//       numeroDeCliques: 1
//     })
//   }

//   render() {
//     /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
//     return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       numeroDeCliques: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     /* Passando uma callback à função setState, que recebe de parâmetros
//     o estado anterior e as props do componente, você garante que as atualizações
//     do estado acontecerão uma depois da outra! */
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques: estadoAnterior.numeroDeCliques + 1
//     }))
//   }

//   render() {
//     return <button onClick={ this.handleClick }>{this.state.numeroDeCliques}</button>
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clicksB1: 0,
      clicksB2: 0,
      clicksB3: 0,
    };
  }




  handleClick1() {
    this.setState((prevState) => ({
      clicksB1: prevState.clicksB1 +1,
    }), () => {
      console.log(`A Cor do seu Botão1 agora é: ${this.getButColor(this.state.clicksB1)}`);
    }
    );
  }
  
  handleClick2() {
   this.setState((prevState) => ({
     clicksB2:prevState.clicksB2 + 1,
   }), () => {
    console.log(`Essa é a Cor do seu Botão2: ${this.getButColor(this.state.clicksB2)}`);
   }
   );
  }
  
  handleClick3() {
    this.setState((prevState) =>({
      clicksB3: prevState.clicksB3 + 1,
    }), () => {
      console.log(`A cor do Botão 3 é ${this.getButColor(this.state.clicksB3)}`)
    }
    );
  }

  getButColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  
  render() {
    const {clicksB1, clicksB2, clicksB3} = this.state;
    return (
    <div>
      <button 
        onClick={ this.handleClick1 } style={{backgroundColor: this.getButColor(clicksB1)}}>Meu botão | Count = {this.state.clicksB1}
      </button>
      
      <button onClick={ this.handleClick2 } style={{backgroundColor: this.getButColor(clicksB2)}}>
        Clique e Veja Seu Prêmio | Count = {this.state.clicksB2}
      </button>
      
      <button onClick={ this.handleClick3 } style={{backgroundColor: this.getButColor(clicksB3)}}>
        Clique e Ganhe uma Viajem | Count = {this.state.clicksB3}
      </button>
    </div>
  )
  }
}

export default App;