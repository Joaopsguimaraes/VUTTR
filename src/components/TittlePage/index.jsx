import React from 'react';
import "./style.css"

const Title = (props) => {
    return(
        <div className='Title-page'>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Title;