import Header from "./components/Header"

// truyền cái props text wa header, nó có hỗ trợ propsDefault nếu ko có text
// và có hỗ trợ thư viện loại props truyền qua là string hay boolean
function App() {
    return (
        <>
            <Header bgColor='red' textColor='blue' />
        <div className="container">
          <h1>My App</h1>
        </div>
      </>
    ); 
}

export default App