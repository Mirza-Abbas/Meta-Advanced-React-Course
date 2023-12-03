import React from "react";
import ChildrenProp from "./ChildrenProp";
import StringLiterals from "./StringLiterals";

function ReactFragment(props) {
    return(
        <div>
            <React.Fragment>
                <li>{props.children}</li>
                <li>
                    <ChildrenProp color="red">
                        <h1>Hi</h1>
                    </ChildrenProp>
                </li>
            </React.Fragment>
            <>  {/* This is also called React Fragment */}
                <li>Hello</li>
                <li><StringLiterals /></li>
            </>
        </div>
    )
}

export default ReactFragment;