import { React, useState, useEffect,  } from 'react'
import Card from './Shared/Card'
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
// bài 3 là chỉ cách xài useState

function FeedbackItem({ item,}) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('this is is this')

    // const handleClick = () => { 
    //     setRating((prev) => {
    //         console.log(prev)
    //         return (
    //             prev + 1
    //         )
    //     })
    // }

    // const handleClick = () => {
    //   console.log(item.id)
    // }

    // const handleClick = (id) => {
    //   console.log(item.id)
    // }

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <button onClick={() => editFeedback(item)} className='edit'>       
        <FaEdit color='purple'/>
      </button>

      {/* <button onClick={handleClick} className='close'>
          <FaTimes color='purple'/>
      </button> */}

      {/* <button onClick={()=>handleClick(item.id)}>
        <FaTimes color='purple'/>
      </button> */}
      <div className="text-display">{item.text}</div>
      {/* <button type="button" onClick={handleClick}>
        Click
      </button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem