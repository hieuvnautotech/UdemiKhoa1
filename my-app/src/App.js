import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { React, useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/Shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'
// truyền cái props text wa header, nó có hỗ trợ propsDefault nếu ko có text
// và có hỗ trợ thư viện loại props truyền qua là string hay boolean
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback,...feedback])
  }


  const deleteFeedback = (id) => {
    // console.log('App', id)
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm  handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        {/* <Card>haha</Card> */}
      </div>
    </>
  );
}

export default App;
