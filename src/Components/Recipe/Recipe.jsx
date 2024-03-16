import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div>
            <img src={recipe_image} alt="" />
            <h1>{recipe_name}</h1>
            <p>{short_description}</p>
            
        </div>
    );
};
Recipe.propTypes = {
    recipe : PropTypes.object.isRequired,
}
export default Recipe;