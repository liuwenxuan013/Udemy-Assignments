import React from 'react';
import './App.css';
//import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
class App extends React.Component
{
  state = {
    users: [
      { name: 'Laura', pass: '0000' },
      { name: 'Alisa', pass: '1111' }
    ]
  };

  changeHandler = (event) =>
  {
    this.setState({
      users: [
        { name: event.target.value, pass: '0000' },
        { name: 'Alisa', pass: '1111' }
      ]
    }







    );
  }

  render()
  {
    return (
      <div className="">

        <UserOutput
          name={this.state.users[0].name}
          pass={this.state.users[0].pass}
          changed={this.changeHandler}
        />

        <UserOutput
          name={this.state.users[1].name}
          pass={this.state.users[1].pass}
          changed={this.changeHandler}

        />


      </div>
    );
  }

}

export default App;
