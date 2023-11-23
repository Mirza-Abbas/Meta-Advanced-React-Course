import { useEffect, useState } from "react"

function SideEffects () {

    const [toogle, setToogle] = useState(false);

    const clickHandler = () => {
        
        setToogle(!toogle);
    }

    useEffect( () => {
        document.title = (toogle ? "Welcome" : "Using useEffect Hook");
    }, [toogle]);

    return (
        <div>
            <h1>Using useEffect Hook</h1>
            <button onClick={clickHandler}>
                Toogle message
            </button>
            {toogle && <h2>Welcome</h2>}
        </div>
    )
}

export default SideEffects;