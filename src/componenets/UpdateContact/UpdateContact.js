import React, { useState } from "react";
import './UpdateContact.css';

const UpdateContact=(props)=>{
    
    const [firstName,setFirstName]=useState(props.contact.firstName);
    const [lastName,setLastName]=useState(props.contact.lastName);
    const [number,setNumber]=useState(props.contact.number);
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
        props.UpdateContactHandler({_id:props.contact._id,firstName:firstName,lastName:lastName,number:number})
        setFirstName("")
        setLastName("")
        setNumber("")
        props.onCancelUpdate()
    }

return (<form class="form-update" onSubmit={OnSubmitHandler}>
  <h2 className="update-h2">Update Details</h2>
  <p type="First Name:" className="p-update"><input value={firstName} className="inpute-update" onChange={FirstNameHandler}></input></p>
  <p type="Last Name" className="p-update"><input value={lastName} className="inpute-update" onChange={LastNameHandler}></input></p>
  <p type="Number" className="p-update"><input value={number} className="inpute-update" onChange={NumberHandler}></input></p>
  <button className="button-update" type="submit">Update</button>
  <button className="button-update" onClick={props.onCancelUpdate}>Cancel</button>
  
</form>

);
};

export default UpdateContact;