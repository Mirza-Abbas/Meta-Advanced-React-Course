import { useState } from "react"

function FormComponent() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        alert("Form Submitted");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        placeholder="name"
                        type="text"
                        value={name}
                        onChange = {(e)=>setName(e.target.value)} 
                    />
                </div>
                <button disabled={!name} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;