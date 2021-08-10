import React from 'react'
//import logo from './logo.svg'

export default function POPOSSpace(props) {

    const { name, image, address } = props;

    return <div>
        <h1>{name}</h1>
        <img src={`${process.env.PUBLIC_URL}images/${image}`}
            width="300"
            height="300"
            alt="50 Califonia St." />
        <div>{address}</div>
        </div>
}