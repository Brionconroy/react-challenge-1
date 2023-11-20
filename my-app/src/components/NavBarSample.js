import React from "react";
import css from "./css/Sidebar.module.css"

const NavBarSample = () => {
    return < div className={css.NavBar}>
        <h1>My Gallery</h1>
        <span>Hello, Guest</span> <button>Log in</button>
    </div>;
}

export default NavBarSample;