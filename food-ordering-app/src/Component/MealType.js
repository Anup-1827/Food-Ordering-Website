// CSS File 
import '../Style/MealType.css'

import React from 'react'

export default function MealType(props) {
    return (
        <div className='card'>
         <img src={props.image} alt={props.heading} className='image'/>
           <div className='mealInfo'>
               <h3>{props.heading}</h3>
               <h4>{props.info}</h4>
           </div>
        </div>
    )
}
