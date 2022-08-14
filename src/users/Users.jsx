import React, { useState  , useEffect} from "react";
import {Link, useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import axios from "axios";



// const test = (id)=>{
//     return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
// }

// const func = async (id)=>{
//     await test (id).then(res=>{
//         console.log(res.data)
//     });
//     console.log(id)
// }

// for ( const item of [1,2,3,4,5,6]){
//     func(item);
// }

const Users = ()=>{

    const navigate = useNavigate();
    const [users , setUsers] = useState([])
    const [mainUser , setMainUser] = useState();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUsers(res.data);
            setMainUser(res.data);
        }).catch(err=>{

        })
    }, []);

    const handleDelete = (itemId)=>{
        swal({
            title: "حذف کاربر",
            text:  `آیا از حذف رکورد ${itemId} اطمینان دارید ؟`,
            icon: "warning",
            buttons:true,
            dangerMode:true,
            buttons: ['انصراف','حذف']
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`).then(res=>{
                    if(res.status === 200){
                      const  newUsers = users.filter(u=>u.id !== itemId);
                      setUsers(newUsers);
                      swal("رکورد با موفقیت حذف شد", {
                        icon: "success",
                        button : "خروج"
                      });
                    }
                })
              
            } else {
              swal(".شما از حذف این رکورد منصرف شدید " , {
                button : "خروج"
              });
            
            }
          });
    } 

    const handleSearchUser = (e)=>{
        setUsers(mainUser.filter(u=>u.name.includes(e.target.value)))
    }

    return(
        <div className="main-content">
            <h4>مدیریت کاربران</h4>
            <div className="head-content">
                <div className="search-users">
                    <input className="search-user" type="text" placeholder="جستجو" onChange={handleSearchUser}></input>
                </div>
                <div className="add-btn">
                    <Link to="/user/add">
                    <button>
                        <i className="fas fa-plus" style={{color:"blue"}} ></i>
                    </button>
                    </Link>
                </div>
            </div>
            {users.length ? (
                <table className="users-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>نام</th>
                                <th>نام کاربری</th>
                                <th>ایمیل</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                    <tbody>
                        {users.map(u=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>
                                    <i className="fa fa-pencil-square" onClick={()=>navigate(`/user/add/${u.id}`)}></i>
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
    )
}
export default Users;