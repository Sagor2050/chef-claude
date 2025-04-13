import React from 'react'


export default function ClaudeRecipe() {
  return (
    <div><section>
        <h2>Your Chef moRecommends: Psudo Recipe</h2>
        <article className="suggested-recipe-container" aria-live="polite">
            <p>Based on the ingredients you have available, I would recommend a delicious <strong>Chicken Alfredo Pasta</strong>. Here is the recipe:</p>
            <h3>Chicken Alfredo Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
                <li>2 boneless, skinless chicken breasts</li>
                <li>12 oz fettuccine pasta</li>
                <li>2 tablespoons olive oil</li>
                <li>3 cloves garlic, minced</li>
                <li>2 cups heavy cream</li>
                <li>1 cup grated Parmesan cheese</li>
                <li>1/2 teaspoon salt</li>
                <li>1/4 teaspoon black pepper</li>
                <li>1/2 teaspoon dried Italian seasoning</li>
                <li>2 tablespoons butter</li>
                <li>Fresh parsley, chopped (for garnish)</li>
            </ul>

            <strong>Instructions:</strong>
            <ol>
                <li>Bring a large pot of salted water to a boil and cook the fettuccine according to package instructions. Drain and set aside.</li>
                <li>In a large skillet, heat olive oil over medium-high heat. Season the chicken breasts with salt, pepper, and Italian seasoning, then cook for 5-7 minutes per side until golden brown and cooked through. Remove from the skillet and slice into thin strips.</li>
                <li>In the same skillet, melt the butter and sauté the minced garlic until fragrant.</li>
                <li>Lower the heat and add the heavy cream, stirring well. Slowly mix in the Parmesan cheese until the sauce is smooth and creamy.</li>
                <li>Add the cooked fettuccine to the skillet and toss to coat with the Alfredo sauce.</li>
                <li>Top with sliced chicken and garnish with fresh parsley.</li>
                <li>Serve immediately and enjoy!</li>
            </ol>
        </article>
    </section>
</div>
  )
}
