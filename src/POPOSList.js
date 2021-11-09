import React, { useState, useEffect } from 'react';
import axios from 'axios';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

export default function POPOSList() {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(response => {
                setItems(response.data.meals)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return <POPOSSpace key={idMeal} id={idMeal} name={strMeal} image={strMealThumb} />
    })

    return (
        <div className="POPOSList">
            {itemslist}
        </div>
    )
}
