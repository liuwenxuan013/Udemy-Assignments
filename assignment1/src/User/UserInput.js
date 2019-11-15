import React from 'react';



const UserInput = (props) =>
{
    const InputStyle = {
        border: '2px solid red',
        backgroundColor: 'green',

    };
    return (
        <input type='text'
            style={InputStyle}
            value={props.Name}
            onChange={props.onChange}
        />
    );
}

export default UserInput;
