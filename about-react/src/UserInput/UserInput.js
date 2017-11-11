import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div>
            <input type='text' value={props.username}
            onChange={props.change} />
        </div>
    )
}


export default userInput;