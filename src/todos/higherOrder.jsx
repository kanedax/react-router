import React from "react";


const higherOrder = MainHigher =>{
    const newHigher = ()=>{
        return(
            <MainHigher text="مدیریت کارها"></MainHigher>
        )
    }
    return newHigher;
}
export default higherOrder;