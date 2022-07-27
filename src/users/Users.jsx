import React from "react";
const Users = ()=>{
    return(
        <div classname="main-content">
            <h4>مدیریت کاربران</h4>
            <div className="head-content">
                <div className="search-users">
                    <input className="search-user" type="text" placeholder="جستجو"></input>
                </div>
                <div className="add-btn">
                    <button>
                        <i></i>
                    </button>
                </div>
            </div>
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
                    <tr>
                        <td>1</td>
                        <td>kia</td>
                        <td>KIAX</td>
                        <td>kia@gmail.com</td>
                        <td>
                            <i></i>
                            <i></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Users;