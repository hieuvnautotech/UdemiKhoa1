import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem";

// truyền cái props text wa header, nó có hỗ trợ propsDefault nếu ko có text
// và có hỗ trợ thư viện loại props truyền qua là string hay boolean
function App() {
    return (
        <>
            <Header />
        <div className="container">
          <FeedbackItem/>
        </div>
      </>
    ); 
}

export default App