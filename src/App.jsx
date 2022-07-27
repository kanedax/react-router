import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import { mainContext } from './context/maincontext';
import Sidebar from './Sidebar';
import './style.css';
const App = ()=>{
    const [showMenu , setShowMenu]=useState(false)
    return(
        <div className='all-container'>
            <mainContext.Provider value={{showMenu , setShowMenu}}>
                <Sidebar/>
                <Content/>
            </mainContext.Provider>
        </div>
    )
}
export default App;