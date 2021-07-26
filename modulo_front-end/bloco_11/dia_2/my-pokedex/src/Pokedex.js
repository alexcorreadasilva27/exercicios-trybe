// import React from 'react';
// import Pokemon from './Pokemon';
// import Button from './button';
// import './pokedex.css'

// class Pokedex extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             pokemonIndex: 0,
//             filteredType: 'all',
//         };
//     }

//     filterPokemons(filteredType) {
//         this.setState({filteredType, pokemonIndex: 0})
//     };

//     nextPokemon (numberOfPokemons) {
//         this.setState(state => ({
//             pokemonIndex: (state.pokemonIndex + 1) %  numberOfPokemons,
//         }));
//     }

//     fetchFilteredPokemons() {
//         const { pokemons } = this.props;
//         const { filteredType } = this.state;

//         return pokemons.filter(pokemon => {
//             if (filteredType === 'all') return true;
//             return  pokemon.type === filteredType;
//         });
//     }

//     fetchPokemonTypes() {
//         const { pokemons } = this.props;

//         return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))]
//     }

//     render() {
//       const filteredPokemons = this.fetchFilteredPokemons();
//       const pokemonTypes = this.fetchPokemonTypes();
//       const pokemon = filteredPokemons[this.state.pokemonIndex];
//     //   const { pokemons } = this.props;
//     //   Recebemos do App.js, através da props "pokemons", o nosso array de pokemons.
//     //   Devemos fazer um map, e nele renderizar o componente <Pokemon>, que receberá
//     //   por props cada item do array. 
//     //   Lembre-se: é no componente Pokemon que iremos
//     //   renderizar todas as informações necessárias para a exibição.
//         return (
//             <div className="pokedex">
//                 <Pokemon pokemon={ pokemon }/>
//               <div className="pokedex-buttons-panel">
//                 <Button 
//                 onclick={() => this.filterPokemons('all')}>
//                     All
//                 </Button>
//                 {pokemonTypes.map(type =>(
//                   <Button 
//                     key={ type }
//                     onclick={() => this.filterPokemons(type)}
//                     className="filter-button"
//                   >
//                       { type }
//                   </Button>
//                 ))}
//               </div>
//               <Button 
//                 className="pokedex-button"
//                 onclick={() => this.nextPokemon(filteredPokemons.length)}
//                 disabled={filteredPokemons.length <= 1}
//               >
//                 Próximo pokemon
//               </Button>
//             </div>
//         );
//     }
// }

// export default Pokedex;

import React from 'react';
import Pokemon from './Pokemon';
import Button from './button';
import './pokedex.css';
import './button.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: 'all',
    };
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemon } />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={ type }
              onClick={() => this.filterPokemons(type)}
              className="filter-button"
            >
              { type }
            </Button>
          ))}
        </div>
        <div className='button-text'>
          <Button
            className="pokedex-button "
            onClick={() => this.nextPokemon(filteredPokemons.length)}
            disabled={ filteredPokemons.length <= 1 }
          >
            Próximo pokémon
          </Button>
        </div>
      </div>
    );
  }
}

export default Pokedex;

// import React from 'react';
// import pokemons from './data';
// import Pokemon from './Pokemon';
// import Button from './button'
// import './button.css';
// class Pokedex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.filterPokemons = this.filterPokemons.bind(this);
//     this.state = {
//       numberOfClicks: 0,
//       arrayPokemon: pokemons,
//     }
//   }
//   handleClick() {
//     const { numberOfClicks, arrayPokemon } = this.state
//     if (numberOfClicks === arrayPokemon.length-1) {
//       this.setState({ numberOfClicks: 0 })
//     } else {
//       this.setState((initialState, _props) => ({
//         numberOfClicks: initialState.numberOfClicks + 1,
//       }))
//     }
//   }
//   filterPokemons(specificType) {
//     const newArrayPokemon = specificType === 'All'
//      ? pokemons
//      : pokemons.filter(({ type }) => specificType === type)
//      this.setState(() => (
//       {
//         arrayPokemon: newArrayPokemon,
//         numberOfClicks: 0
//       }
//       ))
//   }
//   render() {
//     const types = pokemons.reduce((array, { type }) => {
//       if (array.includes(type)) return array
//       else return array.concat(type)
//     }, ['All']);
//     return (
//       <div>
//          <Pokemon pokemon={this.state.arrayPokemon[this.state.numberOfClicks]} />
//         <div className="pokedex">
//           <button
//           onClick={this.handleClick}
//           disabled={ this.state.numberOfClicks === this.state.arrayPokemon.length - 1}
//           >Próximo</button>
//           {types.map((type)=> (
//             <Button
//             key={type}
//             onClick={() => this.filterPokemons(type)}
//             type={type}
//             className={'pokeButao'}
//             />
//           ))}
//       </div>
//       </div>
//     )
//   }
// }
// export default Pokedex;