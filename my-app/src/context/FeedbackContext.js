import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    useEffect(()=>{
        // console.log(123)
        fetchFeedback()
    },[])
    const fetchFeedback = async () =>{
        const response = await fetch(`http://localhost:5000/feedback?
        _sort=id&_order=desc`)
        const data = await response.json()
        console.log(data)
    }
  return (
    <FeedbackContext.Provider value={{
        feedback: feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

