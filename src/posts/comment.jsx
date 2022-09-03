import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { handleGetComment } from "../services/getservices";


const comment = ()=>{

    const [comment , setComment] = useState({
        id : "",
        name : "",
        email : "",
        body: ""
    });
    useEffect(()=>{
        handleGetComment(setComment);
    },[])
    return(
        <div className="comment-container">

        </div>
    )
}
export default comment;