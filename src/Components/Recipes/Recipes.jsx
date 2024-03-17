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
        <div className=" mt-10 space-y-3 w-2/3 mb-10">
            <h1 className=" text-3xl font-bold text-center">Our Recipes</h1>
            <p className="text-center">Dive into a world of culinary delights with our recipes, ranging from savory Chicken Stir-Fry to creamy Mushroom Risotto. Elevate your meals!</p>
           
           
            <div className=" grid grid-cols-2 ">
            {
                recipes.map(recipe => <Recipe  key={recipe.recipe_id} handleCookItems={handleCookItems}    recipe={recipe}></Recipe>)
            }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleCookItems : PropTypes.func,
   
   
  
}

export default Recipes;