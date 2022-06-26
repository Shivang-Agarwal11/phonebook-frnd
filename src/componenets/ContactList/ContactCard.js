import React from "react";
import './ContactCard.css';
import {AiFillDelete} from 'react-icons/ai';
import {GrDocumentUpdate} from 'react-icons/gr'

const ContactCard=(props)=>{
    const {_id,firstName,lastName,number}=props.contact
    return(
        <div className="item">
                <div className="contact-name">
                    {firstName} {lastName}
                </div>
                <div className="contact-number">
                    {number}
                </div>
                <button className="icon" onClick={()=>props.clickHandler(_id)}>
                    <AiFillDelete/>
                </button>
                <button className="update-icon" onClick={()=>alert("Update Contact")}>
                    <GrDocumentUpdate/>
                </button>
            </div>
    );

};
export default ContactCard;