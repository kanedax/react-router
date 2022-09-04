import React from "react";
import { useEffect , useState  } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { handleGetPost } from "../services/getservices"
import { jpaxios } from "../services/jpaxios";

const Posts = ()=>{
    
    const [post , setPost] = useState([]);
    const [uId , setUid] = useState("");
    const[mainPost , setMainPost] = useState({});
    const handleDelete = (postId)=>{
        swal({
            title: "حذف پست",
            text:  `آیا از حذف رکورد ${postId} اطمینان دارید ؟`,
            icon: "warning",
            buttons:true,
            dangerMode:true,
            buttons: ['انصراف','حذف']
          })
          .then((willDelete) => {
            if (willDelete) {
                jpaxios.delete(`/posts/${postId}`).then(res=>{
                    if(res.status === 200){
                      const  newposts = post.filter(u=>u.id !== postId);
                      setPost(newposts);
                      swal("رکورد با موفقیت حذف شد", {
                        icon: "success",
                        button : "خروج"
                      });
                    }
                })
              
            } 
          });
    }
    const handleSearchPost = ()=>{
       if(uId > 0)
        setPost(mainPost.filter(p=>p.userId == uId))
        else setPost(mainPost)
    }
    const getPost = async ()=>{
        const res = await handleGetPost();
        setPost(res.data);
        setMainPost(res.data);
    }
    useEffect(()=>{
        getPost(setPost , setMainPost);
    },[])
    useEffect(()=>{
        handleSearchPost()
    },[uId])

    return(
        <div>
            <div className="main-content">
            <h4>مدیریت پستها</h4>
            <div className="head-content">
                <div className="search-users">
                    <input className="search-user" type="number" placeholder=" جستجو با آی دی" value={uId} onChange={(e)=>setUid(e.target.value)}></input>
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
                                <th>آی دی</th>
                                <th>عنوان</th>
                                <th>متن </th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                    <tbody>
                        {post.map(u=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td style={{cursor : "pointer" , color : "blue"}} onClick={()=>setUid(u.userId)}>{u.userId}</td>
                                <td>{u.title}</td>
                                <td>{u.body}</td>
                                <td>
                                    <Link to={`/post/add/${u.id}`}>
                                    <i className="fa fa-pencil-square"  ></i>
                                    </Link>
                                    <i className="fa fa-trash" style={{color:"red"}} 
                                    onClick={()=>handleDelete(u.id)}></i>
                                    <i className="fa fa-file" style={{color : "blue"}}></i>
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