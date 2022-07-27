import React from "react";
import { mainContext } from "./context/maincontext";
import { useContext } from "react";
import {Link} from "react-router-dom"
import './style.css';
const Sidebar = ()=>{
    const{showMenu , setShowMenu}=useContext(mainContext);
    return(
        <div className="side-container" style={showMenu ?{right : -250} : {}}>
            <ul>
                <li>
                    <img src=""></img>
                </li>
                <li>
                    <Link to="/user">کاربران</Link>
                </li>
                <li>
                    <Link to="/post">پست ها</Link>
                </li>
                <li>
                    <Link to="/gallery">گالری</Link>
                </li>
                <li>
                    <Link to="/todo">کارها</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;