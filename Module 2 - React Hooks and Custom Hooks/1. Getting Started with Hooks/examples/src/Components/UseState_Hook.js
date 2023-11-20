import { useState } from "react";

function UseState_Hook () {
    const [name, setName] = useState("Lemon");

    function handleClick() {
        name === "Lemon" ? setName("Orange") : setName("Lemon");
        // setName("Orange");
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleClick}>
                Click to Update
            </button>
        </div>
    );
}

export default UseState_Hook;