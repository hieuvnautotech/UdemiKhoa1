import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import { React, useState } from 'react'
import FeedbackData from "./data/FeedbackData";
// truyền cái props text wa header, nó có hỗ trợ propsDefault nếu ko có text
// và có hỗ trợ thư viện loại props truyền qua là string hay boolean
function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    return (
      <>
        <Header />
        <div className="container">
          <FeedbackList feedback={feedback} />
        </div>
      </>
    ); 
}

export default App