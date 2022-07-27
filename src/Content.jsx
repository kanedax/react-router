import React, { useContext } from "react";
import Gallery from'./gallery/Gallery';
import Posts from './posts/Posts';
import Todos from './todos/Todos';
import Users from './users/Users';
import {mainContext} from './context/maincontext'
import './style.css';
const Content = ()=>{
    const{showMenu , setShowMenu}=useContext(mainContext);
    const handleShowMenu = (event)=>{
        event.stopPropagation();
        setShowMenu (!showMenu)
    }
    return(
        <div className="container" onClick={()=>setShowMenu(false)}>
            <i className='fas fa-bars' onClick={handleShowMenu}></i>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div> 
    )
}
export default Content;