import PropTypes from 'prop-types';


const Bookmark = ({cookItem,handleCurrentCook}) => {
    const {recipe_id, recipe_name,preparing_time,calories} = cookItem;
         
    return (
        <div>
            <div className='flex gap-14 text-xl font-extrabold'>
                <h2>Name</h2>
                <h2>Time</h2>
                <h2>Calories</h2>
            </div>
            <div className='flex gap-8 text-lg font-semibold'>
                
               <h2>{recipe_name}</h2>
               <p>{preparing_time}</p>
               <p>{calories} Calories</p>
               <button onClick={()=>handleCurrentCook(recipe_id)} className=' ml-8'>Preparing</button>
            </div>

           
        </div>
        
    )
};

Bookmark.propTypes = {
    cookItem : PropTypes.object,
    handleCurrentCook: PropTypes.func
    
    
}

export default Bookmark;