import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPost, setPostService, setUpdatePost } from "../services/functionservice";


const AddPosts = ()=>{

    const{postId}=useParams();
    const navigate = useNavigate();
    const[post , setPost]= useState({
        id : "",
        title : "",
        body : "",
    });
    useEffect(() => {
        GetPost(postId , setPost);
    }, []);

    const handleAddPost = (e)=>{
        e.preventDefault();
        if(!postId){
            setPostService(post);
        }else{
            setUpdatePost(post , postId)
        }
    }

    return(
        <div>
            <h4>{postId ? 'ویرایش پستها':'افزودن پستها'}</h4>
            <div className="post-maincontainer">
                <form className="post-container" onSubmit={handleAddPost}>
                    <div className="title-container">
                        <label className="post-title">عنوان:</label>
                        <br/>
                        <input  className="post-title2" type="text" value={post.title} 
                            onChange={(e)=>setPost({...post , title:e.target.value})}
                        ></input>
                    </div>
                    <div className="text-container">
                        <label className="post-text">متن:</label>
                        <br/>
                        <textarea rows={3} cols={30} className="post-text2" type="text" value={post.body} 
                            onChange={(e)=>setPost({...post , body:e.target.value})}
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