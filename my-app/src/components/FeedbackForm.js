import { useState } from "react";
import Card from "./Shared/Card";
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
            <button type="submit">Send</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
