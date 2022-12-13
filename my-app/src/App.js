function App(){
    const title = "Blog post"
    const body = "body blog"
    const comments = [
        {id:1, text: 'Hello1'},
        {id:2, text: 'Hello2'},
        {id:3, text: 'Hello3'},
    ]
    return(
        <>
            <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index) =>(
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
            </div>
        </>
    ) 
}

export default App