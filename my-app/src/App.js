import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import { React, useState } from 'react'
import FeedbackData from "./data/FeedbackData";
import Card from "./components/Shared/Card"
import FeedbackStats from "./components/FeedbackStats";
// truyền cái props text wa header, nó có hỗ trợ propsDefault nếu ko có text
// và có hỗ trợ thư viện loại props truyền qua là string hay boolean
function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
      // console.log('App', id)
      if(window.confirm('Are you sure you want to delete')){
        setFeedback(feedback.filter((item)=>item.id !== id))
      }
    }

    return (
      <>
        <Header />
        <div className="container">
          <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} 
                  handleDelete={deleteFeedback}
                />
                {/* <Card>haha</Card> */}
        </div>
      </>
    ); 
}

export default App