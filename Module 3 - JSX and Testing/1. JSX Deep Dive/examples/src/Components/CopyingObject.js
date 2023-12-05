function Order(props) {
    return(
        <>
        <h1>Name: {props.name}</h1>
        <h1>Item: {props.item}</h1>
        </>
    )
}

function CopyingObject() {
    const obj={
        name:"John",
        item: "Pizza"
    }

    const copy={
        ...obj
    }

    return(
        <Order {...copy} />
    )
}

export default CopyingObject;