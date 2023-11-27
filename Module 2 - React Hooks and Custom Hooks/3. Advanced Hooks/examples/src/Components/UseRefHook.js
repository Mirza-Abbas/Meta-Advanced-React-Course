import { useRef } from "react";

function UseRefHook () {
    const formInputRef = useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <div>
            <input ref={formInputRef} type="text" />
            <button onClick={focusInput} >
                Focus Input
            </button>
        </div>
    )
}

export default UseRefHook;