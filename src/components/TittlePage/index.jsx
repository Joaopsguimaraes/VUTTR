import React from 'react';
import "./style.css"

const Tittle = (props) => {
    return(
        <div className='Title-page'>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Tittle;