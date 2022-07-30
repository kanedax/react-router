import React, { useState } from "react";
import {Link} from 'react-router-dom'
import swal from "sweetalert";
import axios from "axios";
import { useEffect } from "react";
const Users = ()=>{

    const [users , setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUsers(res.data);
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
              swal("رکورد با موفقیت حذف شد", {
                icon: "success",
                button : "خروج"
              });
            } else {
              swal(".شما از حذف این رکورد منصرف شدید " , {
                button : "خروج"
              });
            
            }
          });
    } 

    return(
        <div classname="main-content">
            <h4>مدیریت کاربران</h4>
            <div className="head-content">
                <div className="search-users">
                    <input className="search-user" type="text" placeholder="جستجو"></input>
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
                    <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>
                            <i className="fa fa-trash" style={{color:"red"}} 
                            onClick={()=>handleDelete(1)}></i>
                            <Link to="/user/add/2">
                                <i className="fa fa-pencil-square"></i>
                            </Link>
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