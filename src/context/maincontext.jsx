import { createContext } from "react";

export const mainContext = createContext({
    showMenu : false ,
    setShowMenu : ()=>{}
});