function ImpureFunction (props) {

    console.log("Established Year: " + props.year);
    //depend on browser API. Hence, impure function.

    return <h1>Established Year: {props.year}</h1>;
}

export default ImpureFunction;