import React from 'react';
import Validation from './Validation/Validation'
import './App.css';

class App extends React.Component
{
  state = {
    userInput: '',
  }
  inputChangeHandler = (event) =>
  {
    this.setState({
      userInput: event.target.value
    })
  }

  render()
  {
    return <div>
      <input type='text'
        onChange={this.inputChangeHandler}
      />
      <p>{this.state.userInput}</p>

      <Validation inputLength={this.state.userInput.length} />
    </div>
  }


}

export default App;
