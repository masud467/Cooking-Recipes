import PropTypes from 'prop-types';
import clock from '../../assets/images/clock.png';
import calory from '../../assets/images/calory.png'


const Recipe = ({recipe,handleCookItems}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className=' w-96 h-auto mt-6  space-y-5 bg-slate-200 rounded-2xl p-4'>
            <img className=' w-80 h-52 mx-auto rounded-2xl' src={recipe_image} alt="" />
            <h1 className=' text-2xl font-bold'>{recipe_name}</h1>
            <p>{short_description}</p>
            <p className=' font-semibold text-lg'>Ingredients: {ingredients.length}</p>
            <div className='ml-8'>
            <div>{ingredients.map((ingredient,i)=>(
                       
                       <li key={i}>{ingredient}</li>
                      
             
          ))}</div>
            </div>
            <div className='flex gap-6'>
            <div className='flex gap-1'>
                <img src={clock} alt="" />
                <p>{preparing_time}</p>
            </div>
            <div className='flex'>
                <img src={calory} alt="" />
                <p>{calories} <span>calories</span></p>
            </div>
            </div>
            <button className='bg-[#0BE58A] p-2 px-4 rounded-full' onClick={()=>handleCookItems(recipe)}>Want to Cook</button>
            
        </div>
    );
};
Recipe.propTypes = {
    recipe : PropTypes.object.isRequired,
    handleCookItems :PropTypes.func,
   
}
export default Recipe;