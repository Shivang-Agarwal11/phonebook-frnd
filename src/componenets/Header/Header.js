import React from "react";
import './Header.css';
import {ImBook} from 'react-icons/im'
const Header=()=>{
    return(
        <div className="ui">
            <div className="card">
                <h2><ImBook className="icon-phonebook"/>Phone Book App</h2>
            </div>
        </div>
    );
}

export default Header;