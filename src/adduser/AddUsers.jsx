import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddUsers = ()=>{

    const{userId} = useParams()
    const navigate = useNavigate()
    return(
        <div> 
            <h4>{userId ?'ویرایش کاربر': 'افزودن کاربر'}</h4>
            <div className="user-container">
                <form>
                    <div className="name">
                        <label>نام و نام خانوادگی</label>
                        <br/>
                        <input type="text"></input>
                    </div>
                    <div className="username">
                        <label>نام کاربری</label>
                        <br/>
                        <input type="text"></input>
                    </div>
                    <div className="email">
                        <label>ایمیل</label>
                        <br/>
                        <input type="email"></input>
                    </div>
                    <div className="address">
                        <label>آدرس</label>
                        <br/>
                        <div>
                            <input type="text" placeholder="شهر"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="خیابان"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="ادامه آدرس"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="کد پستی"></input>
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