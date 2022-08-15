import React, { useContext } from "react";
import Gallery from'./gallery/Gallery';
import Posts from './posts/Posts';
import Todos from './todos/Todos';
import Users from './users/Users';
import AddUsers from './adduser/AddUsers';
import {mainContext} from './context/maincontext'
import './style.css';
import { Routes ,Route } from "react-router-dom";

const Content = ()=>{
    const{showMenu , setShowMenu}=useContext(mainContext);
    const handleShowMenu = (event)=>{
        event.stopPropagation();
        setShowMenu (!showMenu)
    }
    return(
        <div className="container" onClick={()=>setShowMenu(false)}>
            <i className='fas fa-bars' onClick={handleShowMenu}></i>
                <Routes>
                    <Route path="/user" element={<Users/>}></Route>
                    <Route path="/user/add" exact element={<AddUsers/>}>
                        <Route path=":userId"/>
                    </Route>
                    <Route path="/post" element={<Posts/>} ></Route>
                    <Route path="/gallery" element={<Gallery/>} ></Route>
                    <Route path="/todo" element={<Todos/>} ></Route>
                    <Route path="*" element={<Users/>} ></Route>
                </Routes>
        </div> 
    )
}
export default Content;