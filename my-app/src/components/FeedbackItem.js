import { React, useState, useEffect } from 'react'
import Card from './Shared/Card'
// bài 3 là chỉ cách xài useState

function FeedbackItem({ item}) {
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
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </Card>
  );
}

export default FeedbackItem