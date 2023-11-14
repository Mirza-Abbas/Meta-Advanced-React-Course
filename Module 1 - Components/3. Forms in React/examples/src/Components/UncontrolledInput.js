import { useRef } from "react";

const Form = ()=> {
    const InputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = InputRef.current.value;
        alert("Hi! " + inputValue);
        //Do something with the value
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input ref={InputRef} type="text" />
        </form>
    )
}

function UncontrolledInput () {
    return (
        <div>
            <Form />
        </div>
    )
}

export default UncontrolledInput;