import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    if(text === ''){
      setBtnDisable(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setBtnDisable(true)
    } else {
      setMessage(null)
      setBtnDisable(false)
    }
    setText(e.target.value)
  };

  return (
    <>
      <Card>
        <form>
          <h2>How would you rate your service with us</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="write a review"
              onChange={handleTextChange}
              value={text}
            />
            <Button type='submit'
              isDisabled={btnDisable}
            >
                Send
            </Button>
          </div>

          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
