import React from "react";
import './AddContact.css'

import { useState } from "react";
import AddContactForm from "./AddContactForm";



const AddContact=(props)=>{
    const [isAdding,setisAdding]=useState(false);

    const addContactHandler=(contact)=>{
        // console.log(contact)
        props.onAddContact(contact)
        stopAdding()
    }
    const startAdding=()=>{
        // console.log("here")
        setisAdding(true);
    }
    const stopAdding=()=>{
        setisAdding(false);
    }
    const onCancel=()=>{
        stopAdding();
    }
        return (
            <div>
            <div className="ui-base">
                <div className="heading">
                <h2>Contacts</h2>
                <div className="add-button">
                
                {/* {isAdding===false?<button onClick={startAdding}>Add Contact</button>:<p></p>} */}
                </div>
                </div>
                </div>
                <div className="contactform">
                {isAdding===true?<AddContactForm addContactHandler={addContactHandler} onCancel={onCancel}/>:<p></p>}
                </div>
            </div>
        );
    
}

export default AddContact;