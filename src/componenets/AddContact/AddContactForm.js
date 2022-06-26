import React, { useState } from "react";

import './AddContactForm.css'

const AddContactForm=(props)=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [number,setNumber]=useState("");
    const FirstNameHandler=(e)=>{
        setFirstName(e.target.value);
    }
    const LastNameHandler=(e)=>{
        setLastName(e.target.value);
    }
    const NumberHandler=(e)=>{
        setNumber(e.target.value);
    }
    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        props.addContactHandler({firstName:firstName,lastName:lastName,number:number})
        setFirstName("")
        setLastName("")
        setNumber("")
    }
        return(
            <div className="ui-form-base">
            <form className="ui-form" onSubmit={OnSubmitHandler}>
                    <div className="field">
                        <label>First Name:</label>
                        <input type="text" placeholder="First Name" name="firstName"  onChange={FirstNameHandler} value={firstName}/>
                    </div>
                    <div className="field">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={LastNameHandler} value={lastName}/>
                    </div>
                    <div className="field">
                        <label>Contact No.:</label>
                        <input type="text" placeholder="" name="number" onChange={NumberHandler} value={number}/>
                    </div>
                    <div className="field">
                        <button type="submit" >Add Contact</button>
                    </div>
                    <div className="field">
                        <button type="submit" onClick={props.onCancel}>Cancel</button>
                    </div>
                </form>
                </div>
        );


};

export default AddContactForm;
