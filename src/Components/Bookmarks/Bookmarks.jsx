import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';



const Bookmarks = ({cookItems,currentCook,handleCurrentCook}) => {
    return (
        <div className=" w-1/3 mt-44">
            <h1 className="text-2xl font-bold">Want to cook: {cookItems.length}</h1>
            
           
            {
                cookItems.map((cookItem,index)=> <Bookmark key={index} handleCurrentCook={handleCurrentCook}  cookItem={cookItem} ></Bookmark>)
            }

            <h1 className="mt-10 text-2xl font-bold">Currently cooking: {currentCook.length} </h1>

            {/* {
              currentCook.map((currentCook,index)=> <Bookmark key={index} handleCurrentCook={handleCurrentCook}  currentCook={currentCook}></Bookmark>)
            } */}
            
        </div>
    );
};

Bookmarks.propTypes = {
    cookItems : PropTypes.array,
    handleCurrentCook:PropTypes.func,
    currentCook : PropTypes.array
}
export default Bookmarks;