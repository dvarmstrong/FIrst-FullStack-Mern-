import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    //* keep track  of what is being typed via useState hook
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    
    // *handler when the form is submitted
    const onSubmitHandler = (e) => {
        // *prevent default behavior of the submit
        e.preventDefault();
       
        // ? make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err));

    }
  
   
    return (
       <form onSubmit={onSubmitHandler}>
            <h1>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setfirstName(e.target.value)}/>
            </h1>
            <h1>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setlastName(e.target.value)}/>
            </h1>
            <input type= "submit"/>

       </form>
    )
}

export default PersonForm;