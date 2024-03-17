import Frame from '../../assets/images/Frame.png';
import search from '../../assets/images/search.png'

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
                <label className="input flex items-center border-2 border-slate-400 bg-gray-200 rounded-full p-2">
                     
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
                    <img className=' w-6' src={search} alt=""/>
                    <input type="text" className="text-center bg-gray-200" placeholder="Search" />
                </label>


                {/* <label className='flex'>
                <input  className="bg-[#2422270d] rounded-[50px] py-2 px-8" type="search" name="" id="" placeholder="Search"/>
                <img src={search} alt="" />
                </label> */}
                <img src={Frame} alt="" />
            </div>
        </div>
    );
};

export default Navbar;