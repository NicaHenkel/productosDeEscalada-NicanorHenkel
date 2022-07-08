import React from "react";
import CartWidget from "./CartWidget";

const NavBar = ()=> {
    return (
        <div>
            <header>
                <h2> NHClimbing</h2>
                <ul>
                    <li className="nav--menu">
                        <a href="" className="nav--menu__link">Cuerdas</a>
                        <a href="" className="nav--menu__link">Pédulas</a>
                        <a href="" className="nav--menu__link">Ferreteria</a>
                        <CartWidget/> 
                    </li>
                    
                </ul> 
                
            </header>
            
        </div>
        

    )
};

export default NavBar;