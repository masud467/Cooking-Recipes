import Frame from '../../assets/images/Frame.png'

const Navbar = () => {
    return (
        <div className='flex justify-around max-w-7xl mx-auto pt-5'>
            <div>
               <h1 className='text-3xl font-bold '>Cooking Recipes</h1>
            </div>
            <div className='flex gap-12'>
               <p>Home</p> 
               <p>Recipes</p> 
               <p>About</p> 
               <p>Search</p> 
            </div>
            <div className='flex gap-4'>
                <input className="bg-[#2422270d] rounded-[50px] py-2 px-8" type="search" name="" id="" placeholder="Search" />
                <img src={Frame} alt="" />
            </div>
        </div>
    );
};

export default Navbar;