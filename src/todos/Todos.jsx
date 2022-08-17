import React from "react";
import higherOrder from "./higherOrder";
const Todos = (props)=>{
    return(
        <div>
            <h4> {props.text} </h4>
        </div>
    )
}
export default higherOrder(Todos);


