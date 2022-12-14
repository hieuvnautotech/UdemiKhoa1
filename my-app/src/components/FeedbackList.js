import React from 'react'
import FeedbackItem from './FeedbackItem';

// bài này chỉ cách xài hàm .map

function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) { 
        return <p>no feedback yet</p>
    }

    return (
      <div className="feedback-list">
        {feedback.map((item) => (
        //   <div>{item.rating}</div>
            <FeedbackItem key={item.id} item={ item} />
        ))}
      </div>
    );
}

export default FeedbackList