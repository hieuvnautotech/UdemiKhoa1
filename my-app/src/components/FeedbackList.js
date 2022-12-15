import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from "prop-types";

// bài này chỉ cách xài hàm .map

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) { 
        return <p>no feedback yet</p>
    }

    return (
      <div className="feedback-list">
        {feedback.map((item) => (
        //   <div>{item.rating}</div>
            <FeedbackItem key={item.id} item={ item} 
            handleDelete = {handleDelete}/>
            // handleDelete={(id)=>console.log(id)} 
            
        ))}
      </div>
    );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }))
}

export default FeedbackList