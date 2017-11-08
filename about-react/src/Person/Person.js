import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> {props.name} reporting here! Im {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="test" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;