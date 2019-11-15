import React from 'react';
const Validation = (props) =>
{
    let ValidationMsg = 'Text long enough';
    if (props.inputLength <= 5)
        ValidationMsg = 'Text too short!!!';
    return (
        <div>
            {/* {props.inputLength >= 5 ?

                <p>Text long enough</p> :
                <p>Text too short</p>
            } */

                ValidationMsg}



        </div>
    );

}
export default Validation;