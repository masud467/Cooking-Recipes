import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleCookItems}) => {

    const [recipes,setRecipes] = useState([])

    useEffect(()=>{
        fetch('Recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="text-center mt-10 space-y-3 w-2/3 ">
            <h1 className=" text-3xl font-bold">Our Recipes</h1>
            <p>Dive into a world of culinary delights with our recipes, ranging from savory Chicken Stir-Fry to creamy Mushroom Risotto. Elevate your meals!</p>
            {/* <h1>Recipes: {recipes.length}</h1> */}
           
            <div className=" grid grid-cols-2">
            {
                recipes.map(recipe => <Recipe  key={recipe.recipe_id} handleCookItems={handleCookItems} recipe={recipe}></Recipe>)
            }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleCookItems : PropTypes.func,
  
}

export default Recipes;