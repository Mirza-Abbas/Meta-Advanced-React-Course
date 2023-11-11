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
    return {
        content: dessert.title + " - " + dessert.description,
        price: dessert.price
    }
})

function MapMethod () {

    console.log(topDesserts);

    return (
        <h1>Examine the DevTool's Console Tab</h1>
    )
}

export default MapMethod;