import React from "react";
import { useEffect , useState , useNavigate } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { handleGetPost } from "../services/getservices"
import { jpaxios } from "../services/jpaxios";

const Posts = ()=>{
    
    const [post , setPost] = useState([]);
    const[mainPost , setMainPost] = useState();
    useEffect(()=>{
        getPost(setPost , setMainPost);
    },[])
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
    const handleSearchPost = (e)=>{
        setPost(mainPost.filter(u=>u.body.includes(e.target.value)))
    }
    const getPost = async ()=>{
        const res = await handleGetPost();
        setPost(res.data);
        setMainPost(res.data);
    }

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
                                <td>{u.id}</td>
                                <td>{u.title}</td>
                                <td>{u.body}</td>
                                <td>
                                    <Link to={`/post/add/${u.id}`}>
                                    <i className="fa fa-pencil-square"  ></i>
                                    </Link>
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