

const Currently = () => {
    // const {recipe_name,preparing_time,calories} = currentCook;
    return (
        <div>
             <div className='flex gap-14 text-xl font-extrabold'>
                <h2>Name</h2>
                <h2>Time</h2>
                <h2>Calories</h2>
            </div>
            <div className='flex gap-8 text-lg font-semibold bg-slate-200 p-4 rounded-2xl'>
               <h2>Chicken Stir-Fry</h2>
               <p>30 minutes</p>
               <p>350 calories</p>
              
            </div> 
        </div>
    );
};

export default Currently;