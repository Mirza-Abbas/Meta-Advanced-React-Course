import { useState } from "react";

function ArrowFunctions () {
    const [greeting, setGreeting] = useState({
        greet: "Hello",
        place: "World"
    });

    function update () {
        setGreeting(prevState => {
            return {...prevState, place: "Earth"};
        });
    }

    return (
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default ArrowFunctions;