

const Currently = (currentCook) => {
    const {recipe_name,preparing_time,calories} = currentCook;
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
               <p>{calories} </p>
              
            </div> 
        </div>
    );
};

export default Currently;