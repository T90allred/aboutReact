import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>USER OUTPUT HERE</p>
            <p>MORE USER OUTPUT</p>
            <h1>{props.name}</h1>
        </div>
    )
}

export default userOutput;