import React from "react"
import FeedbackItem from "./FeedbackItem"
// import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
// bài này chỉ cách xài hàm .map
// bài này chỉ cài npm i framer-motion@4.1.17
// rồi import vào đây
function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
          >
            {/* <div>{item.rating}</div> */}
            <FeedbackItem
              key={item.id}
              item={item}
              
            />
            {/* handleDelete={(id) => console.log(id)} */}
          </motion.div>
        ))}
      </AnimatePresence>
      
    </div>
  )
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //     //   <div>{item.rating}</div>
  //         <FeedbackItem key={item.id} item={ item}
  //         handleDelete = {handleDelete}/>
  //         // handleDelete={(id)=>console.log(id)}

  //     ))}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList
