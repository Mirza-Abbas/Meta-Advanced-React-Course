import { useState } from "react";

function ControlledForm () {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Number(score) <= 5 && comment.length <= 10){
            alert("Please provide a comment explaining why the experience was poor.")
            return;
        }

        console.log("Form submitted");

        setScore("10");
        setComment("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Feedback Form</h1>
                    <div>
                        <label>Score: {score}⭐</label>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Comment:</label>
                        <textarea 
                            value={comment} 
                            onChange={e => setComment(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default ControlledForm;