import React from "react";
import './ContactCard.css';
import {AiFillDelete} from 'react-icons/ai';

import{FiEdit} from 'react-icons/fi'

import {IoCallOutline} from 'react-icons/io5';
import { useState } from "react";
import UpdateContact from "../UpdateContact/UpdateContact";


const ContactCard=(props)=>{
    const {_id,firstName,lastName,number}=props.contact

    const [isUpdate,setIsUpdating]=useState(false)

    const update=()=>{
        var blur=document.getElementById('App');
        blur.classList.toggle('blur')
        setIsUpdating(true);
    }
    const onCancelUpdate=()=>{
        setIsUpdating(false);
    }
    return(
        <div className="item">
                <div className="contact-name">
                    {firstName} {lastName}
                </div>
                <div className="contact-number">
                    <IoCallOutline/>{number}
                </div>
                <button className="icon" onClick={()=>props.clickHandler(_id)}>
                    <AiFillDelete/>
                </button>
                {isUpdate===false?<button className="update-icon" onClick={update}>
                    <FiEdit/>
                </button>:<UpdateContact contact={{_id:_id,firstName:firstName,lastName:lastName,number:number}} className="update" onCancelUpdate={onCancelUpdate} 
                UpdateContactHandler={props.updateContactHandler}/>}
            </div>
    );

};
export default ContactCard;