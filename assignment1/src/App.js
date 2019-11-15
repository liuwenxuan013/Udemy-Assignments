import React from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends React.Component
{
  state = {
    username: 'super laura',
  };

  onChangeHandler = (event) =>
  {
    this.setState({ username: event.target.value });
  };


  render()
  {
    return (
      <div >
        <UserInput
          Name={this.state.username}
          onChange={this.onChangeHandler}
        />
        <UserOutput Name={this.state.username} />
        <UserOutput Name={this.state.username} />
        <UserOutput Name='Superman' />


      </div>
    );
  }



}

export default App;
