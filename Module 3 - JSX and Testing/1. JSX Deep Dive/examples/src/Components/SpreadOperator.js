function SpreadOperator() {
    const buttonprops = {
        type: "primary",
        disabled: false,
        onClick: () => {
            alert("Clicked");
        }
    }

    return (
        <>
            <button disabled={true} {...buttonprops}>
                Click Here
            </button>
            <button {...buttonprops} disabled={true} >  {/*disabled prop gets overridden */}
            Click Here
            </button>
        </>
    )
}

export default SpreadOperator;