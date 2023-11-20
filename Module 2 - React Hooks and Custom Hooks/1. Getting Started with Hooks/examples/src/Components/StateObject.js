import { useState } from "react";

function StateObject () {
    const [greeting, setGreeting] = useState({greet: "Hello"});

    function updateGreeting() {
        const newGreet = {...greeting};
        newGreet.greet === "Hello" ? newGreet.greet = "Hi" : newGreet.greet = "Hello";
        setGreeting(newGreet);
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update</button>
        </div>
    )
}

export default StateObject;