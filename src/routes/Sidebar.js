import React from "react";
// .. means it's outside the routes folder
import "../App.css"; 

import {SidebarData} from './/SidebarData';

function Sidebar(){
    return (
        <div className = "Sidebar">
            <ul className = "SideBarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li id = "row" key ={key} onClick= {()=>(window.location.pathname = val.link)}> 
                            <div id = "row-icon">{val.icon}</div>
                            <div id = "row-title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;