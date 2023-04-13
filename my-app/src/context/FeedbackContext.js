import {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsloading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
      });
      const deleteFeedback = (id) => {
        // console.log('App', id)
        if (window.confirm("Are you sure you want to delete")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };
      const updateFeedback = (id, updItem) => { 
        // console.log(id, updItem)
        setFeedback(feedback.map((item) => item.id === id ? {
          ...item, ...updItem } : item))
      }
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback]);
      };
      const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit: true,
        });
      };
    useEffect(()=>{
        // console.log(123)
        fetchFeedback()
    },[])
    const fetchFeedback = async () =>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        console.log(data)
        setFeedback(data)
        setIsloading(false)
    }
  return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

