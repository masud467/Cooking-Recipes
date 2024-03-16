import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';



const Bookmarks = ({cookItems}) => {
    return (
        <div className=" w-1/3 mt-10">
            <h1 className="text-2xl font-bold">Want to cook: {cookItems.length}</h1>

            {
                cookItems.map((cookItem,index)=> <Bookmark key={index} cookItem={cookItem}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    cookItems : PropTypes.array
}
export default Bookmarks;