import React from "react";
import ContactCard from "./ContactCard";
import './ContactCard.css'
const ContactList=(props)=>{
    // console.log(props)
    const deleteContactHandler=(_id)=>{
        props.getContactId(_id);
    }
    return(
            <div className="contactList">
    <ul>{props.contacts.map((contact)=>(
            <ContactCard contact={contact} clickHandler={deleteContactHandler}/>
    ))}
    </ul>
    </div>
        );
    
}

export default ContactList;