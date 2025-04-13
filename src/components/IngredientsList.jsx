import React from 'react'

export default function IngredientsList(props){
    const ingredientsList = props.ingredients;

    return (
            <section> 
                      
                      <h2>Ingredients on hand:</h2>   
                      <ul>
                          {ingredientsList.map(ingredient => (
                              <li key={index}>{ingredient}</li>
                          ))}
                      </ul>
          
          
                     { ingredientsList.length > 3 ?
                      <div className = 'get-recipe-container' >
                          <h3>Ready for a recipe</h3>
                          <p>Generate a recipe from your list of ingredients</p>
                          <button onClick={props.toggleIsShown}>  Get Recipe </button>         
                      </div>
                      : null}  
          
                  </section> 
    )
}