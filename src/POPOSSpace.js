import React from 'react';
import './POPOSSpace.css';

export default function POPOSSpace(props) {

    const {name,image} = props

    return (
        <div className="POPOSSpace">
            <img src={image}
                width="300"
                height="300"
                alt="Hello" />
            <h1>{name}</h1>
        </div>
    )
}