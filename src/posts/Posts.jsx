import React from "react";
import { useEffect , useState , useNavigate } from "react";
import { Link } from "react-router-dom";
import { handleGetPost } from "../services/getservices";

const Posts = ()=>{

    const [post , setPost] = useState([]);
    const handleDelete = ()=>{}
    const handleSearchPost = ()=>{}
    const getPost = async ()=>{
        const res = await handleGetPost();
        setPost(res.data);
    }
    useEffect(()=>{
        getPost();
    },[])


    return(
        <div>
            <div className="main-content">
            <h4>مدیریت پستها</h4>
            <div className="head-content">
                <div className="search-users">
                    <input className="search-user" type="text" placeholder="جستجو" onChange={handleSearchPost}></input>
                </div>
                <div className="add-btn">
                    <Link to="/post/add">
                    <button>
                        <i className="fas fa-plus" style={{color:"blue"}} ></i>
                    </button>
                    </Link>
                </div>
            </div>
            {post.length ? (
                <table className="users-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>عنوان</th>
                                <th>متن </th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                    <tbody>
                        {post.map(u=>(
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.title}</td>
                                <td>{u.body}</td>
                                <td>
                                    <i className="fa fa-pencil-square" ></i>
                                    <i className="fa fa-trash" style={{color:"red"}} 
                                    onClick={()=>handleDelete(u.id)}></i>
                                </td>
                            </tr>
                            ))}
                    </tbody> 
                </table>
            ):(
                <p className="err">
                    لطفا کمی صبر کنید...
                </p>
            )}            
        </div>
        </div>
    )
}
export default Posts;