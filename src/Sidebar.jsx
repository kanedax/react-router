import React from "react";
import { mainContext } from "./context/maincontext";
import { useContext } from "react";
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
                    <a href="/">کاربران</a>
                </li>
                <li>
                    <a href="/">پست ها</a>
                </li>
                <li>
                    <a href="/">گالری</a>
                </li>
                <li>
                    <a href="/">کارها</a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;