import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { React, useState } from "react"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/Shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
// truyền cái props text wa header, nó có hỗ trợ propsDefault nếu ko có text
// và có hỗ trợ thư viện loại props truyền qua là string hay boolean
//bài này thì nhớ cài npm i react-router-dom
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback,...feedback])
  }


  const deleteFeedback = (id) => {
    // console.log('App', id)
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }


  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        
        {/* <Card>haha</Card> */}
        {/* <AboutPage/> */}
        <Routes>
          <Route 
            path="/"
            element={
              <>
                  <FeedbackForm  handleAdd={addFeedback}/>
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                  <AboutIconLink/>
              </>
            }
            ></Route>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/post/*" element={<Post/>}/>

        </Routes>

        {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}
      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App
