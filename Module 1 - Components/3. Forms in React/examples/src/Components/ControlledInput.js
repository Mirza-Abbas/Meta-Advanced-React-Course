import { useState } from "react";

const Form = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form>
            <input value={value} onChange={handleChange} type="text" />
            <h1>{value}</h1>
        </form>
    )
}

function ControlledInput () {
    return (
        <div>
            <Form />
        </div>
    )
}

export default ControlledInput;
