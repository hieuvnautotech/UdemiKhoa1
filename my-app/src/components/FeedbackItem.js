import { React, useState, useEffect } from 'react'

// bài 3 là chỉ cách xài useState

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('this is is this')

    const handleClick = () => { 
        setRating((prev) => {
            console.log(prev)
            return (
                prev + 1
            )
        })
    }

  return (
      <div className="card">
          <div className="num-display">{rating}</div>
          <div className="text-display">
              {text}
          </div>
          <button type="button" onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem