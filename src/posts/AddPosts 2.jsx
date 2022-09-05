import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPost, setPostService, setUpdatePost } from "../services/functionservice";
import axios from "axios";
import { init, reducer } from "./postReducer";


const AddPosts = ()=>{

    const{postId}=useParams();
    const navigate = useNavigate();
    const [data , dispatch] = useReducer(reducer , init);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{

        }).catch(err=>{})
        if(postId){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>{
            dispatch({
                type : 'isUpdate' ,
                payload : res.data
            })
            })
        }
    }, []);

    const handleAddPost = (e)=>{
        e.preventDefault();
        if(!postId){
            setPostService(data.postData);
        }else{
            setUpdatePost(data.postData , postId)
        }
    }

    const setInputValues = (e , propName)=>{
        dispatch({
            type : 'setInputValue',
            propName : propName ,
            propValue : e.target.value ,
        })
    }
    return(
        <div>
            <h4>{postId ? 'ویرایش پستها':'افزودن پستها'}</h4>
            <div className="post-maincontainer">
                <form className="post-container" onSubmit={handleAddPost}>
                    <div className="title-container">
                        <label className="post-title">عنوان:</label>
                        <br/>
                        <input  className="post-title2" type="text" value={data.postData.title} 
                            onChange={(e)=>setInputValues(e , 'title')}
                        ></input>
                    </div>
                    <div className="text-container">
                        <label className="post-text">متن:</label>
                        <br/>
                        <textarea rows={3} cols={30} className="post-text2" type="text" value={data.postData.body} 
                            onChange={(e)=>setInputValues(e , 'body')}
                        ></textarea >
                    </div>
                    <div className="form-control">
                        <button type="button" id="post-return" onClick={()=>navigate(-1)}>بازگشت</button>
                        <button type="submit" id="post-submit">{postId ? 'ویرایش':'افزودن'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddPosts;