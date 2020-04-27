import React from 'react';

const Recipe = ({title,calories,img,ingredients}) => {
    return(
        < div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredients,idx) =>(
                    <li key={idx}>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={img} alt="" className={"image"}/>
        </div>
    );
}

export default Recipe;