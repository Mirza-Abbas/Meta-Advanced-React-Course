function String(props){
    return (
        <div>
            {props.children}
        </div>
    )
}

function StringLiterals() {
    return (
        <>
            <String>HI</String>
            <String>                 White Spaces Removed                      </String>
            <String>
                Blank Lines Removed
            </String>
            <String>

                New Lines Removed

            </String>
            <String>
                Lines
                Are
                Condensed
            </String>
        </>
    )
}

export default StringLiterals;