import React from "react";
import { mainContext } from "./context/maincontext";
import { useContext } from "react";
import {Link, NavLink} from "react-router-dom"
import './style.css';
const Sidebar = ()=>{
    const{showMenu , setShowMenu}=useContext(mainContext);
    return(
        <div className="side-container" style={showMenu ?{right : -250} : {}}>
            <ul>
                <li>
                    <img src=""></img>
                </li>
                <NavLink className={({isActive})=>{return isActive ? 'active-bar':'' }} to="/user" >
                <li>
                    کاربران
                </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? 'active-bar':'' }} to="/post">
                <li>
                    پست ها
                </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? 'active-bar':'' }} to="/gallery">
                <li>
                    گالری
                </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? 'active-bar':'' }} to="/todo">
                <li>
                    کارها
                </li>
                </NavLink>
            </ul>
        </div>
    )
}
export default Sidebar;