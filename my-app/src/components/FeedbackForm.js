import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Card>
        <form>
          <h2>ksdjflksdf</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="write a review"
              onChange={handleTextChange}
              value={text}
            />
            <Button type='submit'>
                Send
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
