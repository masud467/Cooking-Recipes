import PropTypes from 'prop-types';






const Bookmark = ({cookItem,currentCook,handleCurrentCook}) => {
    const {recipe_id, recipe_name,preparing_time,calories} = cookItem;
   
         
    return (
        <div>
            <div className='flex gap-14 text-xl font-extrabold'>
                <h2>Name</h2>
                <h2>Time</h2>
                <h2>Calories</h2>
            </div>
            <div className='flex gap-8 text-lg font-semibold bg-slate-200 p-4 rounded-2xl'>
               
               <h2>{recipe_name}</h2>
               <p>{preparing_time}</p>
               <p>{calories} Calories</p>
               <button onClick={()=>handleCurrentCook(recipe_id,currentCook)} className='  bg-[#0BE58A] p-1 px-4 rounded-full'>Preparing</button>
            </div> 
            
        </div>  
    )

   
};

Bookmark.propTypes = {
    cookItem : PropTypes.object,
    handleCurrentCook: PropTypes.func,
    currentCook : PropTypes.object
    
   
    
    
}

export default Bookmark;