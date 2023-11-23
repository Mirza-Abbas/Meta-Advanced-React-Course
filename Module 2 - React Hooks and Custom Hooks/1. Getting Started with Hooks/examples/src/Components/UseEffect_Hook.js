import { useEffect } from "react";

function UseState_Hook() {
    
    useEffect( () => {
        console.log("Hello");
    }, []);

    return (
        <h1>Inspect Browser's Console Tab</h1>
    )
}

export default UseState_Hook;