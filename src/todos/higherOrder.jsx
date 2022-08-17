import React from "react";


const higherOrder = MainHigher =>{
    const newHigher = ()=>{
        return(
            <MainHigher text="todoworks"></MainHigher>
        )
    }
    return newHigher;
}
export default higherOrder;