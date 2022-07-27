import React from "react";

const AddUsers = ()=>{
    return(
        <div> 
            <h4>افزودن کاربر</h4>
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
                        <button type="button" style={{backgroundColor:'red'}}>بازگشت</button>
                        <button type="submit" style={{backgroundColor:'green'}}>ذخیره</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUsers;