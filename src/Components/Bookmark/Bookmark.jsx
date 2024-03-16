import PropTypes from 'prop-types';

const Bookmark = ({cookItem}) => {
    const {recipe_name,preparing_time,calories} = cookItem
    return (
        <div className='flex gap-5'>
            <h2>{recipe_name}</h2>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button>Delete</button>
        </div>
    );
};

Bookmark.propTypes = {
    cookItem : PropTypes.object
}

export default Bookmark;