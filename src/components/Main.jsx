import React from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx';

function Main() {
    // ✅ Initialize with the actual array (not a string)
    const ingredients = ["Chicken", "Pasta", "Potatoes", "Tomatoes"];
    const [ingredientsList, setingredientList] = React.useState(ingredients);
    const [isShown, setShown] = React.useState(false);

    function togleIsShown() {
        setShown(prevState => !prevState);
    }

    // ✅ Properly handle form submission
    function addIngredient(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newIngredient = formData.get("ingredient");

        if (newIngredient) {
            setingredientList(prevList => [...prevList, newIngredient]);
            e.target.reset(); // optional: clears input field
        }
    }

    return (
        <main>
            {/* ✅ Changed `action` to `onSubmit` */}
            <form onSubmit={addIngredient} className='add-ingredient-form'>
                <input 
                    type='text'
                    placeholder='Add-Ingredient'
                    aria-label='Add-Ingredient'
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>   

            {/* ✅ Use the updated ingredientsList, not original `ingredients` */}
            {ingredientsList.length > 0 ? 
                <IngredientsList ingredients={ingredientsList} toggleIsShown={togleIsShown} />

                : <p>Add at least 4 ingredients to get recipie</p>
            }

            <p>{isShown && <ClaudeRecipe />}</p>
        </main>
    );
}

export default Main;
