function ChildrenProp (prop) {

    return (
        <div style={{backgroundColor: prop.color}}>
            {prop.children}
        </div>
    )
}

export default ChildrenProp;