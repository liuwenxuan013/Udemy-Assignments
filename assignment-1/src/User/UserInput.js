import React, { Component } from 'react';

import './User.css';
class UserInput extends React.Component
{


    render()
    {
        return (
            <div className='User'>
                <input type='text' value={this.props.name} onChange={this.props.changed} />



            </div>
        );
    }

}
export default UserInput;