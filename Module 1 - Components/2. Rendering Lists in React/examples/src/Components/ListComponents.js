const date = [
    {
        id: "1",
        title: "Lemon Ice Cream",
        description: "Best in Town",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Chocolate Cone",
        description: "Chocolate Disc Inside",
        price: "$7.00"
    }
]

const topDesserts = date.map(dessert => {

    const itemText = dessert.title + " - " + dessert.description;


    return (
        <li>{itemText}</li>
    )
})

function ListComponents () {

    return (
        <ul>
            {topDesserts}
        </ul>
    )
}

export default ListComponents;