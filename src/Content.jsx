import React, { useContext } from "react";
import Gallery from'./gallery/Gallery';
import Posts from './posts/Posts';
import Todos from './todos/Todos';
import Users from './users/Users';
import AddUsers from './adduser/AddUsers';
import {mainContext} from './context/maincontext'
import './style.css';
import { Routes ,Route , Navigate  } from "react-router-dom";
import AddUser from "./adduser/AddUsers";
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
                    <Route path="/user" element={<Users/>} replace/>
                    <Route path="/user/add/" element={<AddUsers/>}>
                        <Route path=":userId"/>
                    </Route>
                    <Route path="/post" element={<Posts/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/todo" element={<Todos/>} />
                </Routes>
        </div> 
    )
}
export default Content;