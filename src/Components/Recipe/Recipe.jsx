import PropTypes from 'prop-types';

const Recipe = ({recipe,handleCookItems}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className=' w-96 h-[684px] text-center'>
            <img className=' w-80 h-52' src={recipe_image} alt="" />
            <h1>{recipe_name}</h1>
            <p>{short_description}</p>
            <p>Ingredients: {ingredients.length}</p>
            <p>{ingredients}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button onClick={()=>handleCookItems(recipe)}>Want to Cook</button>
        </div>
    );
};
Recipe.propTypes = {
    recipe : PropTypes.object.isRequired,
    handleCookItems :PropTypes.func
}
export default Recipe;