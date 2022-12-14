import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { handleSetData, setUpdateUser, setUserService } from "../services/functionservice";


const AddUsers = ()=>{

    const{userId} = useParams();
    const navigate = useNavigate();
    const[data , setDate] = useState({
        name : "",
        username : "",
        email : "",
        address : {
            street : "",
            city : "",
            suite : "",
            zipcode : ""
        }
    });

    useEffect(()=>{
        handleSetData(userId , setDate);
    },[])
    
    const handleAddUser = (e)=>{
        e.preventDefault();
        if(!userId){
            setUserService(data);
        }else{
            setUpdateUser(data , userId);
        }
    }

    return(
        <div> 
            <h4>{userId ?'ویرایش کاربر': 'افزودن کاربر'}</h4>
            <div className="user-container">
                <form onSubmit={handleAddUser}>
                    <div className="name">
                        <label>نام و نام خانوادگی</label>
                        <br/>
                        <input type="text" value={data.name}
                        onChange={(e)=>setDate({...data , name:e.target.value})}
                        ></input>
                    </div>
                    <div className="username">
                        <label>نام کاربری</label>
                        <br/>
                        <input type="text" value={data.username}
                        onChange={(e)=>setDate({...data , username:e.target.value})}
                        ></input>
                    </div>
                    <div className="email">
                        <label>ایمیل</label>
                        <br/>
                        <input type="email" value={data.email}
                        onChange={(e)=>setDate({...data , email:e.target.value})}
                        ></input>
                    </div>
                    <div className="address">
                        <label>آدرس</label>
                        <br/>
                        <div>
                            <input type="text" placeholder="شهر" value={data.address.city}
                            onChange={(e)=>setDate({...data , address:{...data.address , city:e.target.value}})}
                            ></input>
                        </div>
                        <div>
                            <input type="text" placeholder="خیابان" value={data.address.street}
                            onChange={(e)=>setDate({...data , address:{...data.address , street:e.target.value}})}
                            ></input>
                        </div>
                        <div>
                            <input type="text" placeholder="ادامه آدرس" value={data.address.suite}
                            onChange={(e)=>setDate({...data , address:{...data.address ,suite:e.target.value}})}
                            ></input>
                        </div>
                        <div>
                            <input type="text" placeholder="کد پستی" value={data.address.zipcode}
                            onChange={(e)=>setDate({...data , address:{...data.address , zipcode:e.target.value}})}
                            ></input>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="button" style={{backgroundColor:'red'}}
                        onClick={()=>navigate(-1)}
                        >بازگشت</button>
                        <button type="submit" style={{backgroundColor:'green'}}>
                        {userId ? 'ویرایش':'افزودن'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUsers; 