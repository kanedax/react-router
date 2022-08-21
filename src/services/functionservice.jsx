import swal from "sweetalert";
import { jpaxios } from "./jpaxios";

export const setUserService = async (data)=>{
    const res = await jpaxios.post('/users' , data)
        if(res){
        swal({
            icon: "success",
            text: "کاربر جدید با موفقیت ایجاد گردید",
            button : "متوجه شدم"
          });
        }
}

export const setUpdateUser = async ( data , userId)=>{
    const res = await jpaxios.put(`/users/${userId}` , data)
        if(res){
            swal({
                icon: "success",
                text: "کاربر با موفقیت ویرایش گردید",
                button : "متوجه شدم"
              });
            }
}

export const handleSetData = async (userId , setDate)=>{
    const res = await jpaxios.get(`/users/${userId}`)
        setDate({
            name : res.data.name,
            username : res.data.username,
            email : res.data.email,
            address : {
                street : res.data.address.street,
                city : res.data.address.city,
                suite : res.data.address.suite,
                zipcode : res.data.address.zipcode
            }
        })
}

export const handleSetNewUser = async (setUsers , setMainUser)=>{
    const res = await jpaxios.get('/users')
        setUsers(res.data);
        setMainUser(res.data);
}
