import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {

    const [recipes,setRecipes] = useState([])

    useEffect(()=>{
        fetch('Recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="text-center mt-10 space-y-3">
            <h1 className=" text-3xl font-bold">Our Recipes</h1>
            <p>Dive into a world of culinary delights with our recipes, ranging from savory Chicken Stir-Fry to creamy Mushroom Risotto. Elevate your meals!</p>
            <h1>Recipes: {recipes.length}</h1>
           
            {
                recipes.map(recipe => <Recipe  key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;