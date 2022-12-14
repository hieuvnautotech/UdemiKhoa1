function App(){
    const title = "Blog post"
    const body = "body blog"
    const comments = [
        {id:1, text: 'Hello1'},
        {id:2, text: 'Hello2'},
        {id:3, text: 'Hello3'},
    ]

    const loading = false

    const showComment = true

    const commentBlock = (
        <div className="comments">
              <h3>Comments ({comments.length})</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
              </ul>
            </div>
    )

    if (loading) { 
        return <h1>Loading...</h1>
    }

    return (
      <>
        <div className="container">
          <h1>{title}</h1>
          <p>{body}</p>
          {showComment ? (
            commentBlock
          ) : (
            "no"
          )}
        </div>
      </>
    ); 
}

export default App