
import Rectangle from '../../assets/images/Rectangle.png' 
const Banner = () => {
    return (
        
        <div className="hero min-h-screen rounded-3xl   max-w-7xl mx-auto mt-12" 
            style={{backgroundImage: `url(${Rectangle})`,
            backgroundRepeat:'no-repeat'
            }}>
           <div className="hero-overlay bg-opacity-60"></div>
           <div className=" ">
                <div className=" text-white pt-20 pl-36  ">
                    <h1 className=" text-5xl font-bold max-w-4xl  pt-32 px-20">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 max-w-4xl my-6  px-20">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='px-20 space-x-5'>
                    <button className="btn btn-primary p-3 bg-[#0BE58A] rounded-3xl ">Explore Now</button>
                    <button className='btn glass p-3 rounded-3xl bg-gray-600'>Our Facebook</button>
                    </div>
                </div>
           </div>
       </div>
        
    );
};

export default Banner;