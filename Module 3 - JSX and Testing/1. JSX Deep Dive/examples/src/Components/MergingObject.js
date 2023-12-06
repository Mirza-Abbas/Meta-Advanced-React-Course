function Order(props) {
    return(
        <>
        <h1>Name: {props.name}</h1>
        <h1>Item: {props.item}</h1>
        <h1>Price: {props.price}</h1>
        </>
    )
}

function MergingObject() {
    const obj={
        name:"John",
        item: "Pizza"
    }

    const objNew={
        ...obj,
        item: "Burger",
        price: "$10.00"
    }

    return(
        <Order {...objNew} />
    )
}

export default MergingObject;