import React from 'react';
import './User.css'

const UserOutput = (props) =>
{
    return (
        <div className='User'>
            <p>name:{props.Name}</p>
            <p>is it changed?</p>
        </div>
    );
}
export default UserOutput;
