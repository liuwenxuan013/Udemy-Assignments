import React, { Component } from 'react';
import UserInput from './UserInput';
import './User.css';
class UserOutput extends React.Component
{


    render()
    {
        return (
            < div className='User' >

                <p>User: {this.props.name}
                    <UserInput
                        name={this.props.name}
                        changed={this.props.changed}

                    />
                </p>


                <p>Pass: {this.props.pass}
                    <UserInput
                        name={this.props.pass}
                        changed={this.props.changed} />
                </p>


            </div>
        );
    }

}
export default UserOutput;