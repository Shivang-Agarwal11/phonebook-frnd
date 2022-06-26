
import Header from './componenets/Header/Header';
import AddContact from './componenets/AddContact/AddContact';
import ContactList from './componenets/ContactList/ContactList';
import { useState,useEffect } from "react";
const axios=require('axios')



function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const [getData,isGettingData]=useState(false)
  
  const headers={
    'Content-Type': 'application/json',
  }
  const getContactFromBcknd=(getData)=>{
    // console.log("Here")
    if(!getData)
    axios.get('https://phonebked.herokuapp.com/contact',{headers:headers}).then((res)=>{
      const obj=res.data
      const details=[]
      obj.map((contact)=>{
        return details.push(contact)
        
      // return  console.log(details)
      })
       setContacts([...details])
       isGettingData(true)
      // console.log((res.data))
      return;
    }).catch((e)=>console.log(e));

  }


  useEffect(()=>{
    const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts)
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);


  const onAddContact=(contact)=>{
    var params={...contact}
    axios.post('https://phonebked.herokuapp.com/contact',params).then((res)=>{
      if(res.status===(201)){
        const obj=res.data
        const details=[]
        details.push(obj)
        return setContacts([...contacts,...details])
      }
    })
  }

  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact._id!== id;
    })
    axios.delete(`https://phonebked.herokuapp.com/contact/${id}`).then((res)=>{
      return console.log(res.status);
    }).catch((e)=>{
      console.log(e);
    })
    setContacts(newContactList);
  }

  const updateList=()=>{
    isGettingData(true)
  }

  return (
    <div className="App">
      {getData===false?getContactFromBcknd(getData):<p></p>}
      <header className="App-header">
      <Header/>
      <div className='container'>
      <AddContact onAddContact={onAddContact} update={updateList}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> 
        </div>
      </header>
    </div>
  );
}

export default App;
