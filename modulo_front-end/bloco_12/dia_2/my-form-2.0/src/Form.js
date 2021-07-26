import React, {Component} from 'react';

export default class Form extends Component {
  constructor() {
    super();
  
    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
     const { name } = target;
     const value = (target.type === 'checkbox') ? target.checked : target.value;
     this.setState({
         [name]: value,
     });
  }

  render () {
    
    const { name, email, age, anecdote, terms } = this.state;

    return (
      <div>
        <h1>
          Estado e React - Teconologia fantástica ou reagindo ao regionalismo?
        </h1>
        <form className="form">
            <label htmlFor="name">
                Nome:
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={ this.handleChange }
                  value={ name }
                />
            </label>
            
            <label htmlFor="email">
                Email:
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={ this.handleChange }
                  value={ email }
                />
            </label>

            <label htmlFor="age">
              <select 
                id="age"
                name="age"
                defaultValue=""
                onChange={this.handleChange}
                value={ age }
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
            <label htmlFor="anecdote">
              Anedota:
              <textarea 
              id="anecdote" 
              name="anecdote"
              onChange={this.handleChange}
              value={ anecdote  }
              />
            </label>
            <label htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                onChange={this.handleChange}
                value={ terms }
              >
              </input>Concordo com os termos e acordos
            </label>
            <label htmlFor="file">
                <input type="file"/>

            </label>
        </form>
      </div>
    )
  }
}

