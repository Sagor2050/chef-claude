import React from 'react'

function Main() {

    const ingredients =["Chicken", "Eggs", "Tomatoes"];

    const [ingredientsList, setingredientList] = React.useState(ingredients);
    
   

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")

        if(newIngredient){
            setingredientList(prevList => [...prevList, newIngredient]);
        }
        
        
    }


  return (
    <main>
        <form action = {addIngredient} className = 'add-ingredient-form'>
            <input 
                
                type ='text'
                placeholder='Add-Ingredient'
                aria-level ='Add-Ingredient'
                name ="ingredient"
            />
            <button >Add Ingredient</button>
            
        </form>   
        <h2>Ingredients on hand:</h2>   
        <ul>
            {ingredientsList.map(ingredient => (
                <li>{ingredient}</li>
            ))}
        </ul>
    </main>
  )
}

export default Main;